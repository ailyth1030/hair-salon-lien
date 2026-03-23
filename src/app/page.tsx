'use client'

import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Concept from './components/Concept'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Stylists from './components/Stylists'
import Testimonials from './components/Testimonials'
import Access from './components/Access'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  // スクロールアニメーションの初期化
  useEffect(() => {
    const elements = document.querySelectorAll(
      '.animate-on-scroll, .animate-fade-in, .animate-slide-left, .animate-slide-right'
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <main>
      <Header />

      {/* メインコンテンツ */}
      <div id="top">
        <Hero />
      </div>

      <Concept />
      <Menu />
      <Gallery />
      <Stylists />
      <Testimonials />
      <Access />
      <Contact />

      {/* フローティングCTAボタン（スクロール後に表示） */}
      <FloatingCTA />

      <Footer />
    </main>
  )
}

function FloatingCTA() {
  const handleClick = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden md:block">
      <button
        onClick={handleClick}
        className="font-sans text-xs tracking-widest uppercase bg-accent text-white px-6 py-3 shadow-lg hover:bg-accent-dark transition-colors duration-300 group flex items-center gap-2"
        aria-label="ご予約・お問い合わせへ移動"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        ご予約
      </button>
    </div>
  )
}
