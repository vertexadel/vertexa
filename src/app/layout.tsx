import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vertexa | Modern Web Deneyimleri",
  description: "Modern web siteleri ve dijital çözümler",
  icons: {
    icon: "/favicon.png", // veya favicon.ico
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
})


{
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
          bg-white
          text-slate-900
        `}
      >
        {/* ÜST BAR */}
        <Navbar />

        {/* SAYFA İÇERİĞİ */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* WHATSAPP SABİT BUTON */}
        <WhatsAppButton />

        {/* FOOTER */}
        <Footer />
      </body>
    </html>
  );
}

