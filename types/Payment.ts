import { Employee } from "./Employee"

export interface Payment {
  employee: Employee
  amount: number
  additions: {
    vacations: number
    holidays: number
    bonus: number
    tips: number
    other: number
  }
  subtractions: {
    sfs: number
    pension: number
    isr: number
    debt: number
    others: number
  }
}
