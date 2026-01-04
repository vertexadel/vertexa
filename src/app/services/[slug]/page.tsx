import { services } from "@/lib/services";
import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import Link from "next/link";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);
  if (!service) {
    notFound();
  }

  const relatedProjects = projects.filter((project) =>
    project.services.includes(slug)
  );

  return (
    <main className="mx-auto max-w-7xl px-6 py-32">

      {/* Layout */}
      <div className="grid gap-24 lg:grid-cols-[1fr_360px]">

        {/* LEFT CONTENT */}
        <div className="space-y-32">

          {/* Service Info */}
          <section className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900">
              {service.title}
            </h1>

            <p className="text-lg text-neutral-600">
              {service.description}
            </p>

            <div className="text-neutral-700 leading-relaxed">
              {service.content}
            </div>
          </section>

          {/* Features */}
          <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Modern teknoloji altyapısı",
              "Performans & SEO odaklı",
              "Ölçeklenebilir mimari",
              "Uzun vadeli bakım",
            ].map((feature) => (
              <div
                key={feature}
                className="rounded-xl border border-neutral-200 bg-white p-6"
              >
                <p className="font-medium text-neutral-900">{feature}</p>
              </div>
            ))}
          </section>

          {/* Related Projects */}
          <section className="space-y-12">
            <header className="max-w-2xl">
              <h2 className="text-3xl font-bold text-neutral-900">
                Bu Hizmet Kapsamında Yaptığım Projeler
              </h2>
              <p className="mt-4 text-neutral-600">
                {service.title} alanında geliştirdiğim seçili projeler.
              </p>
            </header>

            {relatedProjects.length === 0 ? (
              <p className="text-neutral-600">
                Bu hizmet kapsamında henüz yayınlanmış bir proje bulunmamaktadır.
              </p>
            ) : (
              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {relatedProjects.map((project) => (
                  <Link
                    key={project.id}
                    href={`/projects/${project.slug}`}
                    className="group rounded-2xl border border-neutral-200 bg-white p-6 transition hover:shadow-xl"
                  >
                    <span className="text-sm text-neutral-500">
                      {project.sector}
                    </span>

                    <h3 className="mt-2 text-xl font-semibold text-neutral-900">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm text-neutral-600 line-clamp-2">
                      {project.summary}
                    </p>

                    <span className="mt-6 inline-block text-sm font-medium text-neutral-900 group-hover:underline">
                      Projeyi İncele →
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </section>
        </div>

        {/* RIGHT STICKY CTA */}
        <aside className="relative">
          <div className="sticky top-32 space-y-6 rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">

            <h3 className="text-xl font-semibold text-neutral-900">
              {service.title} İçin Teklif Al
            </h3>

            <p className="text-sm text-neutral-600">
              Projenin kapsamına göre özel olarak fiyatlandırılır.
            </p>

            {/* Pricing feel */}
            <div className="rounded-xl bg-neutral-50 p-4 text-sm text-neutral-700">
              <p className="font-medium text-neutral-900">
                Başlangıç Seviyesi
              </p>
              <p className="mt-1">
                Kurumsal projeler için uygun yapı
              </p>
            </div>

            <ul className="space-y-2 text-sm text-neutral-600">
              <li>• İhtiyaç analizi</li>
              <li>• UI/UX tasarım</li>
              <li>• Geliştirme & test</li>
              <li>• Yayın & destek</li>
            </ul>

            <Link
              href="/contact"
              className="block rounded-full bg-neutral-900 px-6 py-3 text-center text-sm font-medium text-white hover:bg-neutral-800 transition"
            >
              İletişime Geç
            </Link>

            <p className="text-xs text-neutral-400 text-center">
              Genellikle 24 saat içinde dönüş yapılır
            </p>
          </div>
        </aside>

      </div>
    </main>
  );
}
