import Image from 'next/image'

const stylists = [
  {
    id: 1,
    name: '中村 咲季',
    nameEn: 'Saki Nakamura',
    title: 'オーナースタイリスト',
    experience: 'スタイリスト歴 12年',
    message:
      'お客様の"なりたい"を一緒に形にするのが私の仕事。毎回のご来店が、あなたの日常に少しの自信と喜びをプラスできる時間になれば嬉しいです。',
    specialties: ['カット', 'カラー', 'ヘッドスパ'],
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'オーナースタイリスト 中村 咲季',
  },
  {
    id: 2,
    name: '田中 葵',
    nameEn: 'Aoi Tanaka',
    title: 'チーフスタイリスト',
    experience: 'スタイリスト歴 8年',
    message:
      'カラーが得意で、肌色に馴染む透明感のある発色を追求しています。ご希望のイメージやお悩みを気軽に話しかけてください。',
    specialties: ['カラー', 'パーマ', 'トリートメント'],
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'チーフスタイリスト 田中 葵',
  },
  {
    id: 3,
    name: '松本 悠太',
    nameEn: 'Yuta Matsumoto',
    title: 'スタイリスト',
    experience: 'スタイリスト歴 5年',
    message:
      '骨格や髪質を丁寧に分析し、長持ちするスタイルをご提案します。メンズのお客様もぜひお気軽にご来店ください。',
    specialties: ['カット', 'パーマ', 'メンズスタイル'],
    image: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'スタイリスト 松本 悠太',
  },
]

export default function Stylists() {
  return (
    <section id="stylists" className="py-32 md:py-40 bg-beige">
      <div className="max-w-6xl mx-auto px-6">
        {/* セクションヘッダー */}
        <div className="text-center mb-20 animate-on-scroll">
          <span className="font-garamond text-accent text-sm tracking-widest3 uppercase section-label">
            Our Stylists
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-stone-primary mt-6">
            スタイリスト紹介
          </h2>
          <p className="font-sans font-light text-stone-secondary text-sm mt-4">
            経験豊かなスタイリストが、あなたの理想のスタイルを叶えます。
          </p>
        </div>

        {/* スタイリストカード */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {stylists.map((stylist, index) => (
            <article
              key={stylist.id}
              className={`text-center animate-on-scroll animate-on-scroll-delay-${index + 1} group`}
            >
              {/* プロフィール写真 */}
              <div className="relative w-44 h-44 mx-auto mb-8">
                {/* 装飾リング */}
                <div className="absolute inset-0 rounded-full border-2 border-accent/20 scale-110 group-hover:scale-125 transition-transform duration-500" />
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <Image
                    src={stylist.image}
                    alt={stylist.imageAlt}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="176px"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* プロフィール情報 */}
              <div className="bg-white p-8 -mt-6 pt-10 mx-2">
                <p className="font-garamond text-xs text-accent tracking-widest uppercase mb-1">
                  {stylist.title}
                </p>
                <h3 className="font-serif text-xl font-semibold text-stone-primary mb-1">
                  {stylist.name}
                </h3>
                <p className="font-garamond text-xs text-stone-light tracking-wider mb-4">
                  {stylist.nameEn}
                </p>

                <p className="font-sans text-xs text-accent mb-5">
                  {stylist.experience}
                </p>

                <p className="font-sans font-light text-stone-secondary text-sm leading-relaxed mb-6">
                  {stylist.message}
                </p>

                {/* 得意メニュー */}
                <div className="border-t border-beige pt-5">
                  <p className="font-sans text-xs text-stone-light mb-3 tracking-wider">得意メニュー</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {stylist.specialties.map((s) => (
                      <span
                        key={s}
                        className="font-sans text-xs text-accent border border-accent/30 px-3 py-1"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
