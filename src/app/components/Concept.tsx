export default function Concept() {
  return (
    <section id="concept" className="py-32 md:py-40 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* セクションラベル */}
        <div className="flex items-center justify-center mb-16 animate-on-scroll">
          <span className="font-garamond text-accent text-sm tracking-widest3 uppercase section-label">
            Concept
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* テキストエリア */}
          <div className="animate-slide-left">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-stone-primary leading-snug mb-10">
              美しさは、
              <br />
              内側から
              <span className="text-accent">。</span>
            </h2>

            <div className="space-y-5 font-sans font-light text-stone-secondary leading-[2] text-sm md:text-base">
              <p>
                LIENは、フランス語で"絆"を意味する言葉。
                お客様との信頼という絆を大切に、一人ひとりの個性と向き合いながら、その方だけの美しさを引き出すお手伝いをしています。
              </p>
              <p>
                忙しい毎日の中でも、サロンに来るたびに心がほぐれ、自分らしさを取り戻せる——そんな特別な時間をお届けすることが、私たちの願いです。
              </p>
              <p>
                素材本来の質感を大切にしながら、トレンドと個性のバランスを絶妙に調和させたスタイルをご提案します。
              </p>
            </div>

            {/* 区切りライン */}
            <div className="mt-10 flex items-center gap-4">
              <div className="w-12 h-px bg-accent" />
              <span className="font-garamond text-accent text-xs tracking-widest uppercase">
                hair salon LIEN
              </span>
            </div>
          </div>

          {/* 画像エリア */}
          <div className="animate-slide-right">
            <div className="relative">
              {/* メイン画像 */}
              <div className="relative h-[420px] md:h-[520px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80"
                  alt="スタイリストによる丁寧なヘアケアの様子"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* 装飾ボックス */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-accent/30 -z-10" />
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-beige -z-10" />
            </div>
          </div>
        </div>

        {/* 3つのバリュー */}
        <div className="mt-28 md:mt-36 grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
          {[
            {
              number: '01',
              title: '丁寧なカウンセリング',
              desc: 'お客様のライフスタイルやお悩みを丁寧にお伺いし、最適なスタイルをご提案します。',
            },
            {
              number: '02',
              title: '高品質な素材',
              desc: '髪と頭皮への負担を最小限に抑えた、厳選された薬剤・ケア製品のみを使用しています。',
            },
            {
              number: '03',
              title: '居心地のよい空間',
              desc: 'ゆったりとしたプライベート感のある空間で、心からリラックスできる時間をお過ごしください。',
            },
          ].map((item, index) => (
            <div
              key={item.number}
              className={`animate-on-scroll animate-on-scroll-delay-${index + 1}`}
            >
              <div className="font-garamond text-5xl text-accent/20 mb-4 leading-none">
                {item.number}
              </div>
              <h3 className="font-serif text-base font-semibold text-stone-primary mb-3">
                {item.title}
              </h3>
              <p className="font-sans font-light text-stone-secondary text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
