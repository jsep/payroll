import { Payroll } from "@/types/Payroll"

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
  it("should create payroll based on text with headers", () => {
    const payroll = Payroll.fromExcelText(payrollFromText)

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
})

let payrollFromText =
  "Nombre\tPosición\t Sueldo Bruto/Mensual \tSueldo Bruto/Quincenal\tVacaciones \tDia Feriado\tIncetivo \tPropina Legal\tTotal bruto en quincena actual\tSFS\tPlan de Pensiones\tBase ISR \tRetención ISR\tPréstamos/Otros\tMonto Neto/Quincenal\n" +
  "Employee 1 \tManager \t $ 56,000.00 \t $ 28,000.00 \t $10,000.00   \t $ 1,000.00   \t $ 2,000.00   \t $ 3,000.00   \t $ 44,000.00 \t $ 1,702.40 \t $ 1,607.20 \t $ 52,690.40 \t $ 2,733.85 \t $ 1,000.00   \t $ 35,956.55 "
export {}
