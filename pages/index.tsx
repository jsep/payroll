import Head from "next/head"
import { PayrollPage } from "@/payroll/PayrollPage"

import { Layout } from "@/components/layout"


export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Nominas</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PayrollPage />
    </Layout>
  )
}
