import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Rutas que agregaremos más adelante */}
      {/* 
      <Route path="/video-1" element={<Video1 />} />
      <Route path="/video-2" element={<Video2 />} />
      <Route path="/video-3" element={<Video3 />} />
      <Route path="/video-4" element={<Video4 />} />
      */}

      <Route
        path="*"
        element={
          <div className="flex min-h-screen items-center justify-center bg-[#F8F6F2] px-6">
            <div className="text-center">
              <h1 className="font-serif text-5xl font-bold text-[#3F3024]">
                404
              </h1>

              <p className="mt-4 text-lg text-[#6B625B]">
                Página no encontrada.
              </p>
            </div>
          </div>
        }
      />
    </Routes>
  );
}

export default PublicRoutes;