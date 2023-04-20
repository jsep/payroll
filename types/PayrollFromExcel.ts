import { Employee } from "@/types/Employee"
import { Payment } from "@/types/Payment"
import { Payroll } from "@/types/Payroll"


export type ExcelColumn = {
  name: string
  index: number
}

/*
 *  "Nombre\tPosición\t Sueldo Bruto/Mensual \tSueldo Bruto/Quincenal\tVacaciones \tDia Feriado\tIncetivo \tPropina Legal\tTotal bruto en quincena actual\tSFS\tPlan de Pensiones\tBase ISR \tRetención ISR\tPréstamos/Otros\tMonto Neto/Quincenal\n" +
 * */
export const ExcelColumns: { [key: string]: ExcelColumn } = {
  Name: { name: "Nombre", index: 0 },
  JobName: { name: "Posición", index: 1 },
  CurrentSalary: { name: "Sueldo Bruto/Mensual", index: 2 },
  BiWeeklyGrossAmount: { name: "Sueldo Bruto/Quincenal", index: 3 },
  Vacations: { name: "Vacaciones", index: 4 },
  Holidays: { name: "Dia Feriado", index: 5 },
  Bonus: { name: "Incetivo", index: 6 },
  Tips: { name: "Propina Legal", index: 7 },
  TotalGrossAmount: { name: "Total bruto en quincena actual", index: 8 },
  SFS: { name: "SFS", index: 9 },
  PensionPlan: { name: "Plan de Pensiones", index: 10 },
  BaseISR: { name: "Base ISR", index: 11 },
  ISR: { name: "Retención ISR", index: 12 },
  Loans: { name: "Préstamos/Otros", index: 13 },
  NetAmount: { name: "Monto Neto/Quincenal", index: 14 },
}

export class PayrollFromExcel extends Payroll {
  constructor(private excelText: string) {
    super()
    this.create()
  }

  create(): Payroll {
    const paymentLines = this.getPaymentLines()

    this.payments = paymentLines.map((line) => {
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
    return this
  }

  private getPaymentLines(): string[] {
    const lines = this.excelText.split("\n")
    const firstLine = lines[0]

    if (this.isHeaderRow(firstLine)) {
      // remove headers
      lines.shift()
    }

    return lines
  }

  private isHeaderRow(row: string) {
    const columnNames = Object.values(ExcelColumns).map((column) => column.name)
    const cells = row.split("\t")
    if (cells.length !== columnNames.length) return false

    return cells.every((cell) => columnNames.includes(cell.trim()))
  }
}

// Number format in $ 56,000.00
function toAmount(text: string): number {
  return Number(Array.from(text.matchAll(/\d/g)).join("")) / 100
}
