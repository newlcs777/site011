import { FaMapMarkerAlt } from "react-icons/fa";

import LandingHeader from "../ui/LandingHeader";
import LocationSection from "../sections/LocationSection";
import FooterSection from "../sections/FooterSection";

export default function LocationPage() {
  return (
    <>
      <LandingHeader />

      {/* HERO EM VÍDEO */}
      <LocationSection />

      {/* CONTEÚDO DA PÁGINA */}
      <main className="bg-black text-white">
        {/* INTRO */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-3xl font-semibold mb-4">
              Onde estamos
            </h1>

            <p className="text-sm leading-relaxed opacity-80 max-w-3xl">
              Nos reunimos presencialmente no Capão Redondo, Zona Sul de
              São Paulo, em um ambiente simples e acolhedor, onde pessoas
              se encontram para viver a fé e caminhar juntas.
            </p>
          </div>
        </section>

        {/* LOCALIZAÇÃO */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-semibold mb-4">
              Capão Redondo — Zona Sul de São Paulo
            </h2>

            <p className="text-sm leading-relaxed opacity-80 max-w-3xl mb-4">
              Nosso espaço foi pensado para receber pessoas de todas as
              idades, promovendo comunhão, cuidado e crescimento espiritual.
              Aqui vivemos momentos de adoração, ensino e relacionamento.
            </p>

            <p className="text-sm text-white/60 mb-4">
              Estr. de Itapecerica, 1449 — Vila das Belezas<br />
              São Paulo · SP · 05835-005
            </p>

            <a
              href="https://www.google.com/maps?q=Estr.+de+Itapecerica,+1449+-+Vila+das+Belezas,+São+Paulo"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                text-sm
                text-white
                underline
                hover:opacity-80
                transition
              "
            >
              <FaMapMarkerAlt size={14} />
              Ver no Google Maps
            </a>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}
