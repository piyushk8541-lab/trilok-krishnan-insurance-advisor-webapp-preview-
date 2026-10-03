"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, ArrowUpRight, Sparkles } from "lucide-react";

const options = [
  { id: "car", label: "Car Insurance", msg: "Hi, I need guidance for Car Insurance." },
  { id: "health", label: "Health Insurance", msg: "Hi, I want to understand Health Insurance options for my family." },
  { id: "bike", label: "Bike Insurance", msg: "Hi, I need help with Bike Insurance." },
  { id: "travel", label: "Travel Insurance", msg: "Hi, I need help planning my Travel Insurance." },
  { id: "renewal", label: "Renewal", msg: "Hi, I need assistance with my insurance renewal." },
  { id: "claim", label: "Claim Assistance", msg: "Hi, I need help with a claim. Please guide me." },
  { id: "other", label: "Other", msg: "Hi, I need insurance guidance. Please assist." },
];

export function WhatsAppFloat({ onClick }: { onClick: () => void }) {
  return (
    <>
      {/* Desktop floating */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", damping: 20, stiffness: 300 }}
        onClick={onClick}
        className="hidden lg:flex fixed bottom-6 right-6 z-[55] h-14 pl-4 pr-2 rounded-full bg-[#25D366] text-white shadow-[0_12px_32px_-8px_rgba(37,211,102,0.6)] items-center gap-3 hover:bg-[#20bd5a] transition-colors"
      >
        <span className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center"><MessageCircle className="h-4 w-4" /></span>
        <span className="text-[14px] font-semibold pr-1">Talk to Advisor</span>
        <span className="h-10 w-10 rounded-full bg-white text-[#25D366] flex items-center justify-center"><ArrowUpRight className="h-5 w-5" /></span>
      </motion.button>

      {/* Mobile floating – smaller */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.1, type: "spring", damping: 20, stiffness: 300 }}
        onClick={onClick}
        className="lg:hidden fixed bottom-[84px] right-4 z-[55] h-12 w-12 rounded-full bg-[#25D366] text-white shadow-[0_12px_32px_-8px_rgba(37,211,102,0.6)] flex items-center justify-center"
      >
        <MessageCircle className="h-6 w-6" />
      </motion.button>
    </>
  );
}

export function WhatsAppModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [selected, setSelected] = useState<string | null>(null);
  const selectedOption = options.find(o => o.id === selected);

  const handleContinue = () => {
    if (!selectedOption) return;
    // Placeholder WhatsApp link – no real number invented
    const text = encodeURIComponent(selectedOption.msg + " (Preview enquiry from advisor portal)");
    const placeholderLink = `https://wa.me/?text=${text}`;
    window.open(placeholderLink, "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-navy-900/40 backdrop-blur-[6px] z-[80]" onClick={onClose} />
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ type: "spring", damping: 28, stiffness: 360 }}
            className="fixed bottom-0 lg:bottom-6 inset-x-0 lg:left-auto lg:right-6 lg:w-[400px] z-[90] bg-white rounded-t-[28px] lg:rounded-[24px] shadow-floating border border-navy-100 overflow-hidden"
          >
            <div className="p-6 pb-4 flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[#25D366] flex items-center justify-center text-white"><MessageCircle className="h-5 w-5" /></div>
                <div>
                  <div className="font-semibold text-[15px] text-navy-900">Talk to Advisor on WhatsApp</div>
                  <div className="text-[12px] text-navy-500 flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />Typically replies quickly • Preview link</div>
                </div>
              </div>
              <button onClick={onClose} className="h-8 w-8 rounded-full bg-gray-50 flex items-center justify-center"><X className="h-4 w-4" /></button>
            </div>

            <div className="px-6">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-navy-50 px-3 py-1 text-[11px] font-semibold text-navy-600"><Sparkles className="h-3 w-3" /> What do you need help with?</div>
              <div className="mt-4 grid grid-cols-2 gap-2.5">
                {options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelected(opt.id)}
                    className={`text-left rounded-[14px] border px-4 py-3 text-[13.5px] font-medium transition-all ${selected === opt.id ? "bg-navy-900 border-navy-900 text-white shadow-premium" : "bg-white border-navy-100 text-navy-800 hover:border-navy-200"}`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              <div className="mt-5 rounded-[14px] bg-amber-50 border border-amber-200 p-3 text-[11.5px] leading-[1.5] text-amber-900">
                Placeholder WhatsApp link in preview. No real phone number exposed. Final deployment will use verified advisor number.
              </div>
            </div>

            <div className="p-6 pt-4">
              <button
                disabled={!selected}
                onClick={handleContinue}
                className={`w-full h-12 rounded-full font-semibold text-[14px] flex items-center justify-center gap-2 transition-all ${selected ? "bg-[#25D366] text-white shadow-[0_8px_20px_-8px_rgba(37,211,102,0.5)] hover:bg-[#20bd5a]" : "bg-gray-100 text-gray-400 cursor-not-allowed"}`}
              >
                Continue on WhatsApp <ArrowUpRight className="h-4 w-4" />
              </button>
              <div className="mt-3 text-center text-[11px] text-navy-400">Secure • Private • Direct to advisor</div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
