import { useEffect, useRef, useState, type ReactNode } from 'react';

interface ParallaxProps {
  speed?: number;
  className?: string;
  children: ReactNode;
}

export default function Parallax({ speed = 0.3, className = '', children }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const center = rect.top + rect.height / 2 - window.innerHeight / 2;
        setOffset(center * speed);
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      <div style={{ transform: `translate3d(0, ${offset}px, 0)` }} className="will-change-transform">
        {children}
      </div>
    </div>
  );
}
