'use client'

import clsx from 'clsx'
import { DoorOpen, GraduationCap, LayoutDashboard, Users } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const pathname = usePathname()
  const menuItems = [
    {
      text: 'Tableau de bord',
      href: '/dashboard',
      icon: <LayoutDashboard />,
    },
    {
      text: 'Etudiants',
      href: '/students',
      icon: <Users />,
    },
    {
      text: 'Classes',
      href: '/classes',
      icon: <DoorOpen />,
    },
    {
      text: 'Niveaux',
      href: '/grades',
      icon: <GraduationCap />,
    },
  ]

  return (
    <nav>
      <ul className='list-none flex flex-col gap-2'>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={clsx(
              'p-3',
              pathname === item.href && 'bg-primary text-white rounded-xl',
            )}
          >
            <Link href={item.href} className='flex gap-4'>
              {item.icon}
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
