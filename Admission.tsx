
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  User, 
  Calendar, 
  Users, 
  GraduationCap, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowLeft, 
  CheckCircle, 
  ChevronRight,
  ShieldCheck,
  Building2
} from 'lucide-react';
import Navbar from '../components/Navbar';

const Admission: React.FC = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    studentName: '',
    dob: '',
    gender: '',
    grade: '',
    parentName: '',
    parentMobile: '',
    parentEmail: '',
    address: '',
    previousSchool: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white rounded-[3rem] shadow-2xl shadow-zinc-200 p-12 text-center border border-zinc-100 animate-in zoom-in-95 duration-500">
          <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
            <CheckCircle className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-black text-zinc-900 mb-4 tracking-tight">Application Received!</h2>
          <p className="text-zinc-500 mb-10 leading-relaxed font-medium">
            Thank you for applying to Mera Vidyalaya. Our admissions team will review your application and contact you within 2-3 business days.
          </p>
          <div className="space-y-4">
            <button 
              onClick={() => navigate('/')}
              className="w-full py-4 bg-sky-600 text-white rounded-2xl font-bold hover:bg-sky-700 transition-all shadow-xl shadow-sky-600/20"
            >
              Back to Homepage
            </button>
            <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Reference ID: MV-ADM-2024-{Math.floor(Math.random() * 10000)}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-zinc-50 min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <Link to="/" className="inline-flex items-center gap-2 text-sky-600 font-bold text-sm mb-6 hover:gap-3 transition-all">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-black text-zinc-900 mb-4 tracking-tight">Admission Inquiry</h1>
            <p className="text-lg text-zinc-500 font-medium">Take the first step towards a brighter future. Fill out the form below to begin the enrollment process.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Section 1: Student Information */}
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-zinc-200/50 border border-zinc-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-sky-50 text-sky-600 rounded-xl">
                  <User className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-black text-zinc-900 tracking-tight">Student Details</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-zinc-400 uppercase tracking-widest ml-1">Full Name of Student</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Enter full name"
                    className="w-full px-5 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 outline-none transition-all font-bold"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-zinc-400 uppercase tracking-widest ml-1">Date of Birth</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
                    <input 
                      required
                      type="date" 
                      className="w-full pl-12 pr-5 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 outline-none transition-all font-bold"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-zinc-400 uppercase tracking-widest ml-1">Gender</label>
                  <select required className="w-full px-5 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 outline-none transition-all appearance-none cursor-pointer font-bold">
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-zinc-400 uppercase tracking-widest ml-1">Grade Applied For</label>
                  <select required className="w-full px-5 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 outline-none transition-all appearance-none cursor-pointer font-bold">
                    <option value="">Select Grade</option>
                    {[1,2,3,4,5,6,7,8,9,10,11,12].map(g => (
                      <option key={g} value={g}>Class {g}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Section 2: Parent Information */}
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-zinc-200/50 border border-zinc-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
                  <Users className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-black text-zinc-900 tracking-tight">Parent / Guardian</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-black text-zinc-400 uppercase tracking-widest ml-1">Guardian's Full Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Enter parent or guardian name"
                    className="w-full px-5 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 outline-none transition-all font-bold"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-zinc-400 uppercase tracking-widest ml-1">Contact Mobile</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
                    <input 
                      required
                      type="tel" 
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full pl-12 pr-5 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 outline-none transition-all font-bold"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-zinc-400 uppercase tracking-widest ml-1">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
                    <input 
                      required
                      type="email" 
                      placeholder="parent@example.com"
                      className="w-full pl-12 pr-5 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 outline-none transition-all font-bold"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Section */}
            <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-zinc-900 rounded-[2.5rem] text-white gap-8 shadow-2xl shadow-zinc-950/20">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-2xl border border-white/10">
                  <ShieldCheck className="w-6 h-6 text-sky-400" />
                </div>
                <div>
                  <h4 className="font-black text-lg tracking-tight">Institutional Enrollment</h4>
                  <p className="text-sm text-zinc-400 font-medium">Your application is encrypted and securely stored.</p>
                </div>
              </div>
              <button 
                type="submit"
                className="w-full md:w-auto px-12 py-5 bg-sky-600 text-white rounded-2xl font-black shadow-2xl hover:bg-sky-700 transition-all flex items-center justify-center gap-3 active:scale-[0.98] shadow-sky-600/20"
              >
                Submit Inquiry <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>

      <footer className="bg-white border-t border-zinc-100 py-10 text-center">
        <div className="space-y-2">
          <p className="text-zinc-400 text-[10px] font-black uppercase tracking-widest">
            © 2024 Mera Vidyalaya Admissions Protocol
          </p>
          <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">
            Developed by - MD Asid ( BCA - Final year )
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Admission;
