import HeroVideo from "./HeroVideo";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden scroll-mt-24"
      aria-label="Hero section"
    >
      {/* Background Video */}
      <HeroVideo />

      {/* Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-white/20 dark:bg-black/20" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="max-w-4xl text-center">

          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Modern web deneyimleri oluşturuyoruz.
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-700 dark:text-slate-300">
            Ürün odaklı bir yaklaşımla geliştirilen web geliştirme, mobil
            uygulamalar ve dijital ürünler.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-slate-900 dark:bg-white px-6 py-3 text-white dark:text-slate-900
                         hover:bg-slate-800 dark:hover:bg-slate-200 transition"
            >
              Çalışmaları Görüntüle
            </a>

            <a
              href="/contact"
              className="rounded-lg border border-slate-300 dark:border-slate-600
                         px-6 py-3 text-slate-900 dark:text-white
                         hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              İletişime Geçin
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
