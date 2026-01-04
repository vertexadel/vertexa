export type Service = {
  slug: string;
  title: string;
  description: string;
  content: string;
};

export const services: Service[] = [
  {
    slug: "web-gelistirme",
    title: "Web Geliştirme",
    description: "Modern ve ölçeklenebilir web çözümleri",
    content:
      "Kurumsal web siteleri, landing page’ler ve performans odaklı frontend mimarileri geliştiriyorum.",
  },
  {
    slug: "mobil-uygulama",
    title: "Mobil Uygulama",
    description: "iOS ve Android uygulamaları",
    content:
      "React Native ve modern teknolojilerle mobil uygulamalar geliştiriyorum.",
  },
  {
    slug: "ui-ux",
    title: "Ürün & UI/UX",
    description: "Kullanıcı deneyimi ve arayüz tasarımı",
    content:
      "Kullanıcı odaklı, sade ve sürdürülebilir UI/UX tasarımları oluşturuyorum.",
  },
];
