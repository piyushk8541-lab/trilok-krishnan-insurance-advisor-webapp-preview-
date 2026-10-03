"use client";
import { motion } from "framer-motion";

const cities = [
  "Muzaffarpur","Patna","Gaya","Darbhanga","Bhagalpur","Purnia","Begusarai","Samastipur","Vaishali","Sitamarhi","Madhubani","Chapra","Ara","Motihari","Bihar Sharif"
];

const pages = [
  { path: "/insurance-advisor-bihar", label: "Insurance Advisor Bihar", desc: "General advisor information for Bihar" },
  { path: "/car-insurance-bihar", label: "Car Insurance Bihar", desc: "Car insurance guidance" },
  { path: "/health-insurance-bihar", label: "Health Insurance Bihar", desc: "Health protection concepts" },
  { path: "/bike-insurance-bihar", label: "Bike Insurance Bihar", desc: "Two-wheeler assistance" },
  { path: "/travel-insurance-bihar", label: "Travel Insurance Bihar", desc: "Travel protection" },
  { path: "/insurance-renewal-bihar", label: "Renewal Assistance Bihar", desc: "Renewal guidance" },
  { path: "/claim-assistance-bihar", label: "Claim Assistance Bihar", desc: "Claim process help" },
  { path: "/insurance-advisor-muzaffarpur", label: "Advisor Muzaffarpur", desc: "Localized advisor page" },
];

export default function LocalSEO() {
  return (
    <section className="py-16 lg:py-20 bg-navy-50/60 border-t border-navy-100">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-navy-100 px-3 py-1 text-[11px] font-semibold tracking-[0.08em] uppercase text-navy-600 shadow-soft">Local SEO Architecture • Future Ready</div>
            <h3 className="mt-3 font-display text-[22px] lg:text-[28px] font-bold tracking-[-0.02em] text-navy-900">Built for Bihar, with localized relevance – without keyword stuffing.</h3>
            <p className="mt-2 text-[13.5px] leading-[1.6] text-navy-600/80 max-w-[560px]">Preview demonstrates SEO-ready URL structure. Each location page will eventually contain genuinely useful localized information, not spam pages.</p>
          </div>
          <div className="rounded-full bg-emerald-50 border border-emerald-200 px-4 py-2 text-[11px] font-semibold text-emerald-800">✓ Semantic HTML • Schema Ready • Core Web Vitals Optimized</div>
        </div>

        <div className="mt-8 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7">
            <div className="rounded-[20px] bg-white border border-navy-100 p-6 shadow-soft">
              <div className="text-[12px] font-semibold tracking-[0.08em] uppercase text-navy-400">Future Location Pages (Preview Architecture)</div>
              <div className="mt-4 grid sm:grid-cols-2 gap-3">
                {pages.map((p, i) => (
                  <motion.div key={p.path} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="rounded-[12px] bg-[#FCFCFD] border border-navy-100 p-3 flex items-center justify-between">
                    <div><div className="text-[12px] font-mono font-medium text-navy-800">{p.path}</div><div className="text-[11px] text-navy-500 mt-0.5">{p.desc}</div></div>
                    <span className="text-[10px] px-2 py-1 rounded-full bg-navy-900 text-white">planned</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-4 rounded-[12px] bg-amber-50 border border-amber-200 p-3 text-[11.5px] leading-[1.5] text-amber-900">Do not generate hundreds of spam location pages. Each location page should eventually contain genuinely useful localized information.</div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-[20px] bg-navy-900 text-white p-6 shadow-premium">
              <div className="text-[12px] font-semibold tracking-[0.08em] uppercase text-white/40">Target Geographic Relevance</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {cities.map((c) => (
                  <span key={c} className="text-[12px] px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-white/80 hover:bg-white/15 transition-colors cursor-default">{c}</span>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                {[
                  { k: "Clean URLs", v: "/city + service" },
                  { k: "No Stuffing", v: "Natural language" },
                  { k: "Schema", v: "LocalBusiness ready" },
                ].map((s) => (
                  <div key={s.k} className="rounded-[12px] bg-white/5 border border-white/10 p-3"><div className="text-[10px] uppercase tracking-widest text-white/40">{s.k}</div><div className="mt-1 text-[11px] font-medium text-white/80">{s.v}</div></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
