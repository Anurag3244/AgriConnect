import React from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle,
  Clock,
  Headphones,
  FileText,
  Users,
  Send,
  AlertCircle
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Contact = () => {
  const contactMethods = [
    {
      title: "24/7 Helpline",
      description: "Immediate assistance for urgent farming queries",
      icon: Phone,
      contact: "1800-180-1551",
      availability: "Available 24/7",
      color: "bg-primary"
    },
    {
      title: "Email Support",
      description: "Detailed responses within 24 hours",
      icon: Mail,
      contact: "support@agriconnect.gov.in",
      availability: "Response in 24 hours",
      color: "bg-success"
    },
    {
      title: "WhatsApp Support",
      description: "Quick queries and instant updates",
      icon: MessageCircle,
      contact: "+91 9876543210",
      availability: "9 AM - 6 PM",
      color: "bg-warm-yellow"
    },
    {
      title: "Regional Offices",
      description: "Visit your nearest AgriConnect center",
      icon: MapPin,
      contact: "Find Nearest Office",
      availability: "Mon-Fri: 9 AM - 5 PM",
      color: "bg-gov-blue"
    }
  ];

  const supportCategories = [
    {
      title: "Scheme Applications",
      description: "Help with PM-Kisan, Soil Health Card, Insurance applications",
      queries: "2,500+ resolved this month",
      icon: FileText
    },
    {
      title: "Technical Support",
      description: "Website issues, login problems, mobile app support",
      queries: "1,800+ resolved this month",
      icon: Headphones
    },
    {
      title: "Market Information",
      description: "Mandi prices, e-NAM registration, selling guidance",
      queries: "3,200+ resolved this month",
      icon: Users
    }
  ];

  const faqItems = [
    {
      question: "How do I register for PM-Kisan scheme?",
      answer: "Visit the PM-Kisan portal or our schemes section, fill the application form with required documents."
    },
    {
      question: "Why is my application showing 'Under Review' status?",
      answer: "Applications typically take 15-30 days for verification. You'll receive SMS updates on progress."
    },
    {
      question: "How can I update my bank details?",
      answer: "Login to your dashboard and update bank information in the profile section with bank verification."
    },
    {
      question: "Where can I check live mandi prices?",
      answer: "Visit our Mandi section for real-time prices from 1000+ markets across India."
    }
  ];

  const officeLocations = [
    {
      region: "North India",
      address: "AgriConnect Regional Office, Sector 18, Noida, UP - 201301",
      phone: "+91 120-2345678",
      email: "north@agriconnect.gov.in"
    },
    {
      region: "South India",
      address: "AgriConnect Regional Office, Whitefield, Bangalore, KA - 560066",
      phone: "+91 80-87654321",
      email: "south@agriconnect.gov.in"
    },
    {
      region: "West India",
      address: "AgriConnect Regional Office, Andheri East, Mumbai, MH - 400069",
      phone: "+91 22-12345678",
      email: "west@agriconnect.gov.in"
    },
    {
      region: "East India",
      address: "AgriConnect Regional Office, Salt Lake, Kolkata, WB - 700091",
      phone: "+91 33-98765432",
      email: "east@agriconnect.gov.in"
    }
  ];

  return (
    <div className="min-h-screen bg-muted/30 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact & Support
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're here to help you succeed. Get immediate assistance, technical support, 
            or guidance on government schemes from our dedicated team.
          </p>
        </div>

        {/* Emergency Alert */}
        <Alert className="mb-8 border-warning bg-warning/10">
          <AlertCircle className="h-4 w-4 text-warning" />
          <AlertDescription className="text-warning-foreground">
            <strong>Emergency Agricultural Helpline:</strong> For urgent farming emergencies, 
            crop diseases, or weather-related disasters, call{" "}
            <span className="font-bold">1800-180-1551</span> (Available 24/7)
          </AlertDescription>
        </Alert>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <Card key={index} className="hover-lift shadow-card text-center">
                <CardHeader className="pb-3">
                  <div className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center mx-auto mb-3 text-white`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="text-lg font-semibold text-primary mb-2">
                    {method.contact}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    <Clock className="w-3 h-3 mr-1" />
                    {method.availability}
                  </Badge>
                  <Button className="w-full mt-4" size="sm">
                    Contact Now
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Support Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            What can we help you with?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="shadow-card">
                  <CardHeader className="pb-3">
                    <div className="flex items-center mb-3">
                      <IconComponent className="w-6 h-6 mr-3 text-primary" />
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-success font-medium mb-3">
                      {category.queries}
                    </div>
                    <Button variant="outline" className="w-full" size="sm">
                      Get Help
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-xl">Send us a Message</CardTitle>
              <p className="text-sm text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Full Name *</label>
                  <Input placeholder="Enter your full name" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Phone Number *</label>
                  <Input placeholder="Enter your phone number" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Email Address</label>
                <Input placeholder="Enter your email address" type="email" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Subject *</label>
                <Input placeholder="What is this regarding?" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Message *</label>
                <Textarea 
                  placeholder="Describe your query or issue in detail..."
                  rows={5}
                />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Preferred Language</label>
                <select className="w-full p-2 border border-input rounded-md bg-background">
                  <option>English</option>
                  <option>हिंदी (Hindi)</option>
                  <option>বাংলা (Bengali)</option>
                  <option>தமிழ் (Tamil)</option>
                  <option>తెలుగు (Telugu)</option>
                  <option>मराठी (Marathi)</option>
                </select>
              </div>
              
              <Button className="w-full" size="lg">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* FAQ */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-xl">Frequently Asked Questions</CardTitle>
              <p className="text-sm text-muted-foreground">
                Quick answers to common questions
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {faqItems.map((faq, index) => (
                  <div key={index} className="border-b border-border pb-4 last:border-b-0">
                    <h4 className="font-medium text-sm mb-2">{faq.question}</h4>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All FAQs
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Regional Offices */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            Regional Offices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {officeLocations.map((office, index) => (
              <Card key={index} className="shadow-card">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-lg">
                    <MapPin className="w-5 h-5 mr-2 text-primary" />
                    {office.region}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-medium">Address:</span>
                      <p className="text-muted-foreground">{office.address}</p>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-primary" />
                      <span className="font-medium">{office.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-primary" />
                      <span className="font-medium">{office.email}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4" size="sm">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Feedback CTA */}
        <Card className="bg-primary text-primary-foreground shadow-hero">
          <CardContent className="p-8 text-center">
            <Users className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Help Us Improve</h3>
            <p className="text-lg mb-6 text-primary-foreground/90">
              Your feedback helps us serve farmers better. Share your experience and 
              suggestions to make AgriConnect more effective for the farming community.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Submit Feedback
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;