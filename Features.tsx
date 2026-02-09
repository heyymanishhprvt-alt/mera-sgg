
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, BookOpen, CreditCard, Bus, Smartphone, Shield, Zap, 
  Search, MessageCircle, FileText, Globe, Settings, Calendar, 
  Clock, MapPin, Layout, BarChart3, Database, Bell, Lock, 
  Cpu, Headphones, Layers, CheckCircle2, ArrowRight, ArrowLeft, CalendarDays
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface Feature {
  title: string;
  desc: string;
  icon: React.ReactElement;
  colorClass: string;
  bgClass: string;
}

interface Category {
  name: string;
  id: string;
  features: Feature[];
}

const Features: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const categories: Category[] = [
    {
      name: "Core Administration",
      id: "admin",
      features: [
        { title: "Student Information", desc: "Complete 360° view of student profiles and academic history.", icon: <Users />, colorClass: "text-sky-600", bgClass: "bg-sky-50" },
        { title: "Staff & HR", desc: "Manage teacher profiles, payroll, and recruitment workflows.", icon: <Database />, colorClass: "text-zinc-700", bgClass: "bg-zinc-100" },
        { title: "Inventory & Assets", desc: "Track school assets from labs to classroom furniture.", icon: <Layers />, colorClass: "text-amber-600", bgClass: "bg-amber-50" },
        { title: "Digital Documents", desc: "Secure storage for certificates and official forms.", icon: <FileText />, colorClass: "text-rose-600", bgClass: "bg-rose-50" },
        { title: "Academic Calendar", desc: "Synchronized planner for holidays, events, and exams.", icon: <Calendar />, colorClass: "text-sky-600", bgClass: "bg-sky-50" },
        { title: "Security Roles", desc: "Granular permissions for all administrative levels.", icon: <Lock />, colorClass: "text-emerald-600", bgClass: "bg-emerald-50" },
      ]
    },
    {
      name: "Academic Excellence",
      id: "academic",
      features: [
        { title: "Smart Gradebook", desc: "Automated result processing and report card generation.", icon: <BarChart3 />, colorClass: "text-sky-600", bgClass: "bg-sky-50" },
        { title: "Online Assessments", desc: "Conduct secure online exams with auto-grading.", icon: <Zap />, colorClass: "text-amber-500", bgClass: "bg-amber-50" },
        { title: "Library 2.0", desc: "Digital cataloging and automated issuance tracking.", icon: <BookOpen />, colorClass: "text-orange-600", bgClass: "bg-orange-50" },
        { title: "Schedule Builder", desc: "Complex timetable builder with conflict resolution.", icon: <Clock />, colorClass: "text-sky-500", bgClass: "bg-sky-50" },
        { title: "Digital Homework", desc: "Post assignments and track syllabus completion.", icon: <Layout />, colorClass: "text-purple-600", bgClass: "bg-purple-50" },
        { title: "Lesson Resource", desc: "Cloud storage for digital teaching resources.", icon: <Globe />, colorClass: "text-sky-600", bgClass: "bg-sky-50" },
      ]
    },
    {
      name: "Financial Operations",
      id: "finance",
      features: [
        { title: "Fee Hub", desc: "Custom fee structures, installments, and concession logic.", icon: <CreditCard />, colorClass: "text-emerald-600", bgClass: "bg-emerald-50" },
        { title: "SGG Pay", desc: "Integrated payment links via UPI, Cards, and NetBanking.", icon: <Globe />, colorClass: "text-sky-600", bgClass: "bg-sky-50" },
        { title: "Expense Manager", desc: "Manage daily school petty cash and major expenses.", icon: <Database />, colorClass: "text-zinc-600", bgClass: "bg-zinc-100" },
        { title: "Digital Payroll", desc: "Automated salary slips and bonus management.", icon: <CreditCard />, colorClass: "text-sky-600", bgClass: "bg-sky-50" },
        { title: "Audit Portal", desc: "Instant financial statements and collection summaries.", icon: <BarChart3 />, colorClass: "text-zinc-900", bgClass: "bg-zinc-100" },
        { title: "Scholarship Sync", desc: "Manage government and institutional scholarships.", icon: <Zap />, colorClass: "text-amber-500", bgClass: "bg-amber-50" },
      ]
    }
  ];

  const filteredCategories = categories.map(cat => ({
    ...cat,
    features: cat.features.filter(f => 
      f.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      f.desc.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(cat => cat.features.length > 0);

  return (
    <div className="bg-zinc-50 min-h-screen">
      <Navbar />

      <section className="pt-40 pb-16 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-sky-600 font-bold text-sm mb-6 hover:gap-3 transition-all">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-black text-zinc-900 mb-6 leading-tight tracking-tight">
            Comprehensive <span className="text-sky-600">Digital Toolkit.</span>
          </h1>
          <p className="text-xl text-zinc-500 max-w-3xl mx-auto mb-12">
            Every module is designed to meet the rigorous standards of Sant Gahira Guru Vishwavidyalaya's administration.
          </p>

          <div className="max-w-xl mx-auto relative group">
            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-zinc-400 group-focus-within:text-sky-600 transition-colors" />
            </div>
            <input 
              type="text" 
              placeholder="Search features (e.g. 'Payroll', 'Exams')..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-14 pr-6 py-5 bg-zinc-50 border border-zinc-200 rounded-[2rem] text-lg focus:outline-none focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 transition-all shadow-sm font-medium"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {filteredCategories.map((category) => (
            <div key={category.id} className="mb-24 last:mb-0">
              <div className="flex items-center gap-4 mb-10">
                <div className="h-px flex-1 bg-zinc-200"></div>
                <h2 className="text-xl font-black text-zinc-900 px-4 uppercase tracking-[0.2em] text-center">
                  {category.name}
                </h2>
                <div className="h-px flex-1 bg-zinc-200"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.features.map((feature, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white p-8 rounded-[2.5rem] border border-zinc-100 hover:border-sky-200 transition-all hover:shadow-2xl hover:shadow-sky-600/5 group"
                  >
                    <div className={`p-4 ${feature.bgClass} rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                      {React.cloneElement(feature.icon, { className: `w-6 h-6 ${feature.colorClass}` })}
                    </div>
                    <h3 className="text-lg font-black text-zinc-900 mb-3">{feature.title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed font-medium">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;
