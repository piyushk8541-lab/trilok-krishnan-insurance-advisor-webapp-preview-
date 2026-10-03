"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceGrid from "@/components/ServiceGrid";
import SearchBar from "@/components/SearchBar";
import { MotorSection, HealthSection, TravelSection, CommercialSection } from "@/components/InsuranceSections";
import ClaimSection from "@/components/ClaimSection";
import DocumentChecklist from "@/components/DocumentChecklist";
import { HowItWorks, WhyAdvisor, AboutAdvisor, FAQSection } from "@/components/MoreSections";
import Footer from "@/components/Footer";
import { WhatsAppFloat, WhatsAppModal } from "@/components/WhatsAppSystem";
import MobileBottomNav from "@/components/MobileBottomNav";
import LocalSEO from "@/components/LocalSEO";

export default function Page() {
  const [waOpen, setWaOpen] = useState(false);

  const openWhatsAppWithMessage = (msg: string) => {
    const text = encodeURIComponent(msg + " (Preview enquiry from advisor portal)");
    const link = `https://wa.me/?text=${text}`;
    window.open(link, "_blank");
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleServiceSelect = (id: string) => {
    const map: Record<string, string> = {
      motor: "motor",
      car: "motor",
      bike: "motor",
      health: "health",
      travel: "travel",
      commercial: "commercial",
      accident: "services",
      renewal: "documents",
      claim: "claims",
      policy: "services",
      documents: "documents",
      advisor: "contact",
    };
    const target = map[id] || "services";
    if (target === "contact") {
      setWaOpen(true);
    } else {
      scrollTo(target);
    }
  };

  return (
    <main className="min-h-screen bg-[#FCFCFD] overflow-x-hidden">
      <Navbar onWhatsApp={() => setWaOpen(true)} />

      <Hero
        onPrimary={() => setWaOpen(true)}
        onSecondary={() => scrollTo("services")}
      />

      <SearchBar onNavigate={scrollTo} />

      <ServiceGrid onSelect={handleServiceSelect} />

      {/* Insurance Deep Dives */}
      <div id="insurance">
        <MotorSection onWhatsApp={openWhatsAppWithMessage} />
        <HealthSection onWhatsApp={openWhatsAppWithMessage} />
        <TravelSection onWhatsApp={openWhatsAppWithMessage} />
        <CommercialSection onWhatsApp={openWhatsAppWithMessage} />
      </div>

      <ClaimSection onWhatsApp={openWhatsAppWithMessage} />

      <DocumentChecklist />

      <HowItWorks />

      <WhyAdvisor />

      <AboutAdvisor onWhatsApp={() => setWaOpen(true)} />

      <FAQSection />

      <LocalSEO />

      {/* Contact Anchor */}
      <section id="contact" className="py-16 lg:py-20 bg-white border-t border-navy-50">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="rounded-[24px] bg-navy-900 text-white p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-widest uppercase">Final CTA • WhatsApp Conversion</div>
              <h3 className="mt-3 font-display text-[26px] lg:text-[32px] font-bold tracking-[-0.02em] leading-[1.1]">Ready to get clear insurance guidance?</h3>
              <p className="mt-2 text-[14px] leading-[1.6] text-white/70 max-w-[520px]">This preview demonstrates how the portal reduces repetitive client explanations and centralizes insurance information. Talk to advisor on WhatsApp.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button onClick={() => setWaOpen(true)} className="h-12 px-7 rounded-full bg-white text-navy-900 text-[14px] font-semibold">Talk to Advisor on WhatsApp</button>
              <button onClick={() => scrollTo("services")} className="h-12 px-7 rounded-full bg-white/10 border border-white/20 text-white text-[14px] font-semibold">Explore Services</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <WhatsAppFloat onClick={() => setWaOpen(true)} />
      <WhatsAppModal isOpen={waOpen} onClose={() => setWaOpen(false)} />
      <MobileBottomNav onWhatsApp={() => setWaOpen(true)} />

      {/* Bottom padding for mobile nav */}
      <div className="h-[72px] lg:hidden" />
    </main>
  );
}
