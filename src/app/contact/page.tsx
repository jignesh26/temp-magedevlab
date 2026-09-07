import { Mail, Phone, Globe } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="w-full bg-background min-h-screen">
      <section className="relative py-24 border-b border-border-color overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/50 border border-border-color rounded-full mb-6">
             <span className="font-mono text-[11px] tracking-widest text-gray-400">CONTACT US</span>
          </div>
          <h2 className="text-base md:text-base font-bold text-white mb-6">
            Start Your Project
          </h2>
          <p className="text-base text-gray-400 leading-relaxed">
            Let's discuss how we can help your business grow with enterprise commerce engineering.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Form */}
            <div className="bg-black p-8 rounded-xl border border-border-color">
              <h3 className="text-base font-bold text-white mb-6">Project Inquiry Form</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <input type="text" className="w-full bg-background border border-border-color rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input type="email" className="w-full bg-background border border-border-color rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary" placeholder="you@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea rows={5} className="w-full bg-background border border-border-color rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary" placeholder="Tell us about your project requirements..."></textarea>
                </div>
                <button type="button" className="w-full px-6 py-4 bg-primary text-white font-mono text-xs tracking-widest uppercase font-semibold rounded-md hover:bg-blue-700 transition-colors">
                  Send Inquiry
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex gap-6 p-6 rounded-xl bg-black border border-border-color">
                <Mail className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h4 className="text-base font-bold text-white mb-2">Email Us</h4>
                  <p className="text-gray-400 text-sm mb-2">Send us your project scope, RFP, or general questions.</p>
                  <a href="mailto:connect@magedevlab.com" className="text-accent font-semibold hover:underline">connect@magedevlab.com</a>
                </div>
              </div>
              <div className="flex gap-6 p-6 rounded-xl bg-black border border-border-color">
                <Phone className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h4 className="text-base font-bold text-white mb-2">Call Us</h4>
                  <p className="text-gray-400 text-sm mb-2">Speak directly with our technical leadership.</p>
                  <a href="tel:+917948558291" className="text-accent font-semibold hover:underline">+91 7948558291</a>
                </div>
              </div>
              <div className="flex gap-6 p-6 rounded-xl bg-black border border-border-color">
                <Globe className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h4 className="text-base font-bold text-white mb-2">Location</h4>
                  <p className="text-gray-400 text-sm">India (Serving Global Clients)</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
