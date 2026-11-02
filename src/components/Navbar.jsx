import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { navLinks, personalInfo } from '../data/portfolioData';

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState('Home');

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > 100 && latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="fixed top-4 sm:top-8 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none"
    >
      <div className="w-full max-w-6xl mx-auto flex items-center justify-center sm:justify-between px-3 sm:px-8 py-2 sm:py-3.5 rounded-full glass-nav shadow-md pointer-events-auto">
        <div className="hidden sm:flex items-center mr-4">
          <span className="font-display font-bold text-lg sm:text-xl text-[#171717] tracking-tight">
            {personalInfo.name.split(' ')[0]}<span className="text-[#FF6B6B]">.</span>
          </span>
        </div>
        
        <ul className="flex items-center gap-0.5 sm:gap-2">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setActive(link.label)}
                className={`relative px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold transition-colors rounded-full ${
                  active === link.label ? 'text-[#4F46E5]' : 'text-[#52525B] hover:text-[#171717]'
                }`}
              >
                {active === link.label && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-[#4F46E5]/10 rounded-full"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
