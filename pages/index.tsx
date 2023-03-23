import Head from "next/head"

import { Layout } from "@/components/layout"
import { PayrollPage } from "@/components/payroll/PayrollPage"


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
