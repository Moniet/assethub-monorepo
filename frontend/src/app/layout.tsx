import "./globals.css"
import type { Metadata } from "next"
import { Inter, Nunito_Sans } from "next/font/google"
import loadFont from "next/font/local"

const inter = Inter({ subsets: ["latin"], variable: "--font-body" })
const nunito = Nunito_Sans({
  variable: "--font-header",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "filebloc : Simplifying digital asset management for startups",
  description:
    "Filebloc enables digital asset management directly from Slack. Directly, search, upload, and manage permissions right in Slack.",
  icons: ["/favicon.ico", "/filebloc-logo.png"]
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${nunito.variable}`}>{children}</body>
    </html>
  )
}
