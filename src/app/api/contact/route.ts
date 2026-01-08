import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone = "",
      sector = "",
      message,
      company, // honeypot
    } = body;

    // 🛑 Bot engelleme
    if (company) {
      return Response.json({ ok: true });
    }

    // 🛑 Zorunlu alanlar
    if (!name || !email || !message) {
      return Response.json({ ok: false }, { status: 400 });
    }

    await resend.emails.send({
      from: "Vertexa <info@vertexa.com.tr>",
      to: process.env.CONTACT_RECEIVER_EMAIL!,
      subject: `Yeni İletişim Talebi – ${name}`,
      replyTo: email,
      html: `
        <div style="font-family:Arial; line-height:1.6">
          <h2>Yeni İletişim Formu</h2>
          <p><strong>İsim:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefon:</strong> ${phone || "-"}</p>
          <p><strong>Kategori:</strong> ${sector || "-"}</p>
          <hr />
          <p><strong>Mesaj:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("MAIL ERROR:", error);
    return Response.json({ ok: false }, { status: 500 });
  }
}
