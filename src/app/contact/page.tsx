"use client";

import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const sector = formData.get("sector");
    const message = formData.get("message");

    const text = `
Merhaba,

Ad Soyad: ${name}
E-posta: ${email}
Telefon: ${phone || "-"}
Kategori: ${sector}

Mesaj:
${message}
    `.trim();

    const phoneNumber = "905314002057"; 
    // ↑ BAŞINDA + OLMADAN, 90 ile yaz

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappUrl, "_blank");
    setLoading(false);
    e.currentTarget.reset();
  }

  return (
    <section className="min-h-screen bg-neutral-50 pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-6">

        <div className="mb-16 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-900">
            Projenizi konuşalım
          </h1>
          <p className="mt-4 text-slate-600">
            Formu doldurun, WhatsApp üzerinden hızlıca iletişime geçelim.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-8 border border-slate-200">
          <form onSubmit={handleSubmit} className="space-y-6">

            <input
              name="name"
              required
              placeholder="Ad Soyad"
              className="w-full rounded-lg border px-4 py-3"
            />

            <input
              name="email"
              type="email"
              required
              placeholder="E-posta"
              className="w-full rounded-lg border px-4 py-3"
            />

            <input
              name="phone"
              placeholder="Telefon (opsiyonel)"
              className="w-full rounded-lg border px-4 py-3"
            />

            <select
              name="sector"
              className="w-full rounded-lg border px-4 py-3"
            >
              <option>Kurumsal</option>
              <option>E-ticaret</option>
              <option>SaaS</option>
              <option>Startup</option>
              <option>Eğitim</option>
              <option>Diğer</option>
            </select>

            <textarea
              name="message"
              required
              rows={5}
              placeholder="Projenizden kısaca bahsedin"
              className="w-full rounded-lg border px-4 py-3"
            />

            <button
              disabled={loading}
              className="w-full rounded-lg bg-slate-900 py-3 text-white"
            >
              {loading ? "Yönlendiriliyor..." : "WhatsApp’tan Gönder"}
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}
