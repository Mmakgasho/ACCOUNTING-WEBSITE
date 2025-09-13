import { Button } from "@/components/ui/button";
import { Phone, Mail, Menu, X, MessageCircle } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex flex-col items-center">
              <img 
                src="/prestige.jpeg" 
                alt="Prestige Accounting Logo" 
                className="w-20 h-20 rounded-lg object-cover mb-1"
              />
              <div className="text-center">
                <h1 className="text-xl font-bold text-foreground">PRESTIGE ACCOUNTING</h1>
                <p className="text-sm text-professional-gray">&</p>
                <p className="text-sm text-professional-gray">TAX CONSULTANTS</p>
              </div>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>
          
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-professional-blue" />
                <span>+27 84 984 4859</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4 text-green-600" />
                <a 
                  href="https://wa.me/27849844859" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 transition-colors"
                >
                  WhatsApp
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-professional-blue" />
                <span>Prestigetaxcompliance@gmail.com</span>
              </div>
            </div>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="gradient-primary hover:opacity-90 transition-opacity"
            >
              Get Quote
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-4 py-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left px-4 py-2 text-foreground hover:text-primary hover:bg-gray-100 transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left px-4 py-2 text-foreground hover:text-primary hover:bg-gray-100 transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left px-4 py-2 text-foreground hover:text-primary hover:bg-gray-100 transition-colors"
              >
                Contact
              </button>
              
              {/* Mobile contact info */}
              <div className="px-4 py-2 border-t border-border mt-4">
                <div className="flex items-center space-x-2 text-sm mb-2">
                  <Phone className="w-4 h-4 text-professional-blue" />
                  <span>+27 84 984 4859</span>
                </div>
                <div className="flex items-center space-x-2 text-sm mb-2">
                  <MessageCircle className="w-4 h-4 text-green-600" />
                  <a 
                    href="https://wa.me/27849844859" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Mail className="w-4 h-4 text-professional-blue" />
                  <span className="text-xs">Prestigetaxcompliance@gmail.com</span>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;