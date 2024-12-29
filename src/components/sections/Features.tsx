import { Brain, Cpu, Globe2 } from 'lucide-react';

const features = [
  {
    icon: Brain,
    color: 'blue',
    title: 'AI-First Approach',
    description: 'Leveraging cutting-edge AI technologies to solve real-world problems',
    details: [
      'Advanced Machine Learning',
      'Natural Language Processing',
      'Computer Vision Systems',
      'Predictive Analytics'
    ]
  },
  {
    icon: Cpu,
    color: 'purple',
    title: 'Hardware Innovation',
    description: 'Developing next-gen hardware solutions for tomorrow\'s challenges',
    details: [
      'IoT Integration',
      'Smart Devices',
      'Custom Chipsets',
      'Sustainable Tech'
    ]
  },
  {
    icon: Globe2,
    color: 'green',
    title: 'Global Impact',
    description: 'Creating solutions that make the world a better place',
    details: [
      'Sustainable Solutions',
      'Accessible Technology',
      'Community Focus',
      'Ethical Innovation'
    ]
  }
];

export function Features() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/30 via-background to-accent/30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group animate-on-scroll opacity-0 translate-y-8"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`relative p-8 rounded-2xl bg-gradient-to-br from-background to-accent/10 hover:shadow-2xl transition-all duration-300 overflow-hidden group-hover:scale-105`}>
                <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}-500/10 to-${feature.color}-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className={`p-4 rounded-xl bg-${feature.color}-500/10 inline-block mb-6`}>
                    <feature.icon className={`w-8 h-8 text-${feature.color}-500`} />
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground mb-6">{feature.description}</p>
                  
                  <ul className="space-y-3">
                    {feature.details.map((detail, i) => (
                      <li 
                        key={i}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-${feature.color}-500 mr-3`} />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}