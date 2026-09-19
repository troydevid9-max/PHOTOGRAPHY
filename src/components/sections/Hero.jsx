import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__background">
        <img
          src="/images/hero/hero-1.png"
          alt="IbetoMedia wedding photography"
          className="hero__image"
        />
        <div className="hero__overlay"></div>
      </div>

      {/* Social Icons (vertical bar on left) */}
      <div className="hero__social">
        <a href="https://facebook.com/ibetomedia" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
          </svg>
        </a>
        <a href="https://instagram.com/ibetomedia" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
        </a>
        <a href="https://twitter.com/ibetomedia" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
          </svg>
        </a>
      </div>

      {/* Photographer Label */}
      <div className="hero__label">
        <span className="hero__label-role">wedding & event</span>
        <span className="hero__label-role">photographer</span>
        <span className="hero__label-name">IbetoMedia</span>
      </div>

      {/* Center Text Overlay */}
      <motion.div
        className="hero__center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
      >
        <h1 className="hero__title heading-display">
          <span>Capturing</span>
          <span>Your Essence</span>
        </h1>
        <p className="hero__subtitle">timeless photography</p>
      </motion.div>

      {/* Location Badge */}
      <div className="hero__location">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
        <span>Festac, Lagos</span>
      </div>

      {/* CTA Buttons */}
      <div className="hero__cta-group">
        <Link to="/gallery">
          <Button variant="secondary" icon="→">
            portfolio
          </Button>
        </Link>
        <Link to="/contact">
          <Button variant="secondary" icon="→">
            get in touch
          </Button>
        </Link>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="hero__scroll-dots">
          <span className="hero__scroll-dot hero__scroll-dot--active"></span>
          <span className="hero__scroll-dot"></span>
          <span className="hero__scroll-dot"></span>
        </div>
        <div className="hero__scroll-line">
          <span></span>
        </div>
      </motion.div>
    </section>
  );
}
