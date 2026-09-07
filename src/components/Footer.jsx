import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { LuHeart } from "react-icons/lu";

function Footer() {
  const redes = [
    {
      nombre: "Ríos de Vida",
      usuario: "@riosdevidamonteros",
      url: "https://www.instagram.com/riosdevidamonteros/",
      color:
        "border-cyan-400/15 bg-cyan-400/5 hover:border-cyan-400/40 hover:bg-cyan-400/10",
      iconColor: "text-cyan-300",
    },
    {
      nombre: "Jóvenes RDV",
      usuario: "@jovenes.rdv_",
      url: "https://www.instagram.com/jovenes.rdv_/",
      color:
        "border-violet-400/15 bg-violet-400/5 hover:border-violet-400/40 hover:bg-violet-400/10",
      iconColor: "text-violet-300",
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-[#050914]">

      {/* LUCES SUTILES */}

      <div className="pointer-events-none absolute left-1/4 top-0 h-64 w-64 rounded-full bg-cyan-400/[0.03] blur-[100px]" />

      <div className="pointer-events-none absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-violet-500/[0.03] blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">

        {/* CONTENIDO PRINCIPAL */}

        <div className="flex flex-col items-center text-center">

          {/* LOGO */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 shadow-[0_10px_40px_rgba(0,0,0,0.2)]">
              <img
                src="/logoRDV-Photoroom.png"
                alt="Ríos de Vida"
                className="h-full w-full object-contain"
              />
            </div>
          </motion.div>

          {/* NOMBRE */}

          <h2 className="font-display text-xl font-semibold text-white">
            Ríos de Vida
          </h2>

          <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
            Mes de la Biblia 2026
          </p>

          <p className="mt-4 max-w-lg text-sm leading-7 text-slate-500">
            Una invitación a descubrir la Biblia, conocer su historia
            y comenzar a leerla por vos mismo.
          </p>

        </div>

        {/* REDES */}

        <div className="mx-auto mt-10 grid max-w-xl gap-3 sm:grid-cols-2">

          {redes.map((red) => (
            <motion.a
              key={red.nombre}
              href={red.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`group flex items-center gap-4 rounded-2xl border p-4 transition ${red.color}`}
            >

              {/* ICONO */}

              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-black/20 ${red.iconColor}`}
              >
                <FaInstagram size={22} />
              </div>

              {/* TEXTO */}

              <div className="min-w-0 text-left">

                <p className="font-display text-sm font-semibold text-white">
                  {red.nombre}
                </p>

                <p className="mt-0.5 truncate text-xs text-slate-500 transition group-hover:text-slate-400">
                  {red.usuario}
                </p>

              </div>

            </motion.a>
          ))}

        </div>

        {/* SEPARADOR */}

        <div className="mx-auto mt-12 h-px max-w-4xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* DESARROLLADOR */}

        <div className="mt-7 flex flex-col items-center justify-center gap-2 text-center">

          <div className="flex items-center gap-1.5 text-xs text-slate-600">

            <span>Desarrollado con</span>

            <LuHeart
              size={12}
              className="text-cyan-400/60"
            />

            <span>por</span>

          </div>

          <motion.a
            href="https://www.instagram.com/elroisystems/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -1 }}
            className="font-display text-sm font-semibold text-slate-400 transition hover:text-cyan-300"
          >
            ElRoi Systems
          </motion.a>

        </div>

        {/* COPYRIGHT */}

        <p className="mt-5 text-center text-[10px] uppercase tracking-[0.18em] text-slate-700">
          © 2026 Ríos de Vida · Mes de la Biblia
        </p>

      </div>
    </footer>
  );
}

export default Footer;