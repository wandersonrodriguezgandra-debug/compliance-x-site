import React from "react";

export function Logo({ className = "w-8 h-8", light = false }: { className?: string; light?: boolean }) {
  // Colors
  const primaryColor = light ? "#FFFFFF" : "#0F3A7D"; // Deep Blue or White
  const accentColor = "#10B981"; // Emerald Green

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Abstract Shield Shape Base */}
      <path
        d="M50 95C25 85 10 65 10 35L50 5L90 35C90 65 75 85 50 95Z"
        fill={primaryColor}
        opacity="0.1"
      />
      
      {/* The "C" Curve (Compliance) */}
      <path
        d="M65 25L50 15L35 25C25 32 25 45 30 55L50 75"
        stroke={primaryColor}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* The "X" Cross / Checkmark (Excellence) */}
      <path
        d="M70 70L45 45"
        stroke={accentColor}
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M70 45L45 70"
        stroke={accentColor}
        strokeWidth="8"
        strokeLinecap="round"
      />
      
      {/* Center Dot (Connection) */}
      <circle cx="50" cy="50" r="4" fill={accentColor} />
    </svg>
  );
}
