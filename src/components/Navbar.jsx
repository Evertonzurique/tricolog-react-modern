import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoComTexto from '../assets/logo com texto.png';

const Navbar = ({ onContactClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar-custom">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src={logoComTexto} 
              alt="TricoLog Logo" 
              className="h-14 brightness-110"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-[#E0E6ED] hover:text-[#6BD6B1] transition-colors duration-300"
              >
                Funcionalidades
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-[#E0E6ED] hover:text-[#6BD6B1] transition-colors duration-300"
              >
                Planos
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-[#E0E6ED] hover:text-[#6BD6B1] transition-colors duration-300"
              >
                Depoimentos
              </button>
              <button 
                onClick={onContactClick}
                className="text-[#E0E6ED] hover:text-[#6BD6B1] transition-colors duration-300"
              >
                Fale Conosco
              </button>
            </div>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button className="border border-[#6BD6B1] text-[#6BD6B1] hover:bg-[#6BD6B1] hover:text-[#0A192F] transition-all duration-300 px-4 py-2 rounded text-sm">
              Login
            </button>
            <button className="btn-gradient text-sm">
              Comece Agora
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#E0E6ED] hover:text-[#6BD6B1] transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-6 py-6 space-y-4 bg-[rgba(10,25,47,0.95)] backdrop-blur-sm mt-4 rounded-lg border border-[rgba(255,255,255,0.1)]">
              <button 
                onClick={() => scrollToSection('features')}
                className="block text-[#E0E6ED] hover:text-[#6BD6B1] transition-colors duration-300"
              >
                Funcionalidades
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="block text-[#E0E6ED] hover:text-[#6BD6B1] transition-colors duration-300"
              >
                Planos
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="block text-[#E0E6ED] hover:text-[#6BD6B1] transition-colors duration-300"
              >
                Depoimentos
              </button>
              <button 
                onClick={onContactClick}
                className="block text-[#E0E6ED] hover:text-[#6BD6B1] transition-colors duration-300"
              >
                Fale Conosco
              </button>
              <div className="pt-4 space-y-2">
                <button className="w-full border border-[#6BD6B1] text-[#6BD6B1] hover:bg-[#6BD6B1] hover:text-[#0A192F] transition-all duration-300 px-4 py-2 rounded text-sm">
                  Login
                </button>
                <button className="w-full btn-gradient text-sm">
                  Comece Agora
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

