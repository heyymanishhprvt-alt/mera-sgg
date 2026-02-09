
import React, { useState } from 'react';
import { GraduationCap, Sparkles } from 'lucide-react';

const DeveloperWatermark: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="fixed bottom-6 left-6 z-[60] flex items-end gap-3 pointer-events-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-start gap-2 pointer-events-auto">
        {/* Speech Bubble */}
        <div className={`
          bg-white px-4 py-2 rounded-2xl shadow-xl border border-zinc-100 
          transition-all duration-500 transform origin-bottom-left
          ${isHovered ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-4'}
        `}>
          <p className="text-[10px] font-black text-zinc-900 uppercase tracking-tight">
            Hello! 👋
          </p>
          <p className="text-[9px] font-bold text-zinc-500 leading-tight">
            This is made by me <br/>
            <span className="text-sky-600">MD Asid (BCA Final)</span>
          </p>
          {/* Bubble Tail */}
          <div className="absolute -bottom-1.5 left-4 w-3 h-3 bg-white border-r border-b border-zinc-100 rotate-45"></div>
        </div>

        {/* Animated Student Avatar */}
        <div 
          className="relative group cursor-help"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-sky-400/20 blur-xl rounded-full animate-pulse"></div>
          
          {/* Avatar Body */}
          <div className="relative w-12 h-12 bg-zinc-950 rounded-2xl flex items-center justify-center border border-zinc-800 shadow-2xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 animate-bounce [animation-duration:3s]">
            <GraduationCap className="w-6 h-6 text-sky-400" />
            
            {/* Small floating sparkles */}
            <div className="absolute -top-1 -right-1">
              <Sparkles className="w-3 h-3 text-amber-400 animate-spin [animation-duration:4s]" />
            </div>
          </div>

          {/* Hidden Tooltip for Mobile/Accessibility */}
          <span className="sr-only">Developed by MD Asid</span>
        </div>
      </div>
    </div>
  );
};

export default DeveloperWatermark;
