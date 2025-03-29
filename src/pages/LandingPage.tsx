import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LandingPage = () => {
  const navigate = useNavigate();
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  // Get the current background image based on hover state
  const getBackgroundImage = () => {
    if (hoveredSection === "esports") {
      return 'url("/falconsEWC.svg")';
    } else if (hoveredSection === "creators") {
      return 'url("/falconsContent.jpg")';
    } else {
      return 'url("/falconWallpaper.jpg")';
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          filter: hoveredSection
            ? "brightness(0.4) saturate(1.2)"
            : "brightness(0.3)",
          scale: hoveredSection ? 1.05 : 1,
        }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage: getBackgroundImage(),
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Logo/Team Name Overlay */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
        animate={{
          scale: hoveredSection ? 0.9 : 1,
          opacity: hoveredSection ? 0.8 : 1,
        }}
        transition={{ duration: 1 }}
      >
        <img src="/logo.avif" alt="Falcon Team Logo" className="w-64 h-auto" />
      </motion.div>

      {/* Diagonal Split Sections */}
      <div className="relative h-screen z-10">
        {/* Left section (top-left) */}
        <motion.div
         initial={{ opacity: 0, clipPath: "polygon(0 0, 0 0, 0 0)" }}
         animate={{
           opacity: 1,
           clipPath: hoveredSection === "creators" 
             ? "polygon(0 0, 0% 100%, 100% 0)" 
             : hoveredSection === "esports"
               ? "polygon(0 0, 0% 100%, 100% 0)"
               : "polygon(0 0, 0% 100%, 100% 0)"
         }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-r from-black/60 to-emerald-900/60 
                     cursor-pointer hover:bg-gradient-to-r hover:from-black/70 hover:to-emerald-900/70"
          onClick={() => navigate("/esports")}
        >
          <motion.div
            className="absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-center"
            initial={{ y: -50, opacity: 0 , scale:0 }}
            animate={{
              y: 0,
              opacity: 1,
              scale: hoveredSection === "esports" ? 1.2 : 1,
            }}
            transition={{ duration: 1 }}
            onMouseEnter={() => setHoveredSection("esports")}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <h2 className="text-5xl font-bold text-emerald-400 drop-shadow-lg">
              Esports
            </h2>
          </motion.div>
        </motion.div>

        {/* Right section (bottom-right) */}
        <motion.div
         initial={{ opacity: 0, clipPath: "polygon(100% 100%, 100% 100%, 100% 100%)" }}
         animate={{
           opacity: 1,
           clipPath: hoveredSection === "esports" 
             ? "polygon(100% 100%, 0% 100%, 100% 0%)" 
             : hoveredSection === "creators"
               ? "polygon(100% 100%, 0% 100%, 100% 0%)"
               : "polygon(100% 100%, 0% 100%, 100% 0)"
         }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-l from-black/60 to-emerald-900/60 
                     cursor-pointer hover:bg-gradient-to-l hover:from-black/70 hover:to-emerald-900/70"
          onClick={() => navigate("/creators")}
        >
          <motion.div
            className="absolute bottom-1/3 right-1/4 transform translate-x-1/2 translate-y-1/2 text-center"
            initial={{ y: 0, opacity: 0 , scale:0  }}
            animate={{
              y: -50,
              opacity: 1,
              scale: hoveredSection === "creators" ? 1.2 : 1,
            }}
            transition={{ duration: 1 }}
            onMouseEnter={() => setHoveredSection("creators")}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <h2 className="text-5xl font-bold text-emerald-400 drop-shadow-lg">
              Content Creators
            </h2>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
