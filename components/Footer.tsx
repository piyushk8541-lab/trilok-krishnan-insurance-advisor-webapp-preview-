"use client";
import { Shield } from "lucide-react";

const locations = ["Muzaffarpur","Patna","Gaya","Darbhanga","Bhagalpur","Purnia","Begusarai","Samastipur","Vaishali","Sitamarhi","Madhubani","Chapra","Ara","Motihari","Bihar Sharif"];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white border-t border-white/10">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-white text-navy-900 flex items-center justify-center"><Shield className="h-5 w-5" /></div>
              <div><div className="font-display font-bold text-[15px] tracking-[-0.02em]">TRILOK KRISHNAN</div><div className="text-[11px] tracking-[0.14em] uppercase text-white/60">Insurance Advisor</div></div>
            </div>
            <p className="mt-4 text-[13.5px] leading-[1.6] text-white/70 max-w-[320px]">Independent advisor information and assistance portal associated with Tata AIG Insurance Advisor. Designed as a digital office for clarity and conversion.</p>
            <div className="mt-6 rounded-[14px] bg-white/5 border border-white/10 p-4">
              <div className="text-[11px] font-semibold tracking-widest uppercase text-white/50">Future SEO Architecture</div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {locations.slice(0,8).map((l) => (
                  <span key={l} className="text-[11px] px-2 py-1 rounded-full bg-white/10 border border-white/10 text-white/70">{l}</span>
                ))}
                <span className="text-[11px] px-2 py-1 rounded-full bg-white/5 text-white/50">+{locations.length - 8} more</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="text-[12px] font-semibold tracking-[0.08em] uppercase text-white/40">Insurance Services</div>
            <ul className="mt-4 space-y-2.5 text-[13.5px] text-white/70">
              {["Motor Insurance","Car Insurance","Bike Insurance","Health Insurance","Travel Insurance","Commercial Insurance","Personal Accident","Insurance Renewal"].map((i) => (
                <li key={i}><a href="#services" className="hover:text-white transition-colors">{i}</a></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="text-[12px] font-semibold tracking-[0.08em] uppercase text-white/40">Client Information</div>
            <ul className="mt-4 space-y-2.5 text-[13.5px] text-white/70">
              {["Claim Assistance","Document Guidance","How It Works","Why Advisor","FAQ","About Advisor","Search Information"].map((i) => (
                <li key={i}><a href="#faq" className="hover:text-white transition-colors">{i}</a></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="text-[12px] font-semibold tracking-[0.08em] uppercase text-white/40">SEO-Ready Architecture (Preview)</div>
            <div className="mt-4 grid grid-cols-1 gap-2">
              {[
                "/insurance-advisor-bihar",
                "/car-insurance-bihar",
                "/health-insurance-bihar",
                "/bike-insurance-bihar",
                "/travel-insurance-bihar",
                "/insurance-renewal-bihar",
                "/claim-assistance-bihar",
                "/insurance-advisor-muzaffarpur",
              ].map((p) => (
                <div key={p} className="flex items-center justify-between rounded-[10px] bg-white/5 border border-white/10 px-3 py-2">
                  <span className="text-[12px] font-mono text-white/60">{p}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/20">ready</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-[18px] bg-white/[0.04] border border-white/10 p-6">
          <div className="text-[11px] font-semibold tracking-[0.08em] uppercase text-white/40">Important Disclaimer</div>
          <p className="mt-3 text-[12px] leading-[1.7] text-white/60 max-w-[900px]">
            This portal is designed to provide general information and facilitate communication with an insurance advisor. Policy availability, coverage, exclusions, premiums and terms are subject to the applicable insurer's current policy documents and terms. This is a preview version for presentation to the advisor before actual development. Not the official corporate website of Tata AIG General Insurance Company Limited. Only generic/sample information is used where real data is not provided. Do not share sensitive personal documents on unsecured public forms. For actual purchase, please consult the official policy wording and advisor guidance.
          </p>
          <div className="mt-4 flex flex-wrap gap-6 text-[11px] text-white/40">
            <span>© {new Date().getFullYear()} Trilok Krishnan – Insurance Advisor • Preview Build</span>
            <span>•</span>
            <span>Built as premium ₹1,00,000+ design concept</span>
            <span>•</span>
            <span>Mobile-first • PWA-ready • SEO foundation</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
