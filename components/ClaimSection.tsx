"use client";
import { motion } from "framer-motion";
import { MessageCircle, FileText, ClipboardCheck, LifeBuoy, Activity } from "lucide-react";

const steps = [
  { id: "01", title: "Inform Advisor", desc: "Share incident details via WhatsApp. Quick acknowledgement and initial guidance.", icon: MessageCircle },
  { id: "02", title: "Share Required Details", desc: "Policy number, incident date, location and basic description.", icon: FileText },
  { id: "03", title: "Document Guidance", desc: "Get checklist specific to your case – motor, health, travel or commercial.", icon: ClipboardCheck },
  { id: "04", title: "Claim Process Assistance", desc: "Assistance in understanding forms, submission flow and insurer coordination.", icon: LifeBuoy },
  { id: "05", title: "Track / Follow Up", desc: "Follow-up guidance and status check assistance till closure.", icon: Activity },
];

export default function ClaimSection({ onWhatsApp }: { onWhatsApp: (msg: string) => void }) {
  return (
    <section id="claims" className="py-20 lg:py-28 bg-navy-900 text-white relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0">
        <div className="absolute -top-[30%] left-[20%] h-[80%] w-[60%] rounded-full bg-white/5 blur-[80px]" />
        <div className="absolute bottom-0 right-0 h-[50%] w-[40%] rounded-full bg-brand-red/10 blur-[60px]" />
      </div>
      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-3 py-1 text-[11px] font-semibold tracking-[0.08em] uppercase">Claim Assistance • Most Useful</div>
            <h2 className="mt-4 font-display text-[30px] lg:text-[44px] font-bold tracking-[-0.03em] leading-[1.05]">Claim assistance, <br />made less stressful.</h2>
          </div>
          <div className="max-w-[420px]"><p className="text-[15px] leading-[1.6] text-white/70">No fake promises of approval. Clear, step-by-step guidance to help you navigate documentation and process with your advisor.</p><button onClick={() => onWhatsApp("Hi, I need help with a claim. Please guide me.")} className="mt-4 h-11 px-6 rounded-full bg-white text-navy-900 text-[13.5px] font-semibold inline-flex items-center gap-2">Need help with a claim? <span className="h-6 w-6 rounded-full bg-navy-900 text-white flex items-center justify-center">↗</span></button></div>
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8">
            <div className="relative rounded-[24px] bg-white/[0.06] border border-white/10 backdrop-blur-xl p-6 lg:p-8">
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="grid sm:grid-cols-5 gap-6 relative">
                {/* Timeline line desktop */}
                <div className="hidden sm:block absolute top-[32px] left-[10%] right-[10%] h-px bg-white/10" />
                {steps.map((s, i) => (
                  <motion.div key={s.id} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="relative">
                    <div className="h-16 w-16 rounded-[16px] bg-white text-navy-900 flex items-center justify-center shadow-premium mx-auto sm:mx-0 relative z-10">
                      <s.icon className="h-6 w-6" />
                      <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-brand-red text-white text-[10px] font-bold flex items-center justify-center">{s.id}</div>
                    </div>
                    <div className="mt-4 text-center sm:text-left">
                      <div className="font-semibold text-[14px]">{s.title}</div>
                      <div className="mt-1.5 text-[12.5px] leading-[1.5] text-white/60">{s.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 grid sm:grid-cols-3 gap-3">
                {[
                  "Do not promise claim approval or settlement",
                  "Guidance only – insurer terms apply",
                  "Document checklist varies by case"
                ].map((t) => (
                  <div key={t} className="rounded-[12px] bg-white/5 border border-white/10 px-3 py-2.5 text-[11px] leading-[1.4] text-white/70">{t}</div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <div className="rounded-[20px] bg-white text-navy-900 p-6 shadow-premium">
              <div className="text-[13px] font-semibold tracking-[-0.01em]">What to keep ready?</div>
              <ul className="mt-4 space-y-3">
                {[
                  "Policy copy / number",
                  "Incident date, time & location",
                  "Photos / bills / reports where applicable",
                  "Contact details for coordination"
                ].map((it) => (
                  <li key={it} className="flex gap-2.5 text-[13px] text-navy-700"><span className="h-5 w-5 rounded-full bg-navy-50 flex items-center justify-center flex-shrink-0">•</span>{it}</li>
                ))}
              </ul>
              <button onClick={() => onWhatsApp("Hi, I need claim assistance. Here are my details:")} className="mt-5 w-full h-11 rounded-full bg-brand-red text-white text-[13.5px] font-semibold">WhatsApp Advisor</button>
              <div className="mt-3 text-[11px] text-center text-navy-500">Average response via WhatsApp • No spam</div>
            </div>
            <div className="rounded-[20px] bg-brand-red p-6 text-white">
              <div className="text-[13px] font-semibold">Emergency?</div>
              <div className="mt-1 text-[12.5px] leading-[1.5] text-white/80">For urgent assistance, inform advisor immediately via WhatsApp with incident details.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
