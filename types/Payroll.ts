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
    return titleCase(`${month} ${day} ${year}`)
  }

  toPayrollDate(date: Date) {
    const newDate = new Date(date)
    if (newDate.getUTCDate() >= 23) {
      // move to the first day of the month
      newDate.setUTCMonth(newDate.getUTCMonth() + 1)
      newDate.setUTCDate(1)
    } else if (newDate.getUTCDate() <= 5) {
      // move to first day of the month
      newDate.setUTCDate(1)
    } else {
      // move to the 15th of the month
      newDate.setUTCDate(15)
    }

    return newDate
  }
}
