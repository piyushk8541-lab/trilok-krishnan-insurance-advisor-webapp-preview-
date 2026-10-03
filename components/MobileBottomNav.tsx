"use client";
import { Home, LayoutGrid, FileCheck2, FolderOpen, MessageCircle } from "lucide-react";

const items = [
  { id: "home", label: "Home", icon: Home, href: "#home" },
  { id: "services", label: "Services", icon: LayoutGrid, href: "#services" },
  { id: "claims", label: "Claims", icon: FileCheck2, href: "#claims" },
  { id: "documents", label: "Docs", icon: FolderOpen, href: "#documents" },
  { id: "contact", label: "Contact", icon: MessageCircle, href: "#contact", action: true },
];

export default function MobileBottomNav({ onWhatsApp }: { onWhatsApp: () => void }) {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-[50] border-t border-navy-100 bg-white/90 backdrop-blur-[16px] supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto max-w-[480px] grid grid-cols-5 gap-1 px-2 py-2">
        {items.map((it) => (
          <a
            key={it.id}
            href={it.href}
            onClick={(e) => {
              if (it.action) {
                e.preventDefault();
                onWhatsApp();
              }
            }}
            className={`flex flex-col items-center justify-center gap-1 rounded-[12px] py-2 ${it.action ? "text-brand-red" : "text-navy-500 hover:text-navy-900"}`}
          >
            <it.icon className="h-5 w-5" />
            <span className="text-[10px] font-semibold tracking-[-0.01em]">{it.label}</span>
          </a>
        ))}
      </div>
      <div className="h-[env(safe-area-inset-bottom)]" />
    </div>
  );
}
