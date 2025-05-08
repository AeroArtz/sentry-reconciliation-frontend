import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

// Use local font for Urbanist to ensure it loads properly
const urbanist = localFont({
  src: [
    {
      path: "../public/fonts/Urbanist-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Urbanist-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Urbanist-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Urbanist-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Urbanist-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/Urbanist-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-urbanist",
  display: "swap",
})

export const metadata: Metadata = {
  title: "SRP - Financial Operations Platform",
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
