'use client'

import { Search } from 'lucide-react'
import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

export default function Header() {
  const [searchValue, setSearchValue] = useState('')

  return (
    <header className='flex justify-between py-4 px-6'>
      <div className='relative flex items-center gap-2 w-72 border rounded-full border-light px-3 text-primary'>
        <Search />
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type='search'
          className=' px-3 py-2 peer border-none outline-none'
          placeholder='Rechercher un élève'
        />
        <div className='absolute top-full w-[84%] right-0 invisible peer-focus:visible shadow-lg rounded-lg'>
          <ul className='rounded-lg'>
            <li
              className='rounded-lg px-8 py-5 cursor-pointer hover:bg-[rgba(0,0,0,0.1)]'
              onClick={() => null}
            >
              une suggestion
            </li>
          </ul>
        </div>
      </div>
      <div className='flex items-start gap-2 cursor-pointer'>
        <Avatar>
          <AvatarImage
            src='https://github.com/shadcn.png'
            alt='avatar'
            width={100}
            height={100}
          />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <div className='flex flex-col justify-center'>
          <h3 className='font-[700] text-sm'>Ibrahima Sylla</h3>
          <p className=' text-neutral-400 text-xs'>isyll711@gmail.com</p>
        </div>
      </div>
    </header>
  )
}
