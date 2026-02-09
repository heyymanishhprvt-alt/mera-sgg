
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, LogIn, ArrowRight, AlertCircle, CheckCircle2, Loader2, X, Building, ShieldCheck, UserCheck } from 'lucide-react';
import Logo from '../components/Logo';

interface LoginProps {
  onLogin: () => void;
}

type FeedbackType = {
  message: string;
  type: 'success' | 'error' | 'info';
};

const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [role, setRole] = useState<'Student' | 'Teacher' | 'Principal' | 'Admin'>('Student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<FeedbackType | null>(null);

  useEffect(() => {
    if (feedback) {
      const timer = setTimeout(() => setFeedback(null), 6000);
      return () => clearTimeout(timer);
    }
  }, [feedback]);

  const validate = () => {
    const newErrors: { email?: string; password?: string } = {};
    if (!email) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Enter a valid official email address';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 4) {
      newErrors.password = 'Security Pin must be at least 4 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setFeedback(null);
      
      // Simulate API authentication delay
      setTimeout(() => {
        setIsSubmitting(false);
        // Special case for testing error feedback
        if (email.toLowerCase().includes('error')) {
          setFeedback({
            message: 'Invalid credentials. Access denied by SGG institutional security.',
            type: 'error'
          });
        } else {
          setFeedback({
            message: 'Login successful! Redirecting to your university dashboard...',
            type: 'success'
          });
          // Small delay before redirecting to allow user to see success message
          setTimeout(() => onLogin(), 1500);
        }
      }, 1800);
    }
  };

  const handleGoogleLogin = () => {
    setIsSubmitting(true);
    // Simulate Google Login
    setTimeout(() => {
      setIsSubmitting(false);
      onLogin();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col relative overflow-hidden font-inter">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', size: '20px 20px' }}></div>
      </div>

      {/* Institutional Top Bar */}
      <header className="w-full bg-white/80 backdrop-blur-md border-b border-zinc-100 py-4 px-8 flex justify-between items-center z-50">
        <Link to="/" className="flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-sky-600 rounded-lg outline-none">
          <Logo size="sm" showText={true} />
        </Link>
        <div className="hidden md:flex items-center gap-6 text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">
          <a href="#" className="hover:text-sky-600 transition-colors focus-visible:ring-2 focus-visible:ring-sky-600 rounded outline-none">Digital Library</a>
          <a href="#" className="hover:text-sky-600 transition-colors focus-visible:ring-2 focus-visible:ring-sky-600 rounded outline-none">Examinations</a>
          <Link to="/admission" className="text-sky-600 hover:text-sky-700 focus-visible:ring-2 focus-visible:ring-sky-600 rounded outline-none">Admissions 2024</Link>
        </div>
      </header>

      {/* Enhanced Feedback Pop-up (Toast) */}
      {feedback && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] w-full max-w-sm px-4 animate-in slide-in-from-top-12 duration-500 ease-out" role="alert">
          <div className={`flex items-start gap-4 p-5 rounded-3xl shadow-2xl border ${
            feedback.type === 'success' 
              ? 'bg-emerald-50 border-emerald-100 text-emerald-900 shadow-emerald-900/10' 
              : feedback.type === 'error'
              ? 'bg-rose-50 border-rose-100 text-rose-900 shadow-rose-900/10'
              : 'bg-sky-50 border-sky-100 text-sky-900 shadow-sky-900/10'
          }`}>
            <div className={`mt-0.5 p-2 rounded-xl shrink-0 ${
              feedback.type === 'success' ? 'bg-emerald-600 text-white' : feedback.type === 'error' ? 'bg-rose-600 text-white' : 'bg-sky-600 text-white'
            }`}>
              {feedback.type === 'success' ? <UserCheck className="w-5 h-5" /> : feedback.type === 'error' ? <AlertCircle className="w-5 h-5" /> : <ShieldCheck className="w-5 h-5" />}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-black leading-tight mb-1">
                {feedback.type === 'success' ? 'Auth Confirmed' : feedback.type === 'error' ? 'Auth Failed' : 'Notification'}
              </p>
              <p className="text-xs font-medium opacity-80 leading-relaxed">{feedback.message}</p>
            </div>
            <button 
              onClick={() => setFeedback(null)} 
              className="p-1.5 hover:bg-black/5 rounded-lg transition-colors shrink-0 focus-visible:ring-2 focus-visible:ring-sky-600 outline-none"
              aria-label="Close notification"
            >
              <X className="w-4 h-4 opacity-40" />
            </button>
          </div>
        </div>
      )}

      {/* Main Login Area */}
      <main className="flex-1 flex items-center justify-center p-6 z-10">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-[3rem] shadow-2xl shadow-zinc-200 border border-zinc-100 overflow-hidden relative">
            {/* Simulation of institutional loading state */}
            {isSubmitting && (
              <div className="absolute inset-0 bg-white/80 backdrop-blur-md z-50 flex flex-col items-center justify-center p-12 text-center" aria-live="polite">
                <div className="relative mb-8">
                  <Loader2 className="w-16 h-16 text-sky-600 animate-spin" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 bg-sky-600 rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-lg font-black text-zinc-900 tracking-tight uppercase">Security Verification</h3>
                <p className="text-xs font-bold text-zinc-400 mt-2 uppercase tracking-widest">Validating credentials against SGG database</p>
              </div>
            )}

            <div className="p-8 sm:p-12">
              <div className="text-center mb-8">
                <div className="inline-block p-4 bg-zinc-50 border border-zinc-100 rounded-3xl mb-6">
                  <Logo size="md" />
                </div>
                <h2 className="text-2xl font-black text-zinc-900 uppercase tracking-tighter">Portal Login</h2>
                <p className="text-zinc-400 text-[10px] font-black uppercase tracking-[0.3em] mt-2">Mera SGG Digital Network</p>
              </div>

              {/* Google Login Option */}
              <button 
                type="button"
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center gap-3 py-4 bg-white border border-zinc-200 rounded-2xl text-sm font-bold text-zinc-700 hover:bg-zinc-50 hover:border-zinc-300 transition-all focus:ring-4 focus:ring-zinc-100 outline-none mb-6 shadow-sm"
              >
                <GoogleIcon />
                Continue with Google
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="h-px flex-1 bg-zinc-100"></div>
                <span className="text-[10px] font-black text-zinc-300 uppercase tracking-widest">or email login</span>
                <div className="h-px flex-1 bg-zinc-100"></div>
              </div>

              {/* Role Selection */}
              <div className="grid grid-cols-4 gap-1.5 p-1.5 bg-zinc-50 rounded-2xl border border-zinc-100 mb-8" role="tablist">
                {['Student', 'Teacher', 'Principal', 'Admin'].map((r) => (
                  <button
                    key={r}
                    type="button"
                    role="tab"
                    aria-selected={role === r}
                    onClick={() => setRole(r as any)}
                    className={`py-2 text-[9px] font-black rounded-xl transition-all uppercase tracking-widest focus-visible:ring-2 focus-visible:ring-sky-600 outline-none ${
                      role === r ? 'bg-zinc-900 text-white shadow-lg' : 'text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100'
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="email-input" className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">University Email / User ID</label>
                  <div className="relative group">
                    <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${errors.email ? 'text-rose-500' : 'text-zinc-400 group-focus-within:text-sky-600'}`} />
                    <input 
                      id="email-input"
                      type="email" 
                      value={email}
                      autoComplete="username"
                      onChange={(e) => { setEmail(e.target.value); if(errors.email) setErrors({...errors, email: undefined}); }}
                      className={`w-full pl-11 pr-5 py-4 bg-zinc-50 border rounded-2xl text-sm font-bold focus:outline-none focus:ring-4 focus:ring-sky-600/20 focus:border-sky-600 transition-all ${errors.email ? 'border-rose-300 ring-rose-500/10' : 'border-zinc-200 focus:border-sky-600'}`}
                      placeholder="e.g. sgg-user@university.edu"
                      required
                    />
                  </div>
                  {errors.email && <p className="text-[9px] text-rose-500 font-bold mt-1 ml-1 uppercase tracking-widest">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center px-1">
                    <label htmlFor="password-input" className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Digital PIN</label>
                    <a href="#" className="text-[9px] font-black text-sky-600 hover:underline uppercase tracking-widest focus-visible:ring-2 focus-visible:ring-sky-600 rounded outline-none">Forgot?</a>
                  </div>
                  <div className="relative group">
                    <Lock className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${errors.password ? 'text-rose-500' : 'text-zinc-400 group-focus-within:text-sky-600'}`} />
                    <input 
                      id="password-input"
                      type="password" 
                      value={password}
                      autoComplete="current-password"
                      onChange={(e) => { setPassword(e.target.value); if(errors.password) setErrors({...errors, password: undefined}); }}
                      className={`w-full pl-11 pr-5 py-4 bg-zinc-50 border rounded-2xl text-sm font-bold focus:outline-none focus:ring-4 focus:ring-sky-600/20 focus:border-sky-600 transition-all ${errors.password ? 'border-rose-300 ring-rose-500/10' : 'border-zinc-200 focus:border-sky-600'}`}
                      placeholder="••••••••"
                      required
                    />
                  </div>
                  {errors.password && <p className="text-[9px] text-rose-500 font-bold mt-1 ml-1 uppercase tracking-widest">{errors.password}</p>}
                </div>

                <div className="flex items-center justify-between px-1">
                  <label className="flex items-center gap-3 cursor-pointer group select-none focus-within:ring-2 focus-within:ring-sky-600 rounded-lg p-0.5 outline-none">
                    <input 
                      type="checkbox" 
                      checked={rememberMe} 
                      onChange={(e) => setRememberMe(e.target.checked)} 
                      className="w-4 h-4 rounded-lg border-zinc-200 text-sky-600 focus:ring-sky-500 accent-sky-600" 
                    />
                    <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest group-hover:text-zinc-600 transition-colors">Keep Session Active</span>
                  </label>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-zinc-950 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-zinc-950/20 hover:bg-zinc-800 focus:ring-4 focus:ring-zinc-950/20 transition-all active:scale-[0.98] flex items-center justify-center gap-3 group outline-none"
                >
                  Verify Identity <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            <div className="bg-zinc-50 p-6 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-4">
               <div className="flex items-center gap-2 text-[9px] font-black text-zinc-400 uppercase tracking-widest">
                 <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> SGG Secure Connect
               </div>
               <Link to="/admission" className="text-[9px] font-black text-sky-600 hover:underline uppercase tracking-widest focus-visible:ring-2 focus-visible:ring-sky-600 rounded outline-none">Affiliated College Portal</Link>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-[10px] text-zinc-400 font-black uppercase tracking-widest">
              Technical issues? <a href="#" className="text-sky-600 hover:underline focus-visible:ring-2 focus-visible:ring-sky-600 rounded outline-none">SGG IT Support Helpdesk</a>
            </p>
          </div>
        </div>
      </main>

      {/* Modern Footer */}
      <footer className="w-full bg-white border-t border-zinc-100 py-6 px-8 flex flex-col md:flex-row items-center justify-between gap-6 z-10">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">© 2024 Sant Gahira Guru Vishwavidyalaya Digital Network</p>
          <span className="hidden md:block h-4 w-px bg-zinc-100"></span>
          <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">Developed by - MD Asid ( BCA - Final year )</p>
        </div>
        <div className="flex items-center gap-8 text-[9px] font-black text-zinc-400 uppercase tracking-widest">
          <a href="#" className="hover:text-sky-600 transition-colors focus-visible:ring-2 focus-visible:ring-sky-600 rounded outline-none">Privacy</a>
          <a href="#" className="hover:text-sky-600 transition-colors focus-visible:ring-2 focus-visible:ring-sky-600 rounded outline-none">Digital Audit</a>
          <a href="#" className="hover:text-sky-600 transition-colors focus-visible:ring-2 focus-visible:ring-sky-600 rounded outline-none">Terms of Use</a>
        </div>
      </footer>
    </div>
  );
};

export default Login;
