import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Me' },
  { path: '/gallery', label: 'Portfolio' },
  { path: '/services', label: 'Services' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileOpen]);

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`} id="main-nav">
        <div className="navbar__inner">
          {/* Logo */}
          <Link to="/" className="navbar__logo" aria-label="IbetoMedia Home">
            <span className="navbar__logo-icon">IM</span>
            <span className="navbar__logo-text">IbetoMedia</span>
          </Link>

          {/* Desktop Nav */}
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`navbar__link ${
                    location.pathname === link.path ? 'navbar__link--active' : ''
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Icons (Desktop) */}
          <div className="navbar__social">
            <a href="https://instagram.com/ibetomedia" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="https://facebook.com/ibetomedia" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`navbar__hamburger ${isMobileOpen ? 'navbar__hamburger--active' : ''}`}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="mobile-menu__content"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              <ul className="mobile-menu__links">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.path}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                  >
                    <Link
                      to={link.path}
                      className={`mobile-menu__link ${
                        location.pathname === link.path ? 'mobile-menu__link--active' : ''
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="mobile-menu__footer">
                <a href="tel:+2348030465091" className="mobile-menu__phone">
                  +234 803 046 5091
                </a>
                <div className="mobile-menu__social">
                  <a href="https://instagram.com/ibetomedia" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  </a>
                  <a href="https://facebook.com/ibetomedia" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
