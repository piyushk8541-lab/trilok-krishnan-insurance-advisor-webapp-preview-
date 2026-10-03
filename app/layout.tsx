import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Trilok Krishnan - Insurance Advisor | Professional Insurance Guidance in Bihar",
    template: "%s | Trilok Krishnan Insurance Advisor"
  },
  description: "Professional independent insurance advisor portal associated with Tata AIG Insurance Advisor. Explore motor, health, travel & commercial insurance, document guidance, claim assistance & connect directly on WhatsApp. Serving Bihar.",
  keywords: ["insurance advisor bihar", "insurance advisor muzaffarpur", "car insurance bihar", "health insurance bihar", "bike insurance", "travel insurance", "commercial insurance", "insurance renewal", "claim assistance", "Trilok Krishnan"],
  authors: [{ name: "Trilok Krishnan" }],
  creator: "Trilok Krishnan Insurance Advisor",
  metadataBase: new URL("https://trilok-krishnan-insurance.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://trilok-krishnan-insurance.vercel.app",
    title: "Trilok Krishnan - Insurance Advisor | Guidance You Can Trust",
    description: "Insurance Made Simple. Guidance You Can Trust. Explore solutions, understand process, prepare documents & connect directly with your advisor on WhatsApp.",
    siteName: "Trilok Krishnan Insurance Advisor",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trilok Krishnan - Insurance Advisor",
    description: "Insurance Made Simple. Guidance You Can Trust.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "preview-verification-placeholder",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Trilok Krishnan - Insurance Advisor",
              description: "Independent insurance advisor information and assistance portal associated with Tata AIG Insurance Advisor",
              areaServed: {
                "@type": "State",
                name: "Bihar"
              },
              serviceType: ["Motor Insurance", "Health Insurance", "Travel Insurance", "Commercial Insurance", "Claim Assistance"],
              disambiguatingDescription: "Not the official corporate website of Tata AIG General Insurance Company Limited. This is an independent advisor portal."
            })
          }}
        />
        <style>{`
          :root { --font-inter: 'Inter', system-ui, sans-serif; --font-sora: 'Sora', system-ui, sans-serif; }
          .font-display { font-family: var(--font-sora); }
          .font-sans { font-family: var(--font-inter); }
        `}</style>
      </head>
      <body className="font-sans antialiased bg-[#FCFCFD] text-navy-800 selection:bg-brand-red/10 selection:text-brand-red">
        {children}
      </body>
    </html>
  );
}
