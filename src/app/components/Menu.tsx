const menuItems = [
  {
    id: 'cut',
    name: 'カット',
    nameEn: 'Cut',
    description:
      'お顔の輪郭・髪質・ライフスタイルを考慮した、あなただけのカットをご提案。毎日扱いやすく、美しいシルエットに仕上げます。',
    price: '¥6,600〜',
    note: 'シャンプー・ブロー込み',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
      </svg>
    ),
  },
  {
    id: 'color',
    name: 'カラー',
    nameEn: 'Color',
    description:
      '豊富なカラーバリエーションから、肌色に馴染むお好みのトーンをセレクト。ダメージを最小限に抑えたカラー剤で、透明感のある発色を実現します。',
    price: '¥11,000〜',
    note: 'リタッチ¥8,800〜',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    id: 'perm',
    name: 'パーマ',
    nameEn: 'Perm',
    description:
      'ゆるふわのウェーブからしっかりカールまで、豊富なロッドとテクニックでお好みのスタイルに。髪への負担に配慮した低ダメージな薬剤を使用します。',
    price: '¥13,200〜',
    note: 'デジタルパーマ¥16,500〜',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    id: 'treatment',
    name: 'トリートメント',
    nameEn: 'Treatment',
    description:
      '髪の内部まで浸透するサロン専売品で集中ケア。傷んだ髪もしっとりなめらかに。ダメージ・乾燥・パサつきなどのお悩みに合わせてカスタマイズします。',
    price: '¥4,400〜',
    note: 'カット同時施術可',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    id: 'headspa',
    name: 'ヘッドスパ',
    nameEn: 'Head Spa',
    description:
      '頭皮の血行を促進し、日々の疲れやストレスをほぐすリラクゼーションメニュー。頭皮環境を整え、健康的な美髪づくりの土台を作ります。',
    price: '¥5,500〜',
    note: '30分 / 60分コースあり',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
]

export default function Menu() {
  return (
    <section id="menu" className="py-32 md:py-40 bg-beige">
      <div className="max-w-6xl mx-auto px-6">
        {/* セクションヘッダー */}
        <div className="text-center mb-20 animate-on-scroll">
          <span className="font-garamond text-accent text-sm tracking-widest3 uppercase section-label">
            Menu &amp; Price
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-stone-primary mt-6">
            メニュー・料金
          </h2>
          <p className="font-sans font-light text-stone-secondary text-sm mt-4 leading-relaxed">
            すべてのメニューはカウンセリング後に価格が確定します。<br className="hidden sm:block" />
            詳細はお気軽にお問い合わせください。
          </p>
        </div>

        {/* メニューグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <article
              key={item.id}
              className={`bg-white p-8 hover-lift animate-on-scroll animate-on-scroll-delay-${Math.min(index + 1, 5)} group`}
            >
              {/* アイコン */}
              <div className="w-14 h-14 flex items-center justify-center border border-accent/20 text-accent mb-6 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-400">
                {item.icon}
              </div>

              {/* サービス名 */}
              <div className="mb-4">
                <span className="font-garamond text-xs text-accent tracking-widest uppercase">
                  {item.nameEn}
                </span>
                <h3 className="font-serif text-xl font-semibold text-stone-primary mt-1">
                  {item.name}
                </h3>
              </div>

              {/* 説明 */}
              <p className="font-sans font-light text-stone-secondary text-sm leading-relaxed mb-6">
                {item.description}
              </p>

              {/* 価格 */}
              <div className="pt-6 border-t border-beige-dark">
                <div className="flex items-end justify-between">
                  <div>
                    <span className="font-garamond text-2xl text-stone-primary">
                      {item.price}
                    </span>
                  </div>
                  <span className="font-sans text-xs text-stone-light">
                    {item.note}
                  </span>
                </div>
              </div>
            </article>
          ))}

          {/* お問い合わせカード */}
          <article className="bg-accent text-white p-8 flex flex-col justify-between hover-lift animate-on-scroll animate-on-scroll-delay-5">
            <div>
              <span className="font-garamond text-xs text-white/60 tracking-widest uppercase">
                Other
              </span>
              <h3 className="font-serif text-xl font-semibold mt-1 mb-4">
                その他メニュー
              </h3>
              <p className="font-sans font-light text-white/80 text-sm leading-relaxed">
                縮毛矯正・ストレートパーマ・ブリーチ・ハイライト・特殊カラーなど、ご要望に応じて対応しております。
              </p>
            </div>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-8 font-sans text-xs tracking-widest uppercase border border-white/60 py-3 text-white hover:bg-white hover:text-accent transition-all duration-300"
            >
              お問い合わせ
            </button>
          </article>
        </div>

        {/* 注意事項 */}
        <p className="text-center font-sans text-xs text-stone-light mt-10 animate-on-scroll">
          ※ 表示価格はすべて税込です。髪の長さ・量により価格が変わる場合があります。
        </p>
      </div>
    </section>
  )
}
