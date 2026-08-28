import { motion } from "framer-motion";
import { FaArrowDownLong } from "react-icons/fa6";
import { LuBookOpenText } from "react-icons/lu";
import { HiMiniSparkles } from "react-icons/hi2";
import { GoZap } from "react-icons/go";

function Hero() {
  const scrollToBible = () => {
    document.getElementById("biblia")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="inicio"
      className="neon-grid relative min-h-[calc(100vh-4rem)] overflow-hidden"
    >
      {/* LUCES DE FONDO */}

      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="pointer-events-none absolute -left-40 top-1/3 h-[400px] w-[400px] rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-5 py-20 sm:px-8 lg:min-h-[calc(100vh-4rem)] lg:grid-cols-2 lg:py-24">

        {/* TEXTO */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* BADGE */}

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-300"
          >
            <HiMiniSparkles size={14} />

            Mes de la Biblia 2026
          </motion.div>

          {/* TITULO */}

          <h1 className="max-w-3xl font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">

            Descubrí

            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent text-glow">
              la Biblia.
            </span>
          </h1>

          {/* VERSICULO */}

          <div className="mt-7 border-l-2 border-cyan-400/70 pl-5">

            <p className="font-display text-xl font-medium leading-relaxed text-slate-200 sm:text-2xl">
              “Conocerán la verdad,
              <br />
              y la verdad los hará libres.”
            </p>

            <p className="mt-2 text-sm font-semibold tracking-widest text-cyan-400">
              JUAN 8:32
            </p>

          </div>

          {/* MENSAJE BREVE */}

          <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
            Durante siglos, personas de diferentes culturas, idiomas y épocas
            estuvieron dispuestas a preservar, traducir y compartir la Biblia.
          </p>

          <p className="mt-4 max-w-xl text-base font-medium leading-7 text-slate-300">
            Hoy vos podés leerla gratuitamente desde tu celular.
          </p>

          {/* BOTON */}

          <div className="mt-9">

            <motion.button
              whileHover={{
                y: -3,
                boxShadow: "0 0 30px rgba(34,211,238,0.25)",
              }}
              whileTap={{ scale: 0.97 }}
              onClick={scrollToBible}
              className="group inline-flex items-center gap-3 rounded-xl border border-cyan-300/40 bg-cyan-400/10 px-6 py-3.5 font-semibold text-cyan-200 backdrop-blur-sm transition hover:border-cyan-300/70 hover:bg-cyan-400/15"
            >
              <LuBookOpenText size={19} />

              Descargar la Biblia

              <FaArrowDownLong
                size={17}
                className="transition-transform group-hover:translate-y-1"
              />
            </motion.button>

          </div>

        </motion.div>

        {/* LIBRO / ELEMENTO VISUAL */}

        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >

          <div className="relative">

            {/* GLOW */}

            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-full bg-cyan-400/20 blur-[80px]"
            />

            {/* TARJETA */}

            <div className="led-border led-glow relative w-[290px] rounded-[2rem] bg-[#0c1324]/90 p-1 sm:w-[330px]">

              <div className="rounded-[1.8rem] border border-white/5 bg-[#090f1d] p-8">

                {/* ICONO */}

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/5 text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.12)]">
                  <LuBookOpenText
                    size={48}
                    strokeWidth={1.2}
                  />
                </div>

                {/* TEXTO */}

                <div className="mt-8 text-center">

                  <p className="font-display text-2xl font-semibold text-white">
                    La Biblia
                  </p>

                  <p className="mt-2 text-sm text-slate-500">
                    Una historia que sigue transformando vidas.
                  </p>

                </div>

                {/* LINEA LED */}

                <div className="mx-auto my-7 h-px w-24 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

                {/* FRASE */}

                <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">

                  <GoZap
                    size={13}
                    className="text-cyan-400"
                  />

                  Descubrila

                  <HiMiniSparkles
                    size={13}
                    className="text-violet-400"
                  />

                </div>

              </div>
            </div>

            {/* PUNTOS DECORATIVOS */}

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute -right-5 top-12 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.8)]"
            />

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute -bottom-3 left-8 h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_18px_rgba(139,92,246,0.8)]"
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;