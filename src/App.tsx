const APP_STORE =
  'https://apps.apple.com/il/app/minilingo/id6764285660'
const PLAY_STORE =
  'https://play.google.com/store/apps/details?id=com.sonitasv.mundoaakkoset'

const features = [
  {
    title: 'Letter cards',
    text: 'Colorful cards for every letter — tap to explore words and friendly visuals.',
    accent: '#FF6B6B',
  },
  {
    title: 'Three languages',
    text: 'Spanish, English, and Finnish in one app — switch anytime while you play.',
    accent: '#4ECDC4',
  },
  {
    title: 'Listen & learn',
    text: 'Hear pronunciation with on-device speech — simple, clear, and kid-friendly.',
    accent: '#FFE66D',
  },
  {
    title: 'Game mode',
    text: 'Find the letter, earn points, and grow with a cheerful snail companion.',
    accent: '#A78BFA',
  },
]

const steps = [
  { n: '1', title: 'Choose a language', text: 'ES · EN · FI' },
  { n: '2', title: 'Explore letters', text: 'Cards, words & audio' },
  { n: '3', title: 'Play & progress', text: 'Points, levels & badges' },
]

function StoreButtons({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 ${className}`}>
      <a
        href={APP_STORE}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-brand-dark font-display font-bold text-sm sm:text-base shadow-lg shadow-black/20 hover:scale-[1.02] active:scale-[0.98] transition-transform"
      >
        <span aria-hidden></span>
        App Store
      </a>
      <a
        href={PLAY_STORE}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-primary px-6 py-3.5 text-white font-display font-bold text-sm sm:text-base shadow-lg shadow-brand-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-transform"
      >
        Google Play
      </a>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero */}
      <header className="relative min-h-[100svh] flex flex-col justify-between bg-gradient-to-b from-night via-[#221a45] to-night-deep text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, rgba(78,205,196,0.25), transparent 40%), radial-gradient(circle at 80% 10%, rgba(255,107,107,0.22), transparent 35%), radial-gradient(circle at 50% 80%, rgba(255,230,109,0.12), transparent 40%)',
          }}
        />

        <nav className="relative z-10 flex items-center justify-between px-5 sm:px-8 pt-6 max-w-6xl mx-auto w-full">
          <div className="flex items-center gap-2.5">
            <img
              src="/Logo-3-caracol.svg"
              alt=""
              className="h-9 w-9 sm:h-10 sm:w-10"
            />
            <span className="font-display font-bold tracking-tight text-lg sm:text-xl">
              MiniLingo
            </span>
          </div>
          <a
            href="#download"
            className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white/80 hover:text-white transition-colors"
          >
            Download
          </a>
        </nav>

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-5 sm:px-8 py-12 text-center max-w-4xl mx-auto w-full">
          <img
            src="/Logo-3-caracol.svg"
            alt="MiniLingo snail"
            className="animate-float h-28 w-28 sm:h-36 sm:w-36 mb-8 drop-shadow-2xl"
          />
          <h1 className="animate-rise font-display font-extrabold text-4xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight">
            MiniLingo
          </h1>
          <p className="animate-rise-delay-1 mt-4 sm:mt-5 text-lg sm:text-2xl text-white/90 font-semibold max-w-2xl">
            Learn the alphabet through play — in Spanish, English & Finnish.
          </p>
          <p className="animate-rise-delay-2 mt-3 text-sm sm:text-base text-white/65 max-w-xl">
            Letter cards, audio pronunciation, and a cheerful game for early
            learners. No account needed.
          </p>
          <div className="animate-rise-delay-3 mt-8 sm:mt-10">
            <StoreButtons className="justify-center" />
          </div>
        </div>

        <div className="relative z-10 pb-8 text-center text-white/40 text-xs tracking-wide">
          Scroll to explore
        </div>
      </header>

      {/* What it is */}
      <section className="bg-brand-soft px-5 sm:px-8 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div>
            <p className="font-display font-bold text-brand-primary uppercase tracking-widest text-xs mb-3">
              What it is
            </p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-dark leading-tight">
              A playful first step into letters and languages.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-brand-dark/75 leading-relaxed">
              MiniLingo helps young children explore the alphabet with colorful
              cards, spoken words, and a simple find-the-letter game — in three
              languages from day one.
            </p>
          </div>
          <div className="relative rounded-[2rem] bg-gradient-to-br from-[#FFE6E6] via-white to-[#E6FFFB] p-8 sm:p-10 shadow-xl shadow-brand-dark/5">
            <div className="flex items-end justify-center gap-3 sm:gap-4">
              {['A', 'B', 'C'].map((letter, i) => (
                <div
                  key={letter}
                  className="rounded-3xl bg-white shadow-md px-5 py-6 sm:px-6 sm:py-8 text-center"
                  style={{ transform: `translateY(${i === 1 ? -12 : 0}px)` }}
                >
                  <div
                    className="font-display font-black text-3xl sm:text-4xl"
                    style={{
                      color: ['#FF6B6B', '#4ECDC4', '#F59E0B'][i],
                    }}
                  >
                    {letter}
                  </div>
                  <div className="mt-2 text-[10px] sm:text-xs font-bold text-brand-dark/50 uppercase">
                    {['Avión', 'Bird', 'Celsius'][i]}
                  </div>
                </div>
              ))}
            </div>
            <img
              src="/Logo-1-caracol.svg"
              alt=""
              className="absolute -bottom-3 -right-2 h-16 w-16 sm:h-20 sm:w-20"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white px-5 sm:px-8 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
            <p className="font-display font-bold text-brand-secondary uppercase tracking-widest text-xs mb-3">
              Features
            </p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-dark">
              Built for curious little learners
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8 sm:gap-10">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4">
                <div
                  className="mt-1 h-3 w-3 rounded-full shrink-0"
                  style={{ background: f.accent }}
                />
                <div>
                  <h3 className="font-display font-bold text-xl text-brand-dark">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-brand-dark/70 leading-relaxed">
                    {f.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-sm text-brand-dark/55">
            Progress stays on the device — no login, no ads, no cloud account.
          </p>
        </div>
      </section>

      {/* Steps infographic */}
      <section className="bg-night text-white px-5 sm:px-8 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-14">
            <p className="font-display font-bold text-brand-accent uppercase tracking-widest text-xs mb-3">
              How it works
            </p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl">
              Three simple steps
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className="rounded-[1.75rem] bg-white/5 border border-white/10 px-6 py-8 text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary font-display font-extrabold text-xl">
                  {s.n}
                </div>
                <h3 className="font-display font-bold text-xl">{s.title}</h3>
                <p className="mt-2 text-white/60 text-sm">{s.text}</p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who */}
      <section className="bg-brand-soft px-5 sm:px-8 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-dark">
            Made for families & early learning
          </h2>
          <div className="mt-10 grid sm:grid-cols-3 gap-6 text-left sm:text-center">
            {[
              {
                title: 'Kids',
                text: 'Preschool and early elementary explorers.',
              },
              {
                title: 'Parents',
                text: 'A calm, visual way to practice letters together.',
              },
              {
                title: 'Educators',
                text: 'Multilingual exposure without accounts or clutter.',
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="font-display font-bold text-lg text-brand-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-brand-dark/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        id="download"
        className="relative bg-gradient-to-b from-[#221a45] to-night-deep text-white px-5 sm:px-8 py-20 sm:py-28 text-center"
      >
        <img
          src="/Logo-3-caracol.svg"
          alt=""
          className="mx-auto h-20 w-20 sm:h-24 sm:w-24 mb-6 animate-float"
        />
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight">
          Available now
        </h2>
        <p className="mt-3 text-white/70 max-w-md mx-auto">
          Download MiniLingo on the App Store and Google Play.
        </p>
        <StoreButtons className="justify-center mt-8" />
      </section>

      <footer className="bg-night-deep text-white/50 px-5 sm:px-8 py-8 text-center text-sm">
        <p>
          © {new Date().getFullYear()} SonitaSV · MiniLingo
        </p>
        <p className="mt-2">
          <a
            href="https://sonitasv.vercel.app/privacy-policy"
            className="hover:text-white transition-colors underline-offset-2 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy
          </a>
          {' · '}
          <a
            href="mailto:sonia.toukkari@iki.fi"
            className="hover:text-white transition-colors underline-offset-2 hover:underline"
          >
            Contact
          </a>
        </p>
      </footer>
    </div>
  )
}
