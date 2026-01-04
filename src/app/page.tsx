import Hero from "@/components/hero/Hero";
import IndustriesSection from "@/components/industries/IndustriesSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import AboutSection from "@/components/about/AboutSection";
import ServicesSection from "@/components/services/ServicesSection";

/* =========================
   DICTIONARY (TR)
========================= */
const dictionary = {
  trust: [
    { value: "10+", label: "Tamamlanan Proje" },
    { value: "5+", label: "Farklı Sektör" },
    { value: "100%", label: "Müşteri Memnuniyeti" },
  ],
  finalCta: {
    title: "Birlikte Güçlü Bir Dijital Ürün İnşa Edelim",
    description:
      "Fikrini hayata geçirmek veya mevcut ürününü ileri taşımak için benimle iletişime geç.",
    button: "Projeyi Başlatalım",
  },
};

export default function Home() {
  return (
    <main className="flex flex-col">

      {/* Hero */}
      <Hero />

      {/* Güven & Değer Önermesi — CANLANDIRILDI */}
      <section className="bg-neutral-50 py-24 border-b border-neutral-100">
        <div className="mx-auto max-w-7xl px-6 grid gap-10 md:grid-cols-3">
          {dictionary.trust.map((item) => (
            <div
              key={item.label}
              className="
                group rounded-3xl bg-white p-10 text-center
                border border-neutral-200
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-2xl
              "
            >
              <h3
                className="
                  text-4xl font-bold text-neutral-900
                  transition-transform duration-300
                  group-hover:scale-110
                "
              >
                {item.value}
              </h3>

              <p
                className="
                  mt-4 text-neutral-600
                  transition-colors duration-300
                  group-hover:text-neutral-800
                "
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Sektörler */}
      <IndustriesSection />

      {/* Projeler */}
      <ProjectsSection />

      {/* Hakkımızda */}
      <AboutSection />

      {/* Hizmetler */}
      <ServicesSection />

      {/* Final CTA */}
      <section className="bg-white py-28 border-t border-neutral-100">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            {dictionary.finalCta.title}
          </h2>
          <p className="mt-6 text-neutral-600">
            {dictionary.finalCta.description}
          </p>
          <a
            href="/contact"
            className="mt-10 inline-flex items-center rounded-full bg-neutral-900 px-10 py-4 text-sm font-medium text-white hover:bg-neutral-800 transition"
          >
            {dictionary.finalCta.button}
          </a>
        </div>
      </section>

    </main>
  );
}
