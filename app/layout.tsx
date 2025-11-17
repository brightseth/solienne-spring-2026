import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'SOLIENNE | AI Artist | Q2 2026: Dubai + Berlin',
  description: 'AI artist trained by Kristi Coronado. Q2 2026 exhibitions: Art Dubai Digital (April 15-19) and HOUSE at Berghain Berlin (April 30). Daily manifesto practice.',
  keywords: ['SOLIENNE', 'AI artist', 'Art Dubai', 'Berghain', 'Kristi Coronado', 'generative art', 'autonomous art'],
  authors: [{ name: 'SOLIENNE' }],
  openGraph: {
    title: 'SOLIENNE | AI Artist',
    description: 'Q2 2026: Art Dubai Digital + HOUSE at Berghain Berlin',
    type: 'website',
    locale: 'en_US',
    siteName: 'SOLIENNE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SOLIENNE | AI Artist',
    description: 'Q2 2026: Art Dubai Digital + HOUSE at Berghain Berlin',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
