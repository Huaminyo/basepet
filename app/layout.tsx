import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BasePets - Pixel Art NFT Collection on Base Network",
  description:
    "Collect, trade, and play with unique pixel art pets on Base Network. The first retro gaming NFT collection with real utility and play-to-earn mechanics.",
  keywords: "BasePets, NFT, Base Network, Pixel Art, Gaming, Crypto, Pets, Blockchain",
  authors: [{ name: "BasePets Team" }],
  creator: "BasePets",
  publisher: "BasePets",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://basepets.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BasePets - Pixel Art NFT Collection",
    description: "Collect, trade, and play with unique pixel art pets on Base Network",
    url: "https://basepets.com",
    siteName: "BasePets",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "BasePets Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BasePets - Pixel Art NFT Collection",
    description: "Collect, trade, and play with unique pixel art pets on Base Network",
    images: ["/favicon.png"],
    creator: "@BasePets",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/favicon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.png",
  },
  manifest: "/manifest.json",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="theme-color" content="#0066FF" />
        <meta name="msapplication-TileColor" content="#0066FF" />
        <meta name="msapplication-TileImage" content="/favicon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
