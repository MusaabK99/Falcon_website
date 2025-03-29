import { Content } from '../../types';
import { motion } from 'framer-motion';

interface ContentCardProps {
  content: Content;
}

const ContentCard = ({ content }: ContentCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
    >
      <img
        src={content.thumbnail}
        alt={content.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center mb-2">
          <span className={`
            px-2 py-1 rounded text-xs font-semibold
            ${content.type === 'video' ? 'bg-red-600' : 
              content.type === 'stream' ? 'bg-purple-600' : 'bg-blue-600'}
          `}>
            {content.type.toUpperCase()}
          </span>
          <span className="text-gray-400 text-sm ml-2">{content.date}</span>
        </div>
        <h4 className="text-lg font-semibold text-white mb-2">{content.title}</h4>
        <a
          href={content.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 text-sm"
        >
          Watch Now →
        </a>
      </div>
    </motion.div>
  );
};

export default ContentCard;