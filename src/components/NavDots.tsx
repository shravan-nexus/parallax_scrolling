import { useEffect, useState } from 'react';

const sections = [
  { id: 'hero', label: 'Dawn' },
  { id: 'forest', label: 'Forest' },
  { id: 'ocean', label: 'Ocean' },
  { id: 'desert', label: 'Desert' },
  { id: 'cosmos', label: 'Cosmos' },
];

export default function NavDots() {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => entry.isIntersecting && setActive(id),
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
      {sections.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
          className="group flex items-center gap-3 justify-end"
        >
          <span
            className={`text-xs font-medium tracking-widest uppercase transition-all duration-300 ${
              active === id ? 'text-white opacity-100' : 'text-white/50 opacity-0 group-hover:opacity-100'
            }`}
          >
            {label}
          </span>
          <span
            className={`block rounded-full transition-all duration-300 ${
              active === id ? 'w-3 h-3 bg-white' : 'w-2 h-2 bg-white/40 group-hover:bg-white/70'
            }`}
          />
        </button>
      ))}
    </nav>
  );
}
