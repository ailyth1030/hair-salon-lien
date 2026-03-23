'use client'

import { useState } from 'react'

const menuOptions = [
  'カット',
  'カラー',
  'パーマ',
  'トリートメント',
  'ヘッドスパ',
  'カット＋カラー',
  'カット＋パーマ',
  'カット＋トリートメント',
  'その他',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // デモ用：実際の送信処理はなし
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-32 md:py-40 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* セクションヘッダー */}
        <div className="text-center mb-20 animate-on-scroll">
          <span className="font-garamond text-accent text-sm tracking-widest3 uppercase section-label">
            Reservation
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-stone-primary mt-6">
            ご予約・お問い合わせ
          </h2>
          <p className="font-sans font-light text-stone-secondary text-sm mt-4 leading-relaxed">
            お電話・LINEでのご予約、またはフォームよりお気軽にご連絡ください。
          </p>
        </div>

        {/* 予約方法カード */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20 animate-on-scroll">
          {/* 電話予約 */}
          <div className="bg-beige p-10 text-center hover-lift">
            <div className="w-14 h-14 flex items-center justify-center border border-accent/30 text-accent mx-auto mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <p className="font-garamond text-xs text-accent tracking-widest uppercase mb-3">
              Phone Reservation
            </p>
            <a
              href="tel:0312345678"
              className="font-garamond text-4xl text-stone-primary hover:text-accent transition-colors duration-300 block mb-3"
            >
              03-1234-5678
            </a>
            <p className="font-sans text-xs text-stone-light leading-relaxed">
              受付時間：営業時間内<br />
              月・火・木・金 10:00〜20:00<br />
              土・日・祝 9:00〜19:00
            </p>
          </div>

          {/* LINE予約 */}
          <div className="bg-[#06C755] p-10 text-center text-white hover-lift">
            <div className="w-14 h-14 flex items-center justify-center border border-white/30 mx-auto mb-6">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.003 2c-5.523 0-10 3.979-10 8.887 0 4.922 4.477 8.887 10 8.887.324 0 .646-.011.965-.032l.162-.011 3.866 2.143-.493-2.952-.014-.076.073-.062C19.396 17.258 22 13.328 22 10.887 22 5.979 17.526 2 12.003 2zm0 1.5c4.69 0 8.5 3.317 8.5 7.387 0 2.082-2.196 5.62-4.856 7.275l-.43.264.218 1.308-1.886-1.045-.388.033c-.382.033-.767.05-1.155.05-4.69 0-8.5-3.317-8.5-7.387S7.313 3.5 12.003 3.5z" />
              </svg>
            </div>
            <p className="font-garamond text-xs text-white/70 tracking-widest uppercase mb-3">
              LINE Reservation
            </p>
            <a
              href="#"
              className="font-serif text-2xl font-semibold text-white block mb-3 hover:text-white/80 transition-colors duration-300"
            >
              LINE で予約
            </a>
            <p className="font-sans text-xs text-white/70 leading-relaxed">
              LINEアカウントで<br />
              24時間いつでもご予約・ご相談可能です
            </p>
            <a
              href="#"
              className="mt-6 inline-block font-sans text-xs tracking-widest uppercase border border-white/40 px-8 py-2.5 text-white hover:bg-white/20 transition-colors duration-300"
              aria-label="LINE公式アカウントを追加する"
            >
              友だち追加はこちら
            </a>
          </div>
        </div>

        {/* お問い合わせフォーム */}
        <div className="animate-on-scroll">
          <div className="text-center mb-12">
            <h3 className="font-serif text-xl font-semibold text-stone-primary">
              メールフォームからのお問い合わせ
            </h3>
            <div className="w-12 h-px bg-accent mx-auto mt-4" />
          </div>

          {submitted ? (
            <div className="text-center py-16 bg-beige">
              <div className="w-16 h-16 flex items-center justify-center border-2 border-accent rounded-full mx-auto mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="font-serif text-xl text-stone-primary mb-3">送信が完了しました</h4>
              <p className="font-sans font-light text-stone-secondary text-sm">
                お問い合わせありがとうございます。<br />
                2営業日以内にご連絡いたします。
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* お名前 */}
                <div>
                  <label htmlFor="name" className="block font-sans text-xs text-stone-secondary tracking-wider mb-2">
                    お名前
                    <span className="text-accent ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="山田 花子"
                    className="w-full font-sans text-sm bg-beige border border-transparent px-4 py-3.5 placeholder:text-stone-light/60 text-stone-primary transition-all duration-300"
                  />
                </div>

                {/* 電話番号 */}
                <div>
                  <label htmlFor="tel" className="block font-sans text-xs text-stone-secondary tracking-wider mb-2">
                    電話番号
                  </label>
                  <input
                    type="tel"
                    id="tel"
                    name="tel"
                    placeholder="090-0000-0000"
                    className="w-full font-sans text-sm bg-beige border border-transparent px-4 py-3.5 placeholder:text-stone-light/60 text-stone-primary transition-all duration-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* 希望日時 */}
                <div>
                  <label htmlFor="datetime" className="block font-sans text-xs text-stone-secondary tracking-wider mb-2">
                    ご希望日時
                    <span className="text-accent ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    id="datetime"
                    name="datetime"
                    required
                    placeholder="例：4月10日（水）13:00〜"
                    className="w-full font-sans text-sm bg-beige border border-transparent px-4 py-3.5 placeholder:text-stone-light/60 text-stone-primary transition-all duration-300"
                  />
                </div>

                {/* 希望メニュー */}
                <div>
                  <label htmlFor="menu" className="block font-sans text-xs text-stone-secondary tracking-wider mb-2">
                    ご希望メニュー
                    <span className="text-accent ml-1">*</span>
                  </label>
                  <select
                    id="menu"
                    name="menu"
                    required
                    defaultValue=""
                    className="w-full font-sans text-sm bg-beige border border-transparent px-4 py-3.5 text-stone-primary transition-all duration-300 appearance-none cursor-pointer"
                  >
                    <option value="" disabled>選択してください</option>
                    {menuOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* メッセージ */}
              <div>
                <label htmlFor="message" className="block font-sans text-xs text-stone-secondary tracking-wider mb-2">
                  ご要望・メッセージ
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="ご質問・ご要望などがあればお気軽にご記入ください。"
                  className="w-full font-sans text-sm bg-beige border border-transparent px-4 py-3.5 placeholder:text-stone-light/60 text-stone-primary transition-all duration-300 resize-none"
                />
              </div>

              {/* プライバシーポリシー */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacy"
                  required
                  className="mt-0.5 w-4 h-4 accent-accent cursor-pointer flex-shrink-0"
                />
                <label htmlFor="privacy" className="font-sans text-xs text-stone-secondary leading-relaxed cursor-pointer">
                  <a href="#" className="text-accent underline hover:no-underline">プライバシーポリシー</a>に同意の上、送信します。
                </label>
              </div>

              {/* 送信ボタン */}
              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="font-sans text-sm tracking-widest uppercase px-16 py-4 bg-accent text-white hover:bg-accent-dark transition-colors duration-300 group"
                >
                  <span className="mr-2">送 信 す る</span>
                  <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
