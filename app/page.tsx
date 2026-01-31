export default function Page() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Header */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-zinc-900" />
          <span className="text-sm font-semibold tracking-tight">Promo Demo</span>
        </div>

        <a
          href="#cta"
          className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
        >
          Falar agora
        </a>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-10 pt-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 inline-flex rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700">
              Landing page demo • rápida • objetiva
            </p>

            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Um título claro que explica seu valor em 1 frase.
            </h1>

            <p className="mt-4 text-base leading-relaxed text-zinc-600">
              Use esse espaço pra dizer <strong>o que você faz</strong>, <strong>pra quem</strong> e
              <strong> qual benefício principal</strong>. Sem enrolar.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="#cta"
                className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
              >
                Quero um orçamento
              </a>

              <a
                href="#beneficios"
                className="rounded-xl border border-zinc-200 px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
              >
                Ver benefícios
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-xs text-zinc-500">
              <span className="rounded-full border border-zinc-200 px-3 py-1">Resposta rápida</span>
              <span className="rounded-full border border-zinc-200 px-3 py-1">Sem compromisso</span>
              <span className="rounded-full border border-zinc-200 px-3 py-1">Atendimento premium</span>
            </div>
          </div>

          {/* Visual */}
          <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
            <div className="aspect-[4/3] w-full rounded-2xl bg-white shadow-sm" />
            <p className="mt-4 text-sm text-zinc-600">
              Aqui pode entrar uma imagem do produto/serviço, um mock, ou um print bonito.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="beneficios" className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-2xl font-semibold tracking-tight">Por que escolher a gente?</h2>
        <p className="mt-2 text-sm text-zinc-600">
          3–6 bullets diretos, focados no que o cliente ganha.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            { title: "Benefício 1", desc: "Uma frase curta explicando o benefício principal." },
            { title: "Benefício 2", desc: "Algo sobre qualidade, experiência ou agilidade." },
            { title: "Benefício 3", desc: "Algo sobre garantia, confiança ou resultado." },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social Proof */}
      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-2xl font-semibold tracking-tight">Prova social</h2>
          <p className="mt-2 text-sm text-zinc-600">
            Depoimentos curtos ou números (ex: NPS, entregas, avaliações).
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { name: "Cliente A", text: "“Experiência excelente do começo ao fim.”" },
              { name: "Cliente B", text: "“Rápido, organizado e com acabamento impecável.”" },
              { name: "Cliente C", text: "“Atendimento acima da média. Recomendo.”" },
            ].map((t) => (
              <div key={t.name} className="rounded-2xl border border-zinc-200 bg-white p-6">
                <p className="text-sm text-zinc-700">{t.text}</p>
                <p className="mt-4 text-xs font-medium text-zinc-500">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-zinc-200 bg-white p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Pronto pra dar o próximo passo?
              </h2>
              <p className="mt-2 text-sm text-zinc-600">
                Coloque aqui um reforço de confiança + o que acontece depois do clique.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <a
                href="https://wa.me/5500000000000?text=Olá!%20Quero%20saber%20mais."
                className="rounded-xl bg-zinc-900 px-5 py-3 text-center text-sm font-medium text-white hover:bg-zinc-800"
                target="_blank"
                rel="noreferrer"
              >
                Chamar no WhatsApp
              </a>

              <a
                href="#beneficios"
                className="rounded-xl border border-zinc-200 px-5 py-3 text-center text-sm font-medium text-zinc-900 hover:bg-zinc-50"
              >
                Revisar benefícios
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-2 border-t border-zinc-200 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Promo Demo</span>
          <span>Contato • Termos • Privacidade</span>
        </div>
      </footer>
    </main>
  );
}
