
import React, { useEffect, useState } from 'react';
import Logo from './Logo';

const SplashScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-white z-[9999] flex flex-col items-center justify-center p-8 overflow-hidden">
      {/* Decorative background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 opacity-50"></div>

      <div className="relative z-10">
        <Logo size="xl" className="animate-in zoom-in-50 duration-1000" />
        {/* Glow effect */}
        <div className="absolute inset-0 bg-sky-400/10 blur-[60px] rounded-full -z-10 animate-pulse"></div>
      </div>
      
      <div className="mt-12 text-center space-y-4 relative z-10">
        <h1 className="text-2xl font-black text-zinc-900 tracking-tighter uppercase flex flex-col">
          Mera SGG
          <span className="text-[10px] text-zinc-400 tracking-[0.4em] font-bold mt-1">Sant Gahira Guru University</span>
        </h1>
        
        <div className="w-64 h-1 bg-zinc-100 rounded-full overflow-hidden mx-auto mt-8">
          <div 
            className="h-full bg-sky-600 transition-all duration-300 ease-out"
            style={{ width: `${progress}%`, boxShadow: '0 0 15px rgba(2, 132, 199, 0.4)' }}
          ></div>
        </div>
        <p className="text-[9px] font-black text-sky-600 uppercase tracking-widest animate-pulse mt-4">
          {progress < 100 ? 'Connecting to University Network...' : 'Welcome to SGG Portal'}
        </p>
      </div>

      <div className="absolute bottom-12 flex flex-col items-center gap-2">
        <span className="text-[10px] font-black text-zinc-300 uppercase tracking-[0.3em]">Institutional Secure Gateway</span>
        <span className="text-[9px] font-black text-zinc-200 uppercase tracking-widest">Developed by - MD Asid ( BCA - Final year )</span>
      </div>
    </div>
  );
};

export default SplashScreen;
