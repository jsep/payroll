import { Employee } from "./Employee"

export class Payment {
  employee: Employee
  netAmount: number
  grossAmount: number
  biWeeklyGrossAmount: number
  additions: {
    vacations: number
    holidays: number
    bonus: number
    tips: number
  }
  subtractions: {
    sfs: number
    pension: number
    isr: number
    debt: number
  }
}
