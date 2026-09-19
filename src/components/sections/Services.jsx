import { Link } from 'react-router-dom';
import { useScrollAnimation, useStaggerAnimation } from '../../hooks/useScrollAnimation';
import { services } from '../../data/servicesData';
import Button from '../ui/Button';
import './Services.css';

export default function Services({ showAll = false }) {
  const headingRef = useScrollAnimation();
  const gridRef = useStaggerAnimation('.service-card');
  const displayServices = showAll ? services : services.slice(0, 4);

  return (
    <section className="services section" id="services">
      <div className="container">
        {/* Heading */}
        <div ref={headingRef} className="services__header reveal">
          <h2 className="services__heading heading-display">SERVICES</h2>
          <p className="services__subtitle heading-accent">
            What we offer to bring your vision to life
          </p>
        </div>

        {/* Services Grid */}
        <div ref={gridRef} className="services__grid">
          {displayServices.map((service, index) => (
            <div
              key={service.id}
              className={`service-card reveal delay-${index * 200}`}
            >
              <div className="service-card__image img-zoom-container">
                <img src={service.image} alt={service.title} loading="lazy" />
                <div className="service-card__image-overlay">
                  {service.id === 'weddings' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/><path d="M12 10c-3.3 0-6 2.7-6 6v4h12v-4c0-3.3-2.7-6-6-6Z"/><path d="M16 10c2.8 0 5 2.2 5 5v5"/><path d="M8 10C5.2 10 3 12.2 3 15v5"/></svg>
                  )}
                  {service.id === 'events' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
                  )}
                  {service.id === 'portraits' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/></svg>
                  )}
                  {service.id === 'studio' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
                  )}
                </div>
              </div>
              <div className="service-card__content">
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__subtitle heading-accent">
                  {service.subtitle}
                </p>
                <p className="service-card__desc">{service.description}</p>
                {showAll && (
                  <ul className="service-card__features">
                    {service.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                )}
                <Link to="/contact">
                  <Button variant="ghost" icon="→" size="sm">
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA (only on homepage) */}
        {!showAll && (
          <div className="services__cta">
            <Link to="/services">
              <Button variant="primary" icon="→">
                View All Services
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
