
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-zinc-50 min-h-screen">
      <Navbar />
      
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-black text-zinc-900 mb-4 tracking-tight">Get in <span className="text-sky-600">Touch</span></h1>
            <p className="text-lg text-zinc-500 font-medium">Have a query? Our support cells are ready to assist you.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <ContactInfoCard 
                icon={<Phone className="text-sky-600" />} 
                title="Phone Support" 
                detail="+91 84058 44588" 
                sub="Mon-Sat, 10:00 AM - 5:00 PM" 
              />
              <ContactInfoCard 
                icon={<Mail className="text-emerald-600" />} 
                title="Email Inquiry" 
                detail="info@sgguniversity.in" 
                sub="Response within 24 hours" 
              />
              <ContactInfoCard 
                icon={<Clock className="text-orange-600" />} 
                title="Working Hours" 
                detail="10:00 AM - 5:30 PM" 
                sub="Excluding Public Holidays" 
              />
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-[3rem] shadow-xl shadow-zinc-200/50 border border-zinc-100">
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Inquiry submitted!'); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Your Name</label>
                    <input type="text" placeholder="John Doe" className="w-full px-5 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl outline-none focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 transition-all font-bold" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="w-full px-5 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl outline-none focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 transition-all font-bold" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Subject</label>
                  <select className="w-full px-5 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl outline-none focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 transition-all font-bold appearance-none cursor-pointer">
                    <option>Admission Related</option>
                    <option>Examination & Results</option>
                    <li>Degree & Marksheet</li>
                    <option>IT / Portal Support</option>
                    <option>Others</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Message</label>
                  <textarea rows={4} placeholder="How can we help you?" className="w-full px-5 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl outline-none focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 transition-all font-bold resize-none"></textarea>
                </div>
                <button className="w-full py-5 bg-sky-600 text-white rounded-2xl font-black shadow-2xl shadow-sky-600/20 hover:bg-sky-700 transition-all flex items-center justify-center gap-3">
                  Send Message <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const ContactInfoCard = ({ icon, title, detail, sub }: any) => (
  <div className="bg-white p-6 rounded-[2rem] border border-zinc-100 flex items-center gap-5 shadow-sm">
    <div className="p-4 bg-zinc-50 rounded-2xl">
      {React.cloneElement(icon, { className: 'w-6 h-6' })}
    </div>
    <div>
      <h3 className="text-xs font-black text-zinc-400 uppercase tracking-widest mb-1">{title}</h3>
      <p className="font-bold text-zinc-900">{detail}</p>
      <p className="text-[10px] font-medium text-zinc-400 mt-0.5">{sub}</p>
    </div>
  </div>
);

export default Contact;
