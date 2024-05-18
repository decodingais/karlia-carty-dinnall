import { Metadata } from 'next'
import './global.css'

export const metadata: Metadata = {
  title: `KCD - Karlia Carty-Dinnall`,
  description: `Attorney-at-Law & Mediator Specializing in Divorce, Estate Planning, Property Sales & Purchases, Personal Injury, Adoption. Open Monday - Thursday 9-5pm and Friday 9-4:30pm`,
  authors: [{'name': 'Alchemy Integration Systems', 'url': ''}],
  icons: {
    icon: './images/favicon.ico'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-[url('./images/navy-blue-bg-img.png')]">{children}</body>
    </html>
  )
}
