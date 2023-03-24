import { Payroll } from "@/types/Payroll"

describe("Payroll", function () {
  it("should create name base on date", function () {
    const payroll = new Payroll()
    let name = payroll.nameFromDate(new Date(Date.UTC(2023, 0, 1)))
    expect(name).toBe("Enero 1 2023")

    name = payroll.nameFromDate(new Date(Date.UTC(2023, 0, 15)))
    expect(name).toBe("Enero 15 2023")

    name = payroll.nameFromDate(new Date(Date.UTC(2023, 0, 2)))
    expect(name).toBe("Enero 1 2023")

    name = payroll.nameFromDate(new Date(Date.UTC(2023, 0, 12)))
    expect(name).toBe("Enero 15 2023")

    name = payroll.nameFromDate(new Date(Date.UTC(2023, 0, 23)))
    expect(name).toBe("Febrero 1 2023")
  })
})

export {}
