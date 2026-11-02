import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { SiDocker, SiHuggingface } from 'react-icons/si';
import { Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="w-full border-t border-[#E4E4E7] bg-[#FAFAFA]">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col items-center sm:items-start gap-1">
          <span className="text-lg sm:text-xl font-bold font-display tracking-tight text-[#171717]">
            {personalInfo.name}<span className="text-[#FF6B6B]">.</span>
          </span>
          <span className="text-xs sm:text-sm font-medium text-[#A1A1AA]">
            © {new Date().getFullYear()} Nitish Saini. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <a 
            href={personalInfo.github} 
            target="_blank" 
            rel="noreferrer"
            title="GitHub"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-white border border-[#E4E4E7] text-[#52525B] hover:border-[#4F46E5] hover:text-[#4F46E5] hover:shadow-md transition-all"
          >
            <FiGithub className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a 
            href={personalInfo.linkedin} 
            target="_blank" 
            rel="noreferrer"
            title="LinkedIn"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-white border border-[#E4E4E7] text-[#52525B] hover:border-[#4F46E5] hover:text-[#4F46E5] hover:shadow-md transition-all"
          >
            <FiLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          {personalInfo.huggingface && (
            <a 
              href={personalInfo.huggingface} 
              target="_blank" 
              rel="noreferrer"
              title="Hugging Face"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-white border border-[#E4E4E7] text-[#52525B] hover:border-[#FFD21E] hover:text-[#FF9D00] hover:shadow-md transition-all"
            >
              <SiHuggingface className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          )}
          {personalInfo.docker && (
            <a 
              href={personalInfo.docker} 
              target="_blank" 
              rel="noreferrer"
              title="Docker Hub"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-white border border-[#E4E4E7] text-[#52525B] hover:border-[#2496ED] hover:text-[#2496ED] hover:shadow-md transition-all"
            >
              <SiDocker className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          )}
          <a 
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`}
            target="_blank"
            rel="noreferrer"
            title="Email"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-white border border-[#E4E4E7] text-[#52525B] hover:border-[#4F46E5] hover:text-[#4F46E5] hover:shadow-md transition-all"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
