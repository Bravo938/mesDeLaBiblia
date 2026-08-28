import { motion } from "framer-motion";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { LuBookOpenText } from "react-icons/lu";
import { FiSmartphone } from "react-icons/fi";
import { HiMiniSparkles } from "react-icons/hi2";
import { MdOutlineQrCodeScanner } from "react-icons/md";

function BibleDownload() {
  const playStoreUrl =
    "https://play.google.com/store/apps/details?id=com.sirma.mobile.bible.android&pli=1";

  const appStoreUrl =
    "https://apps.apple.com/us/app/bible/id282935706";

  return (
    <section
      id="biblia"
      className="relative overflow-hidden border-t border-cyan-400/10 bg-[#080d1a] py-20 sm:py-28"
    >
      {/* FONDOS */}

      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/5 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">

        {/* CONTENEDOR */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="led-border led-glow overflow-hidden rounded-3xl bg-[#0c1324]"
        >
          <div className="grid items-center gap-12 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:p-14">

            {/* CONTENIDO */}

            <div>

              {/* ICONO */}

              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 text-cyan-300">
                <LuBookOpenText size={22} />
              </div>

              {/* TITULO */}

              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
                Descargá la Biblia
              </h2>

              {/* TEXTO */}

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
                Hoy podés tener la Biblia gratis en tu celular.
              </p>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
                Elegí tu dispositivo y comenzá a leer.
              </p>

              {/* BOTONES */}

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">

                {/* GOOGLE PLAY */}

                <motion.a
                  href={playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    y: -3,
                    boxShadow: "0 0 30px rgba(34,211,238,0.2)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="group flex items-center gap-3 rounded-xl border border-cyan-400/30 bg-cyan-400/5 px-5 py-3.5 transition hover:border-cyan-400/60 hover:bg-cyan-400/10"
                >
                  <FaGooglePlay
                    size={22}
                    className="text-cyan-300"
                  />

                  <div className="text-left">
                    <span className="block text-[10px] font-medium uppercase tracking-wider text-slate-500">
                      Descargar en
                    </span>

                    <span className="block font-display text-sm font-semibold text-white">
                      Google Play
                    </span>
                  </div>
                </motion.a>

                {/* APP STORE */}

                <motion.a
                  href={appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    y: -3,
                    boxShadow: "0 0 30px rgba(139,92,246,0.2)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="group flex items-center gap-3 rounded-xl border border-violet-400/30 bg-violet-400/5 px-5 py-3.5 transition hover:border-violet-400/60 hover:bg-violet-400/10"
                >
                  <FaApple
                    size={24}
                    className="text-violet-300"
                  />

                  <div className="text-left">
                    <span className="block text-[10px] font-medium uppercase tracking-wider text-slate-500">
                      Descargar en
                    </span>

                    <span className="block font-display text-sm font-semibold text-white">
                      App Store
                    </span>
                  </div>
                </motion.a>

              </div>

              {/* PEQUEÑO MENSAJE */}

              <div className="mt-7 flex items-center gap-3 text-xs text-slate-500">
                <FiSmartphone
                  size={16}
                  className="text-cyan-400"
                />

                Disponible para Android y iPhone.
              </div>

            </div>

            {/* QR */}

            <div className="flex justify-center lg:justify-end">

              <motion.div
                whileHover={{
                  scale: 1.03,
                }}
                className="led-border relative rounded-3xl bg-[#070b17] p-5"
              >

                <div className="flex h-52 w-52 flex-col items-center justify-center rounded-2xl border border-white/5 bg-white p-5">

                  {/* QR */}

                  <div className="flex h-36 w-36 items-center justify-center bg-slate-100">

                    <div className="flex flex-col items-center gap-2 text-slate-400">

                      <MdOutlineQrCodeScanner
                        size={70}
                      />

                      <span className="text-[10px] font-bold uppercase tracking-widest">
                        Tu QR
                      </span>

                    </div>

                  </div>

                  <p className="mt-3 text-[10px] font-bold uppercase tracking-widest text-slate-700">
                    Escaneá para descargar
                  </p>

                </div>

                {/* GLOW */}

                <div className="pointer-events-none absolute -inset-3 -z-10 rounded-3xl bg-cyan-400/10 blur-2xl" />

              </motion.div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default BibleDownload;