export type Project = {
  id: number;
  slug: string;
  title: string;
  sector: string;
  summary: string;
  image: string;
  problem: string;
  solution: string;
  result: string;

  // YENİ: bu proje hangi hizmetlerle alakalı?
  services: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "kurumsal-web-sitesi",
    title: "Kurumsal Web Sitesi",
    sector: "Kurumsal",
    summary: "Modern, hızlı ve SEO uyumlu kurumsal web sitesi.",
    image: "/images/logo2.jpg",
    problem:
      "Mevcut web sitesi hem teknik olarak eskiydi hem de marka algısını yeterince yansıtmıyordu.",
    solution:
      "Modern tasarım dili, performans odaklı frontend mimarisi ve SEO uyumlu yapı oluşturuldu.",
    result:
      "Sayfa yüklenme süresi iyileştirildi, ziyaretçi etkileşimi ve marka güveni artırıldı.",

    services: ["web-gelistirme", "ui-ux"],
  },
  {
    id: 2,
    slug: "mobil-uygulama-arayuzu",
    title: "Mobil Uygulama Arayüzü",
    sector: "Mobil",
    summary: "iOS ve Android için kullanıcı odaklı mobil arayüz tasarımı.",
    image: "/images/logo2.jpg",
    problem:
      "0 dan kendi oluşturduğumz ekip ile birlikte yapılmıştır",
    solution:
      "Müşteri İle Gerekli Toplantılar Yapıldı Ve Müşteri İle Kordine Halde Tamamladık.",
    result:
      "Kullanıcı memnuniyeti ve uygulama içi etkileşim arttı.",

    services: ["mobil-uygulama", "ui-ux"],
  },
  {
    id: 3,
    slug: "landing-page",
    title: "Landing Page",
    sector: "Pazarlama",
    summary: "Dönüşüm odaklı ürün tanıtım sayfası.",
    image: "/images/logo2.jpg",
    problem: "Landing page dönüşüm oranı düşüktü ve mesaj net değildi.",
    solution: "Net CTA’lar ve ikna edici sayfa kurgusu oluşturuldu.",
    result: "Dönüşüm oranı anlamlı şekilde artırıldı.",

    services: ["web-gelistirme", "ui-ux"],
  },
  {
    id: 4,
    slug: "kurumsal-web-sitesi",
    title: "Kurumsal Web Sitesi",
    sector: "Kurumsal",
    summary: "Modern, hızlı ve SEO uyumlu kurumsal web sitesi.",
    image: "/images/1.png",
    problem:
      "Mevcut web sitesi hem teknik olarak eskiydi hem de marka algısını yeterince yansıtmıyordu.",
    solution:
      "Modern tasarım dili, performans odaklı frontend mimarisi ve SEO uyumlu yapı oluşturuldu.",
    result:
      "Sayfa yüklenme süresi iyileştirildi, ziyaretçi etkileşimi ve marka güveni artırıldı.",

    services: ["web-gelistirme", "ui-ux"],
  },
  {
    id: 5,
    slug: "landing-page",
    title: "Landing Page",
    sector: "Pazarlama",
    summary: "Dönüşüm odaklı ürün tanıtım sayfası.",
    image: "/images/1.png",
    problem: "Landing page dönüşüm oranı düşüktü ve mesaj net değildi.",
    solution: "Net CTA’lar ve ikna edici sayfa kurgusu oluşturuldu.",
    result: "Dönüşüm oranı anlamlı şekilde artırıldı.",

    services: ["web-gelistirme", "ui-ux"],
  },
  {
    id: 6,
    slug: "kurumsal-web-sitesi",
    title: "Kurumsal Web Sitesi",
    sector: "Kurumsal",
    summary: "Modern, hızlı ve SEO uyumlu kurumsal web sitesi.",
    image: "/images/tekbirlogo.png",
    problem:
      "Mevcut web sitesi hem teknik olarak eskiydi hem de marka algısını yeterince yansıtmıyordu.",
    solution:
      "Modern tasarım dili, performans odaklı frontend mimarisi ve SEO uyumlu yapı oluşturuldu.",
    result:
      "Sayfa yüklenme süresi iyileştirildi, ziyaretçi etkileşimi ve marka güveni artırıldı.",

    services: ["web-gelistirme", "ui-ux"],
  },
  {
    id: 7,
    slug: "mobil-uygulama-arayuzu",
    title: "Mobil Uygulama Arayüzü",
    sector: "Mobil",
    summary: "iOS ve Android için kullanıcı odaklı mobil arayüz tasarımı.",
    image: "/images/tekbirlogo.png",
    problem:
      "Uygulama arayüzü karmaşıktı ve kullanıcılar temel aksiyonları bulmakta zorlanıyordu.",
    solution:
      "Kullanıcı akışları sadeleştirildi ve modern UI prensipleri uygulandı.",
    result:
      "Kullanıcı memnuniyeti ve uygulama içi etkileşim arttı.",

    services: ["mobil-uygulama", "ui-ux"],
  },
  {
    id: 8,
    slug: "landing-page",
    title: "Landing Page",
    sector: "Pazarlama",
    summary: "Dönüşüm odaklı ürün tanıtım sayfası.",
    image: "/images/tekbirlogo.png",
    problem: "Landing page dönüşüm oranı düşüktü ve mesaj net değildi.",
    solution: "Net CTA’lar ve ikna edici sayfa kurgusu oluşturuldu.",
    result: "Dönüşüm oranı anlamlı şekilde artırıldı.",

    services: ["web-gelistirme", "ui-ux"],
  },
];
