'use client'

import Image from 'next/image'

const galleryItems = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80',
    alt: 'ゆるふわウェーブのロングスタイル',
    style: 'ゆるふわウェーブ',
    span: 'col-span-1 row-span-2',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1492106087820-fe151450c2c5?auto=format&fit=crop&w=600&q=80',
    alt: '大人っぽいストレートロングスタイル',
    style: 'ストレートロング',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
    alt: 'ナチュラルバレイヤージュカラー',
    style: 'バレイヤージュカラー',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1595476108010-9cfd5e13a81d?auto=format&fit=crop&w=600&q=80',
    alt: 'スタイリッシュなショートボブスタイル',
    style: 'ショートボブ',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=600&q=80',
    alt: 'こなれ感のあるミディアムスタイル',
    style: 'こなれミディアム',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=600&q=80',
    alt: '透明感のあるアッシュカラースタイル',
    style: 'アッシュカラー',
    span: 'col-span-1 row-span-2',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=600&q=80',
    alt: 'トレンドのポニーテールアレンジ',
    style: 'ヘアアレンジ',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1532710093739-9470acff878f?auto=format&fit=crop&w=600&q=80',
    alt: 'リッチな艶感のあるブラックスタイル',
    style: '艶やかブラック',
    span: 'col-span-1 row-span-1',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* セクションヘッダー */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="font-garamond text-accent text-sm tracking-widest3 uppercase section-label">
            Style Gallery
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-stone-primary mt-6">
            スタイルギャラリー
          </h2>
          <p className="font-sans font-light text-stone-secondary text-sm mt-4">
            LIENが提案するヘアスタイルの一例です。
          </p>
        </div>

        {/* ギャラリーグリッド */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[220px]">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={`gallery-item relative overflow-hidden ${item.span} animate-on-scroll animate-on-scroll-delay-${Math.min(index + 1, 5)}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
                loading="lazy"
              />
              {/* ホバーオーバーレイ */}
              <div className="gallery-overlay">
                <span className="font-sans text-white text-xs tracking-widest">
                  {item.style}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Instagramリンク */}
        <div className="text-center mt-14 animate-on-scroll">
          <p className="font-sans font-light text-stone-secondary text-sm mb-6">
            最新のスタイルはInstagramでチェック
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 font-sans text-xs tracking-widest uppercase border border-stone-primary/20 px-8 py-3 text-stone-primary hover:border-accent hover:text-accent transition-all duration-300"
            aria-label="LIENのInstagramを見る（外部リンク）"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            <span>@hairsalon_lien</span>
          </a>
        </div>
      </div>
    </section>
  )
}
