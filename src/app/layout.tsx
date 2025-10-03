import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chinese EV Analyzer - Find Your Perfect Electric Vehicle',
  description: 'Compare Chinese electric vehicles by price, battery capacity, and horsepower. Find the perfect EV that matches your budget and performance needs.',
  keywords: 'Chinese EV, electric vehicle, BYD, NIO, XPeng, Zeekr, HiPhi, Aito, EV comparison, electric SUV',
  authors: [{ name: 'Chinese EV Analyzer' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Chinese EV Analyzer - Find Your Perfect Electric Vehicle',
    description: 'Compare Chinese electric vehicles by price, battery capacity, and horsepower. Find the perfect EV that matches your budget and performance needs.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chinese EV Analyzer - Find Your Perfect Electric Vehicle',
    description: 'Compare Chinese electric vehicles by price, battery capacity, and horsepower.',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#3B82F6" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}