import { useEffect, useRef } from 'react';
import { Hero } from '@/components/sections/Hero';
import { Vision } from '@/components/sections/Vision';
import { Products } from '@/components/sections/Products';
import { Features } from '@/components/sections/Features';
import { Roadmap } from '@/components/sections/Roadmap';
import { Leadership } from '@/components/sections/Leadership';

function App() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent">
      <Hero />
      <Vision />
      <Products />
      <Features />
      <Roadmap />
      <Leadership />
    </div>
  );
}

export default App;