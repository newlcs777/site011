import { Link } from "react-router-dom";
import { useState } from "react";

export default function LandingHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header
        className="
          fixed
          top-0
          left-0
          w-full
          z-40
          bg-black/90
          backdrop-blur-md
          border-b
          border-white/10
        "
      >
        <div
          className="
            max-w-6xl
            mx-auto
            px-4
            h-16
            flex
            items-center
            justify-between
          "
        >
          {/* LOGO */}
          <Link
            to="/"
            className="
              font-bold
              text-lg
              tracking-tight
              text-white
            "
          >
            011 Church
          </Link>

          {/* NAVEGAÇÃO DESKTOP */}
          <nav
            className="
              hidden
              md:flex
              items-center
              gap-6
              text-sm
              text-white/80
            "
          >
            <Link to="/sobre" className="hover:text-white">
              Sobre
            </Link>

            <Link to="/nosso-credo" className="hover:text-white">
              Nosso Credo
            </Link>

            <Link to="/onde-estamos" className="hover:text-white">
              Onde estamos
            </Link>
          </nav>

          {/* CTA DESKTOP */}
          <a
            href="https://011church.vercel.app/login"
            className="
              hidden
              md:inline-flex
              px-4
              py-2
              rounded-lg
              bg-white
              text-black
              text-sm
              font-semibold
            "
          >
            Acessar sistema
          </a>

          {/* BOTÃO MOBILE */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="
              md:hidden
              text-white
              text-2xl
            "
            aria-label="Abrir menu"
          >
            ☰
          </button>
        </div>
      </header>

      {/* MENU MOBILE */}
      {open && (
        <div
          className="
            fixed
            inset-0
            z-[999]
            bg-black/95
            backdrop-blur-md
            flex
            flex-col
            items-center
            justify-center
            gap-8
            text-white
          "
        >
          {/* FECHAR */}
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="
              absolute
              top-4
              right-4
              text-2xl
            "
            aria-label="Fechar menu"
          >
            ✕
          </button>

          <Link
            to="/sobre"
            onClick={() => setOpen(false)}
            className="text-lg"
          >
            Sobre
          </Link>

          <Link
            to="/nosso-credo"
            onClick={() => setOpen(false)}
            className="text-lg"
          >
            Nosso Credo
          </Link>

          <Link
            to="/onde-estamos"
            onClick={() => setOpen(false)}
            className="text-lg"
          >
            Onde estamos
          </Link>

          <a
            href="https://011church.vercel.app/login"
            onClick={() => setOpen(false)}
            className="
              mt-4
              px-6
              py-3
              rounded-lg
              bg-white
              text-black
              text-sm
              font-semibold
            "
          >
            Acessar sistema
          </a>
        </div>
      )}
    </>
  );
}
