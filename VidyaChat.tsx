
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, User, Loader2 } from 'lucide-react';
import { chatWithVidyaAI } from '../services/geminiService';

const VidyaChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    { role: 'bot', text: 'Namaste! I am Vidya, your school assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const botResponse = await chatWithVidyaAI(userMsg);
      setMessages(prev => [...prev, { role: 'bot', text: botResponse || "I'm sorry, I couldn't process that right now." }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: "Error connecting to Vidya AI. Please check your API key." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white w-80 md:w-96 h-[500px] rounded-3xl shadow-2xl shadow-sky-950/20 border border-zinc-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-zinc-950 p-5 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-sky-600 p-2 rounded-xl shadow-lg shadow-sky-600/20">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-black text-xs uppercase tracking-widest">Vidya AI</h3>
                <p className="text-emerald-400 text-[10px] font-bold flex items-center gap-1 uppercase tracking-tighter">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                  Ready to help
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4 bg-zinc-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-[1.25rem] px-4 py-3 text-sm shadow-sm font-medium leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-sky-600 text-white rounded-tr-none' 
                    : 'bg-white text-zinc-700 border border-zinc-200/50 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-zinc-200/50 rounded-[1.25rem] p-3 shadow-sm rounded-tl-none">
                  <Loader2 className="w-4 h-4 text-sky-600 animate-spin" />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-zinc-100 bg-white">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a message..."
                className="w-full pl-5 pr-14 py-3.5 bg-zinc-50 border border-zinc-200 rounded-[1.25rem] focus:outline-none focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 text-sm font-bold placeholder:text-zinc-400 transition-all"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-2 top-2 p-2 bg-sky-600 text-white rounded-xl hover:bg-sky-700 transition-all disabled:bg-zinc-200 shadow-lg shadow-sky-600/10 active:scale-90"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-zinc-950 text-white px-6 py-4 rounded-[1.5rem] shadow-2xl shadow-zinc-950/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-3 group border border-zinc-800"
        >
          <span className="font-black text-xs uppercase tracking-widest hidden md:block">Ask Vidya AI</span>
          <div className="bg-sky-600 p-2 rounded-lg group-hover:rotate-12 transition-transform">
            <MessageSquare className="w-5 h-5 text-white" />
          </div>
        </button>
      )}
    </div>
  );
};

export default VidyaChat;
