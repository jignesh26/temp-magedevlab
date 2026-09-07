import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Code, Menu } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LogicTenet — Architectural Precision in Enterprise Commerce",
  description: "LogicTenet specializes in high-concurrency headless Adobe Commerce / Magento 2 architectures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <header className="sticky top-0 z-50 w-full border-b border-border-color bg-background/80 backdrop-blur-md">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="p-1 rounded-md group-hover:bg-primary/10 transition-colors">
                <img src="/logo.png" alt="LogicTenet Logo" className="w-12 h-12 object-contain brightness-0 invert" />
              </div>
            </Link>
            <nav className="hidden md:flex gap-8 items-center text-sm font-medium text-gray-300">
              <Link href="/about" className="hover:text-accent transition-colors">About</Link>
              <Link href="/case-studies" className="hover:text-accent transition-colors">Case Studies</Link>
              <Link href="/contact" className="px-4 py-2 bg-primary hover:bg-blue-700 text-white rounded-md transition-colors border border-blue-500">Contact Us</Link>
            </nav>
            <button className="md:hidden text-gray-300 hover:text-white">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </header>

        <main className="min-h-screen">
          {children}
        </main>

        <footer className="border-t border-border-color bg-black py-12">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2 space-y-4">
              <span className="font-bold text-xl tracking-tight">LOGICTENET</span>
              <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
                Enterprise eCommerce Engineering. Architectural Precision.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-200">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
                <li><Link href="/case-studies" className="hover:text-accent transition-colors">Case Studies</Link></li>
                <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-200">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-accent transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border-color text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} LogicTenet. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
