import { useEffect, useState } from "react";

const slides = [
  {
    title: "Uma igreja para viver a fé",
    subtitle:
      "Uma comunidade cristã comprometida com Jesus e com pessoas.",
    image: "/images/hero-1.jpg",
  },
  {
    title: "Crescer juntos em comunhão",
    subtitle:
      "Vivemos a fé de forma prática, caminhando lado a lado.",
    image: "/images/hero-2.jpg",
  },
  {
    title: "Servir a cidade com amor",
    subtitle:
      "Chamados para impactar vidas através do amor e do cuidado.",
    image: "/images/hero-3.jpg",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="
        relative
        h-screen
        w-full
        overflow-hidden
        bg-black
      "
    >
      {/* SLIDES */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`
            absolute
            inset-0
            transition-opacity
            duration-1000
            ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"}
          `}
        >
          {/* IMAGEM */}
          <img
            src={slide.image}
            alt={slide.title}
            className="
              w-full
              h-full
              object-cover
            "
          />

          {/* OVERLAY */}
          <div
            className="
              absolute
              inset-0
              bg-black/60
            "
          />

          {/* CONTEÚDO */}
          <div
            className="
              absolute
              inset-0
              flex
              items-center
            "
          >
            <div
              className="
                max-w-4xl
                mx-auto
                px-4
              "
            >
              <h1
                className="
                  text-4xl
                  md:text-5xl
                  font-bold
                  leading-tight
                "
              >
                {slide.title}
              </h1>

              <p
                className="
                  mt-4
                  text-base
                  md:text-lg
                  opacity-80
                  max-w-xl
                "
              >
                {slide.subtitle}
              </p>

              <a
                href="#sobre"
                className="
                  inline-block
                  mt-8
                  px-6
                  py-3
                  rounded-xl
                  bg-white
                  text-black
                  font-semibold
                  hover:opacity-90
                "
              >
                Conhecer a igreja
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* INDICADORES */}
      <div
        className="
          absolute
          bottom-6
          left-1/2
          -translate-x-1/2
          flex
          gap-2
          z-20
        "
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`
              w-3
              h-3
              rounded-full
              transition
              ${
                index === current
                  ? "bg-white"
                  : "bg-white/40"
              }
            `}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
