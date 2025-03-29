import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/falconsEWC.svg")', // Add your team image to public folder
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.3)'
        }}
      />

      {/* Logo/Team Name Overlay */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <img 
          src="/logo.avif" 
          alt="Falcon Team Logo" 
          className="w-64 h-auto"
        />
      </div>

      {/* Split Sections */}
      <div className="relative h-screen flex z-10">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-1/2 h-full bg-gradient-to-r from-black/60 to-emerald-900/60 
                     flex items-center justify-center cursor-pointer transform hover:w-3/5 transition-all duration-500
                     hover:bg-gradient-to-r hover:from-black/70 hover:to-emerald-900/70"
          onClick={() => navigate('/esports')}
        >
          <div className="text-center p-8">
            <h2 className="text-5xl font-bold text-emerald-400 mb-4">Esports</h2>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-1/2 h-full bg-gradient-to-l from-black/60 to-emerald-900/60 
                     flex items-center justify-center cursor-pointer transform hover:w-3/5 transition-all duration-500
                     hover:bg-gradient-to-l hover:from-black/70 hover:to-emerald-900/70"
          onClick={() => navigate('/creators')}
        >
          <div className="text-center p-8">
            <h2 className="text-5xl font-bold text-emerald-400 mb-4">Content Creators</h2>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;