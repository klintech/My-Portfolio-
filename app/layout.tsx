import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const geist = Geist({ subsets: ["latin"], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'Kelvin Chinagorm (Klintech) | Senior Full-Stack Developer',
  description: 'Senior full-stack developer specializing in modern web technologies. Explore my projects, experience, and expertise in building scalable web applications.',
  keywords: ['developer', 'full-stack', 'web development', 'React', 'Next.js', 'portfolio'],
  authors: [{ name: 'Kelvin Chinagorm' }],
  creator: 'Kelvin Chinagorm',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://klintech.dev',
    title: 'Kelvin Chinagorm | Senior Developer Portfolio',
    description: 'Showcasing my expertise in full-stack web development',
    images: [
      {
        url: 'https://klintech.dev/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kelvin Chinagorm - Senior Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kelvin Chinagorm | Senior Developer',
    description: 'Full-stack web development portfolio',
  },
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geist.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
