import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Phone, Mail, Clock, CheckCircle, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_dccomaq";
const CLIENT_TEMPLATE_ID = "template_u9krn1e"; // to client
const COMPANY_TEMPLATE_ID = "template_ip2eu7y"; // to company
const EMAILJS_PUBLIC_KEY = "5Zw38jXRyM10lp4nl"; // Public key only
const COMPANY_EMAIL = "Prestigetaxcompliance@gmail.com"; // Company recipient

const SERVICES = [
  "Tax Returns (Individual)",
  "Tax Returns (Business)",
  "Payroll Services",
  "Bookkeeping",
  "SARS Registration",
  "Tax Compliance",
  "Financial Consulting",
  "VAT Returns",
  "Company Registration",
  "Other"
];

function renderEmailHtml(title: string, data: { name: string; email: string; phone: string; service: string; message: string; }): string {
  const { name, email, phone, service, message } = data;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${title}</title>
  <style>
    body { background-color: #f4f4f7; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 20px; color: #333; }
    .email-container { max-width: 650px; margin: 20px auto; background-color: #ffffff; padding: 30px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.06); }
    .header { border-bottom: 2px solid #eaeaea; padding-bottom: 15px; margin-bottom: 25px; text-align: center; }
    .header h2 { margin: 0; font-size: 22px; color: #2c3e50; }
    table { width: 100%; border-collapse: collapse; }
    td { padding: 10px 8px; vertical-align: top; }
    .label { font-weight: 600; color: #444; width: 35%; white-space: nowrap; }
    .value { color: #333; }
    .message-box { background-color: #f9f9f9; padding: 15px; border-radius: 6px; font-style: italic; white-space: pre-wrap; border: 1px solid #eee; }
    .footer { text-align: center; font-size: 12px; color: #888; margin-top: 30px; border-top: 1px solid #eee; padding-top: 15px; }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <h2>${title}</h2>
    </div>

    <table>
      <tr>
        <td class="label">Full Name:</td>
        <td class="value">${name}</td>
      </tr>
      <tr>
        <td class="label">Email Address:</td>
        <td class="value">${email}</td>
      </tr>
      <tr>
        <td class="label">Phone Number:</td>
        <td class="value">${phone}</td>
      </tr>
      <tr>
        <td class="label">Service Requested:</td>
        <td class="value">${service}</td>
      </tr>
      <tr>
        <td class="label">Message:</td>
        <td class="value">
          <div class="message-box">
            ${message}
          </div>
        </td>
      </tr>
    </table>

    <div class="footer">
      <p>Thank you for reaching out to <strong>Prestige Accounting</strong>.</p>
      <p>📧 <a href="mailto:Prestigetaxcompliance@gmail.com">Prestigetaxcompliance@gmail.com</a> | ☎️ +27 69 166 4887</p>
      <p style="margin-top: 10px; font-size: 11px; color: #aaa;">
        This message was sent via the Prestige Accounting website contact form.<br />
        Prestige Accounting — All rights reserved.
      </p>
    </div>
  </div>
</body>
</html>`;
}

function renderClientEmailHtml(data: { name: string; email: string; phone: string; service: string; message: string; }): string {
  const { name, email, phone, service, message } = data;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Thank you for your inquiry - Prestige Accounting & Tax Consultants</title>
  <style>
    body { background-color: #f4f4f7; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 20px; color: #333; }
    .email-container { max-width: 650px; margin: 20px auto; background-color: #ffffff; padding: 30px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.06); }
    .header { text-align: center; margin-bottom: 30px; }
    .logo { width: 80px; height: 80px; border-radius: 8px; margin: 0 auto 15px; display: block; }
    .company-name { font-size: 24px; font-weight: bold; color: #2c3e50; margin: 10px 0 5px; }
    .company-tagline { font-size: 14px; color: #666; margin: 0 0 20px; }
    .content { line-height: 1.6; margin-bottom: 25px; }
    .highlight { background-color: #f0f8ff; padding: 15px; border-radius: 8px; border-left: 4px solid #007bff; margin: 20px 0; }
    .contact-info { background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0; }
    .footer { text-align: center; font-size: 12px; color: #888; margin-top: 30px; border-top: 1px solid #eee; padding-top: 15px; }
    .footer-logo { width: 60px; height: 60px; border-radius: 6px; margin: 15px auto; display: block; }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <img src="https://prestige-accounting.vercel.app/prestige.jpeg" alt="Prestige Accounting Logo" class="logo" />
      <div class="company-name">PRESTIGE ACCOUNTING</div>
      <div class="company-tagline">& TAX CONSULTANTS</div>
    </div>

    <div class="content">
      <h2 style="color: #2c3e50; margin-bottom: 15px;">Thank You for Your Inquiry!</h2>
      
      <p>Dear ${name},</p>
      
      <p>Thank you for reaching out to <strong>Prestige Accounting & Tax Consultants</strong>. We have received your inquiry regarding <strong>${service}</strong> and appreciate your interest in our professional accounting services.</p>
      
      <div class="highlight">
        <h3 style="margin-top: 0; color: #007bff;">What happens next?</h3>
        <ul style="margin: 10px 0; padding-left: 20px;">
          <li>Our team will review your inquiry within 24 hours</li>
          <li>We'll contact you to discuss your specific needs</li>
          <li>We'll provide a customized solution for your accounting requirements</li>
        </ul>
      </div>
      
      <p>Your message: <em>"${message}"</em></p>
      
      <div class="contact-info">
        <h3 style="margin-top: 0; color: #2c3e50;">Contact Information</h3>
        <p><strong>📧 Email:</strong> <a href="mailto:Prestigetaxcompliance@gmail.com">Prestigetaxcompliance@gmail.com</a></p>
        <p><strong>☎️ Phone (Primary):</strong> +27 69 166 4887</p>
        <p><strong>💬 WhatsApp (Primary):</strong> <a href="https://wa.me/27691664887">Send us a message</a></p>
        <p><strong>☎️ Phone (Secondary):</strong> +27 84 984 4859</p>
        <p><strong>💬 WhatsApp (Secondary):</strong> <a href="https://wa.me/27849844859">Send us a message</a></p>
        <p><strong>🕒 Business Hours:</strong> Monday-Friday: 8:00 AM - 5:00 PM | Saturday: 9:00 AM - 1:00 PM</p>
      </div>
      
      <p>We look forward to helping you with your accounting and tax compliance needs!</p>
      
      <p>Best regards,<br>
      <strong>The Prestige Accounting Team</strong></p>
    </div>

    <div class="footer">
      <img src="https://prestige-accounting.vercel.app/prestige.jpeg" alt="Prestige Accounting Logo" class="footer-logo" />
      <p><strong>Prestige Accounting & Tax Consultants</strong></p>
      <p>Professional Accounting Services | SARS Registered & Compliant</p>
      <p style="margin-top: 10px; font-size: 11px; color: #aaa;">
        This is an automated response. Please do not reply to this email.<br />
        © 2025 Prestige Accounting & Tax Consultants. All rights reserved.
      </p>
    </div>
  </div>
</body>
</html>`;
}

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    const safePhone = formData.phone?.trim() || 'Not provided';
    const safeService = formData.service?.trim() || 'Not specified';

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: safePhone,
      service: safeService,
      message: formData.message,
      subject: `New inquiry: ${safeService}`,
    };

    const clientHtml = renderClientEmailHtml(payload);
    const companyHtml = renderEmailHtml('📬 New Contact Form Submission', payload);

    try {
      // Client email (include both html_content and flat fields + aliases)
      const clientParams = {
        html_content: clientHtml,
        message_html: clientHtml,
        text_message: payload.message,
        name: payload.name,
        email: payload.email,
        phone: payload.phone,
        service: payload.service,
        message: payload.message,
        // common aliases
        user_name: payload.name,
        user_email: payload.email,
        user_phone: payload.phone,
        service_requested: payload.service,
        user_message: payload.message,
        subject: `We received your message, ${payload.name}`,
        to_email: formData.email,
        to_name: formData.name,
      };
      console.log("EmailJS client params", clientParams);
      await emailjs.send(
        SERVICE_ID,
        CLIENT_TEMPLATE_ID,
        clientParams,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      // Company email (include both html_content and flat fields + aliases)
      const companyParams = {
        html_content: companyHtml,
        message_html: companyHtml,
        text_message: payload.message,
        name: payload.name,
        email: payload.email,
        phone: payload.phone,
        service: payload.service,
        message: payload.message,
        // common aliases
        user_name: payload.name,
        user_email: payload.email,
        user_phone: payload.phone,
        service_requested: payload.service,
        user_message: payload.message,
        subject: `New Contact Submission from ${payload.name}`,
        to_email: COMPANY_EMAIL,
        to_name: "Prestige Accounting",
      };
      console.log("EmailJS company params", companyParams);
      await emailjs.send(
        SERVICE_ID,
        COMPANY_TEMPLATE_ID,
        companyParams,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      toast({
        title: "Message sent!",
        description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
        variant: "default",
        action: (
          <div className="flex items-center text-green-600">
            <CheckCircle className="w-4 h-4 mr-1" />
            <span className="text-sm font-medium">Success</span>
          </div>
        ),
      });

      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setShowSuccessDialog(true);
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly at Prestigetaxcompliance@gmail.com.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-center text-green-600">
              <CheckCircle className="w-8 h-8 mr-2" />
              Message Sent Successfully!
            </DialogTitle>
            <DialogDescription className="text-center text-lg">
              Thank you for your inquiry. We'll get back to you within 24 hours.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center mt-4">
            <Button 
              onClick={() => setShowSuccessDialog(false)}
              className="bg-green-600 hover:bg-green-700"
            >
              Continue
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Get In <span className="text-professional-blue">Touch</span>
          </h2>
          <p className="text-lg text-professional-gray max-w-2xl mx-auto">
            Ready to streamline your accounting and tax compliance? 
            Contact us today for a free consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-card border-0 gradient-card">
            <CardHeader>
              <CardTitle className="text-2xl">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-professional-gray/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-professional-gray/20"
                    />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="border-professional-gray/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Service Needed *
                    </label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, service: value }))}
                      required
                    >
                      <SelectTrigger className="border-professional-gray/20">
                        <SelectValue placeholder="Select a service..." />
                      </SelectTrigger>
                      <SelectContent>
                        {SERVICES.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="border-professional-gray/20"
                    placeholder="Tell us about your accounting needs..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full gradient-primary hover:opacity-90 transition-opacity"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending…' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-card border-0 gradient-card">
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone (Primary)</h4>
                    <p className="text-professional-gray">+27 69 166 4887</p>
                    <p className="text-sm text-professional-gray/70">Available during business hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">WhatsApp (Primary)</h4>
                    <a 
                      href="https://wa.me/27691664887" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 transition-colors"
                    >
                      Send Message
                    </a>
                    <p className="text-sm text-professional-gray/70">Quick response via WhatsApp</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone (Secondary)</h4>
                    <p className="text-professional-gray">+27 84 984 4859</p>
                    <p className="text-sm text-professional-gray/70">Available during business hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">WhatsApp (Secondary)</h4>
                    <a 
                      href="https://wa.me/27849844859" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 transition-colors"
                    >
                      Send Message
                    </a>
                    <p className="text-sm text-professional-gray/70">Quick response via WhatsApp</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-professional-gray">Prestigetaxcompliance@gmail.com</p>
                    <p className="text-sm text-professional-gray/70">We respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Business Hours</h4>
                    <p className="text-professional-gray">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="text-professional-gray">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-sm text-professional-gray/70">Closed on Sundays</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0 gradient-card">
              <CardHeader>
                <CardTitle className="text-xl">Why Choose Us?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold">✓ SARS Registered & Compliant</h4>
                  <p className="text-sm text-professional-gray">
                    Fully authorized to handle all SARS submissions and tax matters
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">✓ Professional Excellence</h4>
                  <p className="text-sm text-professional-gray">
                    Years of experience in accounting and tax compliance
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">✓ Personalized Service</h4>
                  <p className="text-sm text-professional-gray">
                    Tailored solutions for your specific business needs
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ContactSection;
