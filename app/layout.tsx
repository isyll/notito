import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/layout/Sidebar'
import Header from '@/components/layout/Header'
import clsx from 'clsx'

const poppins = Poppins({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Notito',
  description: 'Gestion des notes',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='fr'>
      <body className={clsx(poppins.className, 'flex bg-lightGrey gap-5')}>
        <aside className='h-screen w-[276px] py-4 px-8 bg-white'>
          <h1 className='font-bold text-[36px] mb-3'>Notito</h1>
          <Sidebar />
        </aside>
        <div className='flex flex-col w-full bg-white'>
          <Header />
        </div>
        {children}
      </body>
    </html>
  )
}
