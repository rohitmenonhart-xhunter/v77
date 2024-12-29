import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 animate-gradient" />
      <div className="absolute inset-0 opacity-30">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full mix-blend-multiply filter blur-xl animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              background: `hsl(${Math.random() * 360}, 70%, 60%)`,
              animation: `float ${Math.random() * 10 + 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * -10}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="space-y-8">
          <h1 className="text-7xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-900 to-blue-800 animate-gradient-x tracking-tight">
            V77
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in">
            Bringing the future to present through cutting-edge AI and innovative software & hardware solutions
          </p>
          <Button 
            size="lg" 
            className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition-all duration-500"
          >
            <span className="relative z-10 flex items-center text-lg">
              Explore Our Vision 
              <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-500" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-x-0 group-hover:scale-x-100 origin-left" />
          </Button>
        </div>
      </div>
    </section>
  );
}