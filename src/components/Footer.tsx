import Link from "next/link";
import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400">
      <div className="mx-auto max-w-7xl px-6 py-20 space-y-20">

        {/* TOP GRID */}
        <div className="grid gap-16 md:grid-cols-4">

          {/* BRAND */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">
              Yıldırım Yazılım ve Teknoloji
            </h3>
            <p className="text-sm text-neutral-500 leading-relaxed">
              Web, mobil ve dijital ürünlerde modern, sürdürülebilir ve
              performans odaklı çözümler üretiyorum.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">
              Hızlı Linkler
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#projects" className="hover:text-white transition">
                  Projeler
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  Çözümler
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition">
                  Hakkımda
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">
              İletişim
            </h4>
            <ul className="space-y-3 text-sm">
              <li>📧 vertex.office@gmail.com</li>
              <li>📞 +90 5314002057</li>
              <li>📍 Türkiye</li>
            </ul>
          </div>

          {/* FEEDBACK */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">
              Öneri / Şikayet
            </h4>
            <p className="mb-4 text-sm text-neutral-500">
              Görüşlerin benim için değerli.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full 
                         bg-neutral-900 px-6 py-3 text-sm font-medium text-white
                         hover:bg-neutral-800 transition"
            >
              Geri Bildirim Gönder
            </Link>
          </div>
        </div>

        {/* SOCIAL MEDIA */}
<div className="flex items-center gap-6">
  {/* Instagram */}
  <a
    href="https://www.instagram.com/vertexa.dev"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="group flex h-11 w-11 items-center justify-center rounded-full 
               bg-neutral-800 transition-all duration-300
               hover:bg-[#E1306C] hover:scale-110"
  >
    <FaInstagram className="text-white transition group-hover:blur-[1px]" />
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/KENDI_KULLANICI_ADIN"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="group flex h-11 w-11 items-center justify-center rounded-full 
               bg-neutral-800 transition-all duration-300
               hover:bg-[#0A66C2] hover:scale-110"
  >
    <FaLinkedinIn className="text-white transition group-hover:blur-[1px]" />
  </a>

  {/* GitHub */}
  <a
    href="https://github.com/KENDI_KULLANICI_ADIN"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
    className="group flex h-11 w-11 items-center justify-center rounded-full 
               bg-neutral-800 transition-all duration-300
               hover:bg-[#333] hover:scale-110"
  >
    <FaGithub className="text-white transition group-hover:blur-[1px]" />
  </a>

  {/* Twitter / X */}
  <a
    href="https://x.com/KENDI_KULLANICI_ADIN"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Twitter"
    className="group flex h-11 w-11 items-center justify-center rounded-full 
               bg-neutral-800 transition-all duration-300
               hover:bg-black hover:scale-110"
  >
    <FaTwitter className="text-white transition group-hover:blur-[1px]" />
  </a>
</div>


        {/* BOTTOM */}
        <div className="flex flex-col gap-6 border-t border-neutral-800 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Vertexa Yazılım ve Teknoloji.  
            Tüm hakları saklıdır.
          </p>

          <a
            href="#projects"
            className="inline-flex items-center rounded-full
                       bg-neutral-900 px-6 py-3 text-sm font-medium text-white
                       hover:bg-neutral-800 transition"
          >
            Çalışmaları Görüntüle
          </a>
        </div>

      </div>
    </footer>
  );
}
