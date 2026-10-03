"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderOpen, Car, HeartPulse, Plane, FileCheck2, RefreshCcw, Check, Info } from "lucide-react";

const categories = [
  { id: "new", label: "New Policy", icon: FolderOpen, items: ["Identity proof (PAN/Aadhaar – generic)", "Address proof", "Age proof where required", "Passport size photo", "Vehicle RC for motor / medical history for health where applicable"] },
  { id: "renewal", label: "Renewal", icon: RefreshCcw, items: ["Previous policy copy", "Vehicle RC / ID proof", "No-claim documents if applicable", "Updated contact details"] },
  { id: "vehicle", label: "Vehicle Insurance", icon: Car, items: ["RC copy", "Previous insurance copy", "Driving license", "PUC where applicable", "Vehicle inspection if break-in"] },
  { id: "health", label: "Health Insurance", icon: HeartPulse, items: ["ID & address proof of all members", "Age proof", "Medical history / reports if required", "Previous health policy details"] },
  { id: "travel", label: "Travel Insurance", icon: Plane, items: ["Passport copy", "Travel dates & itinerary", "Age proof of travelers", "Visa copy where applicable"] },
  { id: "claim", label: "Claim Assistance", icon: FileCheck2, items: ["Policy copy / number", "Incident details & date", "Bills / reports / photos", "Bank details for settlement (as per insurer process)"] },
];

export default function DocumentChecklist() {
  const [active, setActive] = useState("new");
  const current = categories.find(c => c.id === active)!;

  return (
    <section id="documents" className="py-20 lg:py-28 bg-white scroll-mt-20 border-t border-navy-50">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-navy-50 px-3 py-1 text-[11px] font-semibold tracking-[0.08em] uppercase text-navy-600">Document Guidance • Interactive</div>
            <h2 className="mt-4 font-display text-[30px] lg:text-[40px] font-bold tracking-[-0.03em] leading-[1.05] text-navy-900">Know what to keep ready, before you enquire.</h2>
            <p className="mt-4 text-[15px] leading-[1.6] text-navy-600/80">Generic checklists to reduce back-and-forth. Required documents may vary depending on policy and case. Do not share sensitive originals on unsecured public forms.</p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActive(c.id)}
                  className={`text-left rounded-[14px] border p-4 flex items-center gap-3 transition-all ${active === c.id ? "bg-navy-900 border-navy-900 text-white shadow-premium" : "bg-white border-navy-100 text-navy-800 hover:border-navy-200 hover:shadow-soft"}`}
                >
                  <div className={`h-9 w-9 rounded-[10px] flex items-center justify-center ${active === c.id ? "bg-white/15 text-white" : "bg-navy-50 text-navy-700"}`}><c.icon className="h-4 w-4" /></div>
                  <div className="text-[13px] font-semibold leading-[1.2]">{c.label}</div>
                </button>
              ))}
            </div>

            <div className="mt-6 rounded-[14px] bg-amber-50 border border-amber-200 p-4 flex gap-3">
              <Info className="h-5 w-5 text-amber-700 flex-shrink-0" />
              <div className="text-[12.5px] leading-[1.6] text-amber-900">Do not request or upload sensitive documents directly through an unsecured public website in this preview. Share only via verified advisor channel.</div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-[24px] bg-[#FCFCFD] border border-navy-100 p-2 shadow-premium">
              <div className="rounded-[18px] bg-white border border-navy-100 overflow-hidden">
                <div className="h-[56px] flex items-center justify-between px-6 border-b border-navy-100 bg-navy-50/50">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-navy-800 text-white flex items-center justify-center"><current.icon className="h-4 w-4" /></div>
                    <div><div className="text-[14px] font-semibold text-navy-900">{current.label} Checklist</div><div className="text-[11px] text-navy-500">Preview • Generic placeholder</div></div>
                  </div>
                  <div className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">{current.items.length} items</div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div key={active} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3, ease: [0.16,1,0.3,1] }} className="p-6">
                    <div className="space-y-3">
                      {current.items.map((it, idx) => (
                        <motion.div initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.05 }} key={it} className="group flex items-start gap-3 rounded-[12px] border border-transparent hover:border-navy-100 hover:bg-navy-50/50 p-3 transition-colors">
                          <div className="h-6 w-6 rounded-full border border-navy-200 group-hover:bg-navy-800 group-hover:border-navy-800 group-hover:text-white flex items-center justify-center transition-colors mt-0.5">
                            <Check className="h-3.5 w-3.5" />
                          </div>
                          <div className="flex-1">
                            <div className="text-[13.5px] font-medium text-navy-800">{it}</div>
                            <div className="text-[11px] text-navy-500 mt-1">Generic requirement – may vary by policy/case</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-6 rounded-[14px] bg-navy-900 text-white p-4 flex items-center justify-between">
                      <div className="text-[12.5px]"><span className="font-semibold">Pro tip:</span> Keep photos/scans ready in one folder for faster processing.</div>
                      <div className="h-7 w-7 rounded-full bg-white/15 flex items-center justify-center text-[12px]">✦</div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
