export default function ContactSection() {
  return (
    <section id="contact" className="bg-neutral-900 py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">

          <h2 className="text-3xl md:text-4xl font-bold">
            Birlikte bir şeyler üretelim.
          </h2>

          <p className="mt-6 text-lg text-neutral-300 leading-relaxed">
            Yeni bir proje, mevcut bir ürünün geliştirilmesi ya da sadece bir
            fikir üzerine konuşmak istiyorsanız benimle iletişime geçebilirsiniz.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="vertexa.office@gmail.com"
              className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-neutral-900 font-medium transition hover:bg-neutral-200"
            >
              E-posta Gönder
            </a>

            <a
              href="https://wa.me/905314002057"
              target="_blank"
              className="inline-flex items-center rounded-lg border border-white/30 px-6 py-3 text-white transition hover:bg-white/10"
            >
              WhatsApp’tan Yaz
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
