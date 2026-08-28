import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BibleDownload from "../components/BibleDownload";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-[#070b17] text-white">
      <Navbar />

      <main>
        <Hero />

        <BibleDownload />
      </main>

      <Footer />
    </div>
  );
}

export default Home;