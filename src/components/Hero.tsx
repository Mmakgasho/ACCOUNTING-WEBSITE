import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-accounting.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 gradient-hero opacity-10"></div>
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Professional
              <span className="text-professional-blue block">Accounting Services</span>
              You Can Trust
            </h1>
            <p className="text-lg text-professional-gray max-w-xl">
              Expert tax compliance, financial management, and business advisory services 
              to help your business thrive. Get professional support for all your accounting needs.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="gradient-primary hover:opacity-90 transition-opacity group"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={scrollToServices}
              variant="outline" 
              size="lg"
              className="border-professional-blue text-professional-blue hover:bg-professional-blue hover:text-white"
            >
              View Services
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-professional-blue" />
              <span className="text-sm">SARS Registered</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-professional-blue" />
              <span className="text-sm">Professional Service</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-professional-blue" />
              <span className="text-sm">Expert Support</span>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 gradient-primary opacity-20 rounded-2xl transform rotate-3"></div>
          <img 
            src={heroImage} 
            alt="Professional accounting services" 
            className="relative rounded-2xl shadow-hero w-full h-[500px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;