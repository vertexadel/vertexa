  "use client";

  import { useEffect, useState } from "react";
  import Image from "next/image";
  import { projects } from "@/lib/projects";

  const filters = [
    { key: "all", label: "Tüm Projeler" },
    { key: "web-gelistirme", label: "Kurumsal Web Siteleri" },
    { key: "mobil-uygulama", label: "Mobil Uygulamalar" },
    { key: "ui-ux", label: "UI / UX" },
  ];

  const serviceLabels: Record<string, string> = {
    "web-gelistirme": "Web",
    "mobil-uygulama": "Mobil",
    "ui-ux": "UI / UX",
  };

  export default function ProjectsSection() {
    const [activeFilter, setActiveFilter] = useState("all");
    const [visibleProjects, setVisibleProjects] = useState(projects);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
      setIsFading(true);

      const timeout = setTimeout(() => {
        const nextProjects =
          activeFilter === "all"
            ? projects
            : projects.filter((project) =>
                project.services.includes(activeFilter)
              );

        setVisibleProjects(nextProjects);
        setIsFading(false);
      }, 200);

      return () => clearTimeout(timeout);
    }, [activeFilter]);

    return (
      <section id="projects" className="bg-white py-28 scroll-mt-32">

        <div className="mx-auto max-w-7xl px-6 space-y-20">

          {/* Header */}
          <div className="max-w-3xl space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
              Projeler
            </h2>

            <p className="text-neutral-600">
              Web, mobil ve dijital ürün alanlarında hayata geçirdiğim projeler.
            </p>

            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition
                    ${
                      activeFilter === filter.key
                        ? "bg-neutral-900 text-white"
                        : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                    }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div
            className={`grid gap-10 sm:grid-cols-2 lg:grid-cols-3 transition-opacity duration-300 ${
              isFading ? "opacity-0" : "opacity-100"
            }`}
          >
            {visibleProjects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-3xl"
              >
                {/* Image */}
                <div className="relative h-[420px] w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 transition group-hover:opacity-100" />
                </div>

                {/* Hover Tags */}
                <div className="pointer-events-none absolute top-4 left-4 flex flex-wrap gap-2 opacity-0 transition duration-300 group-hover:opacity-100">
                  {project.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-neutral-900 backdrop-blur"
                    >
                      {serviceLabels[service]}
                    </span>
                  ))}
                </div>

                {/* Bottom Info */}
                <div className="pointer-events-none absolute inset-0 flex items-end">
                  <div className="w-full p-6 transition-transform duration-500 group-hover:-translate-y-2 space-y-2">
                    <span className="inline-block rounded-full bg-white/90 px-4 py-1 text-xs font-medium text-neutral-900 backdrop-blur">
                      {project.sector}
                    </span>

                    <h3 className="text-lg font-semibold text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    );
  }
