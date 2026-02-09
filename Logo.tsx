
import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Logo: React.FC<LogoProps> = ({ className = '', showText = false, size = 'md' }) => {
  const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`${sizeMap[size]} relative flex items-center justify-center`}>
        {/* Outer Ring Animation Container with Institutional Colors */}
        <div className="absolute inset-0 rounded-full border-4 border-orange-500 border-b-emerald-600 animate-[spin_10s_linear_infinite]"></div>
        
        {/* Main Logo Body */}
        <div className="w-[90%] h-[90%] rounded-full bg-white shadow-inner flex items-center justify-center overflow-hidden border border-zinc-100">
          <svg viewBox="0 0 100 100" className="w-full h-full p-1">
            {/* Sun Rays */}
            <g className="text-orange-300">
              {[...Array(12)].map((_, i) => (
                <line 
                  key={i} 
                  x1="50" y1="50" 
                  x2={50 + 40 * Math.cos((i * 30 * Math.PI) / 180)} 
                  y2={50 + 40 * Math.sin((i * 30 * Math.PI) / 180)} 
                  stroke="currentColor" 
                  strokeWidth="1" 
                />
              ))}
            </g>
            {/* Sun */}
            <circle cx="50" cy="50" r="15" fill="#f97316" className="animate-pulse" />
            {/* Tree Silhouette (Banyan) - Symbol of knowledge */}
            <path 
              d="M50 65 Q45 60 40 55 Q35 50 40 45 Q45 40 50 40 Q55 40 60 45 Q65 50 60 55 Q55 60 50 65" 
              fill="#166534" 
            />
            <path d="M48 65 L52 65 L51 45 L49 45 Z" fill="#713f12" />
            {/* Book - Symbolizing wisdom */}
            <path d="M30 75 Q50 70 70 75 L70 85 Q50 80 30 85 Z" fill="#fff" stroke="#94a3b8" strokeWidth="1" />
            <line x1="50" y1="72" x2="50" y2="82" stroke="#cbd5e1" strokeWidth="1" />
          </svg>
        </div>
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className="text-zinc-900 font-black tracking-tight leading-none uppercase">Mera SGG</span>
          <span className="text-[7px] font-bold text-zinc-400 tracking-[0.2em] uppercase mt-1">Sant Gahira Guru Vishwavidyalaya</span>
        </div>
      )}
    </div>
  );
};

export default Logo;
