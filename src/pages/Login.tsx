import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Phone, 
  User, 
  Lock, 
  Eye, 
  EyeOff,
  Shield,
  CheckCircle,
  Smartphone
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import AgriConnectLogo from "@/assets/agriconnect-logo.png";

const Login = () => {
  const [loginMethod, setLoginMethod] = useState("mobile"); // "mobile" or "aadhaar"
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1); // 1: Enter details, 2: OTP verification

  const benefits = [
    "Access to all government schemes",
    "Personalized crop advisory",
    "Real-time weather alerts",  
    "Live mandi price updates",
    "Direct scheme applications",
    "24/7 expert support"
  ];

  const securityFeatures = [
    "256-bit SSL encryption",
    "OTP-based secure login",
    "Aadhaar integration",
    "Government data protection"
  ];

  return (
    <div className="min-h-screen bg-muted/30 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left Side - Login Form */}
            <div className="order-2 lg:order-1">
              <Card className="shadow-hero border-0">
                <CardHeader className="text-center pb-6">
                  <div className="flex items-center justify-center mb-4">
                    <img src={AgriConnectLogo} alt="AgriConnect" className="h-12 w-12 mr-3" />
                    <div>
                      <h1 className="text-2xl font-bold text-gradient">AgriConnect</h1>
                      <p className="text-xs text-muted-foreground">Government of India</p>
                    </div>
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-foreground">
                    {step === 1 ? "Login to Your Account" : "Verify OTP"}
                  </CardTitle>
                  
                  <p className="text-muted-foreground">
                    {step === 1 
                      ? "Access your personalized agriculture dashboard"
                      : "Enter the OTP sent to your mobile number"
                    }
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {step === 1 ? (
                    <>
                      {/* Login Method Selection */}
                      <div className="flex space-x-2 p-1 bg-muted rounded-lg">
                        <button
                          onClick={() => setLoginMethod("mobile")}
                          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                            loginMethod === "mobile"
                              ? "bg-primary text-primary-foreground shadow-sm"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          <Phone className="w-4 h-4 inline mr-2" />
                          Mobile Number
                        </button>
                        <button
                          onClick={() => setLoginMethod("aadhaar")}
                          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                            loginMethod === "aadhaar"
                              ? "bg-primary text-primary-foreground shadow-sm"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          <User className="w-4 h-4 inline mr-2" />
                          Aadhaar
                        </button>
                      </div>

                      {/* Mobile Number Login */}
                      {loginMethod === "mobile" && (
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              Mobile Number *
                            </label>
                            <div className="relative">
                              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                              <Input
                                type="tel"
                                placeholder="Enter your 10-digit mobile number"
                                className="pl-10"
                                maxLength={10}
                              />
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">
                              OTP will be sent to this number
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Aadhaar Login */}
                      {loginMethod === "aadhaar" && (
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              Aadhaar Number *
                            </label>
                            <div className="relative">
                              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                              <Input
                                type="text"
                                placeholder="Enter your 12-digit Aadhaar number"
                                className="pl-10"
                                maxLength={12}
                              />
                            </div>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              Password *
                            </label>
                            <div className="relative">
                              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                              <Input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                className="pl-10 pr-10"
                              />
                              <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                              >
                                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                              </button>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Login Button */}
                      <Button 
                        className="w-full" 
                        size="lg"
                        onClick={() => setStep(2)}
                      >
                        {loginMethod === "mobile" ? "Send OTP" : "Login"}
                      </Button>

                      {/* Forgot Password */}
                      {loginMethod === "aadhaar" && (
                        <div className="text-center">
                          <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                            Forgot Password?
                          </Link>
                        </div>
                      )}
                    </>
                  ) : (
                    <>
                      {/* OTP Verification */}
                      <div className="text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Smartphone className="w-8 h-8 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                          We've sent a 6-digit OTP to<br />
                          <span className="font-medium text-foreground">+91 98765-43210</span>
                        </p>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Enter OTP *
                        </label>
                        <Input
                          type="text"
                          placeholder="Enter 6-digit OTP"
                          className="text-center text-xl tracking-widest"
                          maxLength={6}
                        />
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">
                          Didn't receive OTP?
                        </span>
                        <Button variant="link" className="p-0 h-auto text-primary">
                          Resend OTP
                        </Button>
                      </div>

                      <Button className="w-full" size="lg">
                        Verify & Login
                      </Button>

                      <Button 
                        variant="outline" 
                        className="w-full" 
                        onClick={() => setStep(1)}
                      >
                        Back to Login
                      </Button>
                    </>
                  )}

                  {/* Guest Access */}
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-border"></div>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-card px-2 text-muted-foreground">Or</span>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full" size="lg">
                    Continue as Guest
                  </Button>

                  {/* Security Notice */}
                  <Alert className="border-success bg-success/10">
                    <Shield className="h-4 w-4 text-success" />
                    <AlertDescription className="text-success-foreground">
                      Your data is protected with government-grade security standards.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </div>

            {/* Right Side - Benefits & Info */}
            <div className="order-1 lg:order-2">
              <div className="space-y-6">
                
                {/* Welcome Message */}
                <Card className="shadow-card border-0 bg-gradient-card">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-foreground mb-3">
                      Welcome to AgriConnect
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      Your gateway to government schemes, market information, and expert 
                      agricultural guidance - all in one secure platform.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary">12 Cr+</div>
                        <div className="text-xs text-muted-foreground">Farmers Registered</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">₹2.3L Cr</div>
                        <div className="text-xs text-muted-foreground">Schemes Available</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Benefits */}
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="text-xl">What you get with AgriConnect</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-success mr-3 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Security Features */}
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <Shield className="w-5 h-5 mr-2 text-primary" />
                      Security & Privacy
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {securityFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-success rounded-full mr-3"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Badge className="mt-3 bg-success text-success-foreground">
                      Government Verified
                    </Badge>
                  </CardContent>
                </Card>

                {/* Help Section */}
                <Card className="shadow-card">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold mb-2">Need Help?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Our support team is available 24/7 to assist you
                    </p>
                    <div className="flex flex-col gap-2">
                      <Button variant="outline" size="sm">
                        <Phone className="w-4 h-4 mr-2" />
                        Call 1800-180-1551
                      </Button>
                      <Link to="/contact">
                        <Button variant="outline" size="sm" className="w-full">
                          Contact Support
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;