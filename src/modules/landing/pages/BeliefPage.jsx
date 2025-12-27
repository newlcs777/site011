import LandingHeader from "../ui/LandingHeader";
import BeliefSection from "../sections/BeliefSection";
import FooterSection from "../sections/FooterSection";

export default function BeliefPage() {
  return (
    <>
      <LandingHeader />

      <main className="pt-20 bg-black">
        <BeliefSection />
      </main>

      <FooterSection />
    </>
  );
}
