import { Link } from 'react-router-dom';
import { clientInfo } from '../../data/servicesData';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        {/* Top Section */}
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <span className="footer__logo-icon">IM</span>
              <span className="footer__logo-text">IbetoMedia</span>
            </Link>
            <p className="footer__tagline">{clientInfo.tagline}</p>
          </div>

          <div className="footer__columns">
            <div className="footer__column">
              <h4 className="footer__column-title text-uppercase">Navigate</h4>
              <ul className="footer__column-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Me</Link></li>
                <li><Link to="/gallery">Portfolio</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer__column">
              <h4 className="footer__column-title text-uppercase">Services</h4>
              <ul className="footer__column-list">
                <li><Link to="/services">Wedding Photography</Link></li>
                <li><Link to="/services">Event Coverage</Link></li>
                <li><Link to="/services">Portrait Sessions</Link></li>
                <li><Link to="/services">Studio Sessions</Link></li>
              </ul>
            </div>

            <div className="footer__column">
              <h4 className="footer__column-title text-uppercase">Contact</h4>
              <ul className="footer__column-list">
                <li>
                  <a href={`tel:${clientInfo.phone.replace(/\s/g, '')}`}>
                    {clientInfo.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${clientInfo.email}`}>{clientInfo.email}</a>
                </li>
                <li>{clientInfo.address}</li>
              </ul>
              <div className="footer__badge">
                <span className="footer__badge-dot"></span>
                Available {clientInfo.hours}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer__divider"></div>

        {/* Bottom Section */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} IbetoMedia. All rights reserved.
          </p>

          <div className="footer__social">
            <a href={clientInfo.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href={clientInfo.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href={clientInfo.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
              </svg>
            </a>
          </div>

          <div className="footer__rating">
            <span className="footer__stars">★★★★★</span>
            <span>{clientInfo.rating} ({clientInfo.reviews} reviews)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
