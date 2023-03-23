export type PageTitleProps = {
  id?: string
  title: string
}

export function PageTitle({ id = "title", title }: PageTitleProps) {
  return (
    <h1
      data-testid={id}
      className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl"
    >
      {title}
    </h1>
  )
}
