import Hero from "@/components/hero/Hero";
import IndustriesSection from "@/components/industries/IndustriesSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import AboutSection from "@/components/about/AboutSection";
import ServicesSection from "@/components/services/ServicesSection";

/* =========================
   DICTIONARY (EN)
========================= */
const dictionary = {
  trust: [
    { value: "10+", label: "Completed Projects" },
    { value: "5+", label: "Industries Served" },
    { value: "100%", label: "Client Satisfaction" },
  ],
  approach: [
    {
      title: "Strategy",
      text:
        "Before starting any project, I clarify business goals, user needs, and technical requirements.",
    },
    {
      title: "Design & Development",
      text:
        "I build sustainable products using modern UI/UX principles and up-to-date technologies.",
    },
    {
      title: "Results & Scaling",
      text:
        "I deliver long-term value with performance, SEO, and maintenance-focused solutions.",
    },
  ],
  finalCta: {
    title: "Let’s Build a Strong Digital Product Together",
    description:
      "Get in touch to bring your idea to life or take your existing product to the next level.",
    button: "Start a Project",
  },
};

export default function HomeEN() {
  return (
    <main className="flex flex-col">

      {/* Hero */}
      <Hero />

      {/* Trust / Value Proposition */}
      <section className="bg-neutral-50 py-20 border-b border-neutral-100">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 md:grid-cols-3 text-center">
          {dictionary.trust.map((item) => (
            <div key={item.label}>
              <h3 className="text-3xl font-bold text-neutral-900">
                {item.value}
              </h3>
              <p className="mt-2 text-neutral-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <IndustriesSection />

      {/* Projects */}
      <ProjectsSection />

      {/* Approach / Values */}
      <section className="bg-neutral-900 py-28 text-white">
        <div className="mx-auto max-w-7xl px-6 grid gap-16 md:grid-cols-3">
          {dictionary.approach.map((item) => (
            <div key={item.title}>
              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>
              <p className="mt-4 text-neutral-300">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <AboutSection />

      {/* Services */}
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
