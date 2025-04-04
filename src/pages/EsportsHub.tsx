import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Team } from '../types';

const EsportsHub = () => {
  // Add state for active tab
  const [activeTab, setActiveTab] = useState<'all' | 'men' | 'women'>('all');
  const [scrollY, setScrollY] = useState(0);
  
  // Handle scroll for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const teams: Record<string, Team> = {
    valorant: {
      id: '1',
      game: 'VALORANT',
      roster: [
        {
          id: 'v1',
          name: 'Alexander Smith',
          nickname: 'FalconX',
          role: 'Duelist',
          photo: '/falconsEWC.svg'
        },
        {
          id: 'v2',
          name: 'Sarah Johnson',
          nickname: 'Viper',
          role: 'Controller',
          photo: '/falconsEWC.svg'
        },
        {
          id: 'v3',
          name: 'Michael Chen',
          nickname: 'SentinelM',
          role: 'Sentinel',
          photo: '/falconsEWC.svg'
        },
        {
          id: 'v4',
          name: 'Emma Wilson',
          nickname: 'InitiatorE',
          role: 'Initiator',
          photo: '/falconsEWC.svg'
        },
        {
          id: 'v5',
          name: 'James Rodriguez',
          nickname: 'FlexJ',
          role: 'Flex',
          photo: '/falconsEWC.svg'
        }
      ],
      coach: {
        id: 'vc1',
        name: 'David Thompson',
        role: 'Head Coach',
        photo: '/falconsEWC.svg'
      },
      manager: {
        id: 'vm1',
        name: 'Lisa Anderson',
        role: 'Team Manager',
        photo: '/falconsEWC.svg'
      }
    },
    csgo: {
      id: '2',
      game: 'CS:GO',
      roster: [
        {
          id: 'cs1',
          name: 'Marcus Berg',
          nickname: 'EagleEye',
          role: 'AWPer',
          photo: '/falconsEWC.svg'
        },
        {
          id: 'cs2',
          name: 'Peter Nielsen',
          nickname: 'RushMaster',
          role: 'Entry Fragger',
          photo: '/falconsEWC.svg'
        },
        {
          id: 'cs3',
          name: 'Viktor Kovacs',
          nickname: 'TacticalV',
          role: 'IGL',
          photo: '/falconsEWC.svg'
        },
        {
          id: 'cs4',
          name: 'Daniel Santos',
          nickname: 'SupportD',
          role: 'Support',
         photo: '/falconsEWC.svg'
        },
        {
          id: 'cs5',
          name: 'Oliver Schmidt',
          nickname: 'LurkO',
          role: 'Lurker',
          photo: '/falconsEWC.svg'
        }
      ],
      coach: {
        id: 'csc1',
        name: 'Erik Larsson',
        role: 'Head Coach',
        photo: '/falconsEWC.svg'
      },
      manager: {
        id: 'csm1',
        name: 'Anna Kowalski',
        role: 'Team Manager',
        photo: '/falconsEWC.svg'
      }
    },
    fortnite: {
      id: '3',
      game: 'Fortnite',
      coach: {
        id: 'fc1',
        name: 'Chris Walker',
        role: 'Head Coach',
        photo: '/falconsEWC.svg'
      },
      manager: {
        id: 'fm1',
        name: 'Rachel Martinez',
        role: 'Team Manager',
        photo: '/falconsEWC.svg'
      }
    },
    dota2: {
      id: '5',
      game: 'Dota 2',
      coach: {
        id: 'dc1',
        name: 'Alex Chen',
        role: 'Head Coach',
        photo: '/falconsEWC.svg'
      },
      manager: {
        id: 'dm1',
        name: 'Emily Zhang',
        role: 'Team Manager',
        photo: '/falconsEWC.svg'
      }
    },
    overwatch: {
      id: '6',
      game: 'Overwatch 2',
      coach: {
        id: 'owc1',
        name: 'Robert Kim',
        role: 'Head Coach',
        photo: '/falconsEWC.svg'
      },
      manager: {
        id: 'owm1',
        name: 'Jessica Park',
        role: 'Team Manager',
        photo: '/falconsEWC.svg'
      }
    },
    rocketleague: {
      id: '7',
      game: 'Rocket League',
      coach: {
        id: 'rlc1',
        name: 'Thomas Wilson',
        role: 'Head Coach',
        photo: '/falconsEWC.svg'
      },
      manager: {
        id: 'rlm1',
        name: 'Olivia Brown',
        role: 'Team Manager',
        photo: '/falconsEWC.svg'
      }
    },
    rainbowsix: {
      id: '8',
      game: 'Rainbow Six Siege',
      coach: {
        id: 'r6c1',
        name: 'Daniel Martinez',
        role: 'Head Coach',
        photo: '/falconsEWC.svg'
      },
      manager: {
        id: 'r6m1',
        name: 'Sophia Rodriguez',
        role: 'Team Manager',
        photo: '/falconsEWC.svg'
      }
    },
  };

  // Game images mapping
  const gameImages = {
    valorant: 'https://pbs.twimg.com/media/Gl0ySxAbYAADTLw?format=jpg&name=900x900',
    csgo: 'https://pbs.twimg.com/media/Glx6lTjXwAAgFqo?format=jpg&name=large',
    fortnite: 'https://pbs.twimg.com/media/GPBei8gXEAAZ8e3.jpg',
    leagueoflegends: '/logo.avif',
    dota2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0830N5k-QXApo0wEa3G0bm1fPoNBSu3hGlg&s',
    overwatch: 'https://pbs.twimg.com/media/GmKfdGBbcAAcGAu?format=jpg&name=large',
    rocketleague: 'https://pbs.twimg.com/media/Gm_WXkiWoAAfxTy?format=jpg&name=4096x4096',
    rainbowsix: 'https://i.ytimg.com/vi/eq3ARfmhE4s/maxresdefault.jpg',
  };

  // Custom styles for Navbar and Footer in EsportsHub
  // Custom styles for Navbar and Footer with adjusted green tones
  const navbarStyle = {
    backgroundColor: 'rgba(10, 14, 23, 0.8)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(34, 197, 94, 0.2)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
  };
  
  const footerStyle = {
    backgroundColor: 'rgba(10, 14, 23, 0.9)',
    backdropFilter: 'blur(10px)',
    borderTop: '1px solid rgba(34, 197, 94, 0.2)',
    boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.3)'
  };

  // Filter teams based on active tab
  const filteredTeams = Object.entries(teams).filter(([key, team]) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'women') {
      return ['valorant', 'dota2', 'overwatch'].includes(key);
    }
    return !['valorant', 'dota2', 'overwatch'].includes(key);
  });

  return (
    <div className="min-h-screen bg-[#050a15] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 z-0">
        {/* Hexagon grid pattern with adjusted green color */}
        <div className="absolute inset-0 opacity-10" 
             style={{
               backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'28\' height=\'49\' viewBox=\'0 0 28 49\'%3E%3Cg fill-rule=\'evenodd\'%3E%3Cg id=\'hexagons\' fill=\'%2322c55e\' fill-opacity=\'0.4\' fill-rule=\'nonzero\'%3E%3Cpath d=\'M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
             }}
        ></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div 
            className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-gradient-to-r from-green-600/20 to-emerald-600/20 filter blur-[100px]"
            style={{ transform: `translate(${scrollY * 0.05}px, ${scrollY * -0.03}px)` }}
          ></div>
          <div 
            className="absolute top-2/3 right-1/4 w-[30rem] h-[30rem] rounded-full bg-gradient-to-r from-emerald-600/20 to-green-500/20 filter blur-[120px]"
            style={{ transform: `translate(${scrollY * -0.05}px, ${scrollY * 0.02}px)` }}
          ></div>
          <div 
            className="absolute bottom-1/4 left-1/2 w-[25rem] h-[25rem] rounded-full bg-gradient-to-r from-green-700/20 to-emerald-500/20 filter blur-[100px]"
            style={{ transform: `translate(${scrollY * 0.03}px, ${scrollY * 0.04}px)` }}
          ></div>
        </div>
      </div>

      {/* Pass custom style to Navbar */}
      <Navbar customStyle={navbarStyle} textColor="text-emerald-400" hoverColor="hover:text-emerald-300" />
      
      <main className="pt-24 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section with adjusted green gradient */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-500 to-emerald-600">
                Our Esports Teams
              </span>
            </h1>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Competing at the highest level across multiple games with elite players pushing the boundaries of competitive gaming
            </p>
          </motion.div>

          {/* Tabs for filtering teams */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex space-x-12 border-b border-gray-800 relative">
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>  
              <a
                onClick={() => setActiveTab('all')}
                className={`px-4 py-3 font-medium text-lg transition-all duration-300 relative cursor-pointer ${
                  activeTab === 'all'
                    ? 'text-green-400'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                <p className='text-green-400'>All Teams</p>
                {activeTab === 'all' && (
                  <motion.div 
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 via-green-400 to-emerald-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </a>
              <a
                onClick={() => setActiveTab('men')}
                className={`px-4 py-3 font-medium text-lg transition-all duration-300 relative cursor-pointer ${
                  activeTab === 'men'
                    ? 'text-green-400'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                <p className='text-green-400'>Men's Teams</p>
                {activeTab === 'men' && (
                  <motion.div 
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 via-green-400 to-emerald-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </a>
              <a
                onClick={() => setActiveTab('women')}
                className={`px-4 py-3 font-medium text-lg transition-all duration-300 relative cursor-pointer ${
                  activeTab === 'women'
                    ? 'text-green-400'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                <p className='text-green-400'>Women's Teams</p>
                {activeTab === 'women' && (
                  <motion.div 
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 via-green-400 to-emerald-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </a>
            </div>
          </div>

          {/* Game Cards Grid */}
          <AnimatePresence mode="wait">
            <motion.section 
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mb-20"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredTeams.map(([key, team]) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    whileHover={{ 
                      scale: 1.03,
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    className="group relative"
                  >
                    {/* Card with glass morphism effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-md rounded-xl border border-gray-700/50 shadow-xl transform transition-all duration-300 group-hover:border-green-500/30 group-hover:shadow-green-500/10"></div>
                    
                    {/* Game Image */}
                    <div className="relative w-full h-96 rounded-xl overflow-hidden">
                      <img
                        src={gameImages[key] || '/logo.avif'}
                        alt={team.game}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-300"></div>
                      
                      {/* Game name and view button */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">{team.game}</h3>
                          
                          {/* Team type indicator */}
                          {['valorant', 'dota2', 'overwatch'].includes(key) ? (
                            <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs px-3 py-1 rounded-full shadow-lg shadow-pink-500/20">
                              Women's Team
                            </span>
                          ) : (
                            <span className="bg-gradient-to-r from-green-600 to-emerald-500 text-white text-xs px-3 py-1 rounded-full shadow-lg shadow-green-500/20">
                              Men's Team
                            </span>
                          )}
                        </div>
                        
                        <button className="relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-4 rounded-lg transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg shadow-green-700/30">
                          <span className="relative z-10">View Team</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </AnimatePresence>
        </div>
      </main>
      
      {/* Pass custom style to Footer with adjusted colors */}
        <Footer 
          customStyle={footerStyle} 
          textColor="text-gray-400" 
          headingColor="text-green-400"
          linkColor="text-gray-400" 
          linkHoverColor="hover:text-green-400" 
        />
    </div>
  );
};

export default EsportsHub;