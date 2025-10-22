"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
export default function Header() {
  const menuData = [
    {
      path: '/article',
      name: 'Article'
    },
    {
      path: '/picture',
      name: 'Picture'
    },
    {
      path: '/about',
      name: 'About'
    },
  ]
  const pathname = usePathname()
  return (
    <div className='absolute w-full z-10 ' style={{ background: 'rgba(255, 255, 255, 0.6)' }}>
      <header className="flex justify-between container font-bold mx-auto text-black p-8">
        <Link className={`text-3xl ${pathname === '/' ? 'text-pink-400' : ''}`} href="/">Home</Link>
        <nav className="text-xl space-x-4">
          {menuData.map((item) => {
            return (<Link key={item.name} className={pathname === item.path ? 'text-pink-400' : ''} href={item.path}>{item.name}</Link>)
          })}
        </nav>
      </header>
    </div>
  )
}
