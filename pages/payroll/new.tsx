import { useMemo } from "react"
import Head from "next/head"

import { Payroll } from "@/types/Payroll"
import { Layout } from "@/components/layout"
import { Divider } from "@/components/ui/divider"
import { Input } from "@/components/ui/input"
import { PageTitle } from "@/components/ui/page-title"


export default function NewPayrollPage() {
  const payroll = useMemo(() => {
    return new Payroll()
  }, [])

  return (
    <Layout>
      <Head>
        <title>Nueva nomina</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <section className="container grid grid-cols-1 items-center gap-6 pt-6 pb-8 md:py-10">
        <PageTitle title={"Nueva nomina"}/>
        <div className="flex gap-4">
          <Input className={"w-[50%]"} type="search" placeholder="Nombre" value={payroll.name}/>
        </div>
        <Divider/>
        <div className="flex flex h-80 w-full items-center justify-center gap-4 border-2">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Pegar aqui nomina de Excel
          </p>
        </div>
      </section>
    </Layout>
  )
}
