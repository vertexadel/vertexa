"use client";

import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone") || "",
      sector: formData.get("sector"),
      message: formData.get("message"),
      company: formData.get("company"), // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error("API hata döndü");
      }

      setSuccess(true);
      form.reset(); // ✅ FORM TEMİZLENİR
    } catch (err) {
      console.error(err);
      setError("Bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="min-h-screen bg-neutral-50 pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-6">

        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-900">
            Projenizi konuşalım
          </h1>
          <p className="mt-4 text-slate-600">
            Projenizle ilgili temel bilgileri paylaşın, size en kısa sürede dönüş yapayım.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-2xl bg-white p-8 shadow-sm border border-slate-200">
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* HONEYPOT (BOTLAR İÇİN) */}
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />

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
              {loading ? "Gönderiliyor..." : "Talep Gönder"}
            </button>

            {success && (
              <p className="text-green-600 text-center">
                Mesajınız başarıyla gönderildi.
              </p>
            )}

            {error && (
              <p className="text-red-600 text-center">
                {error}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
