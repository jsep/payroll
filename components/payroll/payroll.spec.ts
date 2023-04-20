import { Payroll } from "@/types/Payroll"
import { PayrollFromExcel } from "@/types/PayrollFromExcel"

describe("Payroll", function () {
  it("should create name base on date", function () {
    const payroll = new Payroll()
    let name = payroll.nameFromDate(new Date(Date.UTC(2023, 0, 1)))
    expect(name).toBe("Diciembre 31 - 2022")

    name = payroll.nameFromDate(new Date(Date.UTC(2023, 0, 15)))
    expect(name).toBe("Enero 15 - 2023")

    name = payroll.nameFromDate(new Date(Date.UTC(2023, 0, 2)))
    expect(name).toBe("Diciembre 31 - 2022")

    name = payroll.nameFromDate(new Date(Date.UTC(2023, 0, 25)))
    expect(name).toBe("Enero 15 - 2023")

    name = payroll.nameFromDate(new Date(Date.UTC(2023, 1, 28)))
    expect(name).toBe("Febrero 28 - 2023")
  })
})

describe("PayrollFromExcel", function () {
  it("should create payroll based on text with headers", () => {
    const payroll = new PayrollFromExcel(payrollFromTextWithHeaders)

    expect(payroll.payments.length).toBe(1)
    const payment = payroll.payments[0]

    expect(payment.netAmount).toBe(35956.55)
    expect(payment.biWeeklyGrossAmount).toBe(28000)
    expect(payment.grossAmount).toBe(44000)

    expect(payment.employee.name).toBe("Employee 1")
    expect(payment.employee.jobName).toBe("Manager")
    expect(payment.employee.currentSalary).toBe(56000)

    expect(payment.additions.vacations).toBe(10000)
    expect(payment.additions.holidays).toBe(1000)
    expect(payment.additions.bonus).toBe(2000)
    expect(payment.additions.tips).toBe(3000)

    expect(payment.subtractions.sfs).toBe(1702.4)
    expect(payment.subtractions.pension).toBe(1607.2)
    expect(payment.subtractions.isr).toBe(2733.85)
    expect(payment.subtractions.debt).toBe(1000)
  })

  it("should create payroll based on text without headers", () => {
    const payroll = new PayrollFromExcel(payrollFromTextWithoutHeaders)

    expect(payroll.payments.length).toBe(2)
    const payment1 = payroll.payments[0]
    const payment2 = payroll.payments[1]

    expect(payment1.netAmount).toBe(45956.55)
    expect(payment1.biWeeklyGrossAmount).toBe(28000)
    expect(payment1.grossAmount).toBe(44000)

    expect(payment1.employee.name).toBe("Employee 2")
    expect(payment1.employee.jobName).toBe("Accountant")
    expect(payment1.employee.currentSalary).toBe(46000)

    expect(payment1.additions.vacations).toBe(10000)
    expect(payment1.additions.holidays).toBe(1000)
    expect(payment1.additions.bonus).toBe(2000)
    expect(payment1.additions.tips).toBe(3000)

    expect(payment1.subtractions.sfs).toBe(1702.4)
    expect(payment1.subtractions.pension).toBe(1607.2)
    expect(payment1.subtractions.isr).toBe(2733.85)
    expect(payment1.subtractions.debt).toBe(1000)

    expect(payment2.netAmount).toBe(35956.55)
    expect(payment2.biWeeklyGrossAmount).toBe(28000)
    expect(payment2.grossAmount).toBe(34000)

    expect(payment2.employee.name).toBe("Employee 3")
    expect(payment2.employee.jobName).toBe("Head of Security")
    expect(payment2.employee.currentSalary).toBe(36000)

    expect(payment2.additions.vacations).toBe(10000)
    expect(payment2.additions.holidays).toBe(1000)
    expect(payment2.additions.bonus).toBe(2000)
    expect(payment2.additions.tips).toBe(3000)

    expect(payment2.subtractions.sfs).toBe(2702.4)
    expect(payment2.subtractions.pension).toBe(1607.2)
    expect(payment2.subtractions.isr).toBe(2733.85)
    expect(payment2.subtractions.debt).toBe(1000)
  })
})

let payrollFromTextWithHeaders =
  "Nombre\tPosición\t Sueldo Bruto/Mensual \tSueldo Bruto/Quincenal\tVacaciones \tDia Feriado\tIncetivo \tPropina Legal\tTotal bruto en quincena actual\tSFS\tPlan de Pensiones\tBase ISR \tRetención ISR\tPréstamos/Otros\tMonto Neto/Quincenal\n" +
  "Employee 1 \tManager \t $ 56,000.00 \t $ 28,000.00 \t $10,000.00   \t $ 1,000.00   \t $ 2,000.00   \t $ 3,000.00   \t $ 44,000.00 \t $ 1,702.40 \t $ 1,607.20 \t $ 52,690.40 \t $ 2,733.85 \t $ 1,000.00   \t $ 35,956.55 "
let payrollFromTextWithoutHeaders =
  "Employee 2 \tAccountant \t $ 46,000.00 \t $ 28,000.00 \t $10,000.00   \t $ 1,000.00   \t $ 2,000.00   \t $ 3,000.00   \t $ 44,000.00 \t $ 1,702.40 \t $ 1,607.20 \t $ 42,690.40 \t $ 2,733.85 \t $ 1,000.00   \t $ 45,956.55\n" +
  "Employee 3 \tHead of Security \t $ 36,000.00 \t $ 28,000.00 \t $10,000.00   \t $ 1,000.00   \t $ 2,000.00   \t $ 3,000.00   \t $ 34,000.00 \t $ 2,702.40 \t $ 1,607.20 \t $ 32,690.40 \t $ 2,733.85 \t $ 1,000.00   \t $ 35,956.55 "
export {}
