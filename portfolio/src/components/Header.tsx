'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/skills', label: 'Skills' },
  { href: '/profile', label: 'Profile' },
]

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-slate-100/85 backdrop-blur-md">
      <div className="mx-auto flex h-[60px] max-w-[1100px] items-center justify-between px-6">
        
        {/* Logo */}
        <Link href="/" className="no-underline">
          <span className="text-[20px] font-extrabold tracking-[-0.02em] text-slate-900">
            MCH<span className="text-blue-600">.</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-1 sm:flex">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href

            return (
              <Link
                key={href}
                href={href}
                className={`
                  rounded-lg px-3.5 py-1.5 text-sm tracking-[-0.01em] transition-all
                  ${isActive
                    ? 'bg-blue-50 font-bold text-blue-600'
                    : 'font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900'}
                `}
              >
                {label}
              </Link>
            )
          })}
        </nav>

        {/* CTA */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=minchaehong2@gmail.com"
          target="_blank"
          className="hidden rounded-lg bg-blue-600 px-4.5 py-2 text-[13px] font-bold text-white tracking-[0.01em] transition-colors hover:bg-blue-700 sm:inline-block"
        >
          Contact
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-[5px] p-1 sm:hidden"
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              className={`
                block h-[2px] w-[22px] rounded bg-slate-900 transition-all
                ${
                  menuOpen && i === 0
                    ? 'translate-y-[7px] rotate-45'
                    : menuOpen && i === 1
                    ? 'scale-x-0'
                    : menuOpen && i === 2
                    ? '-translate-y-[7px] -rotate-45'
                    : ''
                }
              `}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="flex flex-col gap-1 border-t border-slate-200 bg-slate-50 px-6 py-3 pb-4 sm:hidden">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href

            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`
                  rounded-lg px-3.5 py-2.5 text-[15px]
                  ${isActive
                    ? 'bg-blue-50 font-bold text-blue-600'
                    : 'font-medium text-slate-700'}
                `}
              >
                {label}
              </Link>
            )
          })}
        </div>
      )}
    </header>
  )
}