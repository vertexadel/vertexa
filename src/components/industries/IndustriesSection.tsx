import Image from "next/image";

const industries = [
  {
    title: "Kurumsal Şirketler",
    description:
      "Kurumsal yapılar için güvenilir, ölçeklenebilir ve sürdürülebilir dijital çözümler.",
    icon: "/building.svg",
  },
  {
    title: "E-Ticaret",
    description:
      "Dönüşüm odaklı, hızlı ve kullanıcı deneyimi güçlü e-ticaret altyapıları.",
    icon: "/shopping.svg",
  },
  {
    title: "SaaS & Girişimler",
    description:
      "Ürün odaklı düşünen, büyümeye hazır yazılım ve startup projeleri.",
    icon: "/rocket.svg",
  },
  {
    title: "Eğitim & Platformlar",
    description:
      "Online eğitim, içerik ve kullanıcı yönetimi gerektiren dijital platformlar.",
    icon: "/education.svg",
  },
  {
    title: "Fintech & Teknoloji",
    description:
      "Güvenlik, performans ve veri odaklı teknoloji projeleri.",
    icon: "/shield.svg",
  },
  {
    title: "Özel Projeler",
    description:
      "Standartların dışına çıkan, özel ihtiyaçlara göre tasarlanan çözümler.",
    icon: "/layers.svg",
  },
];

export default function IndustriesSection() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
            Faaliyet Alanlarımız
          </h2>
          <p className="mt-4 text-slate-600">
            Farklı sektörlerde edindiğimiz deneyimle, ihtiyaca özel dijital çözümler üretiyoruz.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-slate-200 p-8 transition hover:shadow-md"
            >
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-md bg-slate-100">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={20}
                  height={20}
                />
              </div>

              <h3 className="text-lg font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
