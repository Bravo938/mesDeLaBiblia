import { motion } from "framer-motion";

import { HiMiniSparkles } from "react-icons/hi2";
import { LuBookOpenText } from "react-icons/lu";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-cyan-400/10 bg-[#070b17]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">

        {/* LOGO */}
        <motion.a
          href="/"
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-3"
        >
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-400/10 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.15)]">
            <LuBookOpenText size={19} />

            <span className="absolute -right-1 -top-1">
              <HiMiniSparkles size={10} className="text-violet-400" />
            </span>
          </div>

          <div>
            <p className="font-display text-sm font-semibold tracking-wide text-white">
              MES DE LA BIBLIA
            </p>

            <p className="text-[10px] font-medium tracking-[0.25em] text-cyan-300/70">
              2026
            </p>
          </div>
        </motion.a>

        {/* NAV DESKTOP */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#inicio"
            className="text-sm font-medium text-slate-400 transition hover:text-cyan-300"
          >
            Inicio
          </a>

          <a
            href="#biblia"
            className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:border-cyan-400/50 hover:bg-cyan-400/10"
          >
            Comenzar a leer
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;