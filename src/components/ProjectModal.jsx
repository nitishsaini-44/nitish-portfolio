import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';

export const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => document.body.classList.remove('modal-open');
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6">
          
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#171717]/40 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[92vh] sm:max-h-[90vh] bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2 sm:p-2.5 bg-white/90 backdrop-blur rounded-full text-[#171717] hover:bg-[#FAFAFA] hover:scale-105 transition-all shadow-sm border border-[#E4E4E7]"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto">
              
              <div className="p-5 sm:p-8 md:p-12 flex flex-col gap-6 sm:gap-8">
                
                <div className="flex flex-col gap-2.5 sm:gap-3 pr-10">
                  <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
                    <span className="text-xs sm:text-sm font-bold text-[#4F46E5] uppercase tracking-wider">
                      {project.subtitle}
                    </span>
                    <span className="px-2.5 py-0.5 sm:py-1 text-xs font-bold rounded-md bg-[#4F46E5]/10 text-[#4F46E5]">
                      {project.status}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display text-[#171717]">
                    {project.title}
                  </h2>
                </div>

                {/* Backstory */}
                <div className="flex flex-col gap-2 sm:gap-3">
                  <h3 className="text-lg sm:text-xl font-bold font-display text-[#171717]">The Backstory</h3>
                  <p className="text-sm sm:text-base md:text-lg text-[#52525B] leading-relaxed">
                    {project.backstory}
                  </p>
                </div>

                {/* Key Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className="flex flex-col gap-3">
                    <h3 className="text-lg sm:text-xl font-bold font-display text-[#171717]">Key Implementation Highlights</h3>
                    <ul className="flex flex-col gap-2.5 sm:gap-3">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-[#52525B] leading-relaxed">
                          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#4F46E5] mt-2 shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech & Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 mt-2 sm:mt-4">
                  <div className="flex flex-col gap-3">
                    <h3 className="text-base sm:text-lg font-bold font-display text-[#171717]">Technologies</h3>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.technologies.map(tech => (
                        <span key={tech} className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold rounded-full bg-[#FAFAFA] border border-[#E4E4E7] text-[#52525B]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.metrics && (
                    <div className="flex flex-col gap-3">
                      <h3 className="text-base sm:text-lg font-bold font-display text-[#171717]">Outcomes</h3>
                      <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
                        {project.metrics.map(metric => (
                          <div 
                            key={metric.label} 
                            className="flex flex-col justify-center p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl bg-[#FAFAFA] border border-[#E4E4E7] overflow-hidden min-w-0"
                          >
                            <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#4F46E5] font-display mb-0.5 sm:mb-1 leading-snug break-words">
                              {metric.value}
                            </span>
                            <span className="text-[10px] sm:text-xs font-bold text-[#A1A1AA] uppercase tracking-wider truncate">
                              {metric.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-6 sm:pt-8 mt-2 sm:mt-4 border-t border-[#E4E4E7]">
                  {project.links.github && (
                    <a 
                      href={project.links.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="btn-outline flex items-center justify-center gap-2 w-full sm:w-auto text-sm sm:text-base py-3 px-6"
                    >
                      <FiGithub className="w-5 h-5" /> View Source
                    </a>
                  )}
                  {project.links.live && project.links.live !== '#' && (
                    <a 
                      href={project.links.live} 
                      target="_blank" 
                      rel="noreferrer"
                      className="btn-indigo flex items-center justify-center gap-2 w-full sm:w-auto text-sm sm:text-base py-3 px-6"
                    >
                      Live Demo <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
