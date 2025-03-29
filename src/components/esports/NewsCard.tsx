import { News } from '../../types';
import { motion } from 'framer-motion';

interface NewsCardProps {
  news: News;
}

const NewsCard = ({ news }: NewsCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
    >
      <img
        src={news.image}
        alt={news.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <span className="text-purple-400 text-sm font-semibold">
          {news.category}
        </span>
        <h3 className="text-xl font-bold text-white mt-2">{news.title}</h3>
        <p className="text-gray-400 mt-2">{news.content}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-gray-500 text-sm">{news.date}</span>
          <button className="text-purple-400 hover:text-purple-300">
            Read More →
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default NewsCard;