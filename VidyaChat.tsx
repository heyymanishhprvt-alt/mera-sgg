import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, User, Loader2 } from 'lucide-react';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

// Template responses for common questions
const BOT_RESPONSES: Record<string, string> = {
  // Greeting patterns
  'hello': 'Namaste! I am Vidya, your school assistant. How can I help you today?',
  'hi': 'Hello! Welcome to Sant Gahira Guru University Portal. What can I assist you with?',
  'hey': 'Hey there! How can Vidya help you?',
  
  // Admission related
  'admission': 'We offer admissions for various undergraduate and postgraduate programs. Visit the Admission section for detailed information, eligibility criteria, and application procedures.',
  'admissions': 'We offer admissions for various undergraduate and postgraduate programs. Visit the Admission section for detailed information, eligibility criteria, and application procedures.',
  'apply': 'To apply, please visit the Admission page where you can find application forms and submission guidelines.',
  'eligibility': 'Please visit the Admission section to check eligibility criteria for different programs.',
  'registration': 'You can register for admission through our online portal. Please check the Admission page for step-by-step instructions.',
  
  // Fees and pricing
  'fee': 'For information about fees and pricing, please visit the Pricing page for detailed breakdowns.',
  'fees': 'For information about fees and pricing, please visit the Pricing page for detailed breakdowns.',
  'cost': 'For information about course costs, please visit the Pricing page.',
  'price': 'For information about pricing, please visit the Pricing page for all course details.',
  'scholarship': 'We offer various scholarships. Please contact our admissions office for scholarship information.',
  
  // Features and programs
  'features': 'We offer world-class education with modern infrastructure, experienced faculty, and cutting-edge technology. Check our Features section for more details.',
  'programs': 'We offer various undergraduate and postgraduate programs. Visit the Admission section to explore all available programs.',
  'courses': 'We offer diverse courses across multiple disciplines. Please visit the Admission or Features section for detailed information.',
  
  // Contact information
  'contact': 'You can reach us through the Contact page. We have multiple contact options and our team is ready to help you.',
  'phone': 'Please visit the Contact page for our phone numbers and other contact details.',
  'email': 'You can find our email address on the Contact page.',
  'address': 'You can find our address on the Contact page.',
  
  // About the institution
  'about': 'Sant Gahira Guru University is a premier educational institution. Visit the About page to learn more about our history, mission, and values.',
  'mission': 'Visit the About page to learn about our mission and vision.',
  'history': 'Visit the About page to learn about our institution\'s history and background.',
  
  // General help
  'help': 'I can help you with:\n• Admission information\n• Course details\n• Fees and pricing\n• Contact information\n• General FAQs\n\nWhat would you like to know?',
  'faq': 'Here are common questions:\n• How do I apply? → Visit Admission\n• What are the fees? → Visit Pricing\n• How can I contact you? → Visit Contact\n\nWhat else can I help with?',
  'thanks': 'You\'re welcome! Is there anything else I can help you with?',
  'thank you': 'You\'re welcome! Is there anything else I can help you with?',
  'ok': 'Great! Feel free to ask if you need more help.',
  'yes': 'Glad I could help! What else would you like to know?',
  'no': 'No problem! Is there something else I can assist you with?',
};

// Function to find the best matching response
const getBotResponse = (userInput: string): string => {
  const normalizedInput = userInput.toLowerCase().trim();
  
  // Exact match first
  if (BOT_RESPONSES[normalizedInput]) {
    return BOT_RESPONSES[normalizedInput];
  }
  
  // Check for partial matches
  for (const [key, response] of Object.entries(BOT_RESPONSES)) {
    if (normalizedInput.includes(key) || key.includes(normalizedInput.split(' ')[0])) {
      return response;
    }
  }
  
  // Default response if no match found
  return "I'm not sure about that. Could you please rephrase your question? I can help you with admission, fees, courses, contact information, and more!";
};

const VidyaChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
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

    // Simulate a small delay for better UX
    setTimeout(() => {
      const botResponse = getBotResponse(userMsg);
      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
      setIsLoading(false);
    }, 500);
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
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-zinc-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4 bg-zinc-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-[1.25rem] px-4 py-3 text-sm shadow-sm font-medium leading-relaxed whitespace-pre-wrap ${
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
                disabled={isLoading}
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-2 top-2 p-2 bg-sky-600 text-white rounded-xl hover:bg-sky-700 transition-all disabled:bg-zinc-200 shadow-lg shadow-sky-600/10 active:scale-90"
                aria-label="Send message"
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
          aria-label="Open Vidya AI chat"
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
