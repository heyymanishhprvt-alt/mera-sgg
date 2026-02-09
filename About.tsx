
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Target, Eye, Award, BookOpen, Users, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-zinc-50 min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-40 pb-20 px-6 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-black text-zinc-900 leading-tight mb-8 tracking-tight">
                Honoring Legacy, <br/>
                <span className="text-sky-600">Shaping Futures.</span>
              </h1>
              <p className="text-xl text-zinc-500 leading-relaxed mb-8">
                Sant Gahira Guru Vishwavidyalaya (SGG) serves as the academic heartbeat of the Sarguja region, bringing modern education to the hinterlands of Chhattisgarh.
              </p>
              <div className="flex gap-12">
                <div>
                  <p className="text-4xl font-black text-zinc-900">2008</p>
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mt-1">Established</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-zinc-900">120+</p>
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mt-1">Affiliated Colleges</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-sky-100 rounded-[3rem] -rotate-3"></div>
              <div className="relative bg-zinc-100 rounded-[3rem] h-[400px] overflow-hidden flex items-center justify-center">
                <BookOpen className="w-32 h-32 text-zinc-300" />
                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur p-6 rounded-2xl border border-white/20">
                  <p className="text-sm font-bold text-zinc-900 italic">"Knowledge is the light that illuminates the soul."</p>
                  <p className="text-[10px] font-black text-sky-600 uppercase tracking-widest mt-2">— Sant Gahira Guru</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-white p-12 rounded-[3rem] border border-zinc-100 shadow-xl shadow-zinc-200/50">
            <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-8">
              <Target className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-black text-zinc-900 mb-6">Our Mission</h2>
            <p className="text-zinc-500 leading-relaxed font-medium">
              To provide quality higher education that is inclusive and accessible, fostering research, innovation, and social responsibility among the youth of tribal and rural regions.
            </p>
          </div>
          <div className="bg-white p-12 rounded-[3rem] border border-zinc-100 shadow-xl shadow-zinc-200/50">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-8">
              <Eye className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-black text-zinc-900 mb-6">Our Vision</h2>
            <p className="text-zinc-500 leading-relaxed font-medium">
              To emerge as a globally recognized university that blends traditional values with modern technological advancements for the holistic empowerment of students.
            </p>
          </div>
        </div>
      </section>

      {/* Key Values */}
      <section className="py-24 bg-zinc-950 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Why Choose SGG?</h2>
            <p className="text-zinc-400">Excellence in every department, for every student.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard icon={<Award className="text-sky-400" />} title="UGC Recognized" desc="Fully compliant with national educational standards." />
            <ValueCard icon={<Users className="text-emerald-400" />} title="Diverse Community" desc="A melting pot of cultures from across Central India." />
            <ValueCard icon={<MapPin className="text-orange-400" />} title="Regional Hub" desc="The central authority for Sarguja division education." />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const ValueCard = ({ icon, title, desc }: any) => (
  <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/5 hover:bg-white/10 transition-all">
    <div className="mb-6">{icon}</div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default About;
