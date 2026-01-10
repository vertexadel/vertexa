"use client";

import Link from "next/link";

export default function WhatsAppButton() {
  const phoneNumber = "905314002057"; // ← kendi numaran

  const message = `
Merhaba,
Web siteniz üzerinden size ulaşıyorum.
Projem hakkında bilgi almak istiyorum.
  `.trim();

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <Link
      href={url}
      target="_blank"
      aria-label="WhatsApp ile iletişime geç"
      className="
        fixed bottom-6 right-6 z-50
        flex h-14 w-14 items-center justify-center
        rounded-full bg-[#25D366]
        shadow-lg transition hover:scale-110
      "
    >
      <svg
        viewBox="0 0 32 32"
        fill="white"
        className="h-7 w-7"
      >
        <path d="M16 0C7.2 0 0 7.2 0 16c0 2.8.7 5.5 2.1 7.9L0 32l8.3-2.1C10.7 31.3 13.3 32 16 32c8.8 0 16-7.2 16-16S24.8 0 16 0zm8.5 22.5c-.4 1.2-2 2.2-3.3 2.5-.9.2-2 .3-6.5-1.4-5.7-2.2-9.3-7.6-9.6-8-.3-.4-2.3-3-2.3-5.7s1.4-4 1.9-4.6c.5-.5 1-.7 1.4-.7h1c.3 0 .7 0 1 .8.4.9 1.3 3.2 1.4 3.4.1.2.2.5 0 .8-.2.3-.3.5-.5.8-.2.2-.4.5-.6.7-.2.2-.4.5-.2.9.2.4.9 1.6 1.9 2.6 1.3 1.3 2.4 1.7 2.8 1.9.4.2.6.2.8-.1.3-.3.9-1.1 1.1-1.4.3-.3.5-.3.9-.2.4.1 2.6 1.2 3.1 1.4.5.2.8.3.9.5.1.2.1 1.1-.3 2.3z" />
      </svg>
    </Link>
  );
}
