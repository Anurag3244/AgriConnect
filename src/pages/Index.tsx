import React from "react";
import { Link } from "react-router-dom";
import { 
  Wheat, 
  CloudRain, 
  TrendingUp, 
  Shield, 
  Users, 
  Award,
  ArrowRight,
  Sparkles,
  Heart,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import HeroImage from "@/assets/hero-farmers.jpg";

const Index = () => {
  const quickAccessCards = [
    {
      title: "Schemes & Subsidies",
      description: "Discover government schemes, subsidies, and financial support for farmers",
      icon: Award,
      color: "bg-primary",
      link: "/schemes",
      stats: "₹2.3L Cr allocated"
    },
    {
      title: "Soil Health Cards",
      description: "Get detailed soil analysis and recommendations for better yield",
      icon: Wheat,
      color: "bg-success",
      link: "/schemes/soil-health",
      stats: "22 Cr+ cards issued"
    },
    {
      title: "Weather & Pest Alerts",
      description: "Real-time weather updates and pest management advisory",
      icon: CloudRain,
      color: "bg-gov-blue",
      link: "/advisory",
      stats: "Daily updates"
    },
    {
      title: "Crop Insurance",
      description: "Protect your crops from natural disasters with PM Fasal Bima Yojana",
      icon: Shield,
      color: "bg-warm-yellow",
      link: "/schemes/insurance",
      stats: "85% premium subsidy"
    },
    {
      title: "Mandi Prices",
      description: "Live market prices and e-NAM platform for fair crop selling",
      icon: TrendingUp,
      color: "bg-warning",
      link: "/mandi",
      stats: "1000+ mandis live"
    },
    {
      title: "Success Stories",
      description: "Learn from fellow farmers who transformed their agriculture",
      icon: Users,
      color: "bg-purple-600",
      link: "/blogs/stories",
      stats: "5000+ stories"
    }
  ];

  const successStories = [
    {
      name: "Ramesh Kumar",
      location: "Haryana",
      image: "👨‍🌾",
      story: "Increased wheat yield by 35% using PM-Kisan scheme and soil health card recommendations",
      benefit: "₹1.2L additional income",
      scheme: "PM-Kisan + Soil Health"
    },
    {
      name: "Priya Devi",
      location: "Maharashtra",
      image: "👩‍🌾",
      story: "Started organic farming with government subsidy and now supplies to 5 cities",
      benefit: "₹8L annual profit",
      scheme: "Organic Farming Scheme"
    },
    {
      name: "Arjun Singh",
      location: "Punjab",
      image: "👨‍🌾",
      story: "Used crop insurance to recover from flood damage and rebuilt stronger",
      benefit: "₹3.5L insurance claim",
      scheme: "PM Fasal Bima Yojana"
    }
  ];

  const governmentLogos = [
    "Digital India",
    "PM-Kisan",
    "MyGov",
    "Aadhaar",
    "JAM Trinity",
    "BharatNet"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HeroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-16 h-16 bg-warm-yellow/20 rounded-full flex items-center justify-center">
            <Wheat className="w-8 h-8 text-warm-yellow" />
          </div>
        </div>
        <div className="absolute top-32 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-success" />
          </div>
        </div>
        <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-14 h-14 bg-gov-blue/20 rounded-full flex items-center justify-center">
            <Shield className="w-7 h-7 text-gov-blue" />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-warm-yellow text-warm-yellow-foreground text-lg px-6 py-2 animate-fade-in-up">
              <Sparkles className="w-4 h-4 mr-2" />
              Government of India Initiative
            </Badge>
            
            <h1 className="text-hero mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Your One-Stop Portal for 
              <span className="block text-warm-yellow">Schemes, Markets & Crop Advisory</span>
            </h1>
            
            <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Empowering Indian farmers with digital solutions for government schemes, 
              real-time market prices, weather alerts, and expert crop advisory services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <Link to="/schemes">
                <Button size="lg" className="bg-warm-yellow text-warm-yellow-foreground hover:bg-warm-yellow/90 font-semibold px-8 py-4 text-lg shadow-hero hover-lift">
                  Check Schemes & Subsidies
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              
              <Link to="/mandi">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg shadow-hero hover-lift">
                  Live Market Prices
                  <TrendingUp className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <div className="text-center">
                <div className="text-2xl font-bold text-warm-yellow">12 Cr+</div>
                <div className="text-sm text-gray-200">Farmers Registered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-warm-yellow">₹2.3L Cr</div>
                <div className="text-sm text-gray-200">Schemes Budget</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-warm-yellow">1000+</div>
                <div className="text-sm text-gray-200">Mandis Connected</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-warm-yellow">24/7</div>
                <div className="text-sm text-gray-200">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Quick Access to Essential Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to grow your farming business - schemes, market data, 
              weather updates, and expert guidance - all in one place.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickAccessCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <Link key={index} to={card.link}>
                  <Card className="hover-lift cursor-pointer h-full transition-all duration-300 group border-2 hover:border-primary/20 shadow-card">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-3">
                        <div className={`w-12 h-12 rounded-lg ${card.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {card.stats}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {card.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {card.description}
                      </p>
                      <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-2 transition-transform">
                        Explore Now
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Builders */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary-foreground text-primary px-4 py-2">
              <Shield className="w-4 h-4 mr-2" />
              Trusted by Government of India
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powered by Ministry of Agriculture & Allied Departments
            </h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Backed by official government initiatives and integrated with major digital platforms 
              for seamless, secure, and reliable service delivery.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {governmentLogos.map((logo, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto bg-primary-foreground/10 rounded-lg flex items-center justify-center mb-3 hover:bg-primary-foreground/20 transition-colors">
                  <span className="font-bold text-lg">{logo.charAt(0)}</span>
                </div>
                <div className="text-sm font-medium">{logo}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center bg-primary-foreground/10 rounded-full px-6 py-3">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              <span className="font-medium">Portal Status: Online & Secure</span>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Success Stories from Fellow Farmers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real farmers, real results. See how AgriConnect has transformed 
              lives and livelihoods across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="hover-lift shadow-card border-0 bg-gradient-card">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{story.image}</div>
                    <div>
                      <h4 className="font-semibold text-lg">{story.name}</h4>
                      <p className="text-sm text-muted-foreground">{story.location}</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    "{story.story}"
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Heart className="w-4 h-4 text-success mr-2" />
                      <span className="text-sm font-medium text-success">{story.benefit}</span>
                    </div>
                    
                    <Badge variant="outline" className="text-xs">
                      <Star className="w-3 h-3 mr-1" />
                      {story.scheme}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/blogs/stories">
              <Button variant="outline" size="lg" className="hover-lift">
                Read More Success Stories
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Farming Journey?
          </h2>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Join millions of Indian farmers who are already benefiting from government schemes, 
            better market access, and expert agricultural guidance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg shadow-hero hover-lift">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg shadow-hero hover-lift">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;