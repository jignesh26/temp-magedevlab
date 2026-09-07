import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, LayoutTemplate, Settings, Wrench, ShieldCheck, Zap, Database, Plug, LineChart, Code2, CloudCog } from "lucide-react";

// Extensive list of services offered by an IT company per platform
const serviceDetails: Record<string, { title: string; description: string; overview: string; subServices: {title: string, desc: string}[] }> = {
  "magento-development": {
    title: "Magento & Adobe Commerce",
    description: "Enterprise-grade Magento 2 architecture, custom module development, and headless implementations designed for high-concurrency peak traffic.",
    overview: "We offer end-to-end Adobe Commerce lifecycle management. From building complex B2B catalogs to headless frontend implementations, our senior engineers ensure your Magento instance is secure, scalable, and lightning-fast.",
    subServices: [
      { title: "Platform Setup & Architecture", desc: "Complete installation, server configuration, and high-availability architecture planning." },
      { title: "Version Upgrades & Migrations", desc: "Safe, zero-downtime upgrades to the latest Magento 2 versions and smooth migrations from legacy platforms." },
      { title: "Custom Module Development", desc: "Bespoke extensions built to Magento's strict coding standards to meet your unique business requirements." },
      { title: "Performance & Debugging", desc: "Deep code audits, database query optimization, and Varnish caching setups for sub-second load times." },
      { title: "Ongoing Maintenance", desc: "Proactive security patching, uptime monitoring, and continuous integration deployments." },
    ]
  },
  "shopify-development": {
    title: "Shopify Development",
    description: "Bespoke Shopify and Shopify Plus engineering. We create custom Liquid themes, private apps, and headless storefronts with Hydrogen.",
    overview: "Unlock the full potential of Shopify Plus. We don't just use out-of-the-box templates; we engineer robust technical solutions on top of Shopify's ecosystem that scale as rapidly as your brand.",
    subServices: [
      { title: "Shopify Plus Enterprise Setup", desc: "Advanced store configuration, B2B wholesale channel setups, and Shopify Scripts for complex pricing rules." },
      { title: "Custom Theme Development", desc: "Pixel-perfect, high-converting Liquid themes and headless Hydrogen react architectures." },
      { title: "Public & Private App Development", desc: "Custom Node.js and Ruby apps to extend Shopify's native functionality and connect backend systems." },
      { title: "Re-platforming & Migration", desc: "Flawless data migration of customers, orders, and products from Magento, WooCommerce, or BigCommerce." },
      { title: "Checkout Customization", desc: "Optimizing the Shopify Plus checkout experience to increase conversion rates and average order values." },
    ]
  },
  "woocommerce-development": {
    title: "WooCommerce Development",
    description: "Scalable WordPress commerce engineered for speed and stability. Build custom plugins and optimize heavy queries for sub-second performance.",
    overview: "We transform standard WordPress installations into powerful, scalable eCommerce engines by enforcing strict database management and robust custom plugin architectures.",
    subServices: [
      { title: "Store Setup & Configuration", desc: "End-to-end WooCommerce installation, optimized hosting configurations, and payment gateway setups." },
      { title: "Custom Plugin Development", desc: "Tailored WordPress plugins that extend WooCommerce core features without bloating the system." },
      { title: "Performance Optimization", desc: "Resolving slow admin panels, optimizing heavy SQL queries, and implementing advanced object caching." },
      { title: "Subscription Architectures", desc: "Complex recurring billing setups, membership portals, and digital product delivery systems." },
      { title: "Security Audits & Hardening", desc: "Comprehensive malware scanning, firewall implementation, and proactive vulnerability patching." },
    ]
  },
  "ai-development": {
    title: "AI Development & Automation",
    description: "Intelligent AI solutions and workflow automation tailored for online merchants to streamline operations and enhance customer experiences.",
    overview: "Leverage the power of Large Language Models and Machine Learning to reduce operational overhead, automate tedious tasks, and hyper-personalize the shopping experience.",
    subServices: [
      { title: "Intelligent Support Agents", desc: "Deploying custom AI chatbots that resolve tier-1 customer support queries instantly." },
      { title: "Semantic Product Search", desc: "Replacing keyword search with AI vector search so customers can find products using natural language." },
      { title: "Automated Catalog Enrichment", desc: "Using AI to automatically generate SEO-optimized product descriptions and tag images." },
      { title: "Predictive Analytics", desc: "Machine learning models that forecast inventory demand and optimize dynamic pricing." },
      { title: "Workflow Automation", desc: "Connecting internal tools with AI to automate order routing, fraud detection, and email marketing." },
    ]
  },
  "custom-development": {
    title: "Custom Development",
    description: "Bespoke web applications, merchant dashboards, and internal management tools built with modern frameworks to solve unique operational bottlenecks.",
    overview: "When off-the-shelf software falls short, we build custom solutions from the ground up using React, Next.js, Python, and Node.js.",
    subServices: [
      { title: "Bespoke Web Applications", desc: "Scalable SaaS platforms, B2B vendor portals, and interactive customer-facing web apps." },
      { title: "Legacy Code Refactoring", desc: "Modernizing outdated codebases to improve security, reduce technical debt, and increase speed." },
      { title: "Custom Merchant Dashboards", desc: "Unified interfaces that aggregate data from multiple stores, warehouses, and accounting systems." },
      { title: "Order Management Systems", desc: "Bespoke OMS builds to handle complex multi-warehouse routing and dropshipping logic." },
      { title: "Cloud Infrastructure Setup", desc: "Architecting serverless deployments on AWS and Google Cloud for infinite scalability." },
    ]
  },
  "ecommerce-integrations": {
    title: "eCommerce Integrations",
    description: "Robust, bidirectional data pipelines connecting your eCommerce storefront with ERPs, CRMs, 3PLs, PIMs, and payment gateways safely and securely.",
    overview: "We eliminate manual data entry. Our integration middleware ensures reliable, real-time data sync across your entire tech stack with guaranteed delivery and retry mechanisms.",
    subServices: [
      { title: "ERP Integrations", desc: "Seamless bidirectional syncing with SAP, Oracle NetSuite, Microsoft Dynamics, and Sage." },
      { title: "CRM Synchronization", desc: "Connecting storefronts to Salesforce, HubSpot, and Klaviyo for deep customer segmentation." },
      { title: "3PL & Fulfillment Automation", desc: "Automated order routing to third-party logistics and warehouse management systems." },
      { title: "Payment Gateway Customization", desc: "Integrating niche regional payment providers, crypto gateways, and split-payment architecture." },
      { title: "Omnichannel Retail Sync", desc: "Unifying inventory across physical Point of Sale (POS) systems and digital storefronts." },
    ]
  }
};

export function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({
    slug: slug,
  }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceDetails[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <div className="py-24 sm:py-32 border-b border-border-color bg-secondary/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:text-center">
            <h2 className="text-sm font-semibold text-accent tracking-wide uppercase">Engineering Services</h2>
            <h3 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {service.title}
            </h3>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              {service.description}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="mb-16 max-w-3xl">
            <h4 className="text-2xl font-bold text-white mb-6">Service Overview</h4>
            <p className="text-lg text-gray-400 leading-relaxed">
              {service.overview}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-3 lg:gap-x-12">
            
            {/* Detailed Sub-Services Grid */}
            <div className="lg:col-span-2">
              <h4 className="text-xl font-bold text-white mb-8 border-b border-border-color pb-4">What We Provide</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {service.subServices.map((sub, idx) => (
                  <div key={idx} className="bg-secondary/30 p-6 rounded-2xl border border-border-color hover:border-accent/50 transition-colors">
                    <h5 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" /> 
                      {sub.title}
                    </h5>
                    <p className="text-sm text-gray-400 leading-relaxed pl-7">
                      {sub.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* General IT/CTA Section */}
            <div className="flex flex-col bg-primary/10 p-8 rounded-3xl border border-primary/20 h-fit">
              <h4 className="text-2xl font-bold tracking-tight text-white mb-6">
                Engineered for Enterprise Scale
              </h4>
              <p className="text-sm leading-7 text-gray-300 mb-8">
                As a full-service technical partner, we don't just write code—we engineer scalable, secure, and highly-performant solutions. We adhere to strict coding standards, employ rigorous testing protocols, and architect infrastructures designed to scale seamlessly during your highest traffic spikes.
              </p>
              
              <div className="flex flex-col gap-4">
                <Link
                  href="/contact"
                  className="rounded-md bg-primary px-4 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  Start Your Project <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/services" className="text-center text-sm font-semibold leading-6 text-gray-400 hover:text-white transition-colors">
                  View all services
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
