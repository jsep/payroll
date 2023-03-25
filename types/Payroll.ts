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
}
