"use client";
import { useState, useMemo } from "react";
import { Search, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const searchIndex = [
  { term: "car insurance", section: "Motor Insurance", desc: "Coverage concepts, documents, renewal", id: "motor" },
  { term: "bike insurance", section: "Motor Insurance", desc: "Two-wheeler protection", id: "motor" },
  { term: "health insurance", section: "Health Insurance", desc: "Family protection & hospitalization", id: "health" },
  { term: "travel insurance", section: "Travel Insurance", desc: "Domestic & international", id: "travel" },
  { term: "commercial insurance", section: "Commercial", desc: "Business protection", id: "commercial" },
  { term: "claim assistance", section: "Claims", desc: "Step-by-step claim guidance", id: "claims" },
  { term: "renewal", section: "Renewal", desc: "Policy renewal process", id: "documents" },
  { term: "documents", section: "Documents", desc: "Checklist for all insurance types", id: "documents" },
  { term: "personal accident", section: "Insurance", desc: "Accidental coverage", id: "services" },
  { term: "policy information", section: "Policy", desc: "Understanding policy terms", id: "services" },
];

export default function SearchBar({ onNavigate }: { onNavigate: (id: string) => void }) {
  const [q, setQ] = useState("");
  const [focused, setFocused] = useState(false);

  const results = useMemo(() => {
    if (!q.trim()) return [];
    const lower = q.toLowerCase();
    return searchIndex.filter(i => i.term.includes(lower) || i.section.toLowerCase().includes(lower)).slice(0, 6);
  }, [q]);

  return (
    <div className="relative mx-auto max-w-[1280px] px-6 lg:px-8 -mt-6 z-20">
      <div className={`mx-auto max-w-[760px] rounded-[20px] border bg-white shadow-premium transition-all ${focused ? "ring-2 ring-navy-900/10 border-navy-200 shadow-premium-lg" : "border-navy-100"}`}>
        <div className="flex items-center gap-3 px-5 h-[56px]">
          <div className="h-9 w-9 rounded-full bg-navy-50 flex items-center justify-center"><Search className="h-4 w-4 text-navy-600" /></div>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setTimeout(() => setFocused(false), 200)}
            placeholder="Search insurance information... (e.g. car insurance, claim, renewal, documents)"
            className="flex-1 bg-transparent outline-none text-[15px] placeholder:text-navy-400 font-medium"
          />
          {q && <button onClick={() => setQ("")} className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center"><X className="h-4 w-4" /></button>}
          <div className="hidden sm:flex items-center gap-1.5 rounded-full bg-navy-50 px-2.5 py-1 text-[10px] font-semibold tracking-widest uppercase text-navy-500"><Sparkles className="h-3 w-3" /> App Search</div>
        </div>

        <AnimatePresence>
          {focused && results.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 4 }} className="border-t border-gray-100 p-2">
              {results.map((r) => (
                <button key={r.term} onClick={() => { onNavigate(r.id); setQ(""); }} className="w-full text-left flex items-center justify-between rounded-[12px] px-4 py-3 hover:bg-navy-50 transition-colors">
                  <div><div className="text-[14px] font-semibold text-navy-900">{r.term}</div><div className="text-[12px] text-navy-500">{r.desc}</div></div>
                  <div className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white border border-navy-100 text-navy-600">{r.section}</div>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
