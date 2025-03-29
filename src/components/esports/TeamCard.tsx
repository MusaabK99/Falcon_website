import { Team } from '../../types';
import { motion } from 'framer-motion';

interface TeamCardProps {
  team: Team;
}

const TeamCard = ({ team }: TeamCardProps) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <h3 className="text-2xl font-bold text-white mb-4">{team.game}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {team.roster.map((player) => (
          <motion.div
            key={player.id}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-700 p-4 rounded-lg"
          >
            <img
              src={player.photo}
              alt={player.nickname}
              className="w-full h-32 object-cover rounded-lg mb-2"
            />
            <h4 className="text-white font-bold">{player.nickname}</h4>
            <p className="text-gray-400 text-sm">{player.role}</p>
          </motion.div>
        ))}
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="bg-gray-700 p-4 rounded-lg">
          <h4 className="text-white font-bold">Coach</h4>
          <p className="text-gray-400">{team.coach.name}</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg">
          <h4 className="text-white font-bold">Manager</h4>
          <p className="text-gray-400">{team.manager.name}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;