
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Calendar, MessageSquare, ArrowRight, ShieldCheck, Zap, Globe, Users, Headphones } from 'lucide-react';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [showMeetingForm, setShowMeetingForm] = useState(false);

  const plans = [
    {
      name: "College Lite",
      price: isAnnual ? "1,200" : "1,500",
      desc: "For small affiliated colleges needing digital presence.",
      features: ["Student Enrollment System", "Basic Marks Portal", "Staff Records", "24/7 SGG Support"],
      button: "Request Onboarding",
      link: "/register",
      highlight: false
    },
    {
      name: "Campus Pro",
      price: isAnnual ? "2,400" : "2,900",
      desc: "Full ERP solution for major SGG affiliated institutions.",
      features: ["Everything in Lite", "Verifiable Marksheets", "Digital Library Sync", "Automatic SGG Compliance", "Inventory Hub"],
      button: "Upgrade Campus",
      link: "/register",
      highlight: true
    },
    {
      name: "University Core",
      price: "Custom",
      desc: "Bespoke digital architecture for university departments.",
      features: ["Everything in Pro", "Research Repository", "Departmental Dashboards", "Advanced Analytics", "Governance Portal"],
      button: "Consult Registrar",
      action: () => setShowMeetingForm(true),
      highlight: false
    }
  ];

  return (
    <div className="bg-zinc-50 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-zinc-900 mb-6 tracking-tight">
            Empower your college with <br /><span className="text-sky-600">Mera SGG Digital.</span>
          </h1>
          <p className="text-xl text-zinc-500 mb-10">
            Standardized digital infrastructure for all colleges under Sant Gahira Guru Vishwavidyalaya.
          </p>

          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-bold ${!isAnnual ? 'text-zinc-900' : 'text-zinc-400'}`}>Monthly</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-8 bg-zinc-200 rounded-full p-1 relative transition-colors duration-300"
            >
              <div className={`w-6 h-6 bg-white rounded-full shadow-sm transform transition-transform duration-300 ${isAnnual ? 'translate-x-6' : 'translate-x-0'}`}></div>
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-bold ${isAnnual ? 'text-zinc-900' : 'text-zinc-400'}`}>Annually</span>
              <span className="bg-emerald-100 text-emerald-700 text-[10px] font-black px-2 py-0.5 rounded-full uppercase">University Discount</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative bg-white rounded-[2.5rem] p-10 border transition-all duration-300 hover:shadow-2xl hover:shadow-sky-600/5 ${
                plan.highlight ? 'border-sky-500 shadow-xl shadow-sky-600/10 scale-105 z-10' : 'border-zinc-100'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sky-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                  Recommended
                </div>
              )}
              <h3 className="text-xl font-black text-zinc-900 mb-2">{plan.name}</h3>
              <p className="text-zinc-500 text-sm mb-8 leading-relaxed">{plan.desc}</p>
              
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-black text-zinc-900">
                  {plan.price !== 'Custom' ? `₹${plan.price}` : plan.price}
                </span>
                {plan.price !== 'Custom' && <span className="text-zinc-400 font-bold">/mo</span>}
              </div>

              <div className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 text-sm font-medium text-zinc-600">
                    <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>

              {plan.action ? (
                <button 
                  onClick={plan.action}
                  className="w-full py-4 bg-zinc-900 text-white rounded-2xl font-black text-sm hover:bg-zinc-800 transition-all flex items-center justify-center gap-2"
                >
                  {plan.button} <MessageSquare className="w-4 h-4" />
                </button>
              ) : (
                <Link 
                  to={plan.link}
                  className={`w-full py-4 rounded-2xl font-black text-sm transition-all flex items-center justify-center gap-2 ${
                    plan.highlight 
                      ? 'bg-sky-600 text-white hover:bg-sky-700 shadow-lg shadow-sky-600/20' 
                      : 'bg-zinc-50 text-zinc-900 hover:bg-zinc-100 border border-zinc-200'
                  }`}
                >
                  {plan.button} <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Book a Meeting CTA Section */}
      <section id="book-meeting" className="py-24 px-6 bg-zinc-950 relative overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="flex-1 text-center md:text-left">
            <div className="w-16 h-16 bg-sky-600 rounded-2xl flex items-center justify-center mb-8 mx-auto md:mx-0 shadow-lg shadow-sky-600/20">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">Institutional Consultation</h2>
            <p className="text-zinc-400 text-lg mb-8">
              Schedule a demo for your college's administrative board to see how Mera SGG can digitize your entire campus.
            </p>
          </div>

          <div className="w-full max-w-md bg-white p-8 md:p-10 rounded-[3rem] shadow-2xl">
            <h3 className="text-xl font-black text-zinc-900 mb-6">Inquiry Portal</h3>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowMeetingForm(false); alert('Inquiry sent to university cell!'); }}>
              <div className="space-y-1">
                <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Principal / HOD Name</label>
                <input required type="text" placeholder="Full Name" className="w-full px-5 py-3.5 bg-zinc-50 border border-zinc-200 rounded-xl font-bold text-sm outline-none focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 transition-all" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Official College Email</label>
                <input required type="email" placeholder="principal@college.in" className="w-full px-5 py-3.5 bg-zinc-50 border border-zinc-200 rounded-xl font-bold text-sm outline-none focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 transition-all" />
              </div>
              <button className="w-full py-4 bg-sky-600 text-white rounded-xl font-black text-sm shadow-xl shadow-sky-600/10 hover:bg-sky-700 transition-all mt-4">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-zinc-50 py-12 px-6 border-t border-zinc-100 text-center">
        <Logo showText size="sm" className="justify-center mb-6" />
        <div className="space-y-2">
          <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">
            SGG UNIVERSITY DIGITAL NETWORK • AMBIKAPUR
          </p>
          <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">
            Developed by - MD Asid ( BCA - Final year )
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Pricing;
