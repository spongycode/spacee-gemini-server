import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spacee Gemini',
  description: 'Talk, create, discover with AI.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/img/logo.svg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
