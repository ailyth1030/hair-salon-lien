const businessHours = [
  { day: '月・火・木・金', hours: '10:00〜20:00', isHoliday: false },
  { day: '土・日・祝', hours: '9:00〜19:00', isHoliday: false },
  { day: '水曜日', hours: '定休日', isHoliday: true },
]

export default function Access() {
  return (
    <section id="access" className="py-32 md:py-40 bg-beige">
      <div className="max-w-6xl mx-auto px-6">
        {/* セクションヘッダー */}
        <div className="text-center mb-20 animate-on-scroll">
          <span className="font-garamond text-accent text-sm tracking-widest3 uppercase section-label">
            Access
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-stone-primary mt-6">
            サロン情報・アクセス
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* サロン情報 */}
          <div className="animate-slide-left">
            <div className="bg-white p-8 md:p-10">
              {/* サロン名 */}
              <div className="border-b border-beige pb-6 mb-6">
                <p className="font-garamond text-xs text-accent tracking-widest uppercase mb-1">
                  hair salon
                </p>
                <h3 className="font-serif text-2xl font-semibold text-stone-primary">
                  LIEN（リアン）
                </h3>
              </div>

              {/* 詳細情報 */}
              <dl className="space-y-5">
                <div className="flex gap-4">
                  <dt className="font-sans text-xs text-stone-light tracking-wider w-16 flex-shrink-0 mt-0.5">
                    住所
                  </dt>
                  <dd className="font-sans text-sm text-stone-primary leading-relaxed">
                    <address className="not-italic">
                      〒150-0001<br />
                      東京都渋谷区神宮前3-5-10<br />
                      LIENビル 1F
                    </address>
                  </dd>
                </div>

                <div className="flex gap-4">
                  <dt className="font-sans text-xs text-stone-light tracking-wider w-16 flex-shrink-0">
                    電話
                  </dt>
                  <dd>
                    <a
                      href="tel:0312345678"
                      className="font-garamond text-xl text-stone-primary hover:text-accent transition-colors duration-300"
                    >
                      03-1234-5678
                    </a>
                  </dd>
                </div>

                <div className="flex gap-4">
                  <dt className="font-sans text-xs text-stone-light tracking-wider w-16 flex-shrink-0 mt-0.5">
                    営業時間
                  </dt>
                  <dd className="space-y-1.5">
                    {businessHours.map((item) => (
                      <div key={item.day} className="flex items-center gap-3">
                        <span className="font-sans text-sm text-stone-secondary">
                          {item.day}
                        </span>
                        <span className="w-px h-3 bg-beige-deep" />
                        <span
                          className={`font-sans text-sm ${
                            item.isHoliday ? 'text-stone-light' : 'text-stone-primary'
                          }`}
                        >
                          {item.hours}
                        </span>
                      </div>
                    ))}
                  </dd>
                </div>

                <div className="flex gap-4">
                  <dt className="font-sans text-xs text-stone-light tracking-wider w-16 flex-shrink-0 mt-0.5">
                    アクセス
                  </dt>
                  <dd className="font-sans text-sm text-stone-secondary leading-relaxed">
                    <ul className="space-y-1">
                      <li>東京メトロ表参道駅 A2出口より 徒歩5分</li>
                      <li>東京メトロ原宿駅より 徒歩8分</li>
                      <li>JR渋谷駅より 徒歩15分</li>
                    </ul>
                  </dd>
                </div>

                <div className="flex gap-4">
                  <dt className="font-sans text-xs text-stone-light tracking-wider w-16 flex-shrink-0">
                    駐車場
                  </dt>
                  <dd className="font-sans text-sm text-stone-secondary">
                    近隣にコインパーキングあり（当サロン提携なし）
                  </dd>
                </div>
              </dl>

              {/* 予約ボタン */}
              <div className="mt-8 pt-6 border-t border-beige flex gap-3">
                <a
                  href="tel:0312345678"
                  className="flex-1 font-sans text-xs tracking-widest text-center py-3 border border-stone-primary/30 text-stone-primary hover:border-accent hover:text-accent transition-all duration-300"
                >
                  電話予約
                </a>
                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex-1 font-sans text-xs tracking-widest text-center py-3 bg-accent text-white hover:bg-accent-dark transition-colors duration-300"
                >
                  オンライン予約
                </button>
              </div>
            </div>
          </div>

          {/* Googleマップ */}
          <div className="animate-slide-right">
            <div className="relative h-[400px] lg:h-[500px] overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.2!2d139.7073!3d35.6671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca4d6ca0485%3A0xb44e1d022e9fcf68!2z6KW_5Y2X5Y-w!5e0!3m2!1sja!2sjp!4v1710000000000!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="hair salon LIEN へのアクセスマップ - 東京都渋谷区神宮前3-5-10"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            {/* マップの注記 */}
            <p className="font-sans text-xs text-stone-light mt-3 text-center">
              ※ 表示されているマップは参考です。実際の場所と若干異なる場合があります。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
