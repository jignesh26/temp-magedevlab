import { Users, Database, Globe, Rocket, Shield, MessageSquare, Briefcase } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { title: 'Years of Engineering', amount: '10+' },
    { title: 'Platforms', amount: 'Magento' },
    { title: 'Client Satisfaction', amount: '100%' },
    { title: 'Markets', amount: 'USA/UK/EU/AU' },
  ];

  return (
    <div className="w-full bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 border-b border-border-color overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Senior eCommerce <span className="text-accent">Engineering Partners</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            LogicTenet was built on a simple premise: complex technical challenges require direct senior engineering leadership, not layers of account managers.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black border-b border-border-color">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center p-6 bg-background rounded-lg border border-border-color">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.amount}</div>
                <div className="text-sm text-gray-400 font-mono uppercase">{stat.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Expertise Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Core Engineering Expertise</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">From complex platform re-platforming to headless architecture, every project is engineered directly by a senior technical architect.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-6 p-6 rounded-xl bg-black border border-border-color hover:border-primary/50 transition-colors">
              <Database className="w-10 h-10 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Platform Migration</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Expertise in migrating high-volume catalogs, transaction history, and customer records across Magento without losing SEO rankings or operational uptime.</p>
              </div>
            </div>
            <div className="flex gap-6 p-6 rounded-xl bg-black border border-border-color hover:border-primary/50 transition-colors">
              <Briefcase className="w-10 h-10 text-accent flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Custom Headless Solutions</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Engineering modern decoupled storefronts using Next.js and React on top of robust eCommerce backends for sub-second page loads and flexible UX.</p>
              </div>
            </div>
            <div className="flex gap-6 p-6 rounded-xl bg-black border border-border-color hover:border-primary/50 transition-colors">
              <Globe className="w-10 h-10 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">API & ERP Integrations</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Connecting eCommerce engines to ERPs, CRMs, warehouse management systems, and custom third-party services using performant REST and GraphQL APIs.</p>
              </div>
            </div>
            <div className="flex gap-6 p-6 rounded-xl bg-black border border-border-color hover:border-primary/50 transition-colors">
              <Rocket className="w-10 h-10 text-accent flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Performance & CRO Auditing</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Deep architectural audits into database bottlenecks, caching layers, and Core Web Vitals to elevate checkout speed, stability, and conversion rates.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
