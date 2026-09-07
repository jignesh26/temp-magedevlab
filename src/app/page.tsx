import Link from "next/link";
import { Server, Database, Zap, Shield, ArrowRight } from "lucide-react";

export default function Home() {
  const techLogos = [
    { name: 'Adobe Commerce', label: 'COMMERCE ENGINE', symbol: 'AC' },
    { name: 'Magento 2', label: 'HEADLESS CORE', symbol: 'M2' },
    { name: 'Docker', label: 'CONTAINERIZATION', symbol: 'DK' },
    { name: 'Tailwind CSS', label: 'DESIGN SYSTEM', symbol: 'TW' },
    { name: 'GraphQL', label: 'API LAYER', symbol: 'GQL' },
    { name: 'Alpine.js', label: 'LIGHTWEIGHT SCRIPTING', symbol: 'ALP' },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center border-b border-border-color overflow-hidden py-16 md:py-24">
        {/* Dynamic Background Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1F242D_1px,transparent_1px),linear-gradient(to_bottom,#1F242D_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/50 border border-border-color rounded-full backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                <span className="font-mono text-[11px] tracking-widest text-gray-400">ENTERPRISE E-COMMERCE ARCHITECTURE</span>
              </div>

              <h2 className="text-base sm:text-base lg:text-base font-bold tracking-tight text-white leading-tight">
                Architectural <br/>
                Authority in <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Commerce</span>
              </h2>

              <p className="text-base text-gray-400 max-w-xl leading-relaxed">
                magedevlab engineers high-concurrency commerce engines and headless Adobe Commerce frameworks for enterprises demanding absolute reliability and scale.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-mono text-xs tracking-widest uppercase font-semibold rounded-md overflow-hidden transition-all hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Initiate Review <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>
            </div>

            <div className="relative w-full h-[400px] lg:h-[500px] flex items-center justify-center">
              {/* Glassmorphism Abstract Graphic */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 backdrop-blur-xl border border-white/10 shadow-2xl p-8 flex flex-col justify-between animate-pulse-glow">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                   <span className="font-mono text-xs text-accent tracking-widest">SYSTEM_METRICS</span>
                   <div className="flex gap-2">
                     <div className="w-2 h-2 rounded-full bg-green-400"></div>
                     <div className="w-2 h-2 rounded-full bg-green-400"></div>
                     <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                   </div>
                </div>
                <div className="flex-1 flex flex-col justify-center gap-6">
                  <div className="flex items-center gap-4 bg-black/40 p-4 rounded-lg border border-white/5">
                    <Server className="text-primary w-8 h-8" />
                    <div>
                      <div className="text-sm text-gray-400">GraphQL Layer Latency</div>
                      <div className="text-base font-bold text-white">42ms</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-black/40 p-4 rounded-lg border border-white/5">
                    <Database className="text-accent w-8 h-8" />
                    <div>
                      <div className="text-sm text-gray-400">Uptime SLA</div>
                      <div className="text-base font-bold text-white">99.99%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Tech Stack Ticker */}
      <section className="bg-black border-b border-border-color py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
             {techLogos.map((item) => (
               <div key={item.symbol} className="group flex flex-col items-center justify-center p-6 bg-[#0a0a0a] border border-border-color rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer">
                 <div className="font-mono text-base font-bold text-gray-700 group-hover:text-accent transition-colors">
                   {item.symbol}
                 </div>
                 <div className="text-sm font-semibold text-gray-300 mt-2">{item.name}</div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Architecture Features */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h3 className="text-base md:text-base font-bold">Headless Commerce & High-Concurrency Frameworks</h3>
            <p className="text-gray-400 text-base">We architect enterprise storefronts decoupled from monolithic backends using GraphQL data layers, Redis caching, and zero-weight frontend assets.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#0f1117] p-8 rounded-xl border border-border-color hover:border-primary/30 transition-colors">
              <Zap className="w-10 h-10 text-accent mb-6" />
              <h4 className="text-base font-bold text-white mb-4">Zero-Bloat Frontend</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Replace heavy JS bundle dependencies with ultra-lightweight state engines guaranteeing sub-1.2s Core Web Vitals.
              </p>
              <ul className="space-y-2 text-sm text-gray-500 font-mono">
                <li>&bull; &lt; 50KB Initial JS</li>
                <li>&bull; Instant Cart Updates</li>
                <li>&bull; 100/100 Lighthouse</li>
              </ul>
            </div>
            
            <div className="bg-[#0f1117] p-8 rounded-xl border border-border-color hover:border-primary/30 transition-colors">
              <Server className="w-10 h-10 text-primary mb-6" />
              <h4 className="text-base font-bold text-white mb-4">High-Velocity APIs</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Sub-second payload delivery via tailored GraphQL schemas. Seamless integration with enterprise ERPs (SAP, NetSuite).
              </p>
              <ul className="space-y-2 text-sm text-gray-500 font-mono">
                <li>&bull; Asynchronous Webhooks</li>
                <li>&bull; ERP Synchronisation</li>
                <li>&bull; Edge Payload Caching</li>
              </ul>
            </div>

            <div className="bg-[#0f1117] p-8 rounded-xl border border-border-color hover:border-primary/30 transition-colors">
              <Shield className="w-10 h-10 text-accent mb-6" />
              <h4 className="text-base font-bold text-white mb-4">Core Refactoring</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Eliminate technical debt and slow database transactions. We write clean, compliant Magento 2 modules.
              </p>
              <ul className="space-y-2 text-sm text-gray-500 font-mono">
                <li>&bull; Indexer Optimization</li>
                <li>&bull; Multi-Tenant Schema</li>
                <li>&bull; B2B Pricing Matrix</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
