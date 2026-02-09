
import React, { useState } from 'react';
import { X, MessageCircle, ArrowLeft, CheckCircle2, Sparkles, CreditCard, LayoutDashboard, Loader2, ArrowRight, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface RegisterProps {
  onLogin: () => void;
}

type RegisterStep = 'FORM' | 'SUCCESS' | 'PRICING';

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

const Register: React.FC<RegisterProps> = ({ onLogin }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState<RegisterStep>('FORM');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    schoolUserName: '',
    schoolName: '',
    email: '',
    mobile: '',
    password: '',
    referralCode: ''
  });

  const handleClose = () => {
    navigate('/');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setStep('SUCCESS');
    }, 1500);
  };

  const handleProceedToDashboard = () => {
    onLogin();
    navigate('/dashboard');
  };

  const handleGoogleSignup = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep('SUCCESS');
    }, 1500);
  };

  if (step === 'SUCCESS') {
    return (
      <div className="min-h-screen bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
        <div className="bg-white w-full max-w-xl rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-500 p-12 text-center relative">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
          
          <div className="w-20 h-20 bg-indigo-50 text-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-8 rotate-3 shadow-inner">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <h2 className="text-4xl font-black text-slate-900 mb-4">Trial Activated! ✨</h2>
          <p className="text-lg text-slate-500 mb-10 leading-relaxed">
            Welcome to the future of school management. Your 30-day free trial for <span className="text-indigo-600 font-bold">{formData.schoolName || 'Your School'}</span> is now live.
          </p>

          <div className="grid grid-cols-1 gap-4 mb-8">
            <button 
              onClick={handleProceedToDashboard}
              className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black text-lg shadow-2xl shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group"
            >
              Go to Dashboard <LayoutDashboard className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            </button>
            
            <button 
              onClick={() => setStep('PRICING')}
              className="w-full py-5 bg-white text-slate-700 border-2 border-slate-100 rounded-2xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-3"
            >
              Explore Premium Plans <Sparkles className="w-5 h-5 text-amber-500" />
            </button>
          </div>

          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4" /> Secure Account Setup Complete
          </p>
        </div>
      </div>
    );
  }

  if (step === 'PRICING') {
    return (
      <div className="min-h-screen bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
        <div className="bg-white w-full max-w-4xl rounded-[3rem] shadow-2xl overflow-hidden animate-in slide-in-from-bottom-8 duration-500">
          <div className="p-8 md:p-12">
            <div className="flex items-center justify-between mb-10">
              <div>
                <button onClick={() => setStep('SUCCESS')} className="flex items-center gap-2 text-indigo-600 font-bold text-sm hover:gap-3 transition-all mb-4">
                  <ArrowLeft className="w-4 h-4" /> Back to choices
                </button>
                <h2 className="text-3xl font-black text-slate-900">Choose Your Plan</h2>
              </div>
              <button onClick={handleClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Basic Plan */}
              <div className="p-8 rounded-[2.5rem] border-2 border-slate-100 hover:border-indigo-100 transition-all group flex flex-col">
                <div className="mb-6">
                  <p className="text-sm font-black text-slate-400 uppercase tracking-widest mb-1">Lite Version</p>
                  <h3 className="text-2xl font-black text-slate-900">Standard</h3>
                </div>
                <div className="text-4xl font-black text-slate-900 mb-8">
                  ₹833<span className="text-lg text-slate-400 font-bold">/mo</span>
                </div>
                <ul className="space-y-4 mb-10 flex-1">
                   {['Student Management', 'Fees Tracking', 'Basic Attendance', 'Parent SMS'].map(f => (
                     <li key={f} className="flex items-center gap-2 text-sm font-medium text-slate-600">
                       <CheckCircle2 className="w-4 h-4 text-emerald-500" /> {f}
                     </li>
                   ))}
                </ul>
                <button 
                  onClick={handleProceedToDashboard}
                  className="w-full py-4 bg-slate-50 text-slate-700 rounded-2xl font-bold hover:bg-slate-100 transition-all border border-slate-200"
                >
                  Continue with Free Trial
                </button>
              </div>

              {/* Premium Plan */}
              <div className="p-8 rounded-[2.5rem] border-2 border-indigo-600 bg-indigo-600 text-white relative shadow-2xl shadow-indigo-200 flex flex-col scale-105">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-indigo-600 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>
                <div className="mb-6">
                  <p className="text-sm font-black text-indigo-200 uppercase tracking-widest mb-1">Full Power</p>
                  <h3 className="text-2xl font-black">Enterprise</h3>
                </div>
                <div className="text-4xl font-black mb-8">
                  ₹1,499<span className="text-lg text-indigo-300 font-bold">/mo</span>
                </div>
                <ul className="space-y-4 mb-10 flex-1">
                   {['Everything in Standard', 'AI Smart Attendance', 'Bus Live Tracking', 'Full Accounting ERP', 'Custom Parent App', 'Priority Support'].map(f => (
                     <li key={f} className="flex items-center gap-2 text-sm font-medium">
                       <CheckCircle2 className="w-4 h-4 text-white" /> {f}
                     </li>
                   ))}
                </ul>
                <button className="w-full py-4 bg-white text-indigo-600 rounded-2xl font-black hover:bg-indigo-50 transition-all flex items-center justify-center gap-2">
                  Upgrade & Pay Now <CreditCard className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      {/* Registration Modal Container */}
      <div className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 relative">
        {isSubmitting && (
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] z-50 flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <Loader2 className="w-12 h-12 text-indigo-600 animate-spin" />
              <p className="font-black text-slate-900 animate-pulse">Setting up your portal...</p>
            </div>
          </div>
        )}
        
        {/* Modal Header */}
        <div className="px-8 py-6 flex items-center justify-between border-b border-slate-50">
          <h2 className="text-2xl font-bold text-slate-900">Registration Form</h2>
          <button 
            onClick={handleClose}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-600"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Form Content */}
        <div className="p-8 max-h-[85vh] overflow-y-auto">
          {/* Google Signup */}
          <button 
            type="button"
            onClick={handleGoogleSignup}
            className="w-full flex items-center justify-center gap-3 py-4 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all focus:ring-4 focus:ring-slate-100 outline-none mb-8 shadow-sm"
          >
            <GoogleIcon />
            Sign up with Google
          </button>

          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-slate-100"></div>
            <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">or fill details</span>
            <div className="h-px flex-1 bg-slate-100"></div>
          </div>

          {/* Section Indicator */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-900 inline-block relative pb-2">
              Add School
              <div className="absolute bottom-0 left-0 w-full h-1 bg-indigo-600 rounded-full">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-indigo-600 rounded-full border-2 border-white"></div>
              </div>
            </h3>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* School User Name */}
            <div className="space-y-2">
              <label className="text-base font-medium text-slate-800 flex items-center gap-1">
                School User Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your School User Name"
                value={formData.schoolUserName}
                onChange={(e) => setFormData({...formData, schoolUserName: e.target.value})}
                className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-600 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all"
                required
              />
            </div>

            {/* School Name */}
            <div className="space-y-2">
              <label className="text-base font-medium text-slate-800 flex items-center gap-1">
                School Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your School Name"
                value={formData.schoolName}
                onChange={(e) => setFormData({...formData, schoolName: e.target.value})}
                className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-600 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all"
                required
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-base font-medium text-slate-800 flex items-center gap-1">
                Email <span className="text-rose-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-600 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all"
                required
              />
            </div>

            {/* Mobile */}
            <div className="space-y-2">
              <label className="text-base font-medium text-slate-800 flex items-center gap-1">
                Mobile <span className="text-rose-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="Enter Your Mobile Number"
                className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-600 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all"
                required
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="text-base font-medium text-slate-800 flex items-center gap-1">
                Password <span className="text-rose-500">*</span>
              </label>
              <input
                type="password"
                placeholder="Enter Your Password"
                className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-600 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all"
                required
              />
            </div>

            {/* Referral Code */}
            <div className="space-y-2">
              <label className="text-base font-medium text-slate-800">
                Referral Code <span className="text-slate-400">(Optional)</span>
              </label>
              <input
                type="text"
                placeholder="Enter Referral Code"
                className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-600 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all"
              />
              <p className="text-sm text-slate-400 ml-1">If you have a referral code, enter it here</p>
            </div>

            {/* Submit Section */}
            <div className="pt-4 flex justify-end items-center gap-4 relative">
              <button 
                type="submit"
                disabled={isSubmitting}
                className="bg-indigo-600 text-white px-10 py-4 rounded-2xl font-black hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 active:scale-95 flex items-center gap-2 group"
              >
                Create Account <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="absolute -bottom-2 -right-2 transform translate-y-full md:translate-y-0 md:translate-x-full md:relative">
                <div className="bg-indigo-600 p-4 rounded-full shadow-xl text-white cursor-pointer hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 fill-white" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
