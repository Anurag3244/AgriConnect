import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  CreditCard, 
  Smartphone, 
  Shield, 
  Lock, 
  CheckCircle,
  IndianRupee,
  QrCode,
  Wallet
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

interface PaymentOption {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  fee: string;
  processingTime: string;
}

const SecurePayments = () => {
  const [selectedPayment, setSelectedPayment] = useState<string>("upi");
  const [paymentAmount, setPaymentAmount] = useState<string>("500");
  const [isProcessing, setIsProcessing] = useState(false);

  const paymentOptions: PaymentOption[] = [
    {
      id: "upi",
      name: "UPI Payment",
      icon: <Smartphone className="w-5 h-5" />,
      description: "Pay instantly using UPI apps like PhonePe, Google Pay, Paytm",
      fee: "Free",
      processingTime: "Instant"
    },
    {
      id: "wallet",
      name: "Digital Wallet", 
      icon: <Wallet className="w-5 h-5" />,
      description: "Use your digital wallet balance for quick payments",
      fee: "Free",
      processingTime: "Instant"
    },
    {
      id: "card",
      name: "Debit/Credit Card",
      icon: <CreditCard className="w-5 h-5" />,
      description: "Secure card payments with bank-grade encryption",
      fee: "₹2-5",
      processingTime: "1-2 minutes"
    }
  ];

  const recentTransactions = [
    {
      id: "1",
      description: "Soil Health Card Application Fee",
      amount: "₹50",
      status: "completed",
      date: "Dec 15, 2024",
      transactionId: "TXN123456789"
    },
    {
      id: "2", 
      description: "Crop Insurance Premium",
      amount: "₹1,200",
      status: "completed",
      date: "Dec 12, 2024", 
      transactionId: "TXN123456788"
    },
    {
      id: "3",
      description: "PM-Kisan Verification Fee",
      amount: "₹25",
      status: "pending",
      date: "Dec 10, 2024",
      transactionId: "TXN123456787"
    }
  ];

  const handlePayment = () => {
    setIsProcessing(true);
    // Mock payment processing
    setTimeout(() => {
      setIsProcessing(false);
      // Show success message
    }, 3000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "default";
      case "pending": return "secondary";
      case "failed": return "destructive";
      default: return "secondary";
    }
  };

  return (
    <Card className="shadow-card">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center text-xl">
          <Shield className="w-6 h-6 mr-2 text-primary" />
          Secure Payments & Transactions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="pay" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="pay">Make Payment</TabsTrigger>
            <TabsTrigger value="history">Transaction History</TabsTrigger>
          </TabsList>

          {/* Make Payment Tab */}
          <TabsContent value="pay" className="mt-4 space-y-4">
            {/* Quick Pay Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg text-center hover:bg-muted/30 transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <IndianRupee className="w-6 h-6 text-success" />
                </div>
                <h4 className="font-medium text-sm">Receive Subsidy</h4>
                <p className="text-xs text-muted-foreground">Direct to bank account</p>
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <div className="p-4 border rounded-lg text-center hover:bg-muted/30 transition-colors cursor-pointer">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <CreditCard className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-medium text-sm">Pay & Apply</h4>
                    <p className="text-xs text-muted-foreground">Application fees</p>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Secure Payment</DialogTitle>
                    <DialogDescription>
                      Pay application fees securely with bank-grade encryption
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="space-y-4">
                    {/* Amount Input */}
                    <div className="space-y-2">
                      <Label htmlFor="amount">Payment Amount</Label>
                      <div className="relative">
                        <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="amount"
                          value={paymentAmount}
                          onChange={(e) => setPaymentAmount(e.target.value)}
                          className="pl-10"
                          placeholder="Enter amount"
                        />
                      </div>
                    </div>

                    {/* Payment Methods */}
                    <div className="space-y-2">
                      <Label>Choose Payment Method</Label>
                      <div className="space-y-2">
                        {paymentOptions.map((option) => (
                          <div
                            key={option.id}
                            className={`p-3 border rounded-lg cursor-pointer transition-all ${
                              selectedPayment === option.id 
                                ? 'border-primary bg-primary/5' 
                                : 'hover:bg-muted/30'
                            }`}
                            onClick={() => setSelectedPayment(option.id)}
                          >
                            <div className="flex items-center space-x-3">
                              <div className="text-primary">
                                {option.icon}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <h4 className="font-medium text-sm">{option.name}</h4>
                                  <div className="text-right">
                                    <p className="text-xs text-success">{option.fee}</p>
                                    <p className="text-xs text-muted-foreground">{option.processingTime}</p>
                                  </div>
                                </div>
                                <p className="text-xs text-muted-foreground">{option.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Security Notice */}
                    <div className="flex items-center space-x-2 p-3 bg-muted/30 rounded-lg">
                      <Lock className="w-4 h-4 text-primary" />
                      <div>
                        <p className="text-xs font-medium">Secure & Encrypted</p>
                        <p className="text-xs text-muted-foreground">
                          Your payment is protected with end-to-end encryption
                        </p>
                      </div>
                    </div>

                    {/* Pay Button */}
                    <Button 
                      className="w-full" 
                      onClick={handlePayment}
                      disabled={isProcessing}
                    >
                      {isProcessing ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Processing...</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <Shield className="w-4 h-4" />
                          <span>Pay ₹{paymentAmount} Securely</span>
                        </div>
                      )}
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>

              <div className="p-4 border rounded-lg text-center hover:bg-muted/30 transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-gov-blue/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <QrCode className="w-6 h-6 text-gov-blue" />
                </div>
                <h4 className="font-medium text-sm">QR Payment</h4>
                <p className="text-xs text-muted-foreground">Scan & pay instantly</p>
              </div>
            </div>

            {/* Security Features */}
            <div className="p-4 border rounded-lg bg-gradient-to-r from-success/5 to-primary/5">
              <h4 className="font-semibold mb-3 text-primary">Security Features</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>SSL Encryption</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>PCI DSS Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>Two-Factor Auth</span>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Transaction History Tab */}
          <TabsContent value="history" className="mt-4">
            <div className="space-y-3">
              {recentTransactions.map((transaction) => (
                <div 
                  key={transaction.id}
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/30 transition-colors"
                >
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{transaction.description}</h4>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <span>{transaction.date}</span>
                      <span>•</span>
                      <span>ID: {transaction.transactionId}</span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="font-semibold text-sm">{transaction.amount}</div>
                    <Badge variant={getStatusColor(transaction.status)} className="text-xs">
                      {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                    </Badge>
                  </div>
                </div>
              ))}
              
              <Button className="w-full mt-4" variant="outline">
                View All Transactions
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default SecurePayments;