import Link from "next/link";
import { ArrowRight, ShoppingBag, Store, MessageSquare } from "lucide-react";

export default function CaseStudiesPage() {
  const cases = [
    {
      title: 'Enterprise Magento Migration',
      description: 'Migrated a legacy eCommerce platform to Magento 2 with zero downtime and 40% performance improvement. Technologies: Magento 2, GraphQL, Redis, Elasticsearch.',
      icon: ShoppingBag,
    },
    {
      title: 'Shopify Plus Custom Build',
      description: 'Built a custom Shopify Plus store with advanced checkout extensions and multi-currency support for an international D2C brand.',
      icon: Store,
    }
  ];

  return (
    <div className="w-full bg-background min-h-screen">
      <section className="relative py-24 border-b border-border-color overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/50 border border-border-color rounded-full mb-6">
             <span className="font-mono text-[11px] tracking-widest text-gray-400">PROVEN TECHNICAL EXECUTION</span>
          </div>
          <h2 className="text-base md:text-base font-bold text-white mb-6">
            Case Studies
          </h2>
          <p className="text-base text-gray-400 leading-relaxed">
            Real engineering. Real results. Explore how we solve complex technical challenges for ambitious businesses.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cases.map((study, idx) => (
              <div key={idx} className="group p-8 rounded-xl bg-black border border-border-color hover:border-primary/50 transition-colors">
                <study.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-base font-bold text-white mb-4">{study.title}</h4>
                <p className="text-gray-400 leading-relaxed mb-6">{study.description}</p>
                <div className="flex items-center text-accent font-semibold text-sm tracking-wide">
                  VIEW ARCHITECTURE <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-primary/10 border border-primary/20 rounded-xl p-8 text-center">
            <h4 className="text-base font-bold text-white mb-4">Portfolio Notice</h4>
            <p className="text-gray-400 max-w-2xl mx-auto mb-6">We are actively building our public case study portfolio. Contact us to discuss relevant project examples.</p>
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-mono text-xs tracking-widest uppercase font-semibold rounded-md hover:bg-blue-700 transition-colors">
              Discuss Your Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
