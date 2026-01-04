import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Web Geliştirme",
    description:
      "Kurumsal web siteleri, landing page’ler ve ölçeklenebilir frontend mimarileri.",
    icon: "/file.svg",
    slug: "web-gelistirme",
  },
  {
    title: "Mobil Uygulama",
    description:
      "iOS ve Android için kullanıcı deneyimi odaklı mobil uygulamalar.",
    icon: "/window.svg",
    slug: "mobil-uygulama",
  },
  {
    title: "Ürün & UI/UX",
    description:
      "Dijital ürünler için sade, işlevsel ve sürdürülebilir arayüz tasarımları.",
    icon: "/globe.svg",
    slug: "ui-ux",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="scroll-mt-24 bg-neutral-50 py-28 border-t border-neutral-100"
    >
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            Çözümler
          </h2>
          <p className="mt-4 text-neutral-600">
            İş hedeflerine uygun, sürdürülebilir ve performanslı dijital çözümler.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="
                group block rounded-2xl border border-neutral-200 bg-white p-8
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-xl
              "
            >
              {/* Icon */}
              <div
                className="
                  mb-6 flex h-12 w-12 items-center justify-center rounded-xl
                  bg-neutral-900 text-white text-lg font-semibold
                  transition-transform duration-300
                  group-hover:scale-110
                "
              >
                {service.title.charAt(0)}
              </div>

              <h3 className="text-xl font-semibold text-neutral-900">
                {service.title}
              </h3>

              <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                {service.description}
              </p>

              <span className="mt-6 inline-block text-sm font-medium text-neutral-900 group-hover:underline">
                Detayları Gör →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
