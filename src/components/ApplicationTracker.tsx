import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  FileText, 
  Download, 
  Eye, 
  CheckCircle, 
  Clock, 
  XCircle,
  CreditCard,
  Shield,
  Leaf,
  Banknote
} from "lucide-react";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Application {
  id: string;
  name: string;
  type: "subsidy" | "insurance" | "card" | "credit";
  status: "approved" | "pending" | "rejected";
  progress: number;
  appliedDate: string;
  expectedDate?: string;
  amount?: string;
  description: string;
  icon: React.ReactNode;
  statusMessage: string;
}

const ApplicationTracker = () => {
  const [applications] = useState<Application[]>([
    {
      id: "1",
      name: "PM-Kisan Yojana",
      type: "subsidy",
      status: "approved",
      progress: 100,
      appliedDate: "Dec 10, 2024",
      expectedDate: "Jan 15, 2025",
      amount: "₹2,000",
      description: "Direct income support for small farmers",
      icon: <Banknote className="w-5 h-5" />,
      statusMessage: "Your next payment is scheduled for 20th January 2025"
    },
    {
      id: "2", 
      name: "Soil Health Card",
      type: "card",
      status: "approved",
      progress: 100,
      appliedDate: "Dec 8, 2024",
      description: "Detailed soil analysis and crop recommendations",
      icon: <Leaf className="w-5 h-5" />,
      statusMessage: "Your Soil Health Card is ready for download"
    },
    {
      id: "3",
      name: "Crop Insurance (Kharif 2024)",
      type: "insurance", 
      status: "pending",
      progress: 65,
      appliedDate: "Nov 25, 2024",
      expectedDate: "Jan 10, 2025",
      amount: "₹15,000 coverage",
      description: "Comprehensive crop insurance for monsoon season",
      icon: <Shield className="w-5 h-5" />,
      statusMessage: "Documents under verification, expected approval by Jan 10th"
    },
    {
      id: "4",
      name: "Kisan Credit Card",
      type: "credit",
      status: "pending",
      progress: 30,
      appliedDate: "Dec 15, 2024",
      expectedDate: "Jan 30, 2025",
      amount: "₹1,00,000 limit",
      description: "Agricultural credit card for farming needs",
      icon: <CreditCard className="w-5 h-5" />,
      statusMessage: "Initial review in progress, bank verification pending"
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved": return "default";
      case "pending": return "secondary";
      case "rejected": return "destructive";
      default: return "secondary";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved": return <CheckCircle className="w-4 h-4 text-success" />;
      case "pending": return <Clock className="w-4 h-4 text-warning" />;
      case "rejected": return <XCircle className="w-4 h-4 text-destructive" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const downloadReceipt = (appId: string, appName: string) => {
    // Mock PDF download functionality
    const link = document.createElement('a');
    link.href = '#';
    link.download = `${appName.replace(/\s+/g, '_')}_Receipt.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Card className="shadow-card">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center text-xl">
          <FileText className="w-6 h-6 mr-2 text-primary" />
          Application Status & Tracking
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {applications.map((app) => (
            <div 
              key={app.id} 
              className="border rounded-lg p-4 hover:bg-muted/30 transition-all duration-200 hover:shadow-md"
            >
              {/* Application Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    {app.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{app.name}</h4>
                    <p className="text-sm text-muted-foreground mb-1">
                      {app.description}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Applied: {app.appliedDate}
                    </p>
                    {app.expectedDate && (
                      <p className="text-xs text-muted-foreground">
                        Expected: {app.expectedDate}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="flex flex-col items-end space-y-2">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(app.status)}
                    <Badge variant={getStatusColor(app.status)}>
                      {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                    </Badge>
                  </div>
                  {app.amount && (
                    <span className="text-sm font-semibold text-success">
                      {app.amount}
                    </span>
                  )}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Progress</span>
                  <span className="text-sm font-medium">{app.progress}%</span>
                </div>
                <Progress value={app.progress} className="h-2" />
              </div>

              {/* Status Message with Tooltip */}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="bg-muted/50 rounded-lg p-3 mb-3 cursor-help">
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full animate-pulse ${
                          app.status === 'approved' ? 'bg-success' : 
                          app.status === 'pending' ? 'bg-warning' : 'bg-destructive'
                        }`} />
                        <p className="text-sm">{app.statusMessage}</p>
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Click for detailed status information</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* Action Buttons */}
              <div className="flex items-center justify-between">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex items-center space-x-2"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Details</span>
                </Button>
                
                <div className="flex items-center space-x-2">
                  {app.status === 'approved' && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => downloadReceipt(app.id, app.name)}
                      className="flex items-center space-x-2 text-success border-success hover:bg-success/10"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download Receipt</span>
                    </Button>
                  )}
                  
                  {app.status === 'pending' && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex items-center space-x-2"
                    >
                      <FileText className="w-4 h-4" />
                      <span>Track Status</span>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Apply Section */}
        <div className="mt-6 p-4 border rounded-lg bg-gradient-to-r from-primary/5 to-success/5">
          <h4 className="font-semibold mb-2 text-primary">Quick Apply</h4>
          <p className="text-sm text-muted-foreground mb-3">
            Start new applications for schemes and services
          </p>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm">New Subsidy</Button>
            <Button variant="outline" size="sm">Crop Insurance</Button>
            <Button variant="outline" size="sm">Credit Card</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ApplicationTracker;