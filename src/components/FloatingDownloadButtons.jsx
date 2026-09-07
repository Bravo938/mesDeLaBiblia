/*agregue esto el domingo 6*/
 import { motion } from "framer-motion";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

function FloatingDownloadButtons() {
  const playStoreUrl =
    "https://play.google.com/store/apps/details?id=com.sirma.mobile.bible.android&pli=1";

  const appStoreUrl =
    "https://apps.apple.com/us/app/bible/id282935706";

  return (
    <div className="fixed bottom-4 left-1/2 z-[100] w-[calc(100%-24px)] max-w-xl -translate-x-1/2 sm:bottom-6">
      
      <div className="led-border overflow-hidden rounded-2xl bg-[#090f1d]/95 p-2 shadow-[0_10px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl">

        <div className="flex items-center gap-2">

          {/* TEXTO */}

          <div className="hidden items-center gap-2 px-3 sm:flex">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
              <FiDownload size={17} />
            </div>

            <div className="whitespace-nowrap">
              <p className="text-[10px] font-medium uppercase tracking-wider text-slate-500">
                Tenela en tu celular
              </p>

              <p className="font-display text-xs font-semibold text-white">
                Descargá la Biblia
              </p>
            </div>
          </div>

          {/* GOOGLE PLAY */}

          <motion.a
            href={playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="flex min-w-0 flex-1 items-center justify-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/5 px-3 py-2.5 transition hover:border-cyan-400/50 hover:bg-cyan-400/10"
          >
            <FaGooglePlay
              size={18}
              className="shrink-0 text-cyan-300"
            />

            <div className="text-left">
              <span className="hidden text-[9px] uppercase tracking-wide text-slate-500 sm:block">
                Descargar en
              </span>

              <span className="block text-xs font-semibold text-white sm:text-sm">
                Google Play
              </span>
            </div>
          </motion.a>

          {/* APP STORE */}

          <motion.a
            href={appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="flex min-w-0 flex-1 items-center justify-center gap-2 rounded-xl border border-violet-400/20 bg-violet-400/5 px-3 py-2.5 transition hover:border-violet-400/50 hover:bg-violet-400/10"
          >
            <FaApple
              size={20}
              className="shrink-0 text-violet-300"
            />

            <div className="text-left">
              <span className="hidden text-[9px] uppercase tracking-wide text-slate-500 sm:block">
                Descargar en
              </span>

              <span className="block text-xs font-semibold text-white sm:text-sm">
                App Store
              </span>
            </div>
          </motion.a>

        </div>
      </div>
    </div>
  );
}

export default FloatingDownloadButtons;