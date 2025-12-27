import { useRef, useState } from "react";

export default function AboutSection() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  function toggleAudio() {
    if (!videoRef.current) return;

    const video = videoRef.current;

    video.muted = !video.muted;
    video.volume = 1;

    setMuted(video.muted);
  }

  return (
    <section
      id="sobre"
      className="
        relative
        w-full
        min-h-[calc(100vh-80px)]
        pt-20
        bg-black
        overflow-hidden
        flex
        items-center
        justify-center
      "
    >
      {/* FUNDO DESFOCADO */}
      <video
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          blur-2xl
          scale-110
          opacity-30
          hidden
          md:block
        "
        src="/videos/quem-somos.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* VÍDEO PRINCIPAL */}
      <video
        ref={videoRef}
        className="
          relative
          z-10
          max-h-[80vh]
          w-auto
          object-contain
          rounded-xl
          shadow-xl
        "
        src="/videos/quem-somos.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* BOTÃO DE ÁUDIO */}
      <button
        onClick={toggleAudio}
        className="
          absolute
          bottom-6
          right-6
          z-20
          bg-black/70
          backdrop-blur-md
          text-white
          px-4
          py-2
          rounded-full
          text-sm
          flex
          items-center
          gap-2
          hover:bg-black/90
          transition
        "
      >
        {muted ? "🔊 Ativar som" : "🔇 Silenciar"}
      </button>
    </section>
  );
}
