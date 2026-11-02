import { useState } from 'react';
import { projects } from '../data/portfolioData';
import { AnimatedSection } from './ui/AnimatedSection';
import { ProjectModal } from './ProjectModal';
import { ArrowRight } from 'lucide-react';

const categories = ['All', 'Full-Stack & AI', 'Machine Learning', 'Computer Vision', 'Data Analytics'];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(
        (project) =>
          project.category === activeCategory ||
          project.tags?.some((tag) => tag.toLowerCase() === activeCategory.toLowerCase())
      );

  return (
    <section id="projects" className="px-4 sm:px-6 max-w-6xl mx-auto w-full scroll-mt-24">
      <AnimatedSection>
        <div className="flex flex-col items-center text-center gap-3 sm:gap-4 mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-[#171717]">
            Selected Work<span className="text-[#FF6B6B]">.</span>
          </h2>
          <p className="text-[#52525B] text-base sm:text-lg max-w-2xl px-2">
            A showcase of my production-grade SaaS platforms, machine learning models, and computer vision systems. Click on any project to explore the backstory, technical architecture, and key outcomes.
          </p>
        </div>
      </AnimatedSection>

      {/* Category Filter Tabs */}
      <AnimatedSection delay={0.1}>
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                activeCategory === category
                  ? 'bg-[#4F46E5] text-white shadow-sm'
                  : 'bg-white text-[#52525B] border border-[#E4E4E7] hover:border-[#4F46E5] hover:text-[#4F46E5]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {filteredProjects.map((project, index) => (
          <AnimatedSection 
            key={project.id} 
            delay={index * 0.06}
            className={project.featured && activeCategory === 'All' ? 'md:col-span-2' : ''}
          >
            <div 
              className="light-card group p-5 sm:p-8 md:p-10 h-full flex flex-col justify-between cursor-pointer hover:border-[#4F46E5] transition-all duration-300"
              onClick={() => setSelectedProject(project)}
            >
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
                  <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#4F46E5]">
                    {project.subtitle}
                  </span>
                  <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-xs font-bold rounded-md bg-[#FAFAFA] border border-[#E4E4E7] text-[#52525B]">
                    {project.status}
                  </span>
                </div>
                
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-display text-[#171717] group-hover:text-[#4F46E5] transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm sm:text-base md:text-lg text-[#52525B] leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>
              
              <div className="flex items-end justify-between mt-6 sm:mt-10 gap-3">
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.technologies.slice(0, 4).map(tech => (
                    <span key={tech} className="px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs font-semibold rounded-full bg-[#FAFAFA] border border-[#E4E4E7] text-[#52525B]">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 sm:px-2.5 py-1 text-xs font-semibold rounded-full bg-[#FAFAFA] border border-[#E4E4E7] text-[#52525B]">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#4F46E5]/10 text-[#4F46E5] flex items-center justify-center shrink-0 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:-translate-x-3 sm:group-hover:translate-x-0 transition-all duration-300">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Projects;
