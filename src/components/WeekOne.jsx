/*agregue esto el domingo 6*/
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaQuoteLeft,
} from "react-icons/fa6";
import { LuBookOpenText } from "react-icons/lu";
import { HiMiniSparkles } from "react-icons/hi2";

function WeekOne() {
  return (
    <section
      id="semana-1"
      className="relative overflow-hidden border-t border-cyan-400/10 bg-[#070b17] py-20 pb-36 sm:py-28 sm:pb-40"
    >

      {/* LUCES DE FONDO */}

      <div className="pointer-events-none absolute left-0 top-1/4 h-[400px] w-[400px] rounded-full bg-cyan-400/5 blur-[120px]" />

      <div className="pointer-events-none absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-violet-500/5 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">

        {/* CABECERA */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >

          {/* ETIQUETA */}

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-violet-300">
            <HiMiniSparkles size={14} />

            Esta semana
          </div>

          {/* TITULO */}

          <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-5xl">

            ¿Qué tiene la Biblia para que haya personas dispuestas a{" "}

            <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
              perderlo todo
            </span>

            {" "}por ella?
          </h2>

          {/* LINEA */}

          <div className="mx-auto mt-7 h-px w-24 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

        </motion.div>

        {/* CONTENIDO */}

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">

          {/* HISTORIA */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="led-border led-glow rounded-3xl bg-[#0c1324] p-7 sm:p-10"
          >

            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 text-cyan-300">
              <LuBookOpenText size={23} />
            </div>

            <h3 className="mt-7 font-display text-2xl font-semibold text-white sm:text-3xl">
              Un libro que muchos consideraron demasiado valioso para perderlo.
            </h3>

            <p className="mt-6 text-base leading-8 text-slate-400">
              A lo largo de la historia, hubo personas que arriesgaron su
              libertad, su seguridad y hasta su propia vida para conservar,
              traducir o compartir la Biblia.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-400">
              No lo hicieron porque fuera un libro cualquiera. Para ellos,
              sus palabras tenían un valor que justificaba el riesgo.
            </p>

            <p className="mt-5 text-lg font-medium leading-8 text-white">
              Entonces aparece una pregunta:
            </p>

            <div className="mt-5 rounded-2xl border border-cyan-400/10 bg-cyan-400/5 p-5">

              <p className="font-display text-lg font-semibold leading-7 text-cyan-200 sm:text-xl">
                ¿Qué encontraron en este libro para considerarlo tan valioso?
              </p>

            </div>

          </motion.div>

          {/* VERSICULO */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative flex flex-col justify-center overflow-hidden rounded-3xl border border-violet-400/15 bg-gradient-to-br from-[#11152a] to-[#0a0f1d] p-7 sm:p-10"
          >

            {/* DECORACION */}

            <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />

            <FaQuoteLeft
              size={30}
              className="relative text-violet-400/70"
            />

            <p className="relative mt-7 font-display text-2xl font-medium leading-relaxed text-white sm:text-3xl">
              “La palabra de nuestro Dios permanece para siempre.”
            </p>

            <p className="relative mt-5 text-sm font-bold tracking-[0.2em] text-cyan-400">
              ISAÍAS 40:8
            </p>

            <div className="relative mt-8 h-px w-full bg-gradient-to-r from-violet-400/40 via-cyan-400/20 to-transparent" />

            <p className="relative mt-7 text-sm leading-7 text-slate-500">
              Durante este mes vamos a descubrir por qué este libro ha
              atravesado generaciones y sigue siendo leído hoy.
            </p>

          </motion.div>

        </div>

        {/* CIERRE */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-12 max-w-2xl text-center"
        >

          <p className="text-base leading-7 text-slate-400">
            No te quedes solamente con lo que otros dicen.
          </p>

          <p className="mt-2 font-display text-xl font-semibold text-white sm:text-2xl">
            Descubrilo vos mismo.
          </p>

          <motion.a
            whileHover={{
              y: -2,
              boxShadow: "0 0 30px rgba(34,211,238,0.18)",
            }}
            whileTap={{ scale: 0.97 }}
            href="#biblia"
            className="mt-7 inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/5 px-5 py-3.5 font-semibold text-cyan-200 transition hover:border-cyan-400/60 hover:bg-cyan-400/10"
          >
            <LuBookOpenText size={18} />

            Empezá por Juan

            <FaArrowRight size={15} />
          </motion.a>

        </motion.div>

      </div>
    </section>
  );
}

export default WeekOne;