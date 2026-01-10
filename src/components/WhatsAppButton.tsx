"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "905314002057"; // kendi numaran
  const message = encodeURIComponent(
    "Merhaba, web sitem üzerinden iletişime geçiyorum."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile iletişime geç"
      className="
        fixed bottom-6 right-6 z-50
        flex h-14 w-14 items-center justify-center
        rounded-full bg-[#25D366]
        shadow-lg
        transition-transform duration-300
        hover:scale-110
      "
    >
      <FaWhatsapp className="text-white text-3xl" />
    </a>
  );
}
