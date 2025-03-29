import { Creator } from '../../types';
import { motion } from 'framer-motion';

interface CreatorCardProps {
  creator: Creator;
}

const CreatorCard = ({ creator }: CreatorCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
    >
      <div className="relative">
        <img
          src={creator.avatar}
          alt={creator.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 p-4">
          <h3 className="text-2xl font-bold text-white">{creator.name}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-300 mb-4">{creator.description}</p>
        <div className="flex space-x-4">
          {creator.socialLinks.youtube && (
            <a href={creator.socialLinks.youtube} className="text-red-500 hover:text-red-400">
              YouTube
            </a>
          )}
          {creator.socialLinks.twitch && (
            <a href={creator.socialLinks.twitch} className="text-purple-500 hover:text-purple-400">
              Twitch
            </a>
          )}
          {creator.socialLinks.twitter && (
            <a href={creator.socialLinks.twitter} className="text-blue-500 hover:text-blue-400">
              Twitter
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CreatorCard;