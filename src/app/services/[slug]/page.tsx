import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight } from "lucide-react";

// The list of services we offer
const serviceDetails: Record<string, { title: string; description: string; features: string[] }> = {
  "magento-development": {
    title: "Magento & Adobe Commerce",
    description: "Enterprise-grade Magento 2 architecture, custom module development, and headless implementations designed for high-concurrency peak traffic.",
    features: [
      "Headless Architecture (PWA Studio, Vue Storefront)",
      "Custom Extension & Module Development",
      "Performance Optimization & Database Tuning",
      "Seamless Platform Migrations without Data Loss",
      "Ongoing Maintenance & Security Patching"
    ]
  },
  "shopify-development": {
    title: "Shopify Development",
    description: "Bespoke Shopify and Shopify Plus engineering. We create custom Liquid themes, private apps, and headless storefronts with Hydrogen.",
    features: [
      "Custom Theme Design & Liquid Development",
      "Shopify Plus Enterprise Features",
      "Custom Public & Private App Development",
      "Headless Shopify with Hydrogen & React",
      "Checkout Customization & Optimization"
    ]
  },
  "woocommerce-development": {
    title: "WooCommerce Development",
    description: "Scalable WordPress commerce engineered for speed and stability. Build custom plugins and optimize heavy queries for sub-second performance.",
    features: [
      "Custom Plugin & Extension Development",
      "High-Performance Theme Engineering",
      "Advanced Database Query Optimization",
      "Subscription & Membership Architecture",
      "Secure Payment Gateway Integrations"
    ]
  },
  "ai-development": {
    title: "AI Development & Automation",
    description: "Intelligent AI solutions and workflow automation tailored for online merchants to streamline operations and enhance customer experiences.",
    features: [
      "Intelligent Customer Support Agents",
      "Semantic Search & Product Discovery",
      "Automated Catalog Enrichment",
      "Dynamic Pricing Algorithms",
      "Predictive Inventory & Analytics"
    ]
  },
  "custom-development": {
    title: "Custom Development",
    description: "Bespoke web applications, merchant dashboards, and internal management tools built with modern frameworks to solve unique operational bottlenecks.",
    features: [
      "React, Next.js, and Node.js Architecture",
      "Custom Merchant & Vendor Dashboards",
      "Internal Order Management Systems",
      "Legacy Codebase Refactoring",
      "Cloud-Native Serverless Deployments"
    ]
  },
  "ecommerce-integrations": {
    title: "eCommerce Integrations",
    description: "Robust, bidirectional data pipelines connecting your eCommerce storefront with ERPs, CRMs, 3PLs, PIMs, and payment gateways safely and securely.",
    features: [
      "ERP Integrations (SAP, NetSuite, Dynamics)",
      "CRM Connections (Salesforce, HubSpot)",
      "3PL & Warehouse Management Systems",
      "Custom Middleware & Data Pipelines",
      "Idempotent API Request Handling"
    ]
  }
};

export function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({
    slug: slug,
  }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = serviceDetails[params.slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="mx-auto max-w-3xl lg:text-center">
          <h2 className="text-sm font-semibold text-accent tracking-wide uppercase">Service Overview</h2>
          <h3 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {service.title}
          </h3>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            {service.description}
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-12">
            
            {/* Features List */}
            <div className="bg-secondary/20 p-10 rounded-3xl border border-border-color">
              <h4 className="text-xl font-semibold text-white mb-8">What We Provide</h4>
              <dl className="space-y-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-200">
                      <CheckCircle2 className="absolute left-1 top-1 h-5 w-5 text-accent" aria-hidden="true" />
                    </dt>
                    <dd className="inline text-gray-400">{feature}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* General IT/CTA Section */}
            <div className="flex flex-col justify-center">
              <h4 className="text-2xl font-bold tracking-tight text-white sm:text-3xl mb-6">
                Engineered for Enterprise Scale
              </h4>
              <p className="text-base leading-7 text-gray-400 mb-8">
                As a full-service technical partner, we don't just write code—we engineer scalable, secure, and highly-performant solutions. We adhere to strict coding standards, employ rigorous testing protocols, and architect infrastructures designed to scale seamlessly during your highest traffic spikes.
              </p>
              
              <div className="flex items-center gap-x-6">
                <Link
                  href="/contact"
                  className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors flex items-center gap-2"
                >
                  Start Your Project <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/services" className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors">
                  View all services <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
