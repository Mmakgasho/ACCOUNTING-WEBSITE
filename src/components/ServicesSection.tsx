import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FileText, 
  Calculator, 
  Building2, 
  Users, 
  TrendingUp,
  Shield,
  Clock,
  CheckCircle2
} from "lucide-react";
import servicesImage from "@/assets/services-image.jpg";
import payrollImage from "@/assets/payroll-services.jpg";
import companyImage from "@/assets/company-services.jpg";

const ServicesSection = () => {
  const sarsServices = [
    "Preparation of VAT schedules",
    "Submission of Income tax returns", 
    "PAYE and submission of Emp201 returns",
    "Submission of provisional taxes",
    "Applying for payment arrangements",
    "Lodging disputes",
    "Adding registered representatives",
    "Applying for Customs",
    "Income tax registration (company & individuals)"
  ];

  const accountingServices = [
    "Preparation of financial statements",
    "Management accounts",
    "Monthly management accounts", 
    "Accountant and income confirmation letters"
  ];

  const companyServices = [
    "Company Registration",
    "Beneficial Ownership",
    "Share certificates",
    "BEE Certificates",
    "CIDB registrations",
    "CIDB registration and BOE submissions"
  ];

  const payrollServices = [
    "Issuing of payslips",
    "Paying salaries and wages"
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Comprehensive <span className="text-professional-blue">Financial Services</span>
          </h2>
          <p className="text-lg text-professional-gray max-w-2xl mx-auto">
            From tax compliance to business registration, we provide expert solutions 
            for all your accounting and financial needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* SARS Services */}
          <Card className="shadow-card border-0 gradient-card">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <CardTitle className="text-xl">SARS Services</CardTitle>
                  <CardDescription>Tax compliance and SARS submissions</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {sarsServices.map((service, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-professional-blue mt-1 flex-shrink-0" />
                  <span className="text-sm">{service}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Accounting Services */}
          <Card className="shadow-card border-0 gradient-card">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <CardTitle className="text-xl">Accounting</CardTitle>
                  <CardDescription>Financial statements and management accounts</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {accountingServices.map((service, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-professional-blue mt-1 flex-shrink-0" />
                  <span className="text-sm">{service}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Featured Services with Images */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="shadow-card border-0 overflow-hidden">
            <div className="relative h-48">
              <img 
                src={companyImage} 
                alt="Company secretarial services" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 gradient-primary opacity-20"></div>
            </div>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <CardTitle className="text-xl">Company Secretarial Services</CardTitle>
                  <CardDescription>Business registration and compliance</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {companyServices.map((service, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-professional-blue mt-1 flex-shrink-0" />
                  <span className="text-sm">{service}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="shadow-card border-0 overflow-hidden">
            <div className="relative h-48">
              <img 
                src={payrollImage} 
                alt="Payroll services" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 gradient-primary opacity-20"></div>
            </div>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <CardTitle className="text-xl">Payroll Services</CardTitle>
                  <CardDescription>Employee salary management</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {payrollServices.map((service, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-professional-blue mt-1 flex-shrink-0" />
                  <span className="text-sm">{service}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Why Choose Us */}
        <div className="relative">
          <div className="absolute inset-0 gradient-hero opacity-5 rounded-2xl"></div>
          <div className="relative grid lg:grid-cols-2 gap-12 items-center p-8 lg:p-16">
            <div>
              <img 
                src={servicesImage} 
                alt="Why choose Prestige Accounting" 
                className="rounded-xl shadow-professional"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold">
                Why Choose <span className="text-professional-blue">Prestige Accounting?</span>
              </h3>
              <p className="text-professional-gray">
                With years of experience in tax compliance and financial management, 
                we provide reliable, professional services tailored to your business needs.
              </p>
              <div className="grid gap-4">
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-professional-blue mt-1" />
                  <div>
                    <h4 className="font-semibold">SARS Compliant</h4>
                    <p className="text-sm text-professional-gray">Fully registered and compliant with all SARS requirements</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-professional-blue mt-1" />
                  <div>
                    <h4 className="font-semibold">Timely Service</h4>
                    <p className="text-sm text-professional-gray">Fast turnaround times for all submissions and reports</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="w-5 h-5 text-professional-blue mt-1" />
                  <div>
                    <h4 className="font-semibold">Expert Advice</h4>
                    <p className="text-sm text-professional-gray">Professional guidance to optimize your financial strategy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;