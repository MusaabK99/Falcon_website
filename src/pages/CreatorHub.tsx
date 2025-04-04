import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Creator, Content, News } from '../types';
import { FaYoutube, FaTwitch, FaTwitter, FaInstagram, FaPlay } from 'react-icons/fa';

const CreatorHub = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Handle scroll for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mock data for creators with the structure shown in the image
  const creators: Creator[] = [
    {
      id: '1',
      name: 'Jenny Wilson',
      avatar: 'https://cdn.salla.sa/ydveby/70fb5a60-8e0b-49e0-af47-fb2300a7ec9b-500x500-uo4AUYYLTptNalKLibQFAWc1TuhHqvtHymntDetJ.png',
      role: 'Writer-Comedy, Half-hour TV',
      network: 'Network TV',
      credits: 2,
      supervisor: {
        name: 'Supervising Producer',
        show: 'The Neighborhood',
        network: 'CBS'
      },
      socialLinks: {
        youtube: 'https://youtube.com/jennyWilson',
        twitch: 'https://twitch.tv/jennyWilson',
        twitter: 'https://twitter.com/jennyWilson',
        instagram: 'https://instagram.com/jennyWilson',
      },
      description: 'Comedy writer specializing in half-hour TV formats',
      content: [],
      
    },
    {
      id: '2',
      name: 'Chong Mei-shio',
      avatar: 'https://cdn.salla.sa/ydveby/083d01e7-12b4-4b60-bfdb-dd8d769e9586-500x500-BlsR3RiCjACCkGHIyXIuGIc3fmgpvXeU6lhl8Q7b.png',
      role: 'Writer-Comedy, Half-hour TV',
      network: 'Network TV',
      credits: 5,
      supervisor: {
        name: 'Supervising Producer',
        show: 'The Neighborhood',
        network: 'CBS'
      },
      socialLinks: {
        youtube: 'https://youtube.com/chongMei',
        twitch: 'https://twitch.tv/chongMei',
      },
      description: 'Award-winning comedy writer and producer',
      content: [],
      
    },
    {
      id: '3',
      name: 'Brooklyn Simmons',
      avatar: 'https://cdn.salla.sa/ydveby/ed89fc2c-caee-4332-b9b4-9bad02dd69d6-500x500-kcF1hPEhgpi11gpdSiUaKj7FjSXJcR09SKBauc8q.jpg',
      role: 'Writer-Comedy, Half-hour TV',
      network: 'Network TV',
      credits: 3,
      supervisor: {
        name: 'Supervising Producer',
        show: 'The Neighborhood',
        network: 'CBS'
      },
      socialLinks: {
        youtube: 'https://youtube.com/brooklynSimmons',
        twitter: 'https://twitter.com/brooklynSimmons',
      },
      description: 'Versatile comedy writer with network experience',
      content: [],
      
    },
    {
      id: '4',
      name: 'Robert Fox',
      avatar: 'https://cdn.salla.sa/ydveby/bed966c1-00e8-4f7b-aaab-2561eec5fae1-500x500-8O8RI4aA0lCNtKfh4kphrOqoEEUIhVfFavsrDsgG.jpg',
      role: 'Writer-Comedy, Half-hour TV',
      network: 'Network TV',
      credits: 1,
      supervisor: {
        name: 'Supervising Producer',
        show: 'The Neighborhood',
        network: 'CBS'
      },
      socialLinks: {
        youtube: 'https://youtube.com/robertFox',
        instagram: 'https://instagram.com/robertFox',
      },
      description: 'Rising talent in comedy writing',
      content: [],
      
    },
    {
      id: '5',
      name: 'Mack Ingram',
      avatar: 'https://cdn.salla.sa/ydveby/88ee4ff4-61c9-4c5c-b815-35ff99a65466-1000x853.60185902401-Fpx7WtynKnc54XWqfsQxOB8qo9ML9u7l32rDMcP8.jpg',
      role: 'Writer-Comedy, Half-hour TV',
      network: 'Network TV',
      credits: 4,
      supervisor: {
        name: 'Supervising Producer',
        show: 'The Neighborhood',
        network: 'CBS'
      },
      socialLinks: {
        youtube: 'https://youtube.com/mackIngram',
      },
      description: 'Experienced comedy writer with multiple credits',
      content: [],
      
    },
    {
      id: '6',
      name: 'Mariah Klein',
      avatar: 'https://cdn.salla.sa/ydveby/297f4b6d-e9b9-4023-b3bb-cb4bf5ff2499-500x497.28892331526-UAynVOXcRvwtJ2rC34NyVZKjmrsXFpqcmIaTnLyQ.jpg',
      role: 'Writer-Comedy, Half-hour TV',
      network: 'Network TV',
      credits: 3,
      supervisor: {
        name: 'Supervising Producer',
        show: 'The Neighborhood',
        network: 'CBS'
      },
      socialLinks: {
        youtube: 'https://youtube.com/mariahKlein',
        twitch: 'https://twitch.tv/mariahKlein',
      },
      description: 'Comedy specialist with a unique voice',
      content: [],
      
    },
    {
      id: '7',
      name: 'Emanuel West',
      avatar: 'https://cdn.salla.sa/ydveby/72c4158d-66d0-4810-bc80-6c8ec903a286-500x500-ADl2SOuiDzAH9DIlJ3q3npO60VdNoskr6RoZ96VK.jpg',
      role: 'Writer-Comedy, Half-hour TV',
      network: 'Network TV',
      credits: 2,
      supervisor: {
        name: 'Supervising Producer',
        show: 'The Neighborhood',
        network: 'CBS'
      },
      socialLinks: {
        youtube: 'https://youtube.com/emanuelWest',
        twitter: 'https://twitter.com/emanuelWest',
      },
      description: 'Innovative comedy writer with fresh perspectives',
      content: [],
    },
    {
      id: '8',
      name: 'Jenny Wilson',
      avatar: 'https://cdn.salla.sa/ydveby/212dfa7f-2ed7-4ec3-a9dc-68d34e6b7190-500x500-mbSODtg0NxpaeP4w1Ge3zhTUE2cDaKsuL4GsDrs2.jpg',
      role: 'Writer-Comedy, Half-hour TV',
      network: 'Network TV',
      credits: 3,
      supervisor: {
        name: 'Supervising Producer',
        show: 'The Neighborhood',
        network: 'CBS'
      },
      socialLinks: {
        youtube: 'https://youtube.com/jennyWilson2',
        instagram: 'https://instagram.com/jennyWilson2',
      },
      description: 'Versatile writer with a strong comedy background',
      content: [],
      
    },
  ];

  // Mock data for latest videos
  const latestVideos: Content[] = [
    {
      id: 'v1',
      title: 'Behind the Scenes: Writing for The Neighborhood',
      thumbnail: '/logo.avif',
      url: 'https://youtube.com/watch?v=123456',
      type: 'video',
      date: '2023-05-15',
      creator: creators[0]
    },
    {
      id: 'v2',
      title: 'Comedy Writing Workshop with Chong Mei-shio',
      thumbnail: '/logo.avif',
      url: 'https://youtube.com/watch?v=789012',
      type: 'video',
      date: '2023-05-10',
      creator: creators[1]
    },
    {
      id: 'v3',
      title: 'Live Q&A: Breaking into TV Writing',
      thumbnail: '/logo.avif',
      url: 'https://twitch.tv/videos/345678',
      type: 'stream',
      date: '2023-05-05',
      creator: creators[2]
    },
  ];

  // Mock data for news
  const news: News[] = [
    {
      id: 'n1',
      title: 'Falcon Signs Five New Comedy Writers',
      content: 'Falcon Entertainment expands its roster with five talented comedy writers from top network shows.',
      image: '/logo.avif',
      date: '2023-05-01',
      category: 'Team News'
    },
    {
      id: 'n2',
      title: 'Emmy Nomination for The Neighborhood',
      content: 'The hit show "The Neighborhood" receives multiple Emmy nominations, including for its writing team.',
      image: '/logo.avif',
      date: '2023-04-25',
      category: 'Awards'
    },
  ];

  // Custom styles for Navbar and Footer
  const navbarStyle = {
    backgroundColor: 'rgba(15, 23, 42, 0.8)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(34, 197, 94, 0.2)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
  };

  const footerStyle = {
    backgroundColor: 'rgba(15, 23, 42, 0.9)',
    backdropFilter: 'blur(10px)',
    borderTop: '1px solid rgba(34, 197, 94, 0.2)',
    boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.3)'
  };

  // Social media icon component
  const SocialIcon = ({ platform, url }) => {
    const icons = {
      youtube: <FaYoutube className="text-red-500" />,
      twitch: <FaTwitch className="text-purple-500" />,
      twitter: <FaTwitter className="text-blue-400" />,
      instagram: <FaInstagram className="text-pink-500" />
    };

    return (
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
      >
        {icons[platform]}
      </a>
    );
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/falcons-links.appspot.com/o/images%2Fbackground.jpg?alt=media&token=8d39f29f-bdfa-4449-9297-a3f650edecf6")',
            opacity: 0.4
          }}
        ></div>
        
        {/* Hexagon grid pattern overlay */}
        <div className="absolute inset-0 opacity-5" 
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
      <Navbar customStyle={navbarStyle} textColor="text-white" hoverColor="hover:text-green-400" />
      
      <main className="pt-24 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-500 to-emerald-600">
                Our Content Creators
              </span>
            </h1>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Meet the talented team behind your favorite shows and discover exclusive content from our network
            </p>
          </motion.div>

          {/* Featured Creators Section - Removed filter tabs */}
          <section className="mb-24">
            <h2 className="text-3xl font-bold text-white mb-10">Featured YouTubers</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {creators.map((creator) => (
                <motion.div
                  key={creator.id}
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
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-md rounded-xl border border-slate-700/50 shadow-xl transform transition-all duration-300 group-hover:border-green-500/30 group-hover:shadow-green-500/10"></div>
                  
                  {/* Creator Image */}
                  <div className="relative w-full h-[26rem] rounded-xl overflow-hidden">
                    <img
                      src={creator.avatar || '/logo.avif'}
                      alt={creator.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-300"></div>
                    
                    {/* Creator info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col">
                      <div className="flex flex-col mb-4">
                        <h3 className="text-2xl font-bold text-white mb-1">{creator.name}</h3>
                        <p className="text-green-400 text-sm">{creator.role}</p>
                      </div>
                      
                      <p className="text-gray-300 text-sm mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                        {creator.description}
                      </p>
                      
                      {/* Social media links */}
                      <div className="flex space-x-2 mb-4">
                        {creator.socialLinks?.youtube && (
                          <SocialIcon platform="youtube" url={creator.socialLinks.youtube} />
                        )}
                        {creator.socialLinks?.twitch && (
                          <SocialIcon platform="twitch" url={creator.socialLinks.twitch} />
                        )}
                        {creator.socialLinks?.twitter && (
                          <SocialIcon platform="twitter" url={creator.socialLinks.twitter} />
                        )}
                        {creator.socialLinks?.instagram && (
                          <SocialIcon platform="instagram" url={creator.socialLinks.instagram} />
                        )}
                      </div>
                      
                      <button className="relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-4 rounded-lg transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg shadow-green-700/30">
                        <span className="relative z-10">View Profile</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Latest Videos Section - Changed button colors */}
          <section className="mb-24">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl font-bold text-white">Latest Content</h2>
              <div className="flex space-x-2">
                <button className="px-4 py-2 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-white text-sm font-medium hover:from-green-500 hover:to-emerald-500 transition-colors duration-300 flex items-center">
                  <FaYoutube className="mr-2" /> YouTube
                </button>
                <button className="px-4 py-2 rounded-full bg-gradient-to-r from-emerald-600 to-cyan-600 text-white text-sm font-medium hover:from-emerald-500 hover:to-cyan-500 transition-colors duration-300 flex items-center">
                  <FaTwitch className="mr-2" /> Twitch
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {latestVideos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: index * 0.1 }
                  }}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.2 }
                  }}
                  className="group relative"
                >
                  {/* Card with glass morphism effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-md rounded-xl border border-slate-700/50 shadow-xl transform transition-all duration-300 group-hover:border-green-500/30 group-hover:shadow-green-500/10"></div>
                  
                  {/* Video thumbnail */}
                  <div className="relative w-full h-56 rounded-t-xl overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                        <FaPlay className="text-white text-xl ml-1" />
                      </div>
                    </div>
                    
                    {/* Video type badge */}
                    <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold ${
                      video.type === 'video' ? 'bg-red-500' : 'bg-purple-500'
                    } text-white`}>
                      {video.type === 'video' ? 'YOUTUBE' : 'TWITCH'}
                    </div>
                  </div>
                  
                  {/* Video info */}
                  <div className="relative p-6">
                    <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">{video.title}</h3>
                    
                    <div className="flex items-center mb-4">
                      <img 
                        src={video.creator?.avatar} 
                        alt={video.creator?.name}
                        className="w-8 h-8 rounded-full mr-3 border-2 border-green-500"
                      />
                      <div>
                        <p className="text-sm text-white">{video.creator?.name}</p>
                        <p className="text-xs text-gray-400">{video.date}</p>
                      </div>
                    </div>
                    
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 text-white py-2 px-4 rounded-lg hover:from-green-500 hover:to-emerald-500 transition-all duration-300 text-sm font-medium"
                    >
                      Watch Now
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white px-8 py-3 rounded-full transition-all duration-300 font-medium shadow-lg shadow-green-700/20">
                View All Content
              </button>
            </div>
          </section>

          {/* News Section */}
          <section className="mb-24">
            <h2 className="text-3xl font-bold text-white mb-10">Latest News</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {news.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="group relative"
                >
                  {/* Card with glass morphism effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-md rounded-xl border border-slate-700/50 shadow-xl transform transition-all duration-300 group-hover:border-green-500/30 group-hover:shadow-green-500/10"></div>
                  
                  <div className="relative flex flex-col md:flex-row rounded-xl overflow-hidden">
                    <div className="md:w-2/5">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    
                    <div className="p-6 md:w-3/5">
                      <span className="inline-block px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-semibold mb-3">
                        {item.category}
                      </span>
                      
                      <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                      
                      <p className="text-gray-300 text-sm mb-4">{item.content}</p>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-xs">{item.date}</span>
                        
                        <button className="text-green-400 hover:text-green-300 font-medium transition-colors duration-300 text-sm flex items-center">
                          Read More 
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white px-8 py-3 rounded-full transition-all duration-300 font-medium shadow-lg shadow-green-700/20">
                View All News
              </button>
            </div>
          </section>

          {/* Call to Action */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 opacity-90"></div>
            
            <div className="relative py-16 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-2/3 mb-8 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Our Creator Network</h2>
                <p className="text-white/80 text-lg max-w-xl">
                  Become part of our growing community of content creators and gain access to exclusive opportunities and resources.
                </p>
              </div>
              
              <button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-300 shadow-xl">
                Apply Now
              </button>
            </div>
          </motion.section>
        </div>
      </main>
      
      {/* Pass custom style to Footer */}
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

export default CreatorHub;