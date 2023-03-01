import { NavItem } from "@/types/nav"

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  links?: {
    twitter?: string
    github?: string
    docs?: string
  }
}

export const siteConfig: SiteConfig = {
  name: "Payroll",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Nominas",
      href: "/",
    },
    {
      title: "Empleados",
      href: "/",
    },
  ],
}
