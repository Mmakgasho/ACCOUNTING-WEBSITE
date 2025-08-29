import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">P</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Prestige Accounting</h1>
              <p className="text-sm text-professional-gray">Tax Compliance</p>
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
                <span>069 166 4887</span>
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
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;