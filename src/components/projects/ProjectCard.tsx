import Link from "next/link";
import Image from "next/image";
import { Project } from "@/lib/projects";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition group-hover:opacity-100" />

        {/* Hover CTA */}
        <div className="pointer-events-none absolute inset-0 flex items-end justify-between p-6 opacity-0 transition group-hover:opacity-100">
          <span className="rounded-full bg-white/90 px-5 py-2 text-xs font-medium text-neutral-900 backdrop-blur">
            Projeyi İncele →
          </span>

          <span className="text-xs text-white/80">
            Case Study
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 p-6">
        {/* Top row */}
        <div className="flex items-center justify-between">
          {/* Sector badge */}
          <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600">
            {project.sector}
          </span>

          {/* Mini indicator */}
          <span className="text-xs text-neutral-400">
            Detaylı İncele
          </span>
        </div>

        <h3 className="text-xl font-semibold text-neutral-900 leading-snug">
          {project.title}
        </h3>

        <p className="text-sm text-neutral-600 line-clamp-2">
          {project.summary}
        </p>

        {/* Bottom action */}
        <div className="mt-2 flex items-center gap-2 text-sm font-medium text-neutral-900">
          <span className="h-1.5 w-1.5 rounded-full bg-neutral-900" />
          <span>Projeyi Gör</span>
        </div>
      </div>
    </Link>
  );
}
