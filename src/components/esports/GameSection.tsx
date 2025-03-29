import { Team } from '../../types';
import { motion } from 'framer-motion';

interface GameSectionProps {
  game: string;
  team: Team;
}

const GameSection = ({ game, team }: GameSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gray-800 rounded-xl p-6 mb-8"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-3xl font-bold text-white">{game}</h3>
        <span className="px-4 py-2 bg-purple-600 text-white rounded-full text-sm">
          Active Roster
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {team.roster.map((player) => (
          <motion.div
            key={player.id}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-700 rounded-lg p-4 text-center"
          >
            <img
              src={player.photo}
              alt={player.nickname}
              className="w-24 h-24 mx-auto rounded-full mb-3 object-cover"
            />
            <h4 className="text-white font-bold">{player.nickname}</h4>
            <p className="text-gray-400 text-sm">{player.role}</p>
            <p className="text-gray-500 text-xs mt-1">{player.name}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6 mt-8">
        <div className="bg-gray-700 rounded-lg p-4">
          <h4 className="text-xl font-semibold text-white mb-4">Coach</h4>
          <div className="flex items-center">
            <img
              src={team.coach.photo}
              alt={team.coach.name}
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <p className="text-white">{team.coach.name}</p>
              <p className="text-gray-400 text-sm">{team.coach.role}</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-700 rounded-lg p-4">
          <h4 className="text-xl font-semibold text-white mb-4">Manager</h4>
          <div className="flex items-center">
            <img
              src={team.manager.photo}
              alt={team.manager.name}
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <p className="text-white">{team.manager.name}</p>
              <p className="text-gray-400 text-sm">{team.manager.role}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GameSection;