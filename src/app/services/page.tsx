import Link from "next/link";
import { Code, ShoppingBag, Store, Puzzle, Brain, PlugConnected } from "lucide-react";

export const metadata = {
  title: "Services | magedevlab",
  description: "Explore our range of eCommerce engineering services.",
};

const services = [
  {
    title: "Magento & Adobe Commerce",
    description: "High-performance Magento 2 and Adobe Commerce architecture. We build custom modules, implement headless Hyvä and PWA storefronts, and resolve complex database bottlenecks.",
    icon: ShoppingBag,
    href: "/services/magento-development",
  },
  {
    title: "Shopify Development",
    description: "Bespoke Shopify and Shopify Plus engineering. We create custom Liquid and Hydrogen headless themes, develop private apps, and extend checkout flows.",
    icon: Store,
    href: "/services/shopify-development",
  },
  {
    title: "WooCommerce Development",
    description: "Scalable WordPress commerce engineered for speed and stability. We build custom plugins and optimize heavy SQL queries for sub-second performance under load.",
    icon: Puzzle,
    href: "/services/woocommerce-development",
  },
  {
    title: "AI Development & Automation",
    description: "Practical AI solutions and workflow automation tailored for online merchants. We implement intelligent customer support agents and smart semantic search.",
    icon: Brain,
    href: "/services/ai-development",
  },
  {
    title: "Custom Development",
    description: "Bespoke web applications, custom merchant dashboards, internal order management tools, and middleware built with React, Node.js, and Python.",
    icon: Code,
    href: "/services/custom-development",
  },
  {
    title: "eCommerce Integrations",
    description: "Robust, bidirectional data pipelines connecting your eCommerce storefront with ERPs, CRMs, 3PLs, PIMs, and payment gateways with zero data loss.",
    icon: PlugConnected,
    href: "/services/ecommerce-integrations",
  }
];

export default function ServicesPage() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-accent">eCommerce Engineering</h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-balance">
            Our Services
          </p>
          <p className="mt-6 text-lg/8 text-gray-400">
            magedevlab provides end-to-end eCommerce development services engineered for scale, speed, and reliability. From high-volume platform implementations to bespoke middleware and AI automations.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="flex flex-col items-start bg-secondary/30 border border-border-color p-8 rounded-2xl hover:bg-secondary/50 transition-colors">
                <div className="rounded-lg bg-primary/20 p-3 mb-6">
                  <service.icon className="h-6 w-6 text-accent" aria-hidden="true" />
                </div>
                <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-white">
                  {service.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-400">
                  <p className="flex-auto">{service.description}</p>
                  <p className="mt-6">
                    <Link href={service.href} className="text-sm font-semibold leading-6 text-accent hover:text-white transition-colors">
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
