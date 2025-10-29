import { useLanguage } from '../context/LanguageContext'
import { useState } from 'react'
import { HiMenu, HiX, HiGlobe } from 'react-icons/hi'

interface MenuItem {
  label: string;
  href: string;
}

type Language = 'id' | 'en';

const Navbar = () => {
  const { content, setLanguage, language } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const menuItems: MenuItem[] = [
    { label: content.navbar.menu[0], href: '#home' },
    { label: content.navbar.menu[1], href: '#company' },
    { label: content.navbar.menu[2], href: '#services' },
    { label: content.navbar.menu[3], href: '#projects' },
    { label: content.navbar.menu[4], href: '#contact' }
  ];

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsMenuOpen(false);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md border-b border-[#013C58]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main navigation bar */}
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo Section */}
          <div className="shrink-0 flex items-center">
            <img 
              src={content.navbar.logo} 
              alt="Company Logo"
              className="h-8 md:h-10 w-auto object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <ul className="flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href}
                    className="relative px-4 py-2 text-sm font-medium text-[#013C58] hover:text-[#F5A201] transition-colors duration-300 group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F5A201] group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Language & CTA Section */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Switcher with Globe Icon */}
            <div className="flex items-center space-x-2 px-3 py-2 bg-[#013C58]/5 rounded-full">
              <HiGlobe className="text-[#013C58] text-lg" />
              <button
                onClick={() => handleLanguageChange('id')}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300 ${
                  language === 'id' ? 'bg-[#F5A201] text-white shadow-md' : 'text-[#013C58] hover:text-[#F5A201]'
                }`}
              >
                ID
              </button>
              <button
                onClick={() => handleLanguageChange('en')}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300 ${
                  language === 'en' ? 'bg-[#F5A201] text-white shadow-md' : 'text-[#013C58] hover:text-[#F5A201]'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={handleMenuToggle}
            className="lg:hidden relative p-2 rounded-lg text-[#013C58] hover:bg-[#F5A201]/10 focus:outline-none focus:ring-2 focus:ring-[#F5A201] transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6">
              <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`}>
                <HiMenu size={24} />
              </span>
              <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`}>
                <HiX size={24} />
              </span>
            </div>
          </button>
        </div>

        {/* Mobile Menu with Slide Animation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4 border-t border-[#013C58]/10">
            {/* Mobile Navigation Links */}
            <ul className="space-y-1">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href}
                    onClick={handleMenuItemClick}
                    className="block px-4 py-3 text-base font-medium text-[#013C58] hover:bg-[#F5A201]/10 hover:text-[#F5A201] rounded-lg transition-all duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Mobile Language Switcher */}
            <div className="px-4 py-3 bg-[#013C58]/5 rounded-lg">
              <div className="flex items-center space-x-3">
                <HiGlobe className="text-[#013C58] text-xl" />
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleLanguageChange('id')}
                    className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${
                      language === 'id' ? 'bg-[#F5A201] text-white shadow-md' : 'bg-white text-[#013C58] hover:bg-[#013C58]/5'
                    }`}
                  >
                    Indonesia
                  </button>
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${
                      language === 'en' ? 'bg-[#F5A201] text-white shadow-md' : 'bg-white text-[#013C58] hover:bg-[#013C58]/5'
                    }`}
                  >
                    English
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar