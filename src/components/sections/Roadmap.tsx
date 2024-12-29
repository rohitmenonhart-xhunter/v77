import { Circle } from 'lucide-react';

const roadmapItems = [
  {
    year: '2025',
    quarter: 'Q1',
    title: 'Mockello Launch',
    description: 'Revolutionary AI interview platform goes live',
    status: 'current'
  },
  {
    year: '2025',
    quarter: 'Q2',
    title: 'Voice IQX 1.2',
    description: 'Advanced voice cloning technology release',
    status: 'upcoming'
  },
  {
    year: '2025',
    quarter: 'Q3',
    title: 'EZPark Beta',
    description: 'Smart parking solution pilot program',
    status: 'upcoming'
  },
  {
    year: '2025',
    quarter: 'Q4',
    title: 'Hardware Innovation',
    description: 'Next-gen hardware product line announcement',
    status: 'planned'
  }
];

export function Roadmap() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/20 to-background" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16">Innovation Roadmap</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-neutral-950 via-neutral-800 to-neutral-950" />
          
          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } animate-on-scroll opacity-0 translate-y-8`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <div className="p-6 group hover:scale-105 transition-all duration-300 rounded-xl bg-gradient-to-br from-background via-accent/5 to-accent/10 border border-accent/20 hover:shadow-xl">
                    <div className="space-y-2">
                      <div className="text-sm font-semibold text-blue-900">
                        {item.year} · {item.quarter}
                      </div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <Circle 
                    className={`w-4 h-4 ${
                      item.status === 'current' 
                        ? 'text-blue-900 fill-purple-900' 
                        : item.status === 'upcoming'
                        ? 'text-purple-500'
                        : 'text-neutral-500'
                    }`}
                  />
                </div>
                
                <div className="w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}