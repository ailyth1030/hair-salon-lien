'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navItems = [
  { label: 'コンセプト', href: '#concept' },
  { label: 'メニュー', href: '#menu' },
  { label: 'ギャラリー', href: '#gallery' },
  { label: 'スタイリスト', href: '#stylists' },
  { label: 'アクセス', href: '#access' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* ロゴ */}
          <Link
            href="/"
            className="flex flex-col items-start group"
            aria-label="hair salon LIEN トップページへ"
          >
            <span
              className={`font-garamond text-[0.6rem] tracking-widest2 uppercase transition-colors duration-300 ${
                isScrolled ? 'text-accent' : 'text-white/80'
              }`}
            >
              hair salon
            </span>
            <span
              className={`font-garamond text-2xl md:text-3xl font-light tracking-widest2 transition-colors duration-300 leading-tight ${
                isScrolled ? 'text-stone-primary' : 'text-white'
              }`}
            >
              LIEN
            </span>
          </Link>

          {/* デスクトップナビゲーション */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="メインナビゲーション">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`font-sans text-xs tracking-widest uppercase underline-accent transition-colors duration-300 ${
                  isScrolled
                    ? 'text-stone-secondary hover:text-stone-primary'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className={`font-sans text-xs tracking-widest px-6 py-2.5 border transition-all duration-300 ${
                isScrolled
                  ? 'border-accent text-accent hover:bg-accent hover:text-white'
                  : 'border-white/60 text-white hover:bg-white/20'
              }`}
            >
              ご予約
            </button>
          </nav>

          {/* ハンバーガーボタン */}
          <button
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
            aria-expanded={isMenuOpen}
          >
            <span
              className={`hamburger-line block w-6 h-px transition-all duration-300 ${
                isMenuOpen
                  ? 'rotate-45 translate-y-[5px] bg-stone-primary'
                  : isScrolled
                  ? 'bg-stone-primary'
                  : 'bg-white'
              }`}
            />
            <span
              className={`hamburger-line block w-6 h-px transition-all duration-300 ${
                isMenuOpen
                  ? 'opacity-0 bg-stone-primary'
                  : isScrolled
                  ? 'bg-stone-primary'
                  : 'bg-white'
              }`}
            />
            <span
              className={`hamburger-line block w-6 h-px transition-all duration-300 ${
                isMenuOpen
                  ? '-rotate-45 -translate-y-[9px] bg-stone-primary'
                  : isScrolled
                  ? 'bg-stone-primary'
                  : 'bg-white'
              }`}
            />
          </button>
        </div>
      </header>

      {/* モバイルメニューオーバーレイ */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-500 lg:hidden ${
          isMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10">
          <div className="font-garamond text-sm tracking-widest2 text-accent uppercase mb-4">
            hair salon LIEN
          </div>
          {navItems.map((item, index) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className={`font-serif text-2xl text-stone-primary hover:text-accent transition-all duration-300 ${
                isMenuOpen
                  ? 'animate-on-scroll is-visible'
                  : ''
              }`}
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#contact')}
            className="mt-4 font-sans text-sm tracking-widest px-10 py-3 bg-accent text-white hover:bg-accent-dark transition-colors duration-300"
          >
            ご予約はこちら
          </button>
        </div>
      </div>
    </>
  )
}
