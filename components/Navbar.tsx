"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services", hasMega: true },
  { label: "Insurance", href: "#insurance" },
  { label: "Claims", href: "#claims" },
  { label: "Documents", href: "#documents" },
  { label: "FAQ", href: "#faq" },
];

const insuranceMega = [
  { title: "Motor Insurance", items: ["Car Insurance", "Bike Insurance", "Commercial Vehicle"] },
  { title: "Health & Life", items: ["Health Insurance", "Personal Accident", "Family Protection"] },
  { title: "Other", items: ["Travel Insurance", "Commercial Insurance", "Renewal & Assistance"] },
];

export default function Navbar({ onWhatsApp }: { onWhatsApp: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showMega, setShowMega] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-[60] transition-all duration-500 ${
          scrolled ? "glass shadow-soft py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-navy-800 flex items-center justify-center shadow-premium">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <div className="leading-none">
              <div className="font-display font-semibold text-[15px] tracking-[-0.02em] text-navy-800">
                TRILOK KRISHNAN
              </div>
              <div className="text-[11px] font-medium tracking-[0.14em] text-navy-400 uppercase mt-[2px]">
                Insurance Advisor
              </div>
            </div>
            <div className="hidden md:flex ml-4 pl-4 border-l border-navy-100 items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-medium text-navy-500">Advisor Portal • Bihar</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <div key={l.label} className="relative"
                onMouseEnter={() => l.hasMega && setShowMega(true)}
                onMouseLeave={() => l.hasMega && setShowMega(false)}
              >
                <a
                  href={l.href}
                  className="group flex items-center gap-1 text-[13.5px] font-[500] tracking-[-0.01em] text-navy-600 hover:text-navy-900 transition-colors"
                >
                  {l.label}
                  {l.hasMega && <ChevronDown className={`h-3.5 w-3.5 transition-transform ${showMega ? "rotate-180" : ""}`} />}
                </a>
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onWhatsApp}
              className="h-10 px-5 rounded-full bg-brand-red text-white text-[13.5px] font-semibold tracking-[-0.01em] shadow-[0_8px_20px_-8px_rgba(227,30,36,0.5)] hover:bg-brand-red-dark hover:shadow-[0_12px_28px_-8px_rgba(227,30,36,0.6)] transition-all flex items-center gap-2"
            >
              <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
              Talk on WhatsApp
            </button>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden h-10 w-10 rounded-full bg-white border border-navy-100 flex items-center justify-center">
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mega Menu */}
        <AnimatePresence>
          {showMega && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.25, ease: [0.16,1,0.3,1] }}
              className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[720px] glass rounded-[20px] shadow-premium-lg p-8 hidden lg:block"
            >
              <div className="grid grid-cols-3 gap-8">
                {insuranceMega.map((col) => (
                  <div key={col.title}>
                    <div className="text-[12px] font-semibold tracking-[0.08em] uppercase text-navy-400 mb-3">{col.title}</div>
                    <div className="space-y-2.5">
                      {col.items.map((it) => (
                        <a key={it} href="#services" className="block text-[14px] font-medium text-navy-700 hover:text-brand-red transition-colors">
                          {it}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-navy-100 flex items-center justify-between">
                <div className="text-[13px] text-navy-500">Not the official corporate website of Tata AIG General Insurance Company Limited.</div>
                <button onClick={onWhatsApp} className="text-[13px] font-semibold text-brand-red">Need guidance? →</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-navy-900/20 backdrop-blur-sm z-[65] lg:hidden" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[84%] max-w-[360px] bg-white z-[70] lg:hidden shadow-floating flex flex-col"
            >
              <div className="p-6 flex items-center justify-between border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-navy-800 flex items-center justify-center"><Shield className="h-4 w-4 text-white" /></div>
                  <div><div className="font-semibold text-[14px]">TRILOK KRISHNAN</div><div className="text-[11px] text-gray-500 uppercase tracking-widest">Advisor</div></div>
                </div>
                <button onClick={() => setIsOpen(false)} className="h-9 w-9 rounded-full bg-gray-50 flex items-center justify-center"><X className="h-4 w-4" /></button>
              </div>
              <div className="flex-1 p-6 space-y-1 overflow-auto">
                {navLinks.map((l) => (
                  <a key={l.label} href={l.href} onClick={() => setIsOpen(false)} className="flex items-center justify-between py-3.5 px-4 rounded-xl hover:bg-gray-50 text-[15px] font-medium text-navy-800">
                    {l.label}
                    <span className="text-navy-300">↗</span>
                  </a>
                ))}
              </div>
              <div className="p-6 border-t border-gray-100">
                <button onClick={() => { setIsOpen(false); onWhatsApp(); }} className="w-full h-12 rounded-full bg-brand-red text-white font-semibold flex items-center justify-center gap-2">
                  Talk on WhatsApp
                </button>
                <p className="mt-3 text-[11px] text-center text-gray-500 leading-relaxed">Independent advisor portal • Not Tata AIG corporate website</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
