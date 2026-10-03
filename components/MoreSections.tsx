"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Shield, MessageCircle, FileCheck, RefreshCw, Users, Sparkles } from "lucide-react";

export function HowItWorks() {
  const steps = [
    { n: "01", title: "Choose Your Insurance Need", desc: "Select motor, health, travel, commercial or assistance service from the dashboard." },
    { n: "02", title: "Understand Your Options", desc: "Read clear, jargon-free information, coverage concepts and document checklists." },
    { n: "03", title: "Connect With Advisor", desc: "Tap WhatsApp CTA – pre-filled message helps advisor understand your need faster." },
    { n: "04", title: "Complete The Required Process", desc: "Get guided on next steps, documents, renewal or claim assistance." },
  ];
  return (
    <section className="py-20 lg:py-28 bg-[#FCFCFD] border-t border-navy-50">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="max-w-[720px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-navy-100 px-3 py-1 text-[11px] font-semibold tracking-[0.08em] uppercase text-navy-600 shadow-soft">How It Works • 4 Steps</div>
          <h2 className="mt-4 font-display text-[30px] lg:text-[42px] font-bold tracking-[-0.03em] leading-[1.05] text-navy-900">From confusion to clarity, in four simple steps.</h2>
        </div>

        <div className="mt-12 relative max-w-[1000px] mx-auto">
          <div className="hidden lg:block absolute top-[32px] left-[12%] right-[12%] h-px bg-gradient-to-r from-navy-100 via-navy-200 to-navy-100" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div key={s.n} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative rounded-[20px] bg-white border border-navy-100 p-6 shadow-soft">
                <div className="h-12 w-12 rounded-[14px] bg-navy-900 text-white flex items-center justify-center font-display font-bold text-[16px]">{s.n}</div>
                <div className="mt-4 font-semibold text-[15px] text-navy-900 leading-[1.3]">{s.title}</div>
                <div className="mt-2 text-[13px] leading-[1.6] text-navy-600/80">{s.desc}</div>
                <div className="mt-4 h-px bg-navy-50" />
                <div className="mt-3 text-[11px] font-medium text-navy-400">Step {s.n} • Advisor guided</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyAdvisor() {
  const cards = [
    { icon: Users, title: "Personal guidance", desc: "One-to-one explanation in simple language, not call-center scripts." },
    { icon: Shield, title: "Easy information access", desc: "All insurance information organized like an app, available 24/7." },
    { icon: FileCheck, title: "Document guidance", desc: "Clear checklists so you know what to keep ready before meeting." },
    { icon: RefreshCw, title: "Renewal assistance", desc: "Reminders and renewal process guidance to avoid policy lapse." },
    { icon: Shield, title: "Claim assistance", desc: "Step-by-step assistance for motor, health, travel claims." },
    { icon: MessageCircle, title: "Direct WhatsApp communication", desc: "Fast, private, documented communication channel." },
  ];
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-navy-50">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div><h2 className="font-display text-[30px] lg:text-[40px] font-bold tracking-[-0.03em] leading-[1.05] text-navy-900">Why connect with the advisor?</h2><p className="mt-3 text-[15px] text-navy-600/80 max-w-[520px]">No fake awards or inflated claims. Just clear value propositions that reduce your effort.</p></div>
          <div className="rounded-full bg-navy-50 px-4 py-2 text-[12px] font-medium text-navy-600">Trust • Clarity • Conversion</div>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group rounded-[20px] bg-[#FCFCFD] border border-navy-100 p-6 hover:bg-white hover:shadow-premium transition-all">
              <div className="h-10 w-10 rounded-[12px] bg-white border border-navy-100 flex items-center justify-center group-hover:bg-navy-900 group-hover:text-white group-hover:border-navy-900 transition-colors"><c.icon className="h-5 w-5" /></div>
              <div className="mt-4 font-semibold text-[15px] text-navy-900 flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600" />{c.title}</div>
              <div className="mt-2 text-[13px] leading-[1.6] text-navy-600/80">{c.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutAdvisor({ onWhatsApp }: { onWhatsApp: () => void }) {
  return (
    <section id="about" className="py-20 lg:py-28 bg-navy-50/50 border-t border-navy-100 scroll-mt-20">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-[380px]">
              <div className="absolute inset-0 translate-y-3 rotate-[-2deg] rounded-[28px] bg-navy-200/50" />
              <div className="relative rounded-[28px] bg-white border border-navy-100 shadow-premium-lg p-8">
                <div className="h-24 w-24 rounded-[20px] bg-gradient-to-br from-navy-800 to-navy-600 flex items-center justify-center text-white font-display font-bold text-[28px] mx-auto">TK</div>
                <div className="mt-6 text-center">
                  <div className="font-display font-bold text-[18px] tracking-[-0.02em] text-navy-900">TRILOK KRISHNAN</div>
                  <div className="mt-1 inline-flex items-center gap-2 rounded-full bg-navy-50 px-3 py-1 text-[11px] font-semibold tracking-[0.08em] uppercase text-navy-600">Insurance Advisor • Tata AIG Advisor Network</div>
                  <p className="mt-4 text-[14px] leading-[1.6] text-navy-600">Helping clients understand insurance options and navigate the insurance process with clear guidance.</p>
                  <div className="mt-6 grid grid-cols-3 gap-2 text-center">
                    {[
                      { k: "Focus", v: "Bihar" },
                      { k: "Support", v: "WhatsApp" },
                      { k: "Help", v: "Claims • Renewal" },
                    ].map((s) => (
                      <div key={s.k} className="rounded-[12px] bg-navy-50 p-3"><div className="text-[11px] text-navy-400 uppercase tracking-widest">{s.k}</div><div className="text-[12px] font-semibold text-navy-800">{s.v}</div></div>
                    ))}
                  </div>
                  <button onClick={onWhatsApp} className="mt-6 w-full h-11 rounded-full bg-navy-900 text-white text-[13.5px] font-semibold">View Advisor Information</button>
                  <div className="mt-3 text-[11px] text-navy-500">Preview profile • Placeholder avatar</div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-navy-100 px-3 py-1 text-[11px] font-semibold tracking-[0.08em] uppercase text-navy-600 shadow-soft"><Sparkles className="h-3 w-3" /> About Advisor • Professional Profile</div>
            <h2 className="mt-4 font-display text-[32px] lg:text-[44px] font-bold tracking-[-0.04em] leading-[0.95] text-navy-900">Your insurance journey, <br />guided with clarity.</h2>
            <p className="mt-5 text-[16px] leading-[1.6] text-navy-600/80 max-w-[560px]">This portal is designed as a digital office for the insurance advisor – reducing repetitive explanations, centralizing information, and enabling direct WhatsApp communication.</p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                { title: "Clear Information", desc: "No jargon. Simple explanations for motor, health, travel, commercial." },
                { title: "Advisor Assistance", desc: "Direct guidance for policy understanding, documents and process." },
                { title: "Document Guidance", desc: "Interactive checklists for new policy, renewal and claims." },
                { title: "Direct Communication", desc: "WhatsApp-first approach – fast, private, documented." },
              ].map((c) => (
                <div key={c.title} className="rounded-[16px] bg-white border border-navy-100 p-5 shadow-soft">
                  <div className="font-semibold text-[14px] text-navy-900">{c.title}</div>
                  <div className="mt-1.5 text-[13px] leading-[1.5] text-navy-600/80">{c.desc}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[16px] bg-navy-900 text-white p-5 flex gap-4">
              <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">⚠️</div>
              <div className="text-[12.5px] leading-[1.6] text-white/80">This is a preview version. Not the official corporate website of Tata AIG General Insurance Company Limited. Policy availability, coverage, exclusions, premiums and terms are subject to the applicable insurer's current policy documents.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [
    { q: "How do I get insurance assistance?", a: "Browse the service dashboard, read the relevant insurance section, check document checklist and tap 'Talk to Advisor on WhatsApp' – your enquiry is pre-filled for faster assistance." },
    { q: "What documents may be required?", a: "Documents vary by policy and case. Generally ID proof, address proof, vehicle RC for motor, medical history for health, passport for travel. Check the interactive Document Checklist section for category-wise guidance." },
    { q: "How does vehicle insurance work?", a: "Motor insurance typically includes third-party liability and own damage concepts. Add-ons like zero depreciation, roadside assistance are policy-specific. Coverage and terms depend on selected policy – confirm current policy wording before purchase." },
    { q: "How can I enquire about renewal?", a: "Go to Insurance Renewal card, check previous policy details required and connect on WhatsApp. Advisor provides renewal assistance and reminders." },
    { q: "How can I get claim assistance?", a: "Use Claim Assistance section – 5 step process: Inform Advisor, Share Details, Document Guidance, Claim Process Assistance, Track/Follow Up. No promise of claim approval – guidance only." },
    { q: "Can I contact the advisor online?", a: "Yes, via WhatsApp CTA throughout the portal. This preview uses placeholder WhatsApp link. Final deployment will use verified advisor number." },
    { q: "What happens after I submit an enquiry?", a: "You are redirected to WhatsApp with a pre-filled message. Advisor responds with next steps, document guidance and process information." },
  ];
  return (
    <section id="faq" className="py-20 lg:py-28 bg-white border-t border-navy-50 scroll-mt-20">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-navy-50 px-3 py-1 text-[11px] font-semibold tracking-[0.08em] uppercase text-navy-600">FAQ • Clear Answers</div>
            <h2 className="mt-4 font-display text-[30px] lg:text-[36px] font-bold tracking-[-0.03em] leading-[1.05] text-navy-900">Questions, answered clearly.</h2>
            <p className="mt-3 text-[14px] leading-[1.6] text-navy-600/80">Factual, general answers. No fake guarantees. Built for ordinary Indian clients with simple English.</p>
            <div className="mt-6 rounded-[14px] bg-navy-50 p-4 text-[12px] leading-[1.5] text-navy-600">FAQ schema ready for SEO. Clean accordion with accessibility.</div>
          </div>
          <div className="lg:col-span-8">
            <div className="rounded-[20px] border border-navy-100 overflow-hidden divide-y divide-navy-100 bg-[#FCFCFD]">
              {faqs.map((f, i) => (
                <div key={i} className="bg-white">
                  <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between gap-4 p-5 text-left">
                    <span className="font-semibold text-[15px] text-navy-900">{f.q}</span>
                    <span className={`h-8 w-8 rounded-full border flex items-center justify-center transition-all flex-shrink-0 ${open === i ? "bg-navy-900 text-white border-navy-900 rotate-45" : "bg-white border-navy-200 text-navy-600"}`}>+</span>
                  </button>
                  <div className={`grid transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden"><div className="px-5 pb-5 text-[14px] leading-[1.6] text-navy-600/80">{f.a}</div></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


