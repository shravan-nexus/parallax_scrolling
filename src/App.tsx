import Parallax from '@/components/Parallax';
import Reveal from '@/components/Reveal';
import ScrollProgress from '@/components/ScrollProgress';
import NavDots from '@/components/NavDots';
import { ChevronDown, Mountain, Trees, Waves, Sun, Sparkles } from 'lucide-react';

const images = {
  mountain: 'https://images.pexels.com/photos/36836423/pexels-photo-36836423.jpeg?auto=compress&cs=tinysrgb&w=1920',
  forest: 'https://images.pexels.com/photos/9258405/pexels-photo-9258405.jpeg?auto=compress&cs=tinysrgb&w=1920',
  ocean: 'https://images.pexels.com/photos/4795197/pexels-photo-4795197.jpeg?auto=compress&cs=tinysrgb&w=1920',
  desert: 'https://images.pexels.com/photos/16656318/pexels-photo-16656318.jpeg?auto=compress&cs=tinysrgb&w=1920',
  cosmos: 'https://images.pexels.com/photos/20881655/pexels-photo-20881655.jpeg?auto=compress&cs=tinysrgb&w=1920',
};

function App() {
  return (
    <div className="bg-black text-white antialiased overflow-x-hidden">
      <ScrollProgress />
      <NavDots />

      {/* ── HERO: Misty Mountains ── */}
      <section id="hero" className="relative h-screen overflow-hidden">
        <Parallax speed={0.15} className="absolute inset-0">
          <img
            src={images.mountain}
            alt="Misty mountains at dawn"
            className="w-full h-[120%] object-cover"
          />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

        <Parallax speed={0.35} className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Mountain className="w-8 h-8 text-amber-200/90" />
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
                style={{ fontFamily: 'Georgia, serif' }}>
              The Depth of
              <span className="block bg-gradient-to-r from-amber-200 via-orange-200 to-rose-200 bg-clip-text text-transparent mt-2">
                a Single Scroll
              </span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-white/70 max-w-xl mx-auto leading-relaxed">
              Five worlds, layered in light and motion. Scroll slowly — each scene
              drifts at its own pace.
            </p>
          </div>
        </Parallax>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 animate-bounce">
          <span className="text-xs tracking-[0.3em] uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </section>

      {/* ── FOREST ── */}
      <section id="forest" className="relative min-h-screen flex items-center overflow-hidden bg-emerald-950">
        <Parallax speed={0.2} className="absolute inset-0">
          <img
            src={images.forest}
            alt="Foggy forest with sun rays"
            className="w-full h-[130%] object-cover"
          />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/80 via-emerald-950/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-emerald-950/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-xl">
            <Reveal>
              <div className="flex items-center gap-3 mb-6 text-emerald-300">
                <Trees className="w-6 h-6" />
                <span className="text-sm tracking-[0.3em] uppercase">Chapter One</span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-4xl md:text-6xl font-bold leading-tight"
                  style={{ fontFamily: 'Georgia, serif' }}>
                Where light
                <span className="block text-emerald-200">filters through</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-lg text-emerald-50/80 leading-relaxed">
                The forest breathes in layers — canopy above, mist between the trunks,
                moss beneath your feet. Each moves at its own tempo as you descend
                deeper into the green.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 flex gap-8">
                <div>
                  <div className="text-3xl font-bold text-emerald-200">3</div>
                  <div className="text-sm text-emerald-300/60 tracking-wide">Layers of canopy</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-200">12k</div>
                  <div className="text-sm text-emerald-300/60 tracking-wide">Species within</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-200">∞</div>
                  <div className="text-sm text-emerald-300/60 tracking-wide">Shades of green</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── OCEAN ── */}
      <section id="ocean" className="relative min-h-screen flex items-center overflow-hidden bg-sky-950">
        <Parallax speed={0.25} className="absolute inset-0">
          <img
            src={images.ocean}
            alt="Underwater coral reef"
            className="w-full h-[130%] object-cover"
          />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-l from-sky-950/80 via-sky-950/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-sky-950 via-transparent to-sky-950/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex justify-end">
          <div className="max-w-xl text-right">
            <Reveal>
              <div className="flex items-center gap-3 mb-6 justify-end text-cyan-300">
                <span className="text-sm tracking-[0.3em] uppercase">Chapter Two</span>
                <Waves className="w-6 h-6" />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-4xl md:text-6xl font-bold leading-tight"
                  style={{ fontFamily: 'Georgia, serif' }}>
                Beneath the
                <span className="block text-cyan-200">surface drift</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-lg text-cyan-50/80 leading-relaxed">
                Coral gardens sway with the current. Light bends as it reaches down,
                painting the reef in shifting bands of blue. The deeper you go, the
                quieter it becomes.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 flex gap-8 justify-end">
                <div>
                  <div className="text-3xl font-bold text-cyan-200">-40m</div>
                  <div className="text-sm text-cyan-300/60 tracking-wide">Reef depth</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-200">25°C</div>
                  <div className="text-sm text-cyan-300/60 tracking-wide">Water temp</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-200">800+</div>
                  <div className="text-sm text-cyan-300/60 tracking-wide">Fish species</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── DESERT ── */}
      <section id="desert" className="relative min-h-screen flex items-center overflow-hidden bg-amber-950">
        <Parallax speed={0.18} className="absolute inset-0">
          <img
            src={images.desert}
            alt="Golden desert dunes at sunset"
            className="w-full h-[130%] object-cover"
          />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-r from-amber-950/70 via-amber-950/10 to-amber-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-amber-950 via-transparent to-amber-950/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-xl">
            <Reveal>
              <div className="flex items-center gap-3 mb-6 text-amber-300">
                <Sun className="w-6 h-6" />
                <span className="text-sm tracking-[0.3em] uppercase">Chapter Three</span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-4xl md:text-6xl font-bold leading-tight"
                  style={{ fontFamily: 'Georgia, serif' }}>
                Dunes that
                <span className="block text-amber-200">shift like time</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-lg text-amber-50/80 leading-relaxed">
                Wind sculpts the sand into ridges that never hold the same shape twice.
                At sunset the dunes glow — amber, gold, rose — and every ridge casts a
                shadow that stretches toward tomorrow.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 flex gap-8">
                <div>
                  <div className="text-3xl font-bold text-amber-200">47°C</div>
                  <div className="text-sm text-amber-300/60 tracking-wide">Day high</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-amber-200">2°C</div>
                  <div className="text-sm text-amber-300/60 tracking-wide">Night low</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-amber-200">155</div>
                  <div className="text-sm text-amber-300/60 tracking-wide">Dune height (m)</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── COSMOS ── */}
      <section id="cosmos" className="relative min-h-screen flex items-center overflow-hidden bg-indigo-950">
        <Parallax speed={0.1} className="absolute inset-0">
          <img
            src={images.cosmos}
            alt="Colorful nebula in deep space"
            className="w-full h-[130%] object-cover"
          />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/60 via-indigo-950/30 to-indigo-950" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-3 mb-6 text-violet-300">
              <Sparkles className="w-6 h-6" />
              <span className="text-sm tracking-[0.3em] uppercase">Epilogue</span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-4xl md:text-7xl font-bold leading-tight"
                style={{ fontFamily: 'Georgia, serif' }}>
              And then,
              <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                everything at once
              </span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 text-lg md:text-xl text-violet-50/70 leading-relaxed max-w-2xl mx-auto">
              Every layer you scrolled through — mountain, forest, ocean, desert — is
              still there, still moving at its own speed. Depth is just the distance
              between things that never stop.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="mt-12 px-8 py-3 rounded-full border border-violet-300/40 text-violet-100 hover:bg-violet-300/10 hover:border-violet-300/70 transition-all duration-300 text-sm tracking-widest uppercase"
            >
              Back to the beginning
            </button>
          </Reveal>
        </div>

        {/* Twinkle stars */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 40 }).map((_, i) => (
            <span
              key={i}
              className="absolute rounded-full bg-white animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${1 + Math.random() * 2}px`,
                height: `${1 + Math.random() * 2}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
