import React from 'react';

type ScribbleType = 'underline' | 'circle' | 'arrow';

interface ScribbleProps {
  type?: ScribbleType;
  className?: string;
  color?: string;
}

export const Scribble: React.FC<ScribbleProps> = ({ 
  type = 'underline', 
  className = "", 
  color = "currentColor" 
}) => {
  if (type === 'underline') {
    return (
      <svg 
        viewBox="0 0 200 9" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className={`w-full h-auto ${className}`}
        preserveAspectRatio="none"
      >
        <path 
          d="M2.00025 6.99999C30.5003 3.00003 89.5 -2.49997 198 4.49998" 
          stroke={color} 
          strokeWidth="3" 
          strokeLinecap="round"
          className="scribble-path" 
        />
      </svg>
    );
  }

  if (type === 'circle') {
    return (
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full ${className}`}
      >
        <path 
          d="M95 50C95 74.8528 74.8528 95 50 95C25.1472 95 5 74.8528 5 50C5 25.1472 25.1472 5 50 5C74.8528 5 95 25.1472 95 50Z" 
          stroke={color} 
          strokeWidth="2" 
          strokeLinecap="round"
          strokeDasharray="4 4"
        />
      </svg>
    );
  }

  return null;
};

