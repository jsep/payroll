import { Page, expect, test } from "@playwright/test"





const { describe } = test

describe("Payroll", () => {
  test("should display the payroll page", async ({ page }) => {
    const payrollPage = new PayrollPage(page)
    await payrollPage.navigate()
    await payrollPage.expectToHaveElements()
  })
})

class PayrollPage {
  private page: Page

  constructor(page) {
    this.page = page
  }

  async navigate() {
    await this.page.goto("/")
  }

  async getPayrollTable() {
    return this.page.getByTestId("payroll-list")
  }

  async expectToHaveElements() {
    await this.expectToHaveTitle()
    await this.expectToHaveDisplayPayrollList()
    await this.expectToHaveNewPayrollButton()
  }

  async expectToHaveTitle() {
    const title = await this.page.getByTestId("title")
    await expect(title).toContainText("nominas")
  }

  async expectToHaveDisplayPayrollList() {
    const payrollTable = await this.getPayrollTable()
    await expect(payrollTable).toBeVisible()
  }

  async expectToHaveNewPayrollButton() {
    const button = await this.page.getByTestId("new-payroll-button")
    await expect(button).toBeVisible()
  }
}
