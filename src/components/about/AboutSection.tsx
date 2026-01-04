export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-20 lg:grid-cols-2 items-center">

          {/* LEFT — STORY */}
          <div className="space-y-8">
            <span className="inline-block rounded-full bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-700">
              Hakkımda
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight">
              Dijital ürünleri sadece geliştirmiyorum,  
              <span className="block text-neutral-600">
                iş hedeflerine dönüştürüyorum.
              </span>
            </h2>

            <p className="text-lg text-neutral-600 leading-relaxed">
              Ben <strong>Yusuf Yıldırım</strong>. Ürün odaklı bir yaklaşımla,
              markaların ve girişimlerin dijital dünyada güçlü, güvenilir ve
              sürdürülebilir şekilde konumlanmasını sağlayan web siteleri ve
              uygulamalar geliştiriyorum.
            </p>

            <p className="text-neutral-600 leading-relaxed">
              Tasarım, performans ve kullanıcı deneyimini tek bir çatı altında
              ele alarak; bugün çalışan, yarın da ölçeklenebilen çözümler
              üretiyorum.
            </p>

            {/* CTA */}
            <a
              href="#projects"
              className="inline-flex items-center rounded-full
                         bg-neutral-900 px-8 py-4 text-sm font-medium text-white
                         hover:bg-neutral-800 transition"
            >
              Çalışmaları Görüntüle
            </a>
          </div>

          {/* RIGHT — PRINCIPLES */}
          <div className="grid gap-6">
            {[
              {
                title: "Temiz & Sürdürülebilir Mimari",
                desc:
                  "Uzun vadede bakım maliyeti düşük, okunabilir ve ölçeklenebilir kod yapıları.",
              },
              {
                title: "Performans & SEO Önceliği",
                desc:
                  "Hızlı açılan, arama motorlarıyla uyumlu ve kullanıcıyı yormayan ürünler.",
              },
              {
                title: "Tasarım + Mühendislik Dengesi",
                desc:
                  "Sadece güzel değil, aynı zamanda işlevsel ve ölçülebilir arayüzler.",
              },
              {
                title: "Uzun Vadeli İş Ortaklığı",
                desc:
                  "Proje teslimiyle bitmeyen, birlikte büyümeyi hedefleyen yaklaşım.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="
                  group rounded-2xl border border-neutral-200 bg-neutral-50 p-8
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-xl
                "
              >
                <h3 className="text-lg font-semibold text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
