import { Download, GraduationCap, Award } from 'lucide-react';
import { aboutMe, skills, education, leadership, personalInfo } from '../data/portfolioData';
import { AnimatedSection } from './ui/AnimatedSection';

const About = () => {
  return (
    <section id="about" className="px-4 sm:px-6 max-w-6xl mx-auto w-full scroll-mt-24">
      <AnimatedSection>
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-[#171717]">
            About Me<span className="text-[#FF6B6B]">.</span>
          </h2>
        </div>
      </AnimatedSection>

      <div className="flex flex-col gap-12 sm:gap-20">
        
        {/* Narrative Section */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto gap-6 sm:gap-8">
          <AnimatedSection delay={0.1}>
            <p className="text-xl sm:text-2xl md:text-3xl leading-snug font-bold text-[#171717] font-display">
              {aboutMe.headline}
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2} className="flex flex-col gap-4 sm:gap-6 text-[#52525B] text-base sm:text-lg leading-relaxed text-left sm:text-center">
            {aboutMe.paragraphs.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </AnimatedSection>

          <AnimatedSection delay={0.3} className="pt-2 w-full sm:w-auto">
            <a 
              href={personalInfo.resume} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-indigo inline-flex items-center justify-center gap-2 py-3 px-6 sm:px-8 text-sm sm:text-base w-full sm:w-auto"
            >
              <Download className="w-5 h-5" /> Download Resume
            </a>
          </AnimatedSection>
        </div>

        {/* Impact Numbers / Stats Strip */}
        {aboutMe.stats && (
          <AnimatedSection delay={0.25}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {aboutMe.stats.map((stat) => (
                <div key={stat.label} className="light-card p-5 sm:p-6 text-center flex flex-col justify-center items-center">
                  <span className="text-3xl sm:text-4xl font-bold font-display text-[#4F46E5] mb-1">
                    {stat.value}
                  </span>
                  <span className="text-xs font-bold text-[#A1A1AA] uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        )}

        {/* Education & Academics */}
        {education && education.length > 0 && (
          <div className="flex flex-col gap-6 sm:gap-8">
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#171717] inline-flex items-center gap-2">
                <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-[#4F46E5]" /> Education & Academics<span className="text-[#4F46E5]">.</span>
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {education.map((item, idx) => (
                <AnimatedSection key={item.institution} delay={0.1 + (idx * 0.05)}>
                  <div className="light-card p-5 sm:p-7 h-full flex flex-col justify-between hover:border-[#4F46E5]/40 transition-all">
                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span className="text-xs font-bold text-[#4F46E5] uppercase tracking-wider">
                          {item.period}
                        </span>
                        <span className="text-xs px-2.5 py-1 rounded-md bg-[#4F46E5]/10 text-[#4F46E5] font-bold">
                          {item.score}
                        </span>
                      </div>
                      
                      <h4 className="text-lg font-bold font-display text-[#171717]">
                        {item.institution}
                      </h4>
                      
                      <p className="text-sm font-semibold text-[#171717]">
                        {item.degree}
                      </p>
                      
                      {item.details && (
                        <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed mt-1">
                          {item.details}
                        </p>
                      )}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        )}

        {/* Leadership & Responsibility */}
        {leadership && leadership.length > 0 && (
          <div className="flex flex-col gap-6 sm:gap-8">
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#171717] inline-flex items-center gap-2">
                <Award className="w-6 h-6 text-[#4F46E5]" /> Positions of Responsibility<span className="text-[#4F46E5]">.</span>
              </h3>
            </div>
            
            <div className="max-w-4xl mx-auto w-full">
              {leadership.map((item, idx) => (
                <AnimatedSection key={item.role} delay={0.1 + (idx * 0.05)}>
                  <div className="light-card p-5 sm:p-8 hover:border-[#4F46E5]/40 transition-all flex flex-col gap-3">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <span className="text-xs font-bold text-[#4F46E5] uppercase tracking-wider">
                        {item.period}
                      </span>
                      <span className="text-xs px-2.5 py-1 rounded-md bg-[#FAFAFA] border border-[#E4E4E7] text-[#52525B] font-semibold">
                        {item.org}
                      </span>
                    </div>
                    
                    <h4 className="text-xl sm:text-2xl font-bold font-display text-[#171717]">
                      {item.role}
                    </h4>
                    
                    <p className="text-sm sm:text-base text-[#52525B] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        )}

        {/* Skills Section (Masonry Layout) */}
        <div className="flex flex-col gap-6 sm:gap-8">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#171717]">
              Technical Skills & Tooling<span className="text-[#4F46E5]">.</span>
            </h3>
          </div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6">
            {Object.entries(skills).map(([category, items], index) => (
              <div key={category} className="break-inside-avoid mb-4 sm:mb-6">
                <AnimatedSection delay={0.1 + (index * 0.05)}>
                  <div className="light-card p-4 sm:p-6 flex flex-col">
                    <h3 className="text-xs sm:text-sm font-bold font-display text-[#4F46E5] mb-3 sm:mb-4 uppercase tracking-widest">
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {items.map(skill => (
                        <span 
                          key={skill} 
                          className="px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs font-semibold rounded-full bg-[#FAFAFA] border border-[#E4E4E7] text-[#52525B] hover:border-[#4F46E5] hover:text-[#4F46E5] transition-all cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
