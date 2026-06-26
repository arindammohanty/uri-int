import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Services | URI Tech',
  description: 'Explore the specialized IT services and solutions offered by URI Tech.',
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}
