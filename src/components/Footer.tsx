import { Phone, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex flex-col items-center">
                <img 
                  src="/prestige.jpeg" 
                  alt="Prestige Accounting Logo" 
                  className="w-12 h-12 rounded-lg object-cover mb-1"
                />
                <div className="text-center">
                  <h3 className="font-bold text-lg">PRESTIGE ACCOUNTING</h3>
                  <p className="text-sm text-professional-gray">&</p>
                  <p className="text-sm text-professional-gray">TAX CONSULTANTS</p>
                </div>
              </div>
            </div>
            <p className="text-professional-gray text-sm">
              Professional accounting and tax compliance services you can trust. 
              SARS registered and fully compliant.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Our Services</h4>
            <ul className="text-sm text-professional-gray space-y-2">
              <li>• SARS Services & Tax Returns</li>
              <li>• Financial Statements</li>
              <li>• Company Registration</li>
              <li>• Payroll Services</li>
              <li>• Management Accounts</li>
              <li>• Tax Compliance</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Contact Details</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-professional-blue" />
                <span>+27 69 166 4887 | +27 84 984 4859</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4 text-green-600" />
                <a 
                  href="https://wa.me/27691664887" 
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
              <div className="pt-2">
                <p className="text-professional-gray">Business Hours:</p>
                <p className="text-professional-gray">Mon-Fri: 8AM-5PM</p>
                <p className="text-professional-gray">Sat: 9AM-1PM</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-professional-gray">
            © 2025 Prestige Accounting & Tax Consultants. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
