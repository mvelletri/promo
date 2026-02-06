// src/app/page.tsx

const PROMO = {
  period: "01/03/2026 a 31/03/2026",
  coverage: "Todo o território nacional",
  rulesUrl: "/regulamento.pdf",
  sacPhoneDisplay: "(28) 99917-1087",
  sacPhoneTel: "+5528999171087",
};

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#9B1C4B]/20 bg-white px-4 py-2 text-xs font-semibold text-[#9B1C4B] sm:text-sm">
      {children}
    </span>
  );
}

function PrimaryCTA() {
  return (
    <a
      href={PROMO.rulesUrl}
      target="_blank"
      rel="noreferrer"
      className="
        inline-flex w-full items-center justify-center
        rounded-full
        bg-[#9B1C4B] px-8 py-4
        text-sm font-extrabold text-white
        shadow-[0_18px_40px_rgba(155,28,75,0.25)]
        hover:bg-[#C4376A]
        transition
        sm:w-auto sm:text-base
      "
    >
      Regulamento completo (PDF)
    </a>
  );
}

function HowItWorksCard() {
  return (
    <div className="rounded-[28px] border border-[#9B1C4B]/15 bg-white/70 p-6 shadow-md">
      <div className="text-sm font-extrabold uppercase tracking-wide text-[#9B1C4B]">
        Como funciona
      </div>
      <ol className="mt-4 space-y-2 text-sm text-[#9B1C4B]/90 sm:text-base">
        <li>
          <strong>1.</strong> Compre qualquer <strong>Gel Construtor Beltrat</strong>
        </li>
        <li>
          <strong>2.</strong> Confira o fundo da parte interior do pote
        </li>
        <li>
          <strong>3.</strong> Achou a mensagem premiada? <strong>Ganhou!</strong>
        </li>
      </ol>
    </div>
  );
}

function FooterInline() {
  return (
    <footer className="mt-10 text-center text-xs text-[#9B1C4B]/70 sm:text-sm">
      Promoção válida de <strong>{PROMO.period}</strong> • {PROMO.coverage}
      <br />
      SAC Beltrat:{" "}
      <a className="underline" href={`tel:${PROMO.sacPhoneTel}`}>
        {PROMO.sacPhoneDisplay}
      </a>
    </footer>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FFF7FA] via-[#FDECF2] to-[#F8DCE6] text-[#9B1C4B]">
      {/* ======================
          MOBILE + TABLET (< lg)
          ====================== */}
      <section className="px-5 pb-12 pt-8 lg:hidden">
        <div className="mx-auto w-full max-w-md sm:max-w-xl md:max-w-2xl">
          <div className="flex justify-center">
            <img
              src="/wobbler.png"
              alt="Promoção Achou Ganhou Beltrat"
              className="
                w-[360px]
                sm:w-[420px]
                md:w-[480px]
                drop-shadow-[0_22px_55px_rgba(0,0,0,0.18)]
              "
            />
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <Chip>Promoção nacional</Chip>
            <Chip>Contemplação imediata</Chip>
            <Chip>Março/2026</Chip>
          </div>

          <h1 className="mt-6 text-center text-4xl font-extrabold leading-[0.95] sm:text-5xl">
            Achou,
            <br />
            ganhou!
          </h1>

          <p className="mt-4 text-center text-base leading-relaxed text-[#9B1C4B]/90 sm:text-lg">
            Compre um <strong>Gel Construtor Beltrat</strong> e confira o fundo do pote.
            Você pode encontrar a mensagem premiada e ganhar{" "}
            <strong>1 Gel</strong> ou uma <strong>visita exclusiva à fábrica</strong>.
          </p>

          <div className="mt-6 flex justify-center">
            <PrimaryCTA />
          </div>

          <div className="mt-8">
            <HowItWorksCard />
          </div>

          <div className="mt-6 text-center text-sm text-[#9B1C4B]/80 sm:text-base">
            Período: <strong>{PROMO.period}</strong> • {PROMO.coverage}
          </div>

          <FooterInline />
        </div>
      </section>

      {/* ======================
          DESKTOP (lg+)
          ✅ sem aspect fixo / sem footer absoluto
          ====================== */}
      <section className="hidden lg:flex min-h-screen w-full items-center justify-center px-10 py-10">
        <div
          className="
            relative w-full max-w-[1920px]
            rounded-[56px] bg-white shadow-xl overflow-hidden
          "
        >
          {/* Fundo suave */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFF7FA] via-[#FDECF2] to-[#F8DCE6]" />

          {/* Conteúdo (agora com altura livre) */}
          <div className="relative grid grid-cols-12 gap-10 p-14">
            {/* LEFT */}
            <div className="col-span-5 flex flex-col justify-center">
              <div className="flex flex-wrap gap-3">
                <Chip>Promoção nacional</Chip>
                <Chip>Contemplação imediata</Chip>
                <Chip>Março/2026</Chip>
              </div>

              <h1 className="mt-8 text-[64px] font-extrabold leading-[0.95]">
                Achou,
                <br />
                ganhou!
              </h1>

              <p className="mt-6 max-w-xl text-lg text-[#9B1C4B]/90">
                Compre um <strong>Gel Construtor Beltrat</strong> e confira o fundo do pote.
                Você pode encontrar a mensagem premiada e ganhar{" "}
                <strong>1 Gel</strong> ou uma <strong>visita exclusiva à fábrica</strong>.
              </p>

              <div className="mt-10">
                <PrimaryCTA />
              </div>

              <div className="mt-6">
                <HowItWorksCard />
              </div>

              <div className="mt-4 text-sm text-[#9B1C4B]/70">
                Período: <strong>{PROMO.period}</strong> • {PROMO.coverage}
              </div>
            </div>

            {/* RIGHT */}
            <div className="col-span-7 flex items-center justify-center">
              <img
                src="/wobbler.png"
                alt="Promoção Achou Ganhou Beltrat"
                className="
                  w-[620px]
                  xl:w-[740px]
                  2xl:w-[800px]
                  drop-shadow-[0_40px_80px_rgba(0,0,0,0.20)]
                "
              />
            </div>
          </div>

          {/* Footer agora dentro do fluxo (nunca cobre conteúdo) */}
          <footer className="relative border-t border-[#9B1C4B]/10 bg-white/70 px-14 py-5 text-sm text-[#9B1C4B]/70 backdrop-blur">
            <div className="flex items-center justify-between">
              <span>
                Promoção válida de <strong>{PROMO.period}</strong> • {PROMO.coverage}
              </span>
              <span>
                SAC Beltrat:{" "}
                <a className="underline" href={`tel:${PROMO.sacPhoneTel}`}>
                  {PROMO.sacPhoneDisplay}
                </a>
              </span>
            </div>
          </footer>
        </div>
      </section>
    </main>
  );
}
