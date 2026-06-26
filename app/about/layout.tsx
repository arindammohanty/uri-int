import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About Us | URI Tech',
  description: 'Learn more about URI Tech, our mission, and our IT staffing and consulting services.',
}

export default function AboutLayout({
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
