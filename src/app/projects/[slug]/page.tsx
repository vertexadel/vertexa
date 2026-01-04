import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

/* =========================
   SEO / METADATA (YENİ)
========================= */
export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Proje Bulunamadı",
    };
  }

  return {
    title: `${project.title} | Yusuf Yıldırım`,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [project.image],
    },
  };
}

/* =========================
   PAGE
========================= */
export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-32 space-y-32">

      
      

      {/* Case Study */}
      <section className="grid gap-16 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-semibold text-neutral-900">
            Problem
          </h3>
          <p className="mt-4 text-neutral-600 leading-relaxed">
            {project.problem}
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-neutral-900">
            Çözüm
          </h3>
          <p className="mt-4 text-neutral-600 leading-relaxed">
            {project.solution}
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-neutral-900">
            Sonuç
          </h3>
          <p className="mt-4 text-neutral-600 leading-relaxed">
            {project.result}
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {[
          "Modern UI/UX",
          "Yüksek performans",
          "SEO uyumlu yapı",
          "Ölçeklenebilir mimari",
        ].map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-neutral-200 bg-white p-6 text-center"
          >
            <p className="font-medium text-neutral-900">{item}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="rounded-3xl bg-neutral-900 px-10 py-16 text-center text-white">
        <h3 className="text-3xl font-bold">
          Benzer Bir Proje mi Planlıyorsun?
        </h3>
        <p className="mt-4 text-neutral-300">
          Bu projeye benzer bir çözümü senin için de hayata geçirebilirim.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex rounded-full bg-white px-10 py-4 text-sm font-medium text-neutral-900 hover:bg-neutral-200 transition"
        >
          İletişime Geç
        </Link>
      </section>

    </main>
  );
}
