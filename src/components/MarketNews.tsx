import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  TrendingDown, 
  Newspaper, 
  Clock,
  MapPin,
  Bookmark,
  BookmarkCheck,
  ExternalLink,
  BarChart3
} from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

interface MarketPrice {
  crop: string;
  currentPrice: number;
  previousPrice: number;
  change: number;
  changePercent: number;
  market: string;
  unit: string;
  lastUpdated: string;
}

interface NewsItem {
  id: string;
  title: string;
  summary: string;
  timestamp: string;
  source: string;
  category: "price" | "policy" | "weather" | "technology";
  importance: "high" | "medium" | "low";
  isBookmarked: boolean;
}

const MarketNews = () => {
  const [bookmarkedNews, setBookmarkedNews] = useState<string[]>([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  const marketPrices: MarketPrice[] = [
    {
      crop: "Wheat",
      currentPrice: 2150,
      previousPrice: 2100,
      change: 50,
      changePercent: 2.38,
      market: "Delhi Mandi",
      unit: "quintal",
      lastUpdated: "2 hours ago"
    },
    {
      crop: "Rice (Basmati)",
      currentPrice: 3200,
      previousPrice: 3300,
      change: -100,
      changePercent: -3.03,
      market: "Punjab Mandi",
      unit: "quintal", 
      lastUpdated: "3 hours ago"
    },
    {
      crop: "Cotton",
      currentPrice: 5200,
      previousPrice: 5000,
      change: 200,
      changePercent: 4.0,
      market: "Gujarat Mandi",
      unit: "quintal",
      lastUpdated: "1 hour ago"
    },
    {
      crop: "Sugarcane", 
      currentPrice: 350,
      previousPrice: 340,
      change: 10,
      changePercent: 2.94,
      market: "UP Mandi",
      unit: "quintal",
      lastUpdated: "4 hours ago"
    }
  ];

  const newsItems: NewsItem[] = [
    {
      id: "1",
      title: "Wheat Prices Rise 5% in Northern Mandis Due to Export Demand",
      summary: "Strong international demand pushes wheat prices higher across Delhi, Punjab, and Haryana markets.",
      timestamp: "2 hours ago",
      source: "Official Agri News",
      category: "price",
      importance: "high",
      isBookmarked: false
    },
    {
      id: "2", 
      title: "New Millet Promotion Scheme Announced for Small Farmers",
      summary: "Government launches ₹500 crore initiative to promote millet cultivation with 75% subsidy support.",
      timestamp: "4 hours ago",
      source: "Ministry of Agriculture",
      category: "policy",
      importance: "high",
      isBookmarked: false
    },
    {
      id: "3",
      title: "Monsoon Forecast: Above Normal Rainfall Expected",
      summary: "IMD predicts 106% of normal rainfall this season, benefiting kharif crops across major states.",
      timestamp: "6 hours ago",
      source: "Weather Department",
      category: "weather", 
      importance: "medium",
      isBookmarked: false
    },
    {
      id: "4",
      title: "Digital Soil Testing Kits Now Available at 50% Subsidy",
      summary: "Farmers can now access advanced soil testing technology with government support for precision agriculture.",
      timestamp: "1 day ago",
      source: "Agri Technology News",
      category: "technology",
      importance: "medium",
      isBookmarked: false
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const toggleBookmark = (newsId: string) => {
    setBookmarkedNews(prev => 
      prev.includes(newsId) 
        ? prev.filter(id => id !== newsId)
        : [...prev, newsId]
    );
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "price": return "bg-success/10 text-success";
      case "policy": return "bg-gov-blue/10 text-gov-blue";  
      case "weather": return "bg-warm-yellow/10 text-warm-yellow";
      case "technology": return "bg-primary/10 text-primary";
      default: return "bg-muted";
    }
  };

  const getImportanceBadge = (importance: string) => {
    switch (importance) {
      case "high": return <Badge variant="destructive" className="text-xs">High Priority</Badge>;
      case "medium": return <Badge variant="secondary" className="text-xs">Medium</Badge>;
      case "low": return <Badge variant="outline" className="text-xs">Low</Badge>;
      default: return null;
    }
  };

  return (
    <Card className="shadow-card">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between text-xl">
          <div className="flex items-center">
            <BarChart3 className="w-6 h-6 mr-2 text-primary" />
            Market Insights & News
          </div>
          <div className="text-xs text-muted-foreground">
            Last updated: {currentTime.toLocaleTimeString()}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="prices" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="prices" className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4" />
              <span>Live Prices</span>
            </TabsTrigger>
            <TabsTrigger value="news" className="flex items-center space-x-2">
              <Newspaper className="w-4 h-4" />
              <span>Agri News</span>
            </TabsTrigger>
          </TabsList>

          {/* Market Prices Tab */}
          <TabsContent value="prices" className="mt-4">
            <div className="space-y-3">
              {marketPrices.map((price, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/30 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-semibold">{price.crop}</h4>
                      <Badge variant="outline" className="text-xs">
                        {price.unit}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      <span>{price.market}</span>
                      <span>•</span>
                      <Clock className="w-3 h-3" />
                      <span>{price.lastUpdated}</span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="font-bold text-lg">
                      {formatPrice(price.currentPrice)}
                    </div>
                    <div className={`flex items-center space-x-1 text-sm ${
                      price.change >= 0 ? 'text-success' : 'text-destructive'
                    }`}>
                      {price.change >= 0 ? 
                        <TrendingUp className="w-3 h-3" /> : 
                        <TrendingDown className="w-3 h-3" />
                      }
                      <span>
                        {price.change >= 0 ? '+' : ''}{formatPrice(price.change)} 
                        ({price.changePercent >= 0 ? '+' : ''}{price.changePercent}%)
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              
              <Button className="w-full mt-4" variant="outline">
                <ExternalLink className="w-4 h-4 mr-2" />
                View All Market Prices
              </Button>
            </div>
          </TabsContent>

          {/* News Tab */}
          <TabsContent value="news" className="mt-4">
            <div className="space-y-4">
              {newsItems.map((news) => (
                <div 
                  key={news.id}
                  className="p-4 border rounded-lg hover:bg-muted/30 transition-colors cursor-pointer"
                >
                  {/* News Header */}
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(news.category)}`}>
                        {news.category.charAt(0).toUpperCase() + news.category.slice(1)}
                      </div>
                      {getImportanceBadge(news.importance)}
                    </div>
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleBookmark(news.id)}
                      className="h-8 w-8 p-0"
                    >
                      {bookmarkedNews.includes(news.id) ? 
                        <BookmarkCheck className="w-4 h-4 text-primary" /> :
                        <Bookmark className="w-4 h-4" />
                      }
                    </Button>
                  </div>

                  {/* News Content */}
                  <h4 className="font-semibold text-sm mb-2 line-clamp-2">
                    {news.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {news.summary}
                  </p>

                  {/* News Footer */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <span>{news.source}</span>
                      <span>•</span>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{news.timestamp}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="h-auto p-0 text-xs">
                      Read More →
                    </Button>
                  </div>
                </div>
              ))}

              {/* News Ticker */}
              <div className="mt-6 p-3 bg-gradient-to-r from-primary/5 to-success/5 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-primary">Breaking News</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Cotton export prices rise by 8% following international trade agreements...
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default MarketNews;