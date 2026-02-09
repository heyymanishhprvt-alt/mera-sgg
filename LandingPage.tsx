
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, Zap, Shield, Users, CreditCard, BookOpen, 
  Search, MessageCircle, ArrowRight, Smartphone, Globe, FileText, Smartphone as AppIcon
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="bg-zinc-50 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-100 rounded-full text-sky-700 text-xs font-bold mb-6 animate-bounce">
              <Zap className="w-3 h-3 fill-sky-700" /> Digital University Portal 2024
            </div>
            <h1 className="text-6xl lg:text-7xl font-black text-zinc-900 leading-[0.95] mb-6 tracking-tighter">
              Education <br/>
              <span className="text-sky-600">Reimagined.</span>
            </h1>
            <p className="text-xl text-zinc-600 mb-10 max-w-xl leading-relaxed">
              Empowering Sant Gahira Guru Vishwavidyalaya with a unified digital ecosystem for students, faculty, and administration.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link to="/register" className="w-full sm:w-auto px-8 py-4 bg-sky-600 text-white rounded-2xl font-black shadow-xl shadow-sky-600/20 hover:bg-sky-700 hover:-translate-y-1 transition-all text-center">
                Access Student Portal
              </Link>
              <Link to="/admission" className="w-full sm:w-auto px-8 py-4 bg-white text-zinc-700 border border-zinc-200 rounded-2xl font-black hover:bg-zinc-50 transition-all text-center">
                Admissions 2024
              </Link>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-sky-600/5 blur-[120px] rounded-full"></div>
            <div className="relative bg-white p-8 rounded-[3rem] shadow-2xl border border-zinc-100 overflow-hidden transform group-hover:scale-[1.01] transition-transform duration-500">
               {/* Dashboard Sneak-Peak */}
               <div className="h-4 w-32 bg-zinc-100 rounded-full mb-8"></div>
               <div className="grid grid-cols-2 gap-4 mb-8">
                 <div className="h-24 bg-emerald-50 rounded-3xl border border-emerald-100 p-4">
                    <p className="text-[10px] font-black text-emerald-400 uppercase">Results Live</p>
                    <p className="text-2xl font-black text-emerald-600 mt-1">SGG-2024</p>
                 </div>
                 <div className="h-24 bg-sky-50 rounded-3xl border border-sky-100 p-4">
                    <p className="text-[10px] font-black text-sky-400 uppercase">User Traffic</p>
                    <p className="text-2xl font-black text-sky-600 mt-1">High</p>
                 </div>
               </div>
               <div className="space-y-3">
                 {[1, 2].map(i => (
                   <div key={i} className="h-12 bg-zinc-50 rounded-2xl border border-zinc-100 flex items-center px-4 gap-3">
                     <div className="h-2 flex-1 bg-zinc-200 rounded-full"></div>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* University Vision Ticker */}
      <div className="bg-zinc-950 py-4 overflow-hidden whitespace-nowrap">
        <div className="flex items-center gap-12 animate-[marquee_20s_linear_infinite] px-6">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="text-[10px] font-black text-zinc-600 uppercase tracking-widest flex items-center gap-2">
              <CheckCircle className="w-3 h-3 text-sky-500" /> SGG UNIVERSITY AMBIKAPUR • PORTAL OPEN 2024-25 • NEW RESULTS ANNOUNCED •
            </span>
          ))}
        </div>
      </div>

      {/* Legacy Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
             <div className="w-16 h-1 bg-sky-600 mb-6 rounded-full"></div>
             <h2 className="text-4xl font-black text-zinc-900 mb-6 tracking-tight">The Vision of Knowledge</h2>
             <p className="text-lg text-zinc-500 leading-relaxed mb-8">
               Mera SGG is more than just a portal; it is the digital manifestation of Sant Gahira Guru's dream to empower the region through wisdom and modern technology.
             </p>
             <Link to="/about" className="inline-flex items-center gap-2 font-black text-sky-600 hover:gap-4 transition-all">
               Read our History <ArrowRight className="w-5 h-5" />
             </Link>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
             <div className="aspect-square bg-zinc-50 rounded-[2.5rem] flex items-center justify-center p-8 border border-zinc-100">
                <div className="text-center">
                  <Globe className="w-10 h-10 text-sky-600 mx-auto mb-4" />
                  <p className="text-sm font-bold text-zinc-900">84+</p>
                  <p className="text-[9px] font-black text-zinc-400 uppercase mt-1">Towns Covered</p>
                </div>
             </div>
             <div className="aspect-square bg-zinc-50 rounded-[2.5rem] translate-y-8 flex items-center justify-center p-8 border border-zinc-100">
                <div className="text-center">
                  <Users className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
                  <p className="text-sm font-bold text-zinc-900">12k+</p>
                  <p className="text-[9px] font-black text-zinc-400 uppercase mt-1">Active Students</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Snapshot Stats Section */}
      <section className="bg-zinc-950 py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatBox label="Affiliated Colleges" value="120+" icon={<Globe className="text-sky-400" />} />
            <StatBox label="Daily Queries" value="2.4k" icon={<MessageCircle className="text-amber-400" />} />
            <StatBox label="Research Papers" value="450+" icon={<BookOpen className="text-emerald-400" />} />
            <StatBox label="Placement Rate" value="78%" icon={<Zap className="text-sky-400" />} />
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 blur-[100px] rounded-full"></div>
      </section>

      {/* Portal Features Grid */}
      <section id="features" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-black text-zinc-900 mb-4 leading-tight tracking-tight">University Excellence Tools</h2>
            <p className="text-lg text-zinc-500">Sophisticated management for our complex academic structure.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureItem title="E-Library Hub" desc="Access thousands of research journals and books digitally." icon={<BookOpen className="text-sky-500" />} />
            <FeatureItem title="Verifiable Marks" desc="QR-coded digital marksheets for instant verification." icon={<FileText className="text-zinc-700" />} />
            <FeatureItem title="Scholarship Portal" desc="Track aid and state scholarships with transparent logs." icon={<CreditCard className="text-emerald-500" />} />
            <FeatureItem title="Campus Map" desc="Navigate our expanding campus facilities with ease." icon={<Globe className="text-sky-500" />} />
            <FeatureItem title="Exam Scheduler" desc="Receive real-time notifications for admit cards and datesheets." icon={<Shield className="text-rose-500" />} />
            <FeatureItem title="Student Helpdesk" desc="24/7 automated support for all administrative queries." icon={<MessageCircle className="text-sky-500" />} />
          </div>
        </div>
      </section>

      <Footer />
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

// Helper Components
const StatBox = ({ label, value, icon }: any) => (
  <div className="bg-white/5 border border-white/5 p-8 rounded-[2.5rem] hover:bg-white/10 transition-colors">
    <div className="bg-white/10 p-3 rounded-2xl w-fit mb-6">{icon}</div>
    <p className="text-sm font-bold text-sky-200 uppercase tracking-widest mb-1">{label}</p>
    <p className="text-4xl font-black text-white">{value}</p>
  </div>
);

const FeatureItem = ({ title, desc, icon }: any) => (
  <div className="p-8 rounded-[2.5rem] border border-zinc-100 hover:border-sky-200 transition-all group hover:shadow-xl hover:shadow-sky-600/5 cursor-default">
    <div className="p-4 bg-zinc-50 rounded-2xl w-fit mb-6 group-hover:scale-105 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-black text-zinc-900 mb-3">{title}</h3>
    <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default LandingPage;
