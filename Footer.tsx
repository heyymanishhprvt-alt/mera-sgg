
import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Globe, MapPin, Smartphone as AppIcon, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-10 px-6 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <Logo showText={true} size="sm" />
          <p className="text-sm text-zinc-500 leading-relaxed">
            Sant Gahira Guru Vishwavidyalaya (SGG) is committed to excellence in education, research, and holistic development in the Sarguja region.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-zinc-50 rounded-lg text-zinc-400 hover:text-sky-600 hover:bg-sky-50 transition-all"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="p-2 bg-zinc-50 rounded-lg text-zinc-400 hover:text-sky-600 hover:bg-sky-50 transition-all"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="p-2 bg-zinc-50 rounded-lg text-zinc-400 hover:text-sky-600 hover:bg-sky-50 transition-all"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="p-2 bg-zinc-50 rounded-lg text-zinc-400 hover:text-sky-600 hover:bg-sky-50 transition-all"><Youtube className="w-4 h-4" /></a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-zinc-900 mb-6 uppercase tracking-widest text-xs">University Portals</h4>
          <ul className="space-y-3 text-sm text-zinc-600 font-medium">
            <li><Link to="/login" className="hover:text-sky-600 transition-colors">Student Login</Link></li>
            <li><Link to="/login" className="hover:text-sky-600 transition-colors">Faculty Login</Link></li>
            <li><Link to="/admission" className="hover:text-sky-600 transition-colors">Admission Inquiry</Link></li>
            <li><a href="#" className="hover:text-sky-600 transition-colors">Exam Results 2024</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-zinc-900 mb-6 uppercase tracking-widest text-xs">Information Hub</h4>
          <ul className="space-y-3 text-sm text-zinc-600 font-medium">
            <li><Link to="/about" className="hover:text-sky-600 transition-colors">About SGG</Link></li>
            <li><Link to="/features" className="hover:text-sky-600 transition-colors">Digital Features</Link></li>
            <li><Link to="/contact" className="hover:text-sky-600 transition-colors">Contact Us</Link></li>
            <li><a href="#" className="hover:text-sky-600 transition-colors">RTI & Disclosures</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-zinc-900 mb-6 uppercase tracking-widest text-xs">Campus Support</h4>
          <div className="space-y-4 text-sm text-zinc-600">
            <div className="flex items-center gap-3">
              <Smartphone className="w-4 h-4 text-sky-600" /> +91 840 58 44 588
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-sky-600 mt-0.5 shrink-0" />
              <span>Ambikapur, Sarguja,<br />Chhattisgarh (497001)</span>
            </div>
            <div className="bg-zinc-900 p-4 rounded-2xl text-white">
               <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-1">Emergency Helpdesk</p>
               <p className="font-bold text-xs">help@sgguniversity.in</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center pt-10 border-t border-zinc-200">
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
            © 2024 Sant Gahira Guru Vishwavidyalaya Digital Network. All Rights Reserved.
          </p>
          <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">
            Developed by - MD Asid ( BCA - Final year )
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
