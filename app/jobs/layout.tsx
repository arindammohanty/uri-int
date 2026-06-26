import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Jobs | URI Tech',
  description: 'Explore career opportunities and open positions at URI Tech.',
}

export default function JobsLayout({
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
