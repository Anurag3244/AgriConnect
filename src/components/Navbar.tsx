import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AgriConnectLogo from "@/assets/agriconnect-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("EN");
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Schemes & Subsidies", href: "/schemes" },
    { name: "e-Mandi", href: "/mandi" },
    { name: "Crop Advisory", href: "/advisory" },
    { name: "Blogs & Stories", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  const languages = [
    { code: "EN", name: "English" },
    { code: "हि", name: "हिंदी" },
    { code: "বা", name: "বাংলা" },
    { code: "த", name: "தமிழ்" },
    { code: "తె", name: "తెలుగు" },
    { code: "म", name: "मराठी" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-card">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover-lift">
            <img src={AgriConnectLogo} alt="AgriConnect Logo" className="h-10 w-10" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gradient">AgriConnect</span>
              <span className="text-xs text-muted-foreground">Government of India</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side - Language & Login */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center space-x-2">
                  <Globe className="h-4 w-4" />
                  <span>{currentLang}</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setCurrentLang(lang.code)}
                    className={currentLang === lang.code ? "bg-accent" : ""}
                  >
                    <span className="flex items-center space-x-2">
                      <span className="font-medium">{lang.code}</span>
                      <span className="text-sm text-muted-foreground">{lang.name}</span>
                    </span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Login Button */}
            <Link to="/login">
              <Button variant="default" size="sm" className="font-medium">
                Login / Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <Card className="lg:hidden mt-4 p-4 shadow-hero animate-fade-in-up">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-accent"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="border-t border-border pt-4 mt-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium">Language:</span>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        {currentLang} <ChevronDown className="h-3 w-3 ml-2" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {languages.map((lang) => (
                        <DropdownMenuItem
                          key={lang.code}
                          onClick={() => setCurrentLang(lang.code)}
                        >
                          {lang.code} - {lang.name}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  <Button className="w-full" variant="default">
                    Login / Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        )}
      </nav>
    </header>
  );
};

export default Navbar;