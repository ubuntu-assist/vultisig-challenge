import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const brockMann = localFont({
  src: [
    {
      path: './fonts/Brockmann-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Brockmann-BoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: './fonts/Brockmann-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Brockmann-MediumItalic.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: './fonts/Brockmann-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Brockmann-RegularItalic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/Brockmann-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Brockmann-SemiBoldItalic.otf',
      weight: '600',
      style: 'italic',
    },
  ],
  variable: '--font-brockmann',
})

export const metadata: Metadata = {
  title: 'Vultisig - Multisig Crypto Vault',
  description:
    'Vultisig is a secure and easy-to-use platform that allows you to manage your digital assets.',
  authors: [
    {
      name: 'Duclair Fopa Kuete',
      url: 'https://www.linkedin.com/in/duclair-fopa',
    },
  ],
  keywords: [
    'Vultisig',
    'Vultisig Docs',
    'Vultisig help',
    'Vultisig support',
    'Vultisig customer service',
    'Vultisig asset exchange',
  ],
  openGraph: {
    title: 'Vultisig - Multisig Crypto Vault',
    description:
      'A highly secure self-custodial multi-chain crypto vault with in-built two-factor authentication, and no tracking or registration requirements.',
    url: 'https://vultisig.com',
    siteName: 'Vultisig',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${brockMann.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
