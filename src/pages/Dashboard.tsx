import React from "react";
import { 
  Cloud, 
  TrendingUp, 
  Award, 
  MessageCircle,
  Thermometer,
  Droplets,
  Wind,
  Eye
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import ApplicationTracker from "@/components/ApplicationTracker";
import MarketNews from "@/components/MarketNews";
import SecurePayments from "@/components/SecurePayments";

const Dashboard = () => {
  const weatherData = {
    location: "Your Location",
    temperature: "28°C",
    condition: "Partly Cloudy",
    humidity: "68%",
    windSpeed: "12 km/h",
    forecast: [
      { day: "Today", high: "32°", low: "22°", condition: "sunny" },
      { day: "Tomorrow", high: "30°", low: "20°", condition: "cloudy" },
      { day: "Day 3", high: "28°", low: "18°", condition: "rainy" }
    ]
  };

  const mandiPrices = [
    { crop: "Wheat", price: "₹2,150", change: "+2.5%", market: "Delhi Mandi" },
    { crop: "Rice", price: "₹1,880", change: "-1.2%", market: "Punjab Mandi" },
    { crop: "Cotton", price: "₹5,200", change: "+4.1%", market: "Gujarat Mandi" },
    { crop: "Sugarcane", price: "₹350", change: "+1.8%", market: "UP Mandi" }
  ];

  const recommendedSchemes = [
    {
      name: "PM-Kisan Yojana",
      amount: "₹6,000/year",
      status: "Eligible",
      description: "Direct income support for small farmers"
    },
    {
      name: "Soil Health Card",
      amount: "Free",
      status: "Apply Now",
      description: "Get detailed soil analysis and recommendations"
    },
    {
      name: "Crop Insurance",
      amount: "85% subsidy",
      status: "Recommended",
      description: "Protect crops from natural disasters"
    }
  ];

  return (
    <div className="min-h-screen bg-muted/30 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Welcome back, Farmer!
          </h1>
          <p className="text-lg text-muted-foreground">
            Your personalized agricultural dashboard with real-time insights
          </p>
        </div>

        {/* Enhanced Grid with New Components */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Weather Card */}
          <Card className="shadow-card">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-lg">
                <Cloud className="w-5 h-5 mr-2 text-gov-blue" />
                Weather & Advisory
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-foreground">{weatherData.temperature}</div>
                <div className="text-sm text-muted-foreground">{weatherData.condition}</div>
                <div className="text-xs text-muted-foreground mt-1">{weatherData.location}</div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center">
                  <Droplets className="w-4 h-4 text-gov-blue mr-2" />
                  <div>
                    <div className="text-sm font-medium">{weatherData.humidity}</div>
                    <div className="text-xs text-muted-foreground">Humidity</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Wind className="w-4 h-4 text-gov-blue mr-2" />
                  <div>
                    <div className="text-sm font-medium">{weatherData.windSpeed}</div>
                    <div className="text-xs text-muted-foreground">Wind</div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-semibold">3-Day Forecast</h4>
                {weatherData.forecast.map((day, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{day.day}</span>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{day.high}</span>
                      <span className="text-muted-foreground">{day.low}</span>
                    </div>
                  </div>
                ))}
              </div>

              <Button className="w-full mt-4" variant="outline" size="sm">
                <Eye className="w-4 h-4 mr-2" />
                Detailed Advisory
              </Button>
            </CardContent>
          </Card>

          {/* AI Chatbot */}
          <Card className="shadow-card">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-lg">
                <MessageCircle className="w-5 h-5 mr-2 text-warm-yellow" />
                AI Assistant
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 rounded-lg p-4 mb-4">
                <div className="text-sm text-muted-foreground mb-2">💬 AI Assistant</div>
                <p className="text-sm">
                  "Hello! I can help you with crop recommendations, scheme eligibility, 
                  weather updates, and more. What would you like to know today?"
                </p>
              </div>

              <div className="space-y-2 mb-4">
                <Button variant="outline" size="sm" className="w-full justify-start text-left h-auto py-2">
                  "What subsidy is available for wheat?"
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start text-left h-auto py-2">
                  "Show me crop insurance options"
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start text-left h-auto py-2">
                  "Best time to sow rice in my area?"
                </Button>
              </div>

              <Button className="w-full" size="sm">
                Start Chat
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Market News & Insights */}
        <div className="mb-6">
          <MarketNews />
        </div>

        {/* Application Tracker */}
        <div className="mb-6">
          <ApplicationTracker />
        </div>

        {/* Secure Payments */}
        <div className="mb-6">
          <SecurePayments />
        </div>

        {/* Recommended Schemes */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <Award className="w-6 h-6 mr-2 text-primary" />
              Recommended Schemes for You
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recommendedSchemes.map((scheme, index) => (
                <div key={index} className="border rounded-lg p-4 hover:bg-muted/30 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-lg">{scheme.name}</h4>
                    <Badge 
                      variant={scheme.status === 'Eligible' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {scheme.status}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3">
                    {scheme.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-success">{scheme.amount}</span>
                    <Button size="sm" variant="outline">
                      Apply Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;