export default function ContactPage() {
  return (
    <section className="min-h-screen bg-white pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-6">

        {/* Header */}
        <div className="mb-14">
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-900">
            Projenizi konuşalım
          </h1>
          <p className="mt-4 text-slate-600">
            Aşağıdaki formu doldurarak projeniz hakkında temel bilgileri paylaşabilirsiniz.
            En kısa sürede size geri dönüş sağlayacağım.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6">

          {/* Ad Soyad */}
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Ad Soyad
            </label>
            <input
              type="text"
              placeholder="Adınız ve soyadınız"
              className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-slate-900 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-700">
              E-posta Adresi
            </label>
            <input
              type="email"
              placeholder="ornek@mail.com"
              className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-slate-900 focus:outline-none"
            />
          </div>

          {/* Proje Adı */}
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Proje Adı
            </label>
            <input
              type="text"
              placeholder="Projenizin adı"
              className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-slate-900 focus:outline-none"
            />
          </div>

          {/* Sektör */}
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Sektör
            </label>
            <select
              className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-slate-900 focus:outline-none"
            >
              <option>Seçiniz</option>
              <option>Kurumsal</option>
              <option>E-ticaret</option>
              <option>SaaS</option>
              <option>Startup</option>
              <option>Eğitim</option>
              <option>Diğer</option>
            </select>
          </div>

          {/* Proje Açıklaması */}
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Proje Açıklaması
            </label>
            <textarea
              rows={5}
              placeholder="Projeniz hakkında kısa bir açıklama yazın"
              className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-slate-900 focus:outline-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-6 rounded-lg bg-slate-900 px-6 py-3 text-white hover:bg-slate-800 transition"
          >
            Talep Gönder
          </button>
        </form>

      </div>
    </section>
  );
}
