import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const LandingPage = () => {
  const navigate = useNavigate();
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  
  // Refs for GSAP animations
  const backgroundRef = useRef(null);
  const logoRef = useRef(null);
  const esportsRef = useRef(null);
  const esportsContentRef = useRef(null);
  const creatorsRef = useRef(null);
  const creatorsContentRef = useRef(null);
  const brandingRef = useRef(null);

  // Get the current background image based on hover state
  const getBackgroundImage = () => {
    if (hoveredSection === "esports") {
      return 'url("/falconsEWC.svg")';
    } else if (hoveredSection === "creators") {
      return 'url("/falconsContent.jpg")';
    } else {
      return 'url("https://firebasestorage.googleapis.com/v0/b/falcons-links.appspot.com/o/images%2Fbackground.jpg?alt=media&token=8d39f29f-bdfa-4449-9297-a3f650edecf6")';
    }
  };

  // Initial animations on component mount
  useEffect(() => {
    // Create a timeline for better sequencing with improved defaults
    const tl = gsap.timeline();
    
    // Step 1: Show only the logo first with black and green background effect
    tl.fromTo(
      logoRef.current,
      { 
        scale: 0.8, 
        opacity: 0,
        filter: "drop-shadow(0 0 30px rgba(16,185,129,0.8))",
      },
      { 
        scale: 1.2, 
        opacity: 1,
        filter: "drop-shadow(0 0 50px rgba(16,185,129,0.9))",
        duration: 1.5,
        ease: "elastic.out(1, 0.5)"
      }
    );
    
    // Step 2: Reveal the background
    tl.fromTo(
      backgroundRef.current,
      { 
        opacity: 0,
        filter: "brightness(0) blur(20px)" 
      },
      { 
        opacity: 1,
        filter: "brightness(0.3) blur(0px)",
        duration: 1.2,
        ease: "power2.inOut"
      }
    );
    
    // Adjust logo to normal size as background appears
    tl.to(
      logoRef.current,
      {
        scale: 1,
        filter: "drop-shadow(0 0 20px rgba(16,185,129,0.3))",
        duration: 0.8,
        ease: "power2.out"
      },
      "-=0.8"
    );
    
    // Step 3: Reveal split sections with ease-out only (closing in from outside)
    tl.fromTo(
      esportsRef.current,
      { 
        x: "-100%",
        opacity: 0,
        visibility: "hidden" // Start completely hidden
      },
      { 
        x: "0%",
        opacity: 1,
        visibility: "visible", // Make visible during animation
        duration: 1,
        ease: "power4.out"
      }
    );
    
    tl.fromTo(
      creatorsRef.current,
      { 
        x: "100%",
        opacity: 0,
        visibility: "hidden" // Start completely hidden
      },
      { 
        x: "0%",
        opacity: 1,
        visibility: "visible", // Make visible during animation
        duration: 1,
        ease: "power2.out"
      },
      "-=1" // Run at the same time as esports section
    );
    
    // Step 4: Reveal section titles
    tl.fromTo(
      [esportsContentRef.current, creatorsContentRef.current],
      { 
        opacity: 0,
        y: 30
      },
      { 
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "back.out(1.7)"
      }
    );
    
    // Finally, show the branding
    tl.fromTo(
      brandingRef.current,
      { 
        opacity: 0,
        y: 20
      },
      { 
        opacity: 0.7,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }
    );

    // Clean up function
    return () => {
      tl.kill();
    };
  }, []);

  // Handle hover animations
  useEffect(() => {
    // Create hover animations with proper cleanup
    let animations = [];
    
    if (hoveredSection === "esports") {
      // Background animation
      animations.push(
        gsap.to(backgroundRef.current, {
          scale: 1.05,
          filter: "brightness(0.4) saturate(1.2) blur(0px)",
          duration: 0.8,
          ease: "power2.out"
        })
      );

      // Logo animation
      animations.push(
        gsap.to(logoRef.current, {
          scale: 0.9,
          opacity: 0.8,
          duration: 0.5,
          ease: "power2.out"
        })
      );

      // Content animation
      animations.push(
        gsap.to(esportsContentRef.current, {
          scale: 1.2,
          duration: 0.5,
          ease: "back.out(1.2)"
        })
      );

    } else if (hoveredSection === "creators") {
      // Background animation
      animations.push(
        gsap.to(backgroundRef.current, {
          scale: 1.05,
          filter: "brightness(0.4) saturate(1.2) blur(0px)",
          duration: 0.8,
          ease: "power2.out"
        })
      );

      // Logo animation
      animations.push(
        gsap.to(logoRef.current, {
          scale: 0.9,
          opacity: 0.8,
          duration: 0.5,
          ease: "power2.out"
        })
      );

      // Content animation
      animations.push(
        gsap.to(creatorsContentRef.current, {
          scale: 1.2,
          duration: 0.5,
          ease: "power2.out"
        })
      );

    } else {
      // Reset animations when not hovering
      animations.push(
        gsap.to(backgroundRef.current, {
          scale: 1,
          filter: "brightness(0.3) blur(0px)",
          duration: 0.8,
          ease: "power2.out"
        })
      );

      animations.push(
        gsap.to(logoRef.current, {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out"
        })
      );

      animations.push(
        gsap.to(esportsContentRef.current, {
          scale: 1,
          duration: 0.5,
          ease: "power2.out"
        })
      );

      animations.push(
        gsap.to(creatorsContentRef.current, {
          scale: 1,
          duration: 0.5,
          ease: "power2.out"
        })
      );
    }

    // Cleanup function to kill all animations
    return () => {
      animations.forEach(anim => anim.kill());
    };
  }, [hoveredSection]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black"
    style={{
      backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/falcons-links.appspot.com/o/images%2Fbackground.jpg?alt=media&token=8d39f29f-bdfa-4449-9297-a3f650edecf6")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: "black"
    }}
    >
      {/* Background Image with GSAP animations */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: getBackgroundImage(),
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Ambient particles overlay - Fixed z-index and opacity */}
      <div 
        className="absolute inset-0 z-10 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'url("/particles.svg")',
          backgroundRepeat: 'repeat',
          backgroundSize: '200px',
          mixBlendMode: 'screen'
        }}
      />

      {/* Logo/Team Name Overlay - Fixed centering */}
      <div
        ref={logoRef}
        className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none rounded-full p-8"
        style={{ 
          width: "min(60vw, 280px)", 
          height: "auto",
          willChange: "transform, opacity, background-color",
          filter: "drop-shadow(0 0 20px rgba(16,185,129,0.3))"
        }}
      >
        <img 
          src="/logo.avif" 
          alt="Falcon Team Logo" 
          className="w-full h-auto"
          style={{ 
            filter: "drop-shadow(0 0 15px rgba(16,185,129,0.5))",
            objectFit: "contain",
            backfaceVisibility: "hidden"
          }}
        />
      </div>

      {/* Horizontal Split Sections (Left to Right) */}
      <div className="relative h-screen z-10">
        {/* Left section (Esports) */}
        <div
          ref={esportsRef}
          className={`absolute top-0 left-0 bottom-0 w-1/2 cursor-pointer transition-all duration-500 opacity-0 invisible ${
            hoveredSection === "esports" 
              ? "bg-gradient-to-r from-black/70 to-emerald-900/70" 
              : "bg-gradient-to-r from-black/60 to-emerald-900/60"
          }`}
          onClick={() => navigate("/esports")}
          
        >
          <div
            ref={esportsContentRef}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full max-w-md px-4 flex flex-col items-center justify-center"
            onMouseEnter={() => setHoveredSection("esports")}
          onMouseLeave={() => setHoveredSection(null)}
          >
            <h2 className={`text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300 drop-shadow-[0_2px_10px_rgba(16,185,129,0.7)] transition-transform duration-500 ${hoveredSection === "esports" ? "transform -translate-y-6" : ""}`}>
              Esports
            </h2>
          </div>
        </div>

        {/* Right section (Content Creators) */}
        <div
          ref={creatorsRef}
          className={`absolute top-0 right-0 bottom-0 w-1/2 cursor-pointer transition-all duration-500 opacity-0 invisible ${
            hoveredSection === "creators" 
              ? "bg-gradient-to-l from-black/70 to-emerald-900/70" 
              : "bg-gradient-to-l from-black/60 to-emerald-900/60"
          }`}
          onClick={() => navigate("/creators")}
          
        >
          <div
            ref={creatorsContentRef}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full max-w-md px-4 flex flex-col items-center justify-center"
            onMouseEnter={() => setHoveredSection("creators")}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <h2 className={`text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300 drop-shadow-[0_2px_10px_rgba(16,185,129,0.7)] transition-transform duration-500 ${hoveredSection === "creators" ? "transform -translate-y-6" : ""}`}>
              Content Creators
            </h2>
          </div>
        </div>
      </div>

      {/* Enhanced corner branding */}
      <div 
        ref={brandingRef}
        className="absolute bottom-6 left-6 z-30 flex items-center opacity-0 hover:opacity-100 transition-opacity duration-300"
      >
        <img src="/logo.avif" alt="Falcon" className="h-8 w-auto mr-3" />
        <p className="text-white/70 text-sm font-medium">FALCON ENTERTAINMENT</p>
      </div>
    </div>
  );
};

export default LandingPage;
