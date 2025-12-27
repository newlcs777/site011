import LandingHeader from "../ui/LandingHeader";
import AboutSection from "../sections/AboutSection";
import FooterSection from "../sections/FooterSection";

export default function AboutPage() {
  return (
    <>
      <LandingHeader />

      <AboutSection />

      {/* TEXTO ÚNICO, SEM CARD */}
      <section
        className="
          py-10
          bg-black
        "
      >
        <p
          className="
            max-w-xl
            mx-auto
            px-4
            text-center
            text-sm
            text-white/70
            leading-relaxed
          "
        >
          A 011 Church é uma comunidade cristã que vive a fé de forma simples,
          prática e verdadeira. Caminhamos juntos, cuidando de pessoas,
          fortalecendo famílias e servindo a cidade.
        </p>
      </section>

      <FooterSection />
    </>
  );
}
