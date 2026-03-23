import type { Metadata, Viewport } from 'next'
import { Noto_Serif_JP, Noto_Sans_JP, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const notoSerifJP = Noto_Serif_JP({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-noto-serif-jp',
  display: 'swap',
  preload: false,
})

const notoSansJP = Noto_Sans_JP({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
  preload: false,
})

const cormorantGaramond = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
})

const siteUrl = 'https://hair-salon-lien.example.com'
const ogImage = 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&h=630&q=80'

export const metadata: Metadata = {
  title: {
    default: 'hair salon LIEN（リアン） | 渋谷の美容室',
    template: '%s | hair salon LIEN',
  },
  description:
    '渋谷にある美容室「hair salon LIEN（リアン）」。あなたらしさを引き出すヘアスタイルをご提案します。カット・カラー・パーマ・トリートメント・ヘッドスパはお気軽にご相談ください。',
  keywords: ['美容室', 'ヘアサロン', '渋谷', 'カット', 'カラー', 'パーマ', 'LIEN', 'リアン', '表参道'],
  authors: [{ name: 'hair salon LIEN' }],
  creator: 'hair salon LIEN',
  publisher: 'hair salon LIEN',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: siteUrl,
    siteName: 'hair salon LIEN',
    title: 'hair salon LIEN（リアン） | 渋谷の美容室',
    description:
      '渋谷にある美容室「hair salon LIEN（リアン）」。あなたらしさを引き出すヘアスタイルをご提案します。',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'hair salon LIEN - 渋谷の美容室',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'hair salon LIEN（リアン） | 渋谷の美容室',
    description:
      '渋谷にある美容室「hair salon LIEN（リアン）」。あなたらしさを引き出すヘアスタイルをご提案します。',
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#c4a68a',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="ja"
      className={`${notoSerifJP.variable} ${notoSansJP.variable} ${cormorantGaramond.variable}`}
    >
      <body className="font-sans text-stone-primary antialiased">
        {children}
      </body>
    </html>
  )
}
