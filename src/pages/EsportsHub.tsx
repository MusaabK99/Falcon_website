import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Team } from '../types';

const EsportsHub = () => {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

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
      roster: [
        {
          id: 'f1',
          name: 'Tyler Brooks',
          nickname: 'BuildKing',
          role: 'Solo Player',
          photo: '/falconsEWC.svg'
        },
        {
          id: 'f2',
          name: 'Ryan Parker',
          nickname: 'StormRider',
          role: 'Duo Specialist',
         photo: '/falconsEWC.svg'
        },
        {
          id: 'f3',
          name: 'Kevin Lee',
          nickname: 'BoxFighter',
          role: 'Squad Leader',
          photo: '/falconsEWC.svg'
        }
      ],
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
    }
  };

  if (!selectedGame) {
    return (
      <div className="min-h-screen bg-black">
        <Navbar />
        <main className="pt-16">
          {/* Hero Section */}
          <div className="relative h-[50vh] overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url("/falconsEWC.svg")',
                filter: 'brightness(0.3)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black" />
            <div className="relative h-full flex items-center justify-center">
              <h1 className="text-6xl font-bold text-white text-center">Our Teams</h1>
            </div>
          </div>

          {/* Games Grid */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(teams).map(([key, team]) => (
                <motion.div
                  key={key}
                  whileHover={{ scale: 1.05 }}
                  className="relative cursor-pointer group"
                  onClick={() => setSelectedGame(key)}
                >
                  <div className="aspect-[16/9] rounded-xl overflow-hidden">
                    <img
                      src="/logo.avif" // Add game-specific banners
                      alt={team.game}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <h2 className="text-3xl font-bold text-emerald-400 mb-2">{team.game}</h2>
                      <p className="text-gray-300">
                        {team.roster.length} Players • {team.coach.name}
                      </p>
                      <div className="mt-4 flex -space-x-3">
                        {team.roster.slice(0, 5).map((player) => (
                          <img
                            key={player.id}
                            src={player.photo}
                            alt={player.nickname}
                            className="w-8 h-8 rounded-full border-2 border-black"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="pt-16">
        {/* Previous roster view code */}
        {/* Add a back button */}
        <button
          onClick={() => setSelectedGame(null)}
          className="fixed top-24 left-8 text-emerald-400 hover:text-emerald-300 flex items-center"
        >
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Teams
        </button>
        {/* Rest of your existing roster view code */}
      </main>
      <Footer />
    </div>
  );
};

export default EsportsHub;