"use client";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowUpRight, Sparkles, Check } from "lucide-react";

export default function Hero({ onPrimary, onSecondary }: { onPrimary: () => void; onSecondary: () => void }) {
  return (
    <section id="home" className="relative overflow-hidden bg-[#FCFCFD] pt-[88px] lg:pt-[112px]">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-[30%] -right-[20%] h-[80%] w-[70%] rounded-full bg-gradient-to-br from-navy-100/60 to-navy-50/20 blur-[80px]" />
        <div className="absolute top-[20%] -left-[20%] h-[60%] w-[50%] rounded-full bg-gradient-to-br from-brand-red/5 to-transparent blur-[60px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#0E1E3A08_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-8 items-center">
          {/* Left */}
          <div className="py-8 lg:py-16">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 rounded-full border border-navy-100 bg-white px-3.5 py-1.5 shadow-soft">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-navy-800"><ShieldCheck className="h-3 w-3 text-white" /></span>
              <span className="text-[11.5px] font-semibold tracking-[0.04em] text-navy-700">INDEPENDENT ADVISOR PORTAL • ASSOCIATED WITH TATA AIG ADVISOR NETWORK</span>
              <span className="hidden sm:inline-flex h-5 items-center rounded-full bg-emerald-50 px-2 text-[10px] font-semibold text-emerald-700">Verified Advisor</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 font-display text-[40px] sm:text-[48px] lg:text-[64px] font-[700] leading-[0.95] tracking-[-0.04em] text-navy-900 text-balance"
            >
              Insurance Made Simple.
              <span className="block mt-1 bg-gradient-to-r from-navy-800 to-navy-500 bg-clip-text text-transparent">Guidance You Can Trust.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-5 max-w-[560px] text-[16px] lg:text-[18px] leading-[1.6] text-navy-600/80 font-[400]"
            >
              Explore insurance solutions, understand the process, prepare your documents and connect directly with your insurance advisor. Built as your digital office for clarity, not confusion.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="mt-8 flex flex-wrap items-center gap-3">
              <button onClick={onPrimary} className="group relative h-[52px] px-7 rounded-full bg-navy-800 text-white text-[15px] font-semibold tracking-[-0.01em] shadow-premium hover:bg-navy-700 transition-all flex items-center gap-3">
                <span className="relative z-10 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  Talk to Advisor on WhatsApp
                </span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </button>
              <button onClick={onSecondary} className="h-[52px] px-7 rounded-full bg-white border border-navy-100 text-navy-800 text-[15px] font-semibold shadow-soft hover:shadow-premium hover:border-navy-200 transition-all">
                Explore Insurance Services
              </button>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-8 flex flex-wrap gap-6">
              {[
                { k: "Clear Information", v: "No jargon" },
                { k: "Direct WhatsApp", v: "Fast response" },
                { k: "Document Guidance", v: "Step-by-step" },
              ].map((it) => (
                <div key={it.k} className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-navy-50 flex items-center justify-center"><Check className="h-3.5 w-3.5 text-navy-700" /></div>
                  <div><div className="text-[13px] font-semibold text-navy-800 leading-none">{it.k}</div><div className="text-[11px] text-navy-500 mt-1">{it.v}</div></div>
                </div>
              ))}
            </motion.div>

            {/* Advisor Identity Card - inline */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-10 flex items-center gap-4 rounded-[16px] border border-navy-100 bg-white p-4 shadow-soft max-w-[420px]">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-navy-800 to-navy-600 flex items-center justify-center text-white font-display font-bold text-[16px]">TK</div>
              <div className="flex-1">
                <div className="text-[13px] font-semibold tracking-[-0.01em] text-navy-900">TRILOK KRISHNAN</div>
                <div className="text-[12px] text-navy-500">Insurance Advisor • Tata AIG Advisor Network</div>
              </div>
              <div className="h-8 px-3 rounded-full bg-navy-50 flex items-center gap-1.5 text-[11px] font-semibold text-navy-700">
                <Sparkles className="h-3 w-3" /> Preview
              </div>
            </motion.div>
          </div>

          {/* Right Visual */}
          <div className="relative lg:h-[680px] flex items-center">
            <motion.div initial={{ opacity: 0, scale: 0.96, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.16,1,0.3,1] }} className="relative w-full">
              {/* Main Card Composition */}
              <div className="relative mx-auto max-w-[440px]">
                {/* Background card stack */}
                <div className="absolute inset-0 translate-y-3 rotate-[-3deg] rounded-[28px] bg-navy-100/70" />
                <div className="absolute inset-0 translate-y-1.5 rotate-[-1.5deg] rounded-[28px] bg-white border border-navy-100 shadow-soft" />
                
                {/* Main premium visual */}
                <div className="relative rounded-[28px] bg-white border border-navy-100 shadow-premium-lg overflow-hidden">
                  {/* Top bar */}
                  <div className="h-[56px] flex items-center justify-between px-6 border-b border-gray-100 bg-gradient-to-r from-white to-navy-50/50">
                    <div className="flex items-center gap-2">
                      <div className="h-2.5 w-2.5 rounded-full bg-brand-red" />
                      <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                      <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <div className="text-[11px] font-medium tracking-widest uppercase text-navy-400">Advisor Workspace</div>
                    <div className="h-6 w-6 rounded-full bg-navy-800 flex items-center justify-center text-[10px] text-white font-bold">TK</div>
                  </div>

                  {/* Family illustration area */}
                  <div className="relative bg-gradient-to-br from-navy-50 via-white to-navy-50/30 p-6">
                    <div className="rounded-[20px] bg-gradient-to-br from-navy-800 to-navy-600 p-[1px]">
                      <div className="rounded-[19px] bg-white p-5">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="text-[12px] font-semibold tracking-[0.08em] uppercase text-navy-400">Protected Family</div>
                            <div className="mt-1 font-display text-[18px] font-semibold tracking-[-0.02em] text-navy-900">Comprehensive Coverage Overview</div>
                          </div>
                          <div className="h-10 w-10 rounded-full bg-emerald-50 flex items-center justify-center"><ShieldCheck className="h-5 w-5 text-emerald-600" /></div>
                        </div>
                        <div className="mt-5 grid grid-cols-3 gap-3">
                          {[
                            { label: "Motor", value: "2 Vehicles", color: "bg-blue-50 text-blue-700" },
                            { label: "Health", value: "Family of 4", color: "bg-emerald-50 text-emerald-700" },
                            { label: "Travel", value: "Annual Plan", color: "bg-amber-50 text-amber-700" },
                          ].map((c) => (
                            <div key={c.label} className={`rounded-xl p-3 ${c.color}`}>
                              <div className="text-[10px] font-semibold uppercase tracking-widest opacity-70">{c.label}</div>
                              <div className="mt-1 text-[12px] font-semibold">{c.value}</div>
                            </div>
                          ))}
                        </div>
                        {/* Fake family image placeholder with premium styling */}
                        <div className="mt-5 rounded-[14px] bg-gradient-to-br from-navy-50 to-white border border-navy-100 p-4 flex items-center gap-4">
                          <div className="flex -space-x-2">
                            {["#0E1E3A","#1a365d","#2d4a7a","#E31E24"].map((col, i) => (
                              <div key={i} className="h-9 w-9 rounded-full border-2 border-white flex items-center justify-center text-[11px] font-bold text-white" style={{ background: col }}>{["P","M","C","S"][i]}</div>
                            ))}
                          </div>
                          <div className="flex-1">
                            <div className="h-2 w-24 rounded-full bg-navy-100" />
                            <div className="mt-2 h-2 w-16 rounded-full bg-navy-50" />
                          </div>
                          <div className="h-8 px-3 rounded-full bg-navy-800 text-white text-[11px] font-semibold flex items-center">Verified</div>
                        </div>
                      </div>
                    </div>

                    {/* Floating UI overlays */}
                    <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute -right-4 top-[40%] rounded-[14px] bg-white border border-navy-100 shadow-premium p-3 flex items-center gap-2.5">
                      <div className="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center"><Check className="h-4 w-4 text-white" /></div>
                      <div><div className="text-[11px] font-semibold text-navy-900">Claim Assistance</div><div className="text-[10px] text-navy-500">Guided • Fast</div></div>
                    </motion.div>

                    <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute -left-6 bottom-[18%] rounded-[14px] bg-navy-800 text-white shadow-floating p-3 flex items-center gap-2.5">
                      <div className="h-8 w-8 rounded-full bg-white/15 flex items-center justify-center">📄</div>
                      <div><div className="text-[11px] font-semibold">Document Ready</div><div className="text-[10px] text-white/60">Checklist • 6 items</div></div>
                    </motion.div>
                  </div>

                  <div className="p-4 bg-navy-50/60 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[11px] text-navy-500"><div className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Coverage and terms depend on selected policy</div>
                    <div className="text-[11px] font-semibold text-navy-700">Secure • Private</div>
                  </div>
                </div>
              </div>

              {/* Bottom stats */}
              <div className="mt-6 grid grid-cols-3 gap-3 max-w-[440px] mx-auto">
                {[
                  { k: "Bihar Focus", v: "15+ Cities" },
                  { k: "Response", v: "WhatsApp First" },
                  { k: "Support", v: "Renewal • Claims" },
                ].map((s) => (
                  <div key={s.k} className="rounded-[14px] bg-white border border-navy-100 p-3 text-center shadow-soft">
                    <div className="text-[11px] font-medium text-navy-400 uppercase tracking-widest">{s.k}</div>
                    <div className="mt-1 text-[12px] font-semibold text-navy-800">{s.v}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
