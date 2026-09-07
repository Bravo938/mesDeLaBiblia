import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BibleDownload from "../components/BibleDownload";
import Footer from "../components/Footer";
import WeekOne from "../components/WeekOne";
import FloatingDownloadButtons from "../components/FloatingDownloadButtons";

function Home() {
  return (
     <div className="min-h-screen bg-[#070b17] text-white">

      <Navbar />

      <main>

        {/* DOMINGO 0 */}
        <Hero />
        

        {/* DOMINGO 1 */}
        <WeekOne />

      </main>

      {/* DESCARGA SIEMPRE VISIBLE */}
      <FloatingDownloadButtons />

      <Footer />

    </div>
  );
}

export default Home;