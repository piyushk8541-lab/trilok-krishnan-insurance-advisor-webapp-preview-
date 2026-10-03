"use client";
import { motion } from "framer-motion";
import { Car, Bike, HeartPulse, Plane, Building2, ShieldAlert, RefreshCcw, FileCheck2, FolderOpen, MessageCircle, ArrowUpRight } from "lucide-react";

const services = [
  { id: "motor", icon: Car, title: "Motor Insurance", desc: "Cars, bikes & commercial vehicles coverage guidance", color: "bg-blue-50 text-blue-700", accent: "from-blue-500/10 to-blue-500/0" },
  { id: "car", icon: Car, title: "Car Insurance", desc: "Comprehensive & third-party concepts explained", color: "bg-navy-50 text-navy-700", accent: "from-navy-500/10 to-navy-500/0" },
  { id: "bike", icon: Bike, title: "Bike Insurance", desc: "Two-wheeler protection & renewal assistance", color: "bg-amber-50 text-amber-700", accent: "from-amber-500/10 to-amber-500/0" },
  { id: "health", icon: HeartPulse, title: "Health Insurance", desc: "Family health, hospitalization & cashless", color: "bg-emerald-50 text-emerald-700", accent: "from-emerald-500/10 to-emerald-500/0" },
  { id: "travel", icon: Plane, title: "Travel Insurance", desc: "Domestic & international travel protection", color: "bg-sky-50 text-sky-700", accent: "from-sky-500/10 to-sky-500/0" },
  { id: "commercial", icon: Building2, title: "Commercial Insurance", desc: "Business, property & commercial vehicle needs", color: "bg-zinc-100 text-zinc-700", accent: "from-zinc-500/10 to-zinc-500/0" },
  { id: "accident", icon: ShieldAlert, title: "Personal Accident", desc: "Accidental coverage concepts & guidance", color: "bg-red-50 text-red-700", accent: "from-red-500/10 to-red-500/0" },
  { id: "renewal", icon: RefreshCcw, title: "Insurance Renewal", desc: "Never miss renewal with advisor reminders", color: "bg-violet-50 text-violet-700", accent: "from-violet-500/10 to-violet-500/0" },
  { id: "claim", icon: FileCheck2, title: "Claim Assistance", desc: "Step-by-step claim process guidance", color: "bg-emerald-50 text-emerald-800", accent: "from-emerald-600/10 to-emerald-600/0" },
  { id: "policy", icon: FolderOpen, title: "Policy Assistance", desc: "Understanding policy wording & terms", color: "bg-navy-50 text-navy-700", accent: "from-navy-600/10 to-navy-600/0" },
  { id: "documents", icon: FolderOpen, title: "Document Guidance", desc: "Checklists for new, renewal & claims", color: "bg-amber-50 text-amber-800", accent: "from-amber-600/10 to-amber-600/0" },
  { id: "advisor", icon: MessageCircle, title: "Talk to Advisor", desc: "Direct WhatsApp communication channel", color: "bg-brand-red/10 text-brand-red", accent: "from-brand-red/15 to-brand-red/0", highlight: true },
];

export default function ServiceGrid({ onSelect }: { onSelect: (id: string) => void }) {
  return (
    <section id="services" className="relative py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-navy-50 px-3 py-1 text-[11px] font-semibold tracking-[0.08em] uppercase text-navy-600">Quick Access • App Style Dashboard</div>
            <h2 className="mt-4 font-display text-[30px] lg:text-[42px] font-bold tracking-[-0.03em] leading-[1.05] text-navy-900">
              Everything you need, <br className="hidden lg:block" />in one advisor workspace.
            </h2>
          </div>
          <p className="max-w-[420px] text-[15px] leading-[1.6] text-navy-600/80">
            No more repetitive calls. Explore, understand, prepare your documents, then connect directly with your advisor on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5">
          {services.map((s, i) => (
            <motion.button
              key={s.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.5, ease: [0.16,1,0.3,1] }}
              onClick={() => onSelect(s.id)}
              className={`group text-left relative rounded-[20px] border bg-white p-5 lg:p-6 premium-card overflow-hidden ${s.highlight ? "ring-1 ring-brand-red/20 border-brand-red/20" : "border-navy-100"}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${s.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative">
                <div className="flex items-start justify-between">
                  <div className={`h-11 w-11 rounded-[12px] flex items-center justify-center ${s.color}`}>
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center transition-all ${s.highlight ? "bg-brand-red text-white" : "bg-navy-50 text-navy-400 group-hover:bg-navy-800 group-hover:text-white"}`}>
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
                <h3 className="mt-5 font-display font-semibold text-[16px] tracking-[-0.01em] text-navy-900">{s.title}</h3>
                <p className="mt-1.5 text-[13px] leading-[1.5] text-navy-600/80 line-clamp-2">{s.desc}</p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-semibold tracking-[-0.01em] text-navy-700 group-hover:text-navy-900">
                  Explore <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </div>
              </div>
              {s.highlight && <div className="absolute top-3 right-14 rounded-full bg-brand-red px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase text-white">Priority</div>}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
