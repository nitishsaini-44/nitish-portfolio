import { ArrowRight } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { SiDocker, SiHuggingface } from 'react-icons/si';
import { personalInfo } from '../data/portfolioData';
import { AnimatedSection } from './ui/AnimatedSection';

const Hero = () => {
  return (
    <section id="home" className="relative w-full pt-28 sm:pt-36 md:pt-44 pb-0 px-4 sm:px-6 max-w-6xl mx-auto flex flex-col items-center text-center">
      <div className="flex flex-col items-center z-10 w-full max-w-4xl mx-auto">
        
        <AnimatedSection delay={0.1}>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight leading-[1.1] mb-5 sm:mb-6 text-[#171717]">
            Hi, I'm {personalInfo.name.split(' ')[0]}<br />
            <span className="text-[#4F46E5]">AI/ML Engineer.</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-base sm:text-xl md:text-2xl text-[#52525B] max-w-3xl leading-relaxed mb-8 sm:mb-10 mx-auto px-2">
            {personalInfo.bio}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3} className="w-full sm:w-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <a href="#projects" className="btn-indigo flex items-center justify-center group w-full sm:w-auto">
              View My Work 
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a href="#contact" className="btn-outline flex items-center justify-center w-full sm:w-auto">
              Let's Talk
            </a>
          </div>
        </AnimatedSection>

        {/* Quick Social Links */}
        <AnimatedSection delay={0.35} className="mt-7 sm:mt-9 flex items-center justify-center gap-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            title="GitHub"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-[#E4E4E7] text-[#52525B] hover:border-[#4F46E5] hover:text-[#4F46E5] hover:shadow-sm transition-all"
          >
            <FiGithub className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-[#E4E4E7] text-[#52525B] hover:border-[#4F46E5] hover:text-[#4F46E5] hover:shadow-sm transition-all"
          >
            <FiLinkedin className="w-4 h-4" />
          </a>
          {personalInfo.huggingface && (
            <a
              href={personalInfo.huggingface}
              target="_blank"
              rel="noreferrer"
              title="Hugging Face"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-[#E4E4E7] text-[#52525B] hover:border-[#FFD21E] hover:text-[#FF9D00] hover:shadow-sm transition-all"
            >
              <SiHuggingface className="w-4 h-4" />
            </a>
          )}
          {personalInfo.docker && (
            <a
              href={personalInfo.docker}
              target="_blank"
              rel="noreferrer"
              title="Docker Hub"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-[#E4E4E7] text-[#52525B] hover:border-[#2496ED] hover:text-[#2496ED] hover:shadow-sm transition-all"
            >
              <SiDocker className="w-4 h-4" />
            </a>
          )}
        </AnimatedSection>

      </div>
    </section>
  );
};

export default Hero;
