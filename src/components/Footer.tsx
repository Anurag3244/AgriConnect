import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MessageCircle, Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import AgriConnectLogo from "@/assets/agriconnect-logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "PM-Kisan Yojana", href: "/schemes/pm-kisan" },
    { name: "Soil Health Card", href: "/schemes/soil-health" },
    { name: "Crop Insurance", href: "/schemes/insurance" },
    { name: "e-NAM Portal", href: "/mandi" },
    { name: "Weather Advisory", href: "/advisory" },
    { name: "Success Stories", href: "/blogs/stories" },
  ];

  const governmentLogos = [
    { name: "Digital India", desc: "Digital India Initiative" },
    { name: "MyGov", desc: "Citizen Engagement Platform" },
    { name: "Aadhaar", desc: "Unique Identification" },
    { name: "BharatNet", desc: "Rural Connectivity" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      {/* Government Trust Signals */}
      <div className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">
              Powered by Ministry of Agriculture & Farmers Welfare
            </h3>
            <p className="text-sm opacity-90">Government of India</p>
            
            {/* Government Logos */}
            <div className="flex flex-wrap justify-center items-center gap-6 mt-4">
              {governmentLogos.map((logo, index) => (
                <div key={index} className="flex items-center space-x-2 bg-primary-foreground/10 px-3 py-2 rounded-lg">
                  <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">{logo.name.charAt(0)}</span>
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-medium">{logo.name}</div>
                    <div className="text-xs opacity-80">{logo.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About AgriConnect */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={AgriConnectLogo} alt="AgriConnect" className="h-8 w-8" />
              <span className="text-lg font-bold text-gradient">AgriConnect</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Empowering Indian farmers with digital solutions for schemes, market access, 
              weather updates, and crop advisory services. Building a prosperous agricultural future.
            </p>
            <div className="flex space-x-3">
              <Button variant="outline" size="sm" className="p-2">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="p-2">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="p-2">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <div>
                  <div className="text-sm font-medium">Helpline</div>
                  <div className="text-sm text-muted-foreground">1800-180-1551</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <div>
                  <div className="text-sm font-medium">Email Support</div>
                  <div className="text-sm text-muted-foreground">support@agriconnect.gov.in</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-4 w-4 text-primary" />
                <div>
                  <div className="text-sm font-medium">WhatsApp</div>
                  <div className="text-sm text-muted-foreground">+91 9876543210</div>
                </div>
              </div>
            </div>
          </div>

          {/* Support & Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/accessibility" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground text-center md:text-left">
              © 2024 AgriConnect - Ministry of Agriculture & Farmers Welfare, Government of India. 
              All rights reserved.
            </div>
            <div className="text-sm text-muted-foreground">
              Last updated: December 2024 | Version 2.1
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;