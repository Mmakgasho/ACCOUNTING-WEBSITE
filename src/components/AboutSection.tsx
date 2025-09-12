import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Award, Shield } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            About <span className="text-professional-blue">Prestige Accounting</span>
          </h2>
          <p className="text-lg text-professional-gray max-w-3xl mx-auto">
            Your trusted partner for professional accounting and tax compliance services in South Africa.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Why Choose Us?</h3>
              <p className="text-professional-gray">
                We are SARS registered professionals dedicated to providing accurate, 
                reliable accounting and tax services for individuals and businesses.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold">SARS Registered</h4>
                  <p className="text-sm text-professional-gray">
                    Fully authorized to handle all SARS submissions and tax matters
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold">Professional Excellence</h4>
                  <p className="text-sm text-professional-gray">
                    Years of experience in accounting and tax compliance
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold">Personalized Service</h4>
                  <p className="text-sm text-professional-gray">
                    Tailored solutions for your specific business needs
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="text-2xl font-bold text-professional-blue">100+</h4>
                <p className="text-sm text-professional-gray">Happy Clients</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="text-2xl font-bold text-professional-blue">5+</h4>
                <p className="text-sm text-professional-gray">Years Experience</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="text-2xl font-bold text-professional-blue">100%</h4>
                <p className="text-sm text-professional-gray">SARS Compliant</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="text-2xl font-bold text-professional-blue">24h</h4>
                <p className="text-sm text-professional-gray">Response Time</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
