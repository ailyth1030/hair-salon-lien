const testimonials = [
  {
    id: 1,
    rating: 5,
    comment:
      '初めての来店でしたが、カウンセリングがとても丁寧で安心しました。希望のイメージを細かく聞いてくれて、思った以上に素敵な仕上がりに。次回も絶対また来ます！',
    name: 'K.M.',
    service: 'カット＋カラー',
    date: '2024年2月',
  },
  {
    id: 2,
    rating: 5,
    comment:
      '担当の田中さんはカラーが本当に上手で、毎回お任せしています。自分に似合う色を的確に提案してくれるので、いつも大満足です。空間もおしゃれで癒されます。',
    name: 'A.T.',
    service: 'カラー＋トリートメント',
    date: '2024年1月',
  },
  {
    id: 3,
    rating: 5,
    comment:
      'ヘッドスパが最高でした！肩こりが酷くていつも頭が重い感じがしていたのですが、施術後は頭がスッキリして体まで軽くなった気がします。定期的に通いたいと思います。',
    name: 'R.S.',
    service: 'ヘッドスパ 60分',
    date: '2024年2月',
  },
  {
    id: 4,
    rating: 5,
    comment:
      '以前から悩んでいた広がりとパサつきが、1回のトリートメントでかなり改善されました。帰り道、何度も鏡で自分の髪を見てしまいました（笑）スタッフさんも皆さん感じよくて最高です。',
    name: 'M.H.',
    service: 'カット＋トリートメント',
    date: '2024年1月',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`評価: ${rating}点`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-accent' : 'text-beige-deeper'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-32 md:py-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* セクションヘッダー */}
        <div className="text-center mb-20 animate-on-scroll">
          <span className="font-garamond text-accent text-sm tracking-widest3 uppercase section-label">
            Testimonials
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-stone-primary mt-6">
            お客様の声
          </h2>
          <p className="font-sans font-light text-stone-secondary text-sm mt-4">
            ご来店いただいたお客様からいただいた声をご紹介します。
          </p>
        </div>

        {/* スクロールするレビューコンテナ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((review, index) => (
            <blockquote
              key={review.id}
              className={`bg-beige p-8 md:p-10 relative animate-on-scroll animate-on-scroll-delay-${Math.min(index + 1, 4)}`}
            >
              {/* クォートアイコン */}
              <div className="absolute top-8 right-8 font-garamond text-6xl text-accent/10 leading-none select-none">
                &ldquo;
              </div>

              {/* 星評価 */}
              <div className="mb-5">
                <StarRating rating={review.rating} />
              </div>

              {/* コメント */}
              <p className="font-sans font-light text-stone-secondary leading-[2] text-sm mb-8 relative z-10">
                {review.comment}
              </p>

              {/* レビュワー情報 */}
              <footer className="border-t border-beige-dark pt-5 flex items-center justify-between">
                <div>
                  <cite className="font-serif text-base font-semibold text-stone-primary not-italic">
                    {review.name} 様
                  </cite>
                  <p className="font-sans text-xs text-accent mt-0.5">{review.service}</p>
                </div>
                <p className="font-sans text-xs text-stone-light">{review.date}</p>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* 総合評価 */}
        <div className="text-center mt-16 animate-on-scroll">
          <div className="inline-flex flex-col items-center gap-4 bg-beige px-12 py-8">
            <p className="font-garamond text-5xl text-stone-primary">4.9</p>
            <StarRating rating={5} />
            <p className="font-sans text-xs text-stone-secondary tracking-wider">
              Google 口コミ 総合評価 / 142件のレビュー
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
