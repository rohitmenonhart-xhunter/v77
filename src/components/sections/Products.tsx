import { ArrowRight, Building2, Code2, Mic, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function Products() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-6">Our Innovations</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Pioneering the future through groundbreaking software and hardware solutions
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Mockello */}
          <Card className="group relative p-6 overflow-hidden animate-on-scroll opacity-0 translate-y-8 bg-gradient-to-br from-background to-accent/10 hover:shadow-2xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-blue-500/10 mr-3">
                  <Rocket className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-2xl font-semibold">Mockello</h3>
              </div>
              <p className="text-muted-foreground mb-6 h-24">
                AI-powered one to one hr-interview training platform with integrated aptitude assessment and detailed scorecards.
                Experience the future of interview preparation.
              </p>
              <a href="https://mockello.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full group/btn relative overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Explore Platform
                    <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                </Button>
              </a>
            </div>
          </Card>

          {/* Voice IQX */}
          <Card className="group relative p-6 overflow-hidden animate-on-scroll opacity-0 translate-y-8 bg-gradient-to-br from-background to-accent/10 hover:shadow-2xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-purple-500/10 mr-3">
                  <Mic className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="text-2xl font-semibold">Voice IQX 1.2</h3>
              </div>
              <p className="text-muted-foreground mb-6 h-24">
                Advanced voice cloning technology bringing natural voice synthesis to new heights.
                Currently in closed testing phase.
              </p>
              <Button variant="outline" className="w-full group/btn relative overflow-hidden" disabled>
                <span className="relative z-10 flex items-center">
                  Coming Soon
                  <Code2 className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
              </Button>
            </div>
          </Card>

          {/* EZPark */}
          <Card className="group relative p-6 overflow-hidden animate-on-scroll opacity-0 translate-y-8 bg-gradient-to-br from-background to-accent/10 hover:shadow-2xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-green-500/10 mr-3">
                  <Building2 className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-semibold">EZPark</h3>
              </div>
              <p className="text-muted-foreground mb-6 h-24">
                Next-generation parking solutions revolutionizing urban mobility.
                Transforming the future of urban parking infrastructure.
              </p>
              <Button variant="outline" className="w-full group/btn relative overflow-hidden" disabled>
                <span className="relative z-10 flex items-center">
                  In Development
                  <Rocket className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}