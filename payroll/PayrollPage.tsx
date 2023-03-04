import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Divider } from "@/components/ui/divider"
import { Input } from "@/components/ui/input"


export function PayrollPage() {
  return (
    <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1
          data-testid="title"
          className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl"
        >
          Lista de nominas
        </h1>
      </div>
      <div className="flex gap-4">
        <SearchPayroll />
      </div>
      <Divider />

      <div className="flex gap-4">
        <PayrollList />
      </div>
      <NewPayrollButton />
    </section>
  )
}

export function SearchPayroll() {
  return <Input type="search" placeholder="Buscar" />
}

export function PayrollList() {
  return (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full" data-testid="payroll-list">
        <thead>
          <tr className="m-0 border-t border-slate-300 p-0 even:bg-slate-100 dark:border-slate-700 dark:even:bg-slate-800">
            <th className="border border-slate-200 px-4 py-2 text-left font-bold dark:border-slate-700 [&[align=center]]:text-center [&[align=right]]:text-right">
              Nombre
            </th>
            <th className="border border-slate-200 px-4 py-2 text-left font-bold dark:border-slate-700 [&[align=center]]:text-center [&[align=right]]:text-right">
              Empleados
            </th>
            <th className="border border-slate-200 px-4 py-2 text-left font-bold dark:border-slate-700 [&[align=center]]:text-center [&[align=right]]:text-right">
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="m-0 border-t border-slate-200 p-0 even:bg-slate-100 dark:border-slate-700 dark:even:bg-slate-800">
            <td className="border border-slate-200 px-4 py-2 text-left dark:border-slate-700 [&[align=center]]:text-center [&[align=right]]:text-right">
              Enero 2023
            </td>
            <td className="border border-slate-200 px-4 py-2 text-left dark:border-slate-700 [&[align=center]]:text-center [&[align=right]]:text-right">
              15
            </td>
            <td className="border border-slate-200 px-4 py-2 text-left dark:border-slate-700 [&[align=center]]:text-center [&[align=right]]:text-right">
              DOP 250,000.00
            </td>
          </tr>
          <tr className="m-0 border-t border-slate-200 p-0 even:bg-slate-100 dark:border-slate-700 dark:even:bg-slate-800">
            <td className="border border-slate-200 px-4 py-2 text-left dark:border-slate-700 [&[align=center]]:text-center [&[align=right]]:text-right">
              Enero 15 2023
            </td>
            <td className="border border-slate-200 px-4 py-2 text-left dark:border-slate-700 [&[align=center]]:text-center [&[align=right]]:text-right">
              15
            </td>
            <td className="border border-slate-200 px-4 py-2 text-left dark:border-slate-700 [&[align=center]]:text-center [&[align=right]]:text-right">
              DOP 280,000.00
            </td>
          </tr>
          <tr className="m-0 border-t border-slate-200 p-0 even:bg-slate-100 dark:border-slate-600 dark:even:bg-slate-800">
            <td className="border border-slate-200 px-4 py-2 text-left dark:border-slate-700 [&[align=center]]:text-center [&[align=right]]:text-right">
              Febrero 2023
            </td>
            <td className="border border-slate-200 px-4 py-2 text-left dark:border-slate-700 [&[align=center]]:text-center [&[align=right]]:text-right">
              16
            </td>
            <td className="border border-slate-200 px-4 py-2 text-left dark:border-slate-700 [&[align=center]]:text-center [&[align=right]]:text-right">
              DOP 300,000.00
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export function NewPayrollButton() {
  return (
    <Button
      data-testid="new-payroll-button"
      className={
        "fixed bottom-10 right-10 h-16 w-16 rounded-full p-2 text-white shadow-lg"
      }
    >
      <Plus className={"h-[100] w-[100]"} />
    </Button>
  )
}
