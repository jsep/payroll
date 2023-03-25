import { Employee } from "@/types/Employee"
import { titleCase } from "@/lib/utils"
import { Payment } from "./Payment"


export class Payroll {
  createdAt: Date
  payments: Payment[]
  name: string

  constructor() {
    this.createdAt = new Date()
    this.payments = []
    this.name = this.nameFromDate(this.createdAt)
  }

  nameFromDate(date: Date) {
    const payrollDate = this.toPayrollDate(date)
    const month = payrollDate.toLocaleString("es-ES", {
      month: "long",
      timeZone: "UTC",
    })
    const year = payrollDate.getUTCFullYear()
    const day = payrollDate.getUTCDate()
    return titleCase(`${month} ${day} - ${year}`)
  }

  toPayrollDate(date: Date) {
    const newDate = new Date(date)
    const lastDayOfMonth = new Date(
      newDate.getUTCFullYear(),
      newDate.getUTCMonth() + 1,
      0
    ).getUTCDate()

    if (newDate.getUTCDate() === lastDayOfMonth) {
      return newDate
    } else if (
      newDate.getUTCDate() >= 15 &&
      newDate.getUTCDate() < lastDayOfMonth
    ) {
      newDate.setUTCDate(15)
    } else {
      newDate.setUTCMonth(newDate.getUTCMonth() - 1)
      newDate.setUTCDate(lastDayOfMonth)
    }

    return newDate
  }

  static fromExcelText(excelText: string): Payroll {
    const payroll = new Payroll()
    const lines = excelText.split("\n")
    const headers = lines.shift()
    payroll.payments = lines.map((line) => {
      const parts = line.split("\t")
      const payment = new Payment()
      payment.netAmount = toAmount(parts[14])
      payment.biWeeklyGrossAmount = toAmount(parts[3])
      payment.grossAmount = toAmount(parts[8])

      // create employee
      const employee = new Employee()
      employee.name = parts[0].trim()
      employee.jobName = parts[1].trim()
      employee.currentSalary = toAmount(parts[2])
      payment.employee = employee

      payment.additions = {
        vacations: toAmount(parts[4]),
        holidays: toAmount(parts[5]),
        bonus: toAmount(parts[6]),
        tips: toAmount(parts[7]),
      }

      payment.subtractions = {
        sfs: toAmount(parts[9]),
        pension: toAmount(parts[10]),
        isr: toAmount(parts[12]),
        debt: toAmount(parts[13]),
      }

      return payment
    })
    return payroll
  }
}

// Number format in $ 56,000.00
function toAmount(text: string): number {
  return Number(Array.from(text.matchAll(/\d/g)).join("")) / 100
}
