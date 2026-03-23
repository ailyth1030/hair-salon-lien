'use client'

import Image from 'next/image'

export default function Hero() {
  const handleScrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleScrollDown = () => {
    document.querySelector('#concept')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* 背景画像 */}
      <Image
        src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=2000&q=80"
        alt="hair salon LIEN の店内 - 白を基調とした清潔感のある空間"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* グラデーションオーバーレイ */}
      <div className="absolute inset-0 overlay-gradient" />

      {/* コンテンツ */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        {/* サロン名 */}
        <p className="font-garamond text-xs md:text-sm tracking-widest3 uppercase text-white/70 mb-6 animate-fade-in opacity-0 [animation-delay:0.3s] [animation-fill-mode:forwards]">
          hair salon
        </p>

        {/* メインキャッチコピー */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-8 text-white drop-shadow-lg animate-on-scroll opacity-0 [animation-delay:0.5s] [animation-fill-mode:forwards] is-visible">
          あなたらしさを、
          <br />
          引き出す。
        </h1>

        {/* サブテキスト */}
        <p className="font-sans font-light text-sm md:text-base text-white/80 tracking-wider mb-12 max-w-lg mx-auto leading-relaxed animate-fade-in opacity-0 [animation-delay:0.8s] [animation-fill-mode:forwards]">
          渋谷で、あなただけのスタイルを。
          <br className="hidden sm:block" />
          心地よい空間で、本当の自分と出会う時間を。
        </p>

        {/* CTAボタン */}
        <button
          onClick={handleScrollToContact}
          className="inline-block font-sans text-sm tracking-widest px-10 py-4 border border-white/80 text-white hover:bg-white hover:text-stone-primary transition-all duration-400 group animate-fade-in opacity-0 [animation-delay:1s] [animation-fill-mode:forwards]"
          aria-label="ご予約・お問い合わせページへ移動"
        >
          <span className="mr-2">ご予約はこちら</span>
          <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
        </button>
      </div>

      {/* スクロールインジケーター */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 cursor-pointer group animate-fade-in opacity-0 [animation-delay:1.3s] [animation-fill-mode:forwards]"
        onClick={handleScrollDown}
        role="button"
        aria-label="下にスクロール"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleScrollDown()}
      >
        <span className="font-garamond text-xs tracking-widest uppercase text-white/50 group-hover:text-white/80 transition-colors duration-300">
          Scroll
        </span>
        <div className="flex flex-col items-center gap-0.5">
          <span className="block w-px h-8 bg-white/40 animate-scroll-bounce" />
          <svg
            className="w-4 h-4 animate-scroll-bounce text-white/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* 左下の装飾テキスト */}
      <div className="absolute bottom-10 left-8 hidden md:block">
        <p className="font-garamond text-xs text-white/30 tracking-widest2 [writing-mode:vertical-rl]">
          LIEN — hair salon
        </p>
      </div>
    </section>
  )
}
