
import React, { useState } from 'react';
import { 
  Users, BookOpen, Calendar, CreditCard, ChevronRight, Bell, Search, 
  Settings, LayoutDashboard, UserCircle, Bus, Wallet, LogOut, 
  MoreVertical, Filter, Download, Plus, MapPin, Phone
} from 'lucide-react';
import StatCard from '../components/StatCard';
import Logo from '../components/Logo';
import { Notice, StudentRecord, TeacherRecord, BusRecord, Transaction } from '../types';

type Tab = 'Overview' | 'Students' | 'Faculty' | 'Infrastructure' | 'Finances' | 'Settings';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('Overview');
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  // Mock Data
  const notices: Notice[] = [
    { id: '1', title: 'SGG Semester Exams Dec 2024', content: 'Final datesheets released for all departments.', date: '2023-11-01', category: 'Academic' },
    { id: '2', title: 'University Convocation 2024', content: 'Register for the annual convocation ceremony.', date: '2023-11-20', category: 'Event' },
  ];

  const students: StudentRecord[] = [
    { id: 'SGG001', name: 'Rahul Sahu', grade: 'B.Sc 3rd Yr', section: 'A', parentName: 'Deepak Sahu', status: 'Active', feeStatus: 'Paid' },
    { id: 'SGG002', name: 'Anjali Kerketta', grade: 'M.A 1st Sem', section: 'B', parentName: 'Nirmala Kerketta', status: 'Active', feeStatus: 'Pending' },
  ];

  const teachers: TeacherRecord[] = [
    { id: 'TR01', name: 'Prof. S.K. Mishra', subject: 'Department of Zoology', qualification: 'Ph.D', experience: '20 Years', status: 'In Class' },
    { id: 'TR02', name: 'Dr. Priya Yadav', subject: 'Department of IT', qualification: 'Ph.D IT', experience: '10 Years', status: 'Available' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'Overview':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-black text-zinc-900 tracking-tight">University Overview 🏫</h2>
                <p className="text-zinc-500 text-sm">Campus performance metrics for Sant Gahira Guru Vishwavidyalaya.</p>
              </div>
              <div className="flex gap-3">
                <button className="bg-white text-zinc-700 px-4 py-2.5 rounded-xl font-bold border border-zinc-200 shadow-sm hover:bg-zinc-50 transition-all flex items-center gap-2">
                  <Download className="w-4 h-4" /> Reports
                </button>
                <button className="bg-sky-600 text-white px-6 py-2.5 rounded-xl font-bold shadow-lg shadow-sky-600/10 hover:bg-sky-700 transition-all flex items-center gap-2">
                  <Plus className="w-4 h-4" /> New Registration
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard title="University Enrollment" value="12,450" icon={<Users className="text-sky-600" />} trend="+4% this year" />
              <StatCard title="SGG Faculty" value="214" icon={<BookOpen className="text-amber-600" />} />
              <StatCard title="Digital Revenue" value="₹1.2Cr" icon={<Wallet className="text-emerald-600" />} trend="Fee Collection" />
              <StatCard title="Active Centers" value="12" icon={<MapPin className="text-sky-600" />} />
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              <div className="xl:col-span-2 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-black text-zinc-900 tracking-tight">University Gazettes</h3>
                  <button className="text-sm font-bold text-sky-600 hover:underline">View All Notifications</button>
                </div>
                <div className="grid gap-4">
                  {notices.map((notice) => (
                    <div key={notice.id} className="bg-white p-5 rounded-2xl border border-zinc-100 shadow-sm flex items-start gap-4 hover:border-sky-200 transition-all cursor-pointer group">
                      <div className={`p-3 rounded-xl ${
                        notice.category === 'Academic' ? 'bg-sky-50 text-sky-600' : 'bg-purple-50 text-purple-600'
                      }`}>
                        <Bell className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-black uppercase tracking-widest opacity-40">{notice.category}</span>
                          <span className="text-[10px] font-bold text-zinc-400">{notice.date}</span>
                        </div>
                        <h4 className="font-bold text-zinc-900 group-hover:text-sky-600 transition-colors">{notice.title}</h4>
                        <p className="text-sm text-zinc-500 mt-1 leading-relaxed">{notice.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-3xl border border-zinc-100 p-6 shadow-sm">
                 <h3 className="font-black text-zinc-900 mb-6 tracking-tight">HOD Presence</h3>
                 <div className="space-y-4">
                   {teachers.map(t => (
                     <div key={t.id} className="flex items-center justify-between">
                       <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center text-[10px] font-black text-zinc-600">
                           {t.name.split(' ').map(n => n[0]).join('')}
                         </div>
                         <div>
                           <p className="text-sm font-bold text-zinc-800 leading-none">{t.name}</p>
                           <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-tighter mt-1">{t.subject.split(' ')[2]}</p>
                         </div>
                       </div>
                       <span className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest ${
                         t.status === 'Available' ? 'bg-emerald-50 text-emerald-600' :
                         t.status === 'In Class' ? 'bg-amber-50 text-amber-600' : 'bg-zinc-100 text-zinc-500'
                       }`}>
                         {t.status}
                       </span>
                     </div>
                   ))}
                 </div>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="flex items-center justify-center h-[60vh] text-zinc-400">
            <div className="text-center">
              <Settings className="w-12 h-12 mx-auto mb-4 opacity-10" />
              <p className="font-bold uppercase tracking-widest text-xs">Module under digital audit</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 flex">
      {/* Sidebar - SGG Branded */}
      <aside className="w-64 bg-zinc-950 text-zinc-100 hidden lg:flex flex-col border-r border-zinc-900 shadow-xl">
        <div className="p-8">
          <Logo showText={true} size="sm" className="brightness-200 contrast-200 grayscale invert" />
        </div>
        <nav className="flex-1 px-4 py-4 space-y-1">
          <SidebarItem label="Dashboard" icon={<LayoutDashboard />} active={activeTab === 'Overview'} onClick={() => setActiveTab('Overview')} />
          <SidebarItem label="SGG Students" icon={<Users />} active={activeTab === 'Students'} onClick={() => setActiveTab('Students')} />
          <SidebarItem label="SGG Faculty" icon={<BookOpen />} active={activeTab === 'Faculty'} onClick={() => setActiveTab('Faculty')} />
          <SidebarItem label="Infrastructure" icon={<Bus />} active={activeTab === 'Infrastructure'} onClick={() => setActiveTab('Infrastructure')} />
          <SidebarItem label="Finances" icon={<Wallet />} active={activeTab === 'Finances'} onClick={() => setActiveTab('Finances')} />
          <div className="pt-4 mt-4 border-t border-zinc-900">
             <SidebarItem label="Settings" icon={<Settings />} active={activeTab === 'Settings'} onClick={() => setActiveTab('Settings')} />
          </div>
        </nav>
        <div className="p-6 border-t border-zinc-900 bg-black/20 space-y-4">
           <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-600/10 border border-sky-600/20 flex items-center justify-center">
                <UserCircle className="w-6 h-6 text-sky-400" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-white leading-none">University Admin</p>
                <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mt-1">SGG-PRO-01</p>
              </div>
           </div>
           <div className="pt-2 border-t border-zinc-800">
              <p className="text-[8px] font-black text-zinc-500 uppercase tracking-widest text-center">
                Developed by - MD Asid ( BCA - Final year )
              </p>
           </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Modern Header */}
        <header className="bg-white/80 backdrop-blur-md border-b border-zinc-100 px-8 py-4 flex items-center justify-between z-20">
          <div className="flex items-center gap-4 bg-zinc-50 px-4 py-2 rounded-xl border border-zinc-200 w-full max-w-md focus-within:border-sky-500 transition-colors">
            <Search className="w-4 h-4 text-zinc-400" />
            <input type="text" placeholder={`Search university database...`} className="bg-transparent border-none outline-none text-sm w-full font-medium" />
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <button className="relative p-2.5 text-zinc-500 hover:bg-zinc-50 rounded-xl transition-all">
                <Bell className="w-5 h-5" />
                <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-sky-500 rounded-full border-2 border-white"></span>
              </button>
            </div>
            
            <div className="h-8 w-px bg-zinc-100"></div>

            {/* Profile Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center gap-3 p-1 hover:bg-zinc-50 rounded-2xl transition-all group"
              >
                <div className="w-9 h-9 rounded-xl bg-zinc-950 flex items-center justify-center text-white shadow-lg shadow-zinc-950/10 transition-transform">
                  <UserCircle className="w-5 h-5" />
                </div>
                <div className="text-left hidden sm:block">
                  <p className="text-sm font-black text-zinc-900 leading-none">SGG Registrar</p>
                  <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mt-1">Vishwavidyalaya Portal</p>
                </div>
              </button>

              {showProfileMenu && (
                <div className="absolute top-full right-0 mt-3 w-56 bg-white rounded-2xl shadow-2xl shadow-zinc-200 border border-zinc-100 py-2 animate-in slide-in-from-top-2 duration-200 z-[100]">
                  <div className="px-4 py-3 border-b border-zinc-50">
                    <p className="text-sm font-black text-zinc-900">SGG Admin</p>
                    <p className="text-[10px] text-zinc-500 font-medium">it@sgguniversity.in</p>
                  </div>
                  <div className="py-1">
                    <button className="w-full text-left px-4 py-2.5 text-sm text-zinc-700 hover:bg-zinc-50 flex items-center gap-3 transition-colors font-medium">
                      <UserCircle className="w-4 h-4 text-zinc-400" /> Admin Dashboard
                    </button>
                  </div>
                  <div className="pt-1 mt-1 border-t border-zinc-50">
                    <button 
                      onClick={() => window.location.href = '#/'}
                      className="w-full text-left px-4 py-3 text-sm text-sky-600 hover:bg-sky-50 flex items-center gap-3 transition-colors font-black uppercase tracking-widest"
                    >
                      <LogOut className="w-4 h-4" /> End Session
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Scrollable Area */}
        <div className="flex-1 overflow-y-auto p-8 bg-zinc-50/30">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

const SidebarItem = ({ label, icon, active, onClick }: { label: string, icon: React.ReactNode, active: boolean, onClick: () => void }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-bold text-sm ${
      active ? 'bg-sky-600 text-white shadow-lg shadow-sky-600/20' : 'text-zinc-500 hover:bg-white/5 hover:text-white'
    }`}
  >
    {React.cloneElement(icon as React.ReactElement, { className: 'w-5 h-5' })}
    {label}
  </button>
);

export default Dashboard;
