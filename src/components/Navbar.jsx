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
    <>
      {/* Standalone brand name — top left */}
      <motion.div
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -100, opacity: 0 },
        }}
        animate={hidden ? 'hidden' : 'visible'}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className="fixed top-4 sm:top-8 left-4 sm:left-20 z-40 pointer-events-auto"
      >
        <a href="#home" onClick={() => setActive('Home')} className="px-1.5 sm:px-2.5 py-0.5 rounded-full glass-nav shadow-md block">
          <span className="font-display font-bold text-lg sm:text-4xl text-[#171717] tracking-tight select-none">
            {personalInfo.name.split(' ')[0]}<span className="text-[#FF6B6B]">.</span>
          </span>
        </a>
      </motion.div>

      {/* Nav links pill — top right */}
      <motion.nav
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -100, opacity: 0 },
        }}
        animate={hidden ? 'hidden' : 'visible'}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className="fixed top-4 sm:top-8 right-3 sm:right-10 z-40 pointer-events-auto"
      >
        <ul className="flex items-center gap-0 sm:gap-1 px-1.5 sm:px-3 py-1.5 sm:py-2 rounded-full glass-nav shadow-md">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setActive(link.label)}
                className={`relative px-2 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-sm font-semibold transition-colors rounded-full block ${
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
      </motion.nav>
    </>
  );
};

export default Navbar;
