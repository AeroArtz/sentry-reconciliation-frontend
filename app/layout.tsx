import type React from "react"
import type { Metadata } from "next"
import { Inter, Urbanist } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Sentry's Reconciliation Partners - Financial Operations Platform",
  description: "Meet your future-ready financial operations platform.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${urbanist.variable} font-sans`}>{children}</body>
    </html>
  )
}
