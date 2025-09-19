import React from "react";
import { 
  Award, 
  Users, 
  TrendingUp, 
  Shield, 
  Wheat,
  Droplets,
  ArrowRight,
  Search,
  Filter,
  CheckCircle
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const Schemes = () => {
  const featuredSchemes = [
    {
      id: 1,
      name: "PM-Kisan Samman Nidhi Yojana",
      description: "Direct income support of ₹6,000 per year to small and marginal farmers",
      benefits: "₹6,000/year",
      beneficiaries: "12 Crore+",
      status: "Active",
      category: "Income Support",
      icon: Award,
      color: "bg-primary",
      eligibility: "Small & marginal farmers with landholding up to 2 hectares",
      documents: ["Aadhaar Card", "Bank Account", "Land Records"],
      deadline: "Open throughout year"
    },
    {
      id: 2,
      name: "Soil Health Card Scheme",
      description: "Provides soil health cards to farmers with recommendations for appropriate nutrients",
      benefits: "Free Soil Testing",
      beneficiaries: "22 Crore+",
      status: "Active",
      category: "Soil Health",
      icon: Wheat,
      color: "bg-success",
      eligibility: "All farmers across India",
      documents: ["Aadhaar Card", "Land Records", "Bank Account"],
      deadline: "Ongoing"
    },
    {
      id: 3,
      name: "PM Fasal Bima Yojana",
      description: "Crop insurance scheme providing financial support to farmers in case of crop loss",
      benefits: "85% Premium Subsidy",
      beneficiaries: "5.5 Crore+",
      status: "Active",
      category: "Insurance",
      icon: Shield,
      color: "bg-gov-blue",
      eligibility: "All farmers growing notified crops",
      documents: ["Aadhaar Card", "Land Records", "Bank Account", "Sowing Certificate"],
      deadline: "Varies by crop season"
    },
    {
      id: 4,
      name: "Pradhan Mantri Krishi Sinchayee Yojana",
      description: "Irrigation scheme to expand cultivable area under assured irrigation",
      benefits: "Up to 90% Subsidy",
      beneficiaries: "2 Crore+",
      status: "Active",
      category: "Irrigation",
      icon: Droplets,
      color: "bg-gov-blue",
      eligibility: "Farmers with irrigation potential",
      documents: ["Aadhaar Card", "Land Records", "Water Source Proof"],
      deadline: "State-wise deadlines"
    },
    {
      id: 5,
      name: "Kisan Credit Card Scheme",
      description: "Credit facility for farmers to meet agricultural expenses",
      benefits: "Up to ₹3 Lakh Credit",
      beneficiaries: "7 Crore+",
      status: "Active",
      category: "Credit",
      icon: TrendingUp,
      color: "bg-warm-yellow",
      eligibility: "All farmers including tenant farmers and sharecroppers",
      documents: ["Aadhaar Card", "Land Records", "Income Certificate"],
      deadline: "Open throughout year"
    },
    {
      id: 6,
      name: "National Mission for Sustainable Agriculture",
      description: "Promotes sustainable agriculture practices and climate-resilient farming",
      benefits: "Technical & Financial Support",
      beneficiaries: "1 Crore+",
      status: "Active",
      category: "Sustainability",
      icon: Users,
      color: "bg-purple-600",
      eligibility: "Farmers adopting sustainable practices",
      documents: ["Aadhaar Card", "Land Records", "Training Certificate"],
      deadline: "Project-based deadlines"
    }
  ];

  const categories = [
    "All Categories",
    "Income Support",
    "Soil Health",
    "Insurance",
    "Credit",
    "Irrigation",
    "Sustainability"
  ];

  const impactStats = [
    { label: "Total Budget Allocated", value: "₹2.3 Lakh Crore", icon: Award },
    { label: "Farmers Benefited", value: "12+ Crore", icon: Users },
    { label: "Districts Covered", value: "740+", icon: TrendingUp },
    { label: "Success Rate", value: "92%", icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen bg-muted/30 py-8">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Government Schemes & Subsidies
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore comprehensive government schemes designed to support farmers with financial assistance, 
            technology adoption, insurance coverage, and sustainable farming practices.
          </p>

          {/* Impact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {impactStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center shadow-card">
                  <CardContent className="p-4">
                    <IconComponent className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <div className="text-xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Search and Filter */}
        <Card className="mb-8 shadow-card">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input 
                  placeholder="Search schemes by name, category, or benefits..."
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  Filter
                </Button>
                <Button variant="outline">
                  Sort by Relevance
                </Button>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 mt-4">
              {categories.map((category, index) => (
                <Badge 
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Schemes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredSchemes.map((scheme) => {
            const IconComponent = scheme.icon;
            return (
              <Card key={scheme.id} className="hover-lift shadow-card border-0 bg-gradient-card h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-12 h-12 rounded-lg ${scheme.color} flex items-center justify-center text-white`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <Badge 
                        variant={scheme.status === 'Active' ? 'default' : 'secondary'}
                        className="mb-1"
                      >
                        {scheme.status}
                      </Badge>
                      <div className="text-xs text-muted-foreground">{scheme.category}</div>
                    </div>
                  </div>
                  
                  <CardTitle className="text-lg leading-tight">
                    {scheme.name}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {scheme.description}
                  </p>

                  {/* Key Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-sm font-medium text-success">{scheme.benefits}</div>
                      <div className="text-xs text-muted-foreground">Benefit Amount</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-primary">{scheme.beneficiaries}</div>
                      <div className="text-xs text-muted-foreground">Beneficiaries</div>
                    </div>
                  </div>

                  {/* Eligibility */}
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold mb-1">Eligibility:</h5>
                    <p className="text-xs text-muted-foreground">{scheme.eligibility}</p>
                  </div>

                  {/* Required Documents */}
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold mb-2">Required Documents:</h5>
                    <div className="flex flex-wrap gap-1">
                      {scheme.documents.slice(0, 3).map((doc, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {doc}
                        </Badge>
                      ))}
                      {scheme.documents.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{scheme.documents.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Deadline */}
                  <div className="mb-4">
                    <div className="text-xs text-muted-foreground">
                      <strong>Deadline:</strong> {scheme.deadline}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      Apply Now
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Help Section */}
        <Card className="mt-12 bg-primary text-primary-foreground shadow-hero">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Need Help with Applications?</h3>
            <p className="text-lg mb-6 text-primary-foreground/90">
              Our support team is available 24/7 to help you understand scheme eligibility, 
              complete applications, and track your status.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Contact Support
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Download Guide
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Schemes;