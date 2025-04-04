interface FooterProps {
  customStyle?: React.CSSProperties;
  textColor?: string;
  headingColor?: string;
  linkColor?: string;
  linkHoverColor?: string;
}

const Footer = ({ 
  customStyle, 
  textColor = "text-gray-600", 
  headingColor = "text-emerald-600",
  linkColor = "text-gray-600", 
  linkHoverColor = "hover:text-emerald-600" 
}: FooterProps) => {
  return (
    <footer 
      className="shadow-sm"
      style={customStyle || { backgroundColor: 'white', borderTop: '1px solid #f3f4f6' }}
    >
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src="/logo.avif" alt="Falcon Logo" className="h-12 w-auto mb-4" />
            <p className={textColor}>
              Leading the way in esports and content creation
            </p>
          </div>
          <div>
            <h4 className={`text-lg font-semibold mb-4 ${headingColor}`}>Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/esports" className={`${linkColor} ${linkHoverColor} transition-colors`}>
                  Esports
                </a>
              </li>
              <li>
                <a href="/creators" className={`${linkColor} ${linkHoverColor} transition-colors`}>
                  Content Creators
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className={`text-lg font-semibold mb-4 ${headingColor}`}>Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className={`${linkColor} ${linkHoverColor} transition-colors`}>
                Twitter
              </a>
              <a href="#" className={`${linkColor} ${linkHoverColor} transition-colors`}>
                Instagram
              </a>
              <a href="#" className={`${linkColor} ${linkHoverColor} transition-colors`}>
                YouTube
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-100 text-center">
          <p className={textColor}>&copy; {new Date().getFullYear()} Falcon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;