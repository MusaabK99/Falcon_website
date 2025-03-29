const Footer = () => {
  return (
    <footer className="bg-black/80 backdrop-blur-lg text-gray-300 border-t border-emerald-900/30">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src="/logo.avif" alt="Falcon Logo" className="h-12 w-auto mb-4" />
            <p className="text-gray-400">
              Leading the way in esports and content creation
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-emerald-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/esports" className="hover:text-emerald-400 transition-colors">Esports</a></li>
              <li><a href="/creators" className="hover:text-emerald-400 transition-colors">Content Creators</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-emerald-400">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-emerald-400 transition-colors">Twitter</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Instagram</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">YouTube</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-emerald-900/30 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Falcon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
  
  export default Footer;