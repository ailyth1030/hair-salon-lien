const footerLinks = [
  { label: 'コンセプト', href: '#concept' },
  { label: 'メニュー・料金', href: '#menu' },
  { label: 'スタイルギャラリー', href: '#gallery' },
  { label: 'スタイリスト', href: '#stylists' },
  { label: 'アクセス', href: '#access' },
  { label: 'ご予約・お問い合わせ', href: '#contact' },
]

export default function Footer() {
  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-stone-primary text-white" role="contentinfo">
      {/* メインフッター */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* ブランド情報 */}
          <div>
            <div className="mb-6">
              <p className="font-garamond text-[0.6rem] tracking-widest2 uppercase text-white/40 mb-1">
                hair salon
              </p>
              <p className="font-garamond text-3xl font-light tracking-widest2 text-white">
                LIEN
              </p>
            </div>
            <p className="font-sans font-light text-white/50 text-xs leading-[2] mb-6">
              あなたらしさを、引き出す。<br />
              渋谷表参道エリアにある<br />
              こだわりのヘアサロン。
            </p>
            {/* SNSアイコン */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-white/20 text-white/50 hover:border-accent hover:text-accent transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-white/20 text-white/50 hover:border-[#06C755] hover:text-[#06C755] transition-all duration-300"
                aria-label="LINE"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.003 2c-5.523 0-10 3.979-10 8.887 0 4.922 4.477 8.887 10 8.887.324 0 .646-.011.965-.032l.162-.011 3.866 2.143-.493-2.952-.014-.076.073-.062C19.396 17.258 22 13.328 22 10.887 22 5.979 17.526 2 12.003 2zm0 1.5c4.69 0 8.5 3.317 8.5 7.387 0 2.082-2.196 5.62-4.856 7.275l-.43.264.218 1.308-1.886-1.045-.388.033c-.382.033-.767.05-1.155.05-4.69 0-8.5-3.317-8.5-7.387S7.313 3.5 12.003 3.5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* ナビゲーション */}
          <div>
            <h3 className="font-garamond text-xs tracking-widest uppercase text-white/40 mb-6">
              Navigation
            </h3>
            <nav aria-label="フッターナビゲーション">
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="font-sans text-xs text-white/60 hover:text-accent transition-colors duration-300 tracking-wider"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* 営業情報 */}
          <div>
            <h3 className="font-garamond text-xs tracking-widest uppercase text-white/40 mb-6">
              Information
            </h3>
            <address className="not-italic space-y-3">
              <p className="font-sans text-xs text-white/60 leading-relaxed">
                〒150-0001<br />
                東京都渋谷区神宮前3-5-10<br />
                LIENビル 1F
              </p>
              <p className="font-sans text-xs text-white/60">
                <a href="tel:0312345678" className="hover:text-accent transition-colors duration-300">
                  03-1234-5678
                </a>
              </p>
              <div className="font-sans text-xs text-white/60 space-y-1">
                <p>月・火・木・金　10:00〜20:00</p>
                <p>土・日・祝　9:00〜19:00</p>
                <p className="text-white/30">水曜定休</p>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* コピーライトバー */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-white/30 tracking-wider">
            © {new Date().getFullYear()} hair salon LIEN. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-sans text-xs text-white/30 hover:text-white/60 transition-colors duration-300">
              プライバシーポリシー
            </a>
            <a href="#" className="font-sans text-xs text-white/30 hover:text-white/60 transition-colors duration-300">
              特定商取引法に基づく表記
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
