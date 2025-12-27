export default function HeroSection() {
  return (
    <section
      className="
        min-h-[85vh]           // ocupa quase a tela inteira
        flex                  // layout flex
        items-center          // centraliza vertical
        bg-black              // fundo escuro
      "
    >
      <div
        className="
          max-w-6xl            // largura maior que as outras seções
          mx-auto              // centraliza
          px-4                 // padding lateral
          grid                 // grid layout
          md:grid-cols-2       // duas colunas no desktop
          gap-12               // espaçamento entre colunas
          items-center         // alinha vertical
        "
      >
        {/* TEXTO */}
        <div>
          <h1
            className="
              text-4xl          // destaque principal
              md:text-5xl       // maior no desktop
              font-bold         // peso forte
              leading-tight     // quebra elegante
            "
          >
            Sistema Administrativo<br />
            da 011 Church
          </h1>

          <p
            className="
              mt-5              // espaço após título
              text-base         // tamanho padrão
              opacity-80        // suaviza
              max-w-md          // controla largura
            "
          >
            Uma plataforma para organizar ministérios,
            pessoas, escalas e comunicação em um só lugar.
          </p>

          <div
            className="
              mt-8              // espaço dos botões
              flex              // layout horizontal
              gap-4             // espaço entre botões
              flex-wrap         // quebra no mobile
            "
          >
            <a
              href="/login"
              className="
                px-6            // padding horizontal
                py-3            // padding vertical
                rounded-xl      // padrão 011
                bg-white        // fundo claro
                text-black      // texto escuro
                font-semibold   // destaque
                hover:opacity-90// feedback visual
              "
            >
              Acessar sistema
            </a>

            <a
              href="#sobre"
              className="
                px-6
                py-3
                rounded-xl
                border
                border-white/30
                text-white
                hover:border-white/60
              "
            >
              Conhecer a igreja
            </a>
          </div>
        </div>

        {/* PREVIEW DO SISTEMA */}
        <div
          className="
            bg-base-100         // fundo claro
            rounded-2xl         // padrão oficial
            h-[340px]           // altura fixa
            border
            border-base-300
            shadow-sm
            flex
            items-center
            justify-center
          "
        >
          {/* depois você troca por screenshot real */}
          <span
            className="
              text-sm
              opacity-60
            "
          >
            Preview do sistema 011
          </span>
        </div>
      </div>
    </section>
  );
}
