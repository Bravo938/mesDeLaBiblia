
import { FaHeart } from "react-icons/fa";
import { LuBookOpenText } from "react-icons/lu";

function Footer() {
  return (
    <footer className="border-t border-cyan-400/10 bg-[#050812]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 sm:px-8 md:flex-row">

        <div className="flex items-center gap-3">

          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/5 text-cyan-300">
            <LuBookOpenText size={17} />
          </div>

          <div>
            <p className="font-display text-sm font-semibold text-white">
              Mes de la Biblia
            </p>

            <p className="text-[10px] tracking-[0.2em] text-slate-600">
              2026
            </p>
          </div>

        </div>

        <p className="flex items-center gap-2 text-xs text-slate-600">
          Hecho con

          <FaHeart
            size={13}
            className="text-violet-400"
          />

          para compartir el mensaje.
        </p>

      </div>
    </footer>
  );
}

export default Footer;