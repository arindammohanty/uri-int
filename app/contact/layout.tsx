import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact Us | URI Tech',
  description: 'Get in touch with URI Tech for digital transformation, architecture inquiries, and IT consulting services.',
}

export default function ContactLayout({
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
