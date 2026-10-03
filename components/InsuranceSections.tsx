"use client";
import { motion } from "framer-motion";
import { Car, Bike, Truck, HeartPulse, Plane, Building2, Check, Info, FileText, Shield } from "lucide-react";

function SectionShell({ id, eyebrow, title, subtitle, children }: { id: string; eyebrow: string; title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-20 lg:py-28 border-t border-navy-50 bg-[#FCFCFD] scroll-mt-20">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="max-w-[720px]">
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-navy-100 px-3 py-1 text-[11px] font-semibold tracking-[0.08em] uppercase text-navy-600 shadow-soft">{eyebrow}</div>
          <h2 className="mt-4 font-display text-[28px] lg:text-[40px] font-bold tracking-[-0.03em] leading-[1.05] text-navy-900">{title}</h2>
          <p className="mt-3 text-[15px] lg:text-[16px] leading-[1.6] text-navy-600/80">{subtitle}</p>
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function InfoCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-[18px] bg-white border border-navy-100 p-6 shadow-soft">
      <div className="text-[13px] font-semibold tracking-[-0.01em] text-navy-900">{title}</div>
      <ul className="mt-4 space-y-3">
        {items.map((it) => (
          <li key={it} className="flex gap-2.5 text-[13.5px] leading-[1.5] text-navy-700">
            <span className="mt-1 h-5 w-5 rounded-full bg-navy-50 flex items-center justify-center flex-shrink-0"><Check className="h-3 w-3 text-navy-700" /></span>
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function MotorSection({ onWhatsApp }: { onWhatsApp: (msg: string) => void }) {
  return (
    <SectionShell id="motor" eyebrow="Motor Insurance • Car • Bike • Commercial" title="Motor insurance guidance, without the confusion." subtitle="Understand what motor insurance generally covers, why it matters, and what documents are usually required. Specific coverage, terms and premiums depend on the selected policy." >
      <div className="grid lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 grid sm:grid-cols-3 gap-4">
          {[
            { icon: Car, title: "Car Insurance", desc: "Own damage & third-party liability concepts. IDV, add-ons, NCB explained in simple terms." },
            { icon: Bike, title: "Bike Insurance", desc: "Two-wheeler protection for daily commute and long rides. Renewal reminders included." },
            { icon: Truck, title: "Commercial Vehicle", desc: "Goods carrying, passenger vehicles and business fleet guidance." },
          ].map((c) => (
            <div key={c.title} className="rounded-[20px] bg-white border border-navy-100 p-6 shadow-soft hover:shadow-premium transition-shadow">
              <div className="h-10 w-10 rounded-[12px] bg-navy-800 text-white flex items-center justify-center"><c.icon className="h-5 w-5" /></div>
              <div className="mt-4 font-semibold text-[15px] text-navy-900">{c.title}</div>
              <div className="mt-2 text-[13px] leading-[1.6] text-navy-600">{c.desc}</div>
            </div>
          ))}
          <div className="sm:col-span-3 rounded-[20px] bg-navy-900 text-white p-6 lg:p-7 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-widest uppercase text-white/60"><Shield className="h-3.5 w-3.5" /> Important Note</div>
              <p className="mt-2 text-[13.5px] leading-[1.6] text-white/80 max-w-[560px]">Coverage and terms depend on the selected policy. Confirm the current policy wording and applicable terms before purchase. This portal provides general information only.</p>
            </div>
            <button onClick={() => onWhatsApp("Hi, I need guidance for my vehicle insurance (car/bike/commercial).")} className="h-11 px-6 rounded-full bg-white text-navy-900 text-[13.5px] font-semibold whitespace-nowrap">Discuss My Vehicle Insurance</button>
          </div>
        </div>
        <div className="lg:col-span-4 space-y-4">
          <InfoCard title="What it generally covers" items={["Third-party liability as per motor vehicle norms", "Own damage due to accident, fire, theft (as per policy)", "Personal accident cover for owner-driver (as applicable)", "Add-on concepts: Zero dep, RSA, Engine protect (policy specific)"]} />
          <InfoCard title="Documents generally required" items={["Vehicle RC copy", "Previous policy copy (for renewal)", "Driving license / ID proof", "Vehicle inspection where applicable"]} />
          <div className="rounded-[18px] bg-amber-50 border border-amber-200 p-5 flex gap-3">
            <Info className="h-5 w-5 text-amber-700 flex-shrink-0 mt-0.5" />
            <div className="text-[12.5px] leading-[1.6] text-amber-900">Required documents may vary depending on policy, insurer and case. Avoid sharing original sensitive documents on unsecured public forms.</div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

export function HealthSection({ onWhatsApp }: { onWhatsApp: (msg: string) => void }) {
  return (
    <SectionShell id="health" eyebrow="Health Insurance • Family Protection" title="Health protection that your family can actually understand." subtitle="General information about health insurance concepts, hospitalization, cashless network and claim assistance. Specific benefits, waiting periods and exclusions are policy-specific." >
      <div className="grid lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7">
          <div className="rounded-[24px] bg-white border border-navy-100 shadow-premium overflow-hidden">
            <div className="p-7 lg:p-8">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-emerald-50 flex items-center justify-center"><HeartPulse className="h-5 w-5 text-emerald-700" /></div>
                <div><div className="font-semibold text-[15px] text-navy-900">Why health insurance matters</div><div className="text-[12px] text-navy-500">Financial protection against medical expenses</div></div>
              </div>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {[
                  "Rising medical costs and hospitalization expenses",
                  "Access to cashless network hospitals (as per policy)",
                  "Coverage for pre & post hospitalization (as applicable)",
                  "Family floater vs individual concepts",
                  "No-claim benefits and restoration concepts",
                  "Tax benefits as per applicable laws"
                ].map((t) => (
                  <div key={t} className="flex gap-2.5 text-[13px] leading-[1.5] text-navy-700"><span className="h-5 w-5 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-0.5"><Check className="h-3 w-3 text-emerald-700" /></span>{t}</div>
                ))}
              </div>
            </div>
            <div className="bg-navy-50/70 border-t border-navy-100 p-5 flex flex-wrap items-center justify-between gap-3">
              <div className="text-[12px] text-navy-600">Coverage depends on selected plan. Review policy wording.</div>
              <button onClick={() => onWhatsApp("Hi, I want to understand health insurance options for my family.")} className="h-10 px-5 rounded-full bg-navy-800 text-white text-[13px] font-semibold">Discuss Health Insurance</button>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 space-y-4">
          <InfoCard title="General coverage concepts" items={["Hospitalization expenses (room, surgery, ICU as per policy)", "Day-care procedures where applicable", "Pre & post hospitalization window", "Cashless facility at network hospitals (subject to approval)"]} />
          <InfoCard title="Documents generally required" items={["Identity & address proof", "Age proof for all members", "Medical history where required", "Previous policy details if porting"]} />
        </div>
      </div>
    </SectionShell>
  );
}

export function TravelSection({ onWhatsApp }: { onWhatsApp: (msg: string) => void }) {
  return (
    <SectionShell id="travel" eyebrow="Travel Insurance • Domestic & International" title="Travel with clarity on what's protected." subtitle="General concepts of travel insurance including medical assistance, trip-related protection and documentation guidance." >
      <div className="grid lg:grid-cols-3 gap-5">
        {[
          { title: "Domestic Travel", points: ["Trip delays & cancellations (as per policy)", "Baggage loss/delay concepts", "Medical assistance during travel"] },
          { title: "International Travel", points: ["Medical expenses abroad (as per policy limits)", "Emergency evacuation concepts", "Passport loss assistance"] },
          { title: "How to enquire", points: ["Share travel dates & destination", "Number of travelers & age", "Get general guidance & document checklist", "Connect on WhatsApp for next steps"] },
        ].map((card) => (
          <div key={card.title} className="rounded-[20px] bg-white border border-navy-100 p-6 shadow-soft">
            <div className="flex items-center gap-2.5"><div className="h-8 w-8 rounded-full bg-sky-50 flex items-center justify-center"><Plane className="h-4 w-4 text-sky-700" /></div><div className="font-semibold text-[15px] text-navy-900">{card.title}</div></div>
            <ul className="mt-4 space-y-2.5">
              {card.points.map((p) => (
                <li key={p} className="flex gap-2 text-[13px] leading-[1.5] text-navy-700"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-navy-400 flex-shrink-0" />{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <button onClick={() => onWhatsApp("Hi, I need help planning my travel insurance.")} className="h-11 px-6 rounded-full bg-navy-800 text-white text-[13.5px] font-semibold">Plan My Travel Insurance</button>
      </div>
    </SectionShell>
  );
}

export function CommercialSection({ onWhatsApp }: { onWhatsApp: (msg: string) => void }) {
  return (
    <SectionShell id="commercial" eyebrow="Commercial Insurance • Business Protection" title="Professional insurance guidance for businesses." subtitle="General information about commercial vehicle, property and business-related insurance requirements. Specific needs vary by business type and scale." >
      <div className="grid lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5">
          <div className="rounded-[20px] bg-white border border-navy-100 p-6 shadow-soft h-full">
            <div className="flex items-center gap-3"><div className="h-10 w-10 rounded-[12px] bg-navy-800 text-white flex items-center justify-center"><Building2 className="h-5 w-5" /></div><div className="font-semibold text-navy-900">Business-oriented protection</div></div>
            <div className="mt-6 space-y-4">
              {[
                { t: "Commercial Vehicles", d: "Fleet, goods carriers, passenger vehicles – documentation and renewal guidance." },
                { t: "Property & Assets", d: "General concepts of property protection for shops, warehouses, offices." },
                { t: "Employee & Liability", d: "Workmen compensation and liability concepts where applicable." },
              ].map((i) => (
                <div key={i.t} className="rounded-[14px] bg-navy-50/70 p-4"><div className="text-[13.5px] font-semibold text-navy-900">{i.t}</div><div className="mt-1 text-[12.5px] leading-[1.5] text-navy-600">{i.d}</div></div>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
          <InfoCard title="What businesses usually check" items={["Vehicle fleet insurance & renewal tracking", "Property insurance for business premises", "Marine/transit concepts for goods movement", "Employee-related coverage requirements"]} />
          <InfoCard title="How advisor helps" items={["Understanding business insurance requirements", "Document checklist & preparation guidance", "Renewal assistance & reminders", "Claim process assistance when needed"]} />
          <div className="sm:col-span-2 rounded-[20px] bg-white border border-navy-100 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div><div className="text-[14px] font-semibold text-navy-900">Need business insurance guidance?</div><div className="text-[12.5px] text-navy-500 mt-1">Keep all content general until actual products are configured.</div></div>
            <button onClick={() => onWhatsApp("Hi, I need guidance for commercial/business insurance.")} className="h-10 px-5 rounded-full bg-navy-800 text-white text-[13px] font-semibold whitespace-nowrap">Discuss Business Insurance</button>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
