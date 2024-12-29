import { Mail, Phone } from 'lucide-react';

export function Leadership() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Leadership</h2>
        <div className="flex flex-col md:flex-row gap-6 max-w-2xl mx-auto">
          <div className="flex-1 p-6 group hover:scale-105 transition-all duration-300 animate-on-scroll opacity-0 translate-y-8 rounded-xl bg-gradient-to-br from-background via-accent/5 to-accent/10 border border-accent/20">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Rohit C</h3>
              <p className="text-sm text-muted-foreground">Founder, CEO, CTO, CFO</p>
              <div className="flex items-center gap-4 pt-2">
                <a 
                  href="mailto:contactrohitmenon@gmail.com" 
                  className="text-sm flex items-center text-blue-500 hover:text-blue-600 transition-colors group/link"
                >
                  <Mail className="w-3 h-3 mr-1.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  Email
                </a>
                <a 
                  href="tel:+917550000805" 
                  className="text-sm flex items-center text-blue-500 hover:text-blue-600 transition-colors group/link"
                >
                  <Phone className="w-3 h-3 mr-1.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  Call
                </a>
              </div>
            </div>
          </div>

          <div className="flex-1 p-6 group hover:scale-105 transition-all duration-300 animate-on-scroll opacity-0 translate-y-8 rounded-xl bg-gradient-to-br from-background via-accent/5 to-accent/10 border border-accent/20">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">PremKumar</h3>
              <p className="text-sm text-muted-foreground">Co-Founder & CMO</p>
              <div className="flex items-center gap-4 pt-2">
                <a 
                  href="tel:+919789026235" 
                  className="text-sm flex items-center text-blue-500 hover:text-blue-600 transition-colors group/link"
                >
                  <Phone className="w-3 h-3 mr-1.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}