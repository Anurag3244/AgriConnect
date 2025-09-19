import React from "react";

interface LoadingSpinnerProps {
  message?: string;
  size?: "sm" | "md" | "lg";
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  message = "AgriConnect – Empowering Farmers", 
  size = "md" 
}) => {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24", 
    lg: "w-32 h-32"
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      {/* Tractor Animation */}
      <div className={`relative ${sizeClasses[size]}`}>
        <div className="tractor-loader">
          <svg
            viewBox="0 0 100 60"
            className="w-full h-full"
          >
            {/* Farm Field Background */}
            <rect width="100" height="60" fill="hsl(var(--success) / 0.1)" />
            <path
              d="M0 45 Q25 40 50 45 Q75 50 100 45 L100 60 L0 60 Z"
              fill="hsl(var(--primary) / 0.2)"
              className="animate-pulse"
            />
            
            {/* Moving Tractor */}
            <g className="animate-tractor">
              {/* Tractor Body */}
              <rect x="25" y="25" width="30" height="15" fill="hsl(var(--gov-blue))" rx="2" />
              <rect x="22" y="20" width="8" height="10" fill="hsl(var(--gov-blue))" rx="1" />
              
              {/* Wheels */}
              <circle cx="30" cy="45" r="6" fill="hsl(var(--foreground))" />
              <circle cx="30" cy="45" r="3" fill="hsl(var(--primary))" />
              <circle cx="50" cy="45" r="8" fill="hsl(var(--foreground))" />
              <circle cx="50" cy="45" r="4" fill="hsl(var(--primary))" />
              
              {/* Exhaust Smoke */}
              <circle cx="20" cy="15" r="2" fill="hsl(var(--muted-foreground) / 0.5)" className="animate-pulse" />
              <circle cx="18" cy="10" r="1.5" fill="hsl(var(--muted-foreground) / 0.3)" className="animate-pulse" />
            </g>
            
            {/* Growing Crops */}
            <g className="crops">
              <line x1="70" y1="50" x2="70" y2="45" stroke="hsl(var(--success))" strokeWidth="2" className="animate-grow" />
              <line x1="75" y1="50" x2="75" y2="43" stroke="hsl(var(--success))" strokeWidth="2" className="animate-grow" style={{ animationDelay: "0.2s" }} />
              <line x1="80" y1="50" x2="80" y2="47" stroke="hsl(var(--success))" strokeWidth="2" className="animate-grow" style={{ animationDelay: "0.4s" }} />
              <line x1="85" y1="50" x2="85" y2="44" stroke="hsl(var(--success))" strokeWidth="2" className="animate-grow" style={{ animationDelay: "0.6s" }} />
            </g>
          </svg>
        </div>
      </div>

      {/* Loading Message */}
      <div className="text-center">
        <p className="text-sm font-medium text-primary animate-pulse">
          {message}
        </p>
        <div className="flex justify-center space-x-1 mt-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;