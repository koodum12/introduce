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
  // 현재 페이지의 경로를 가져와서 활성화된 메뉴 항목 스타일링에 사용합니다.
  const pathname = usePathname()
  // 모바일 환경에서 햄버거 메뉴의 열림/닫힘 상태를 관리합니다.
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'rgba(241,245,249,0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid #e2e8f0',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 24px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 800,
              fontSize: '20px',
              color: '#0f172a',
              letterSpacing: '-0.02em',
            }}
          >
            MCH
            <span style={{ color: '#2563eb' }}>.</span>
          </span>
        </Link>

        {/* Desktop nav: PC 화면에서만 보이는 메인 내비게이션 바 */}
        <nav style={{ display: 'flex', gap: '4px' }} className="hidden-mobile">
          {navLinks.map(({ href, label }) => {
            // 접속한 페이지 경로와 링크 경로가 일치하는지 확인하여 활성화(Active) 상태 결정
            const isActive = pathname === href
            return (
              <Link
                key={href}
                href={href}
                style={{
                  textDecoration: 'none',
                  padding: '6px 14px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#2563eb' : '#475569',
                  backgroundColor: isActive ? '#eff6ff' : 'transparent',
                  transition: 'all 0.2s ease',
                  letterSpacing: '-0.01em',
                }}
                onMouseEnter={e => {
                  if (!isActive) {
                    ; (e.target as HTMLElement).style.color = '#0f172a'
                      ; (e.target as HTMLElement).style.backgroundColor = '#f8fafc'
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive) {
                    ; (e.target as HTMLElement).style.color = '#475569'
                      ; (e.target as HTMLElement).style.backgroundColor = 'transparent'
                  }
                }}
              >
                {label}
              </Link>
            )
          })}
        </nav>

        {/* CTA (Call To Action) 버튼: 클릭 시 새 창에서 Gmail로 이메일을 작성할 수 있도록 연결 */}
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=minchaehong2@gmail.com`}
          target='_blank'
          className="hidden-mobile"
          style={{
            textDecoration: 'none',
            padding: '8px 18px',
            borderRadius: '8px',
            fontSize: '13px',
            fontWeight: 700,
            color: '#fff',
            backgroundColor: '#2563eb',
            letterSpacing: '0.01em',
            transition: 'background-color 0.2s ease',
          }}
          onMouseEnter={e => ((e.target as HTMLElement).style.backgroundColor = '#1d4ed8')}
          onMouseLeave={e => ((e.target as HTMLElement).style.backgroundColor = '#2563eb')}
        >
          Contact
        </a>

        {/* Mobile hamburger: 모바일 화면에서만 보이며, 클릭 시 메뉴를 열고 닫는 토글 버튼 */}
        <button
          className="show-mobile"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
            padding: '4px',
          }}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              style={{
                display: 'block',
                width: '22px',
                height: '2px',
                backgroundColor: '#0f172a',
                borderRadius: '2px',
                transition: 'all 0.2s',
                transform:
                  menuOpen && i === 0
                    ? 'rotate(45deg) translate(5px, 5px)'
                    : menuOpen && i === 1
                      ? 'scaleX(0)'
                      : menuOpen && i === 2
                        ? 'rotate(-45deg) translate(5px, -5px)'
                        : 'none',
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu: menuOpen 상태가 true일 때만 화면에 렌더링되는 모바일 드롭다운 메뉴 */}
      {menuOpen && (
        <div
          style={{
            backgroundColor: '#f8fafc',
            borderTop: '1px solid #e2e8f0',
            padding: '12px 24px 16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
        >
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href
            return (
              <Link
                key={href}
                href={href}
                // 메뉴 항목 클릭 시 다른 페이지로 이동하면서 모바일 메뉴가 닫히도록 설정
                onClick={() => setMenuOpen(false)}
                style={{
                  textDecoration: 'none',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  fontSize: '15px',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#2563eb' : '#334155',
                  backgroundColor: isActive ? '#eff6ff' : 'transparent',
                }}
              >
                {label}
              </Link>
            )
          })}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
