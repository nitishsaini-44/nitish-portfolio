import { Send, MapPin, Mail, Briefcase } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { AnimatedSection } from './ui/AnimatedSection';

const Contact = () => {
  return (
    <section id="contact" className="px-4 sm:px-6 max-w-6xl mx-auto w-full pb-20 sm:pb-32 scroll-mt-24">
      <AnimatedSection>
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight mb-3 sm:mb-4 text-[#171717]">
            Let's Talk<span className="text-[#4F46E5]">.</span>
          </h2>
          <p className="text-[#52525B] text-base sm:text-lg max-w-2xl mx-auto px-2">
            Ready to deploy your next big idea or discuss engineering opportunities? Feel free to reach out for collaborations or a friendly chat.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-stretch">
        
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 flex flex-col">
          <AnimatedSection delay={0.1} className="flex flex-col gap-3.5 sm:gap-4 h-full justify-between">
            
            <a 
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`} 
              target="_blank" 
              rel="noreferrer" 
              className="light-card p-4 sm:p-5 flex items-center gap-4 sm:gap-5 group"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#FAFAFA] border border-[#E4E4E7] flex items-center justify-center group-hover:border-[#4F46E5] group-hover:bg-[#4F46E5]/10 transition-colors shrink-0">
                <Mail className="w-5 h-5 text-[#52525B] group-hover:text-[#4F46E5] transition-colors" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-bold text-[#A1A1AA] uppercase tracking-wider mb-0.5">Email</span>
                <span className="text-[#171717] font-semibold text-sm sm:text-base truncate break-all">{personalInfo.email}</span>
              </div>
            </a>
            
            <div className="light-card p-4 sm:p-5 flex items-center gap-4 sm:gap-5 group">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#FAFAFA] border border-[#E4E4E7] flex items-center justify-center group-hover:border-[#FF6B6B] group-hover:bg-[#FF6B6B]/10 transition-colors shrink-0">
                <MapPin className="w-5 h-5 text-[#52525B] group-hover:text-[#FF6B6B] transition-colors" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-bold text-[#A1A1AA] uppercase tracking-wider mb-0.5">Location</span>
                <span className="text-[#171717] font-semibold text-sm sm:text-base">{personalInfo.location}</span>
              </div>
            </div>

            <div className="light-card p-4 sm:p-5 flex items-center gap-4 sm:gap-5 group">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#FAFAFA] border border-[#E4E4E7] flex items-center justify-center group-hover:border-[#10B981] group-hover:bg-[#10B981]/10 transition-colors shrink-0">
                <Briefcase className="w-5 h-5 text-[#52525B] group-hover:text-[#10B981] transition-colors" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-bold text-[#A1A1AA] uppercase tracking-wider mb-0.5">Availability</span>
                <span className="text-[#171717] font-semibold text-sm sm:text-base">{personalInfo.availability}</span>
              </div>
            </div>

          </AnimatedSection>
        </div>

        {/* Compact Contact Form */}
        <div className="lg:col-span-7 flex flex-col">
          <AnimatedSection delay={0.2} className="h-full">
            <form 
              className="light-card p-5 sm:p-6 flex flex-col justify-between h-full gap-3 sm:gap-4" 
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const name = formData.get('name');
                const email = formData.get('email');
                const message = formData.get('message');
                const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
                const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);
                window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}&su=${subject}&body=${body}`, '_blank');
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-[#52525B]">Name</label>
                  <input 
                    name="name"
                    type="text" 
                    placeholder="Jane Doe"
                    className="light-input text-sm py-2.5 px-3.5"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-[#52525B]">Email</label>
                  <input 
                    name="email"
                    type="email" 
                    placeholder="jane@example.com"
                    className="light-input text-sm py-2.5 px-3.5"
                    required
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#52525B]">Message</label>
                <textarea 
                  name="message"
                  rows="3"
                  placeholder="Tell me about your project or role..."
                  className="light-input resize-none text-sm py-2.5 px-3.5"
                  required
                />
              </div>
              
              <button type="submit" className="btn-indigo flex items-center justify-center gap-2 py-2.5 sm:py-3 text-sm sm:text-base w-full mt-1">
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </AnimatedSection>
        </div>

      </div>
    </section>
  );
};

export default Contact;
