import { Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="w-full bg-background min-h-[80vh] flex flex-col">
      <section className="relative py-24 border-b border-border-color overflow-hidden flex-shrink-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/50 border border-border-color rounded-full mb-6">
             <span className="font-mono text-[11px] tracking-widest text-gray-400">CONTACT US</span>
          </div>
          <h2 className="text-base md:text-base font-bold text-white mb-6">
            Start Your Project
          </h2>
          <p className="text-base text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Let's discuss how we can help your business grow with enterprise commerce engineering. Send us your project scope, RFP, or general questions, and our technical leadership will get back to you promptly.
          </p>
        </div>
      </section>

      <section className="flex-1 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-black p-10 rounded-2xl border border-border-color shadow-2xl flex flex-col items-center text-center hover:border-primary/50 transition-colors">
          <div className="bg-primary/10 p-4 rounded-full mb-6">
            <Mail className="w-10 h-10 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Email Us</h3>
          <p className="text-gray-400 text-sm mb-8">
            We actively monitor this inbox and strive to reply to all business inquiries within 24 hours.
          </p>
          <a 
            href="mailto:connect@magedevlab.com" 
            className="w-full px-6 py-4 bg-primary text-white font-mono text-sm tracking-widest uppercase font-semibold rounded-md hover:bg-blue-700 transition-colors shadow-lg shadow-primary/25"
          >
            connect@magedevlab.com
          </a>
        </div>
      </section>
    </div>
  );
}
