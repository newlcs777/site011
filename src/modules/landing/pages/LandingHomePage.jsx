import LandingHeader from "../ui/LandingHeader";
import HeroCarousel from "../sections/HeroCarousel";
import AboutSection from "../sections/AboutSection";
import LocationSection from "../sections/LocationSection";
import FooterSection from "../sections/FooterSection";

export default function LandingHomePage() {
  return (
    <>
      <LandingHeader />
      <HeroCarousel />

      <AboutSection />

      <section className="py-8 bg-black">
        <p className="text-center text-sm opacity-70 max-w-xl mx-auto px-4">
          Uma comunidade cristã que vive a fé de forma simples,
          prática e verdadeira.
        </p>
      </section>

      <LocationSection />
      <FooterSection />
    </>
  );
}
