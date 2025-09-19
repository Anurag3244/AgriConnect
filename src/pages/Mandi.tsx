import React from "react";
import { 
  TrendingUp, 
  TrendingDown, 
  MapPin, 
  Calendar,
  Search,
  Filter,
  BarChart3,
  ArrowUpRight,
  ArrowDownRight,
  Smartphone
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";

const Mandi = () => {
  const liveMandiPrices = [
    {
      crop: "Wheat",
      currentPrice: "₹2,150",
      previousPrice: "₹2,098",
      change: "+2.5%",
      changeType: "up",
      market: "Delhi APMC",
      variety: "HD-2967",
      quality: "FAQ",
      lastUpdated: "2 hours ago"
    },
    {
      crop: "Rice",
      currentPrice: "₹1,880",
      previousPrice: "₹1,903",
      change: "-1.2%",
      changeType: "down",
      market: "Punjab Mandi",
      variety: "Basmati 1121",
      quality: "Grade A",
      lastUpdated: "1 hour ago"
    },
    {
      crop: "Cotton",
      currentPrice: "₹5,200",
      previousPrice: "₹4,995",
      change: "+4.1%",
      changeType: "up",
      market: "Gujarat APMC",
      variety: "Shankar-6",
      quality: "MCU-5",
      lastUpdated: "30 min ago"
    },
    {
      crop: "Sugarcane",
      currentPrice: "₹350",
      previousPrice: "₹344",
      change: "+1.8%",
      changeType: "up",
      market: "UP Mandi",
      variety: "Co-238",
      quality: "Fair Average",
      lastUpdated: "45 min ago"
    },
    {
      crop: "Soybean",
      currentPrice: "₹4,250",
      previousPrice: "₹4,380",
      change: "-3.0%",
      changeType: "down",
      market: "MP APMC",
      variety: "JS-335",
      quality: "Good",
      lastUpdated: "20 min ago"
    },
    {
      crop: "Onion",
      currentPrice: "₹35",
      previousPrice: "₹42",
      change: "-16.7%",
      changeType: "down",
      market: "Maharashtra",
      variety: "Red Onion",
      quality: "Medium",
      lastUpdated: "1 hour ago"
    }
  ];

  const topGainers = [
    { crop: "Cotton", change: "+4.1%", price: "₹5,200" },
    { crop: "Wheat", change: "+2.5%", price: "₹2,150" },
    { crop: "Sugarcane", change: "+1.8%", price: "₹350" }
  ];

  const topLosers = [
    { crop: "Onion", change: "-16.7%", price: "₹35" },
    { crop: "Soybean", change: "-3.0%", price: "₹4,250" },
    { crop: "Rice", change: "-1.2%", price: "₹1,880" }
  ];

  const marketStats = [
    { label: "Active Mandis", value: "1,000+", icon: MapPin },
    { label: "Daily Transactions", value: "₹500 Cr+", icon: TrendingUp },
    { label: "Registered Farmers", value: "5 Cr+", icon: Calendar },
    { label: "Price Updates", value: "Real-time", icon: BarChart3 }
  ];

  return (
    <div className="min-h-screen bg-muted/30 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Live Mandi Prices & e-NAM Portal
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get real-time market prices from 1000+ mandis across India. Make informed decisions 
            with live updates, price trends, and direct market access through e-NAM.
          </p>
        </div>

        {/* Market Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {marketStats.map((stat, index) => {
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

        {/* Quick Market Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Top Gainers */}
          <Card className="shadow-card">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-lg text-success">
                <TrendingUp className="w-5 h-5 mr-2" />
                Top Gainers Today
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {topGainers.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="font-medium">{item.crop}</span>
                    <div className="text-right">
                      <div className="font-semibold">{item.price}</div>
                      <Badge className="bg-success text-success-foreground text-xs">
                        <ArrowUpRight className="w-3 h-3 mr-1" />
                        {item.change}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Losers */}
          <Card className="shadow-card">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-lg text-destructive">
                <TrendingDown className="w-5 h-5 mr-2" />
                Top Losers Today
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {topLosers.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="font-medium">{item.crop}</span>
                    <div className="text-right">
                      <div className="font-semibold">{item.price}</div>
                      <Badge variant="destructive" className="text-xs">
                        <ArrowDownRight className="w-3 h-3 mr-1" />
                        {item.change}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <Card className="mb-8 shadow-card">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input 
                  placeholder="Search by crop name, market, or location..."
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  Filter by State
                </Button>
                <Button variant="outline">
                  <MapPin className="w-4 h-4 mr-2" />
                  Near Me
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Live Mandi Prices Table */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="text-xl">Live Mandi Prices</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-sm text-muted-foreground">Live Updates</span>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <div className="grid gap-4">
                {liveMandiPrices.map((item, index) => (
                  <Card key={index} className="border hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
                        {/* Crop Info */}
                        <div className="md:col-span-2">
                          <h4 className="font-semibold text-lg">{item.crop}</h4>
                          <div className="text-sm text-muted-foreground">
                            <div>{item.variety}</div>
                            <div>{item.quality}</div>
                          </div>
                        </div>

                        {/* Price */}
                        <div className="text-center">
                          <div className="text-2xl font-bold text-foreground">{item.currentPrice}</div>
                          <div className="text-xs text-muted-foreground">per quintal</div>
                        </div>

                        {/* Change */}
                        <div className="text-center">
                          <Badge 
                            className={`${
                              item.changeType === 'up' 
                                ? 'bg-success text-success-foreground' 
                                : 'bg-destructive text-destructive-foreground'
                            }`}
                          >
                            {item.changeType === 'up' ? 
                              <ArrowUpRight className="w-3 h-3 mr-1" /> : 
                              <ArrowDownRight className="w-3 h-3 mr-1" />
                            }
                            {item.change}
                          </Badge>
                          <div className="text-xs text-muted-foreground mt-1">
                            From {item.previousPrice}
                          </div>
                        </div>

                        {/* Market */}
                        <div className="text-center">
                          <div className="font-medium">{item.market}</div>
                          <div className="text-xs text-muted-foreground flex items-center justify-center mt-1">
                            <MapPin className="w-3 h-3 mr-1" />
                            View on Map
                          </div>
                        </div>

                        {/* Last Updated */}
                        <div className="text-center">
                          <Button size="sm" variant="outline">
                            Sell Here
                          </Button>
                          <div className="text-xs text-muted-foreground mt-2">
                            Updated {item.lastUpdated}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* e-NAM Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-xl">Sell on e-NAM Platform</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Connect directly with buyers across India through the National Agriculture Market (e-NAM). 
                Get better prices with transparent bidding.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-success rounded-full mr-3"></div>
                  Transparent price discovery
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-success rounded-full mr-3"></div>
                  Online payment facility
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-success rounded-full mr-3"></div>
                  Quality assurance
                </div>
              </div>
              <Button className="w-full">
                Register on e-NAM
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-xl">Mobile App Available</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Get instant price alerts, compare rates, and access e-NAM features on the go 
                with our mobile application.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Real-time price notifications
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Offline access to data
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Multi-language support
                </div>
              </div>
              <Button variant="outline" className="w-full">
                <Smartphone className="w-4 h-4 mr-2" />
                Download App
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Price Alert CTA */}
        <Card className="mt-8 bg-primary text-primary-foreground shadow-hero">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Never Miss a Price Movement</h3>
            <p className="text-lg mb-6 text-primary-foreground/90">
              Set up personalized price alerts for your crops and get notified instantly 
              when prices reach your target levels.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Setup Price Alerts
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Mandi;