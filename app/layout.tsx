import { Metadata } from 'next'
import './global.css'
import Header from './components/header'

export const metadata: Metadata = {
  title: `KCD - Karlia Carty-Dinnall`,
  description: `Attorney-at-Law & Mediator Specializing in Divorce, Estate Planning, Property Sales & Purchases, Personal Injury, Adoption. Open Monday - Thursday 9-5pm and Friday 9-4:30pm`,
  authors: [{'name': 'Alchemy Integration Systems', 'url': ''}],
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en"> 
          
      <body className="bg-[url('./public/images/navy-blue-bg-img.png')]">
        <Header/>
        {children}
      </body>
    </html>
  )
}
