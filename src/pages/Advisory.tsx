import React from "react";
import { 
  Cloud, 
  Thermometer, 
  Droplets, 
  Wind,
  Sun,
  CloudRain,
  Zap,
  Bug,
  Wheat,
  Sprout,
  Calendar,
  AlertTriangle,
  TrendingUp,
  Shield
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Advisory = () => {
  const weatherData = {
    location: "Your Location",
    current: {
      temperature: "28°C",
      condition: "Partly Cloudy",
      humidity: "68%",
      windSpeed: "12 km/h",
      uvIndex: "6 (High)",
      pressure: "1013 hPa"
    },
    forecast: [
      { day: "Today", high: "32°", low: "22°", condition: "sunny", rain: "0%" },
      { day: "Tomorrow", high: "30°", low: "20°", condition: "cloudy", rain: "20%" },
      { day: "Day 3", high: "28°", low: "18°", condition: "rainy", rain: "80%" },
      { day: "Day 4", high: "26°", low: "16°", condition: "rainy", rain: "75%" },
      { day: "Day 5", high: "29°", low: "19°", condition: "sunny", rain: "10%" }
    ]
  };

  const cropAdvisory = [
    {
      crop: "Wheat",
      stage: "Grain Filling",
      advisory: "Apply final irrigation if needed. Monitor for rust diseases.",
      actions: ["Water management", "Disease monitoring", "Harvesting preparation"],
      priority: "high",
      icon: Wheat
    },
    {
      crop: "Rice",
      stage: "Transplanting",
      advisory: "Maintain water level 2-3 cm. Apply first nitrogen dose.",
      actions: ["Water management", "Fertilizer application", "Weed control"],
      priority: "medium",
      icon: Sprout
    },
    {
      crop: "Cotton",
      stage: "Flowering",
      advisory: "Monitor for bollworm. Apply recommended pesticides if needed.",
      actions: ["Pest monitoring", "Spray application", "Irrigation scheduling"],
      priority: "high",
      icon: Wheat
    }
  ];

  const pestAlerts = [
    {
      pest: "Brown Plant Hopper",
      severity: "High",
      crops: ["Rice"],
      description: "High infestation reported in nearby areas",
      recommendation: "Apply recommended insecticides immediately",
      preventive: ["Drain water for 2-3 days", "Use resistant varieties"]
    },
    {
      pest: "Aphids",
      severity: "Medium",
      crops: ["Wheat", "Cotton"],
      description: "Moderate population observed",
      recommendation: "Monitor closely, spray if threshold crossed",
      preventive: ["Encourage natural predators", "Use yellow sticky traps"]
    }
  ];

  const seasonalTips = [
    {
      title: "Winter Crop Management",
      description: "Optimal practices for Rabi season crops",
      tips: [
        "Ensure proper drainage in fields",
        "Apply phosphorus-rich fertilizers",
        "Monitor for frost damage",
        "Prepare for harvesting season"
      ]
    },
    {
      title: "Soil Health Improvement",
      description: "Maintain and enhance soil fertility",
      tips: [
        "Add organic matter regularly",
        "Practice crop rotation",
        "Test soil pH levels",
        "Use bio-fertilizers"
      ]
    }
  ];

  const weatherAlerts = [
    {
      type: "Heavy Rain Warning",
      severity: "high",
      duration: "Next 48 hours",
      impact: "Flooding in low-lying areas possible",
      action: "Ensure proper drainage, postpone spraying"
    },
    {
      type: "Heat Wave Alert",
      severity: "medium",
      duration: "Next 5 days",
      impact: "High temperature stress on crops",
      action: "Increase irrigation frequency, provide shade"
    }
  ];

  return (
    <div className="min-h-screen bg-muted/30 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Weather & Crop Advisory
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get real-time weather updates, crop-specific advisory, pest alerts, and expert 
            recommendations to optimize your farming decisions.
          </p>
        </div>

        {/* Weather Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Current Weather */}
          <Card className="lg:col-span-1 shadow-card">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-lg">
                <Cloud className="w-5 h-5 mr-2 text-gov-blue" />
                Current Weather
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-4">
                <div className="text-4xl font-bold text-foreground mb-1">
                  {weatherData.current.temperature}
                </div>
                <div className="text-muted-foreground">{weatherData.current.condition}</div>
                <div className="text-sm text-muted-foreground">{weatherData.location}</div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center">
                  <Droplets className="w-4 h-4 text-gov-blue mr-2" />
                  <div>
                    <div className="font-medium">{weatherData.current.humidity}</div>
                    <div className="text-xs text-muted-foreground">Humidity</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Wind className="w-4 h-4 text-gov-blue mr-2" />
                  <div>
                    <div className="font-medium">{weatherData.current.windSpeed}</div>
                    <div className="text-xs text-muted-foreground">Wind Speed</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Sun className="w-4 h-4 text-warm-yellow mr-2" />
                  <div>
                    <div className="font-medium">{weatherData.current.uvIndex}</div>
                    <div className="text-xs text-muted-foreground">UV Index</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Thermometer className="w-4 h-4 text-destructive mr-2" />
                  <div>
                    <div className="font-medium">{weatherData.current.pressure}</div>
                    <div className="text-xs text-muted-foreground">Pressure</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 5-Day Forecast */}
          <Card className="lg:col-span-2 shadow-card">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-lg">
                <Calendar className="w-5 h-5 mr-2 text-primary" />
                5-Day Forecast
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-5 gap-2">
                {weatherData.forecast.map((day, index) => (
                  <div key={index} className="text-center p-3 bg-muted/30 rounded-lg">
                    <div className="text-sm font-medium mb-2">{day.day}</div>
                    <div className="mb-2">
                      {day.condition === 'sunny' && <Sun className="w-6 h-6 mx-auto text-warm-yellow" />}
                      {day.condition === 'cloudy' && <Cloud className="w-6 h-6 mx-auto text-muted-foreground" />}
                      {day.condition === 'rainy' && <CloudRain className="w-6 h-6 mx-auto text-gov-blue" />}
                    </div>
                    <div className="text-sm font-semibold">{day.high}</div>
                    <div className="text-xs text-muted-foreground">{day.low}</div>
                    <div className="text-xs text-gov-blue mt-1">{day.rain}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Weather Alerts */}
        {weatherAlerts.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Weather Alerts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {weatherAlerts.map((alert, index) => (
                <Alert key={index} className={`border-l-4 ${
                  alert.severity === 'high' ? 'border-l-destructive' : 'border-l-warning'
                }`}>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <div className="font-semibold text-foreground mb-1">{alert.type}</div>
                    <div className="text-sm text-muted-foreground mb-2">
                      Duration: {alert.duration}
                    </div>
                    <div className="text-sm mb-2">{alert.impact}</div>
                    <div className="text-sm font-medium text-primary">
                      Action: {alert.action}
                    </div>
                  </AlertDescription>
                </Alert>
              ))}
            </div>
          </div>
        )}

        {/* Crop Advisory */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Crop Advisory</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cropAdvisory.map((advisory, index) => {
              const IconComponent = advisory.icon;
              return (
                <Card key={index} className="shadow-card">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <IconComponent className="w-5 h-5 mr-2 text-primary" />
                        <CardTitle className="text-lg">{advisory.crop}</CardTitle>
                      </div>
                      <Badge 
                        variant={advisory.priority === 'high' ? 'destructive' : 'secondary'}
                        className="text-xs"
                      >
                        {advisory.priority} priority
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Current Stage: {advisory.stage}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {advisory.advisory}
                    </p>
                    
                    <div>
                      <h5 className="text-sm font-semibold mb-2">Recommended Actions:</h5>
                      <ul className="space-y-1">
                        {advisory.actions.map((action, actionIndex) => (
                          <li key={actionIndex} className="text-sm flex items-center">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                            {action}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Pest & Disease Alerts */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Pest & Disease Alerts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pestAlerts.map((pest, index) => (
              <Card key={index} className="shadow-card">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center text-lg">
                      <Bug className="w-5 h-5 mr-2 text-destructive" />
                      {pest.pest}
                    </CardTitle>
                    <Badge 
                      variant={pest.severity === 'High' ? 'destructive' : 'secondary'}
                      className="text-xs"
                    >
                      {pest.severity} Risk
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Affects: {pest.crops.join(', ')}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    {pest.description}
                  </p>
                  
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold mb-2 text-destructive">
                      Immediate Action:
                    </h5>
                    <p className="text-sm">{pest.recommendation}</p>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-semibold mb-2 text-primary">
                      Preventive Measures:
                    </h5>
                    <ul className="space-y-1">
                      {pest.preventive.map((measure, measureIndex) => (
                        <li key={measureIndex} className="text-sm flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {measure}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Seasonal Tips */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Seasonal Farming Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {seasonalTips.map((tip, index) => (
              <Card key={index} className="shadow-card">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-lg">
                    <TrendingUp className="w-5 h-5 mr-2 text-success" />
                    {tip.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{tip.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tip.tips.map((tipItem, tipIndex) => (
                      <li key={tipIndex} className="text-sm flex items-start">
                        <div className="w-1.5 h-1.5 bg-success rounded-full mr-2 mt-2"></div>
                        {tipItem}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Expert Consultation CTA */}
        <Card className="bg-primary text-primary-foreground shadow-hero">
          <CardContent className="p-8 text-center">
            <Shield className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Need Expert Consultation?</h3>
            <p className="text-lg mb-6 text-primary-foreground/90">
              Connect with our agricultural experts for personalized advice on crop management, 
              pest control, and farming techniques specific to your region and crops.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Consult Expert Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Schedule Callback
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Advisory;