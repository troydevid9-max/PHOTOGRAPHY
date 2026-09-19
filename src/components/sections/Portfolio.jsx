import { Link } from 'react-router-dom';
import { useStaggerAnimation } from '../../hooks/useScrollAnimation';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { portfolioProjects } from '../../data/galleryData';
import Button from '../ui/Button';
import './Portfolio.css';

export default function Portfolio() {
  const headingRef = useScrollAnimation();
  const quoteRef = useScrollAnimation();
  const gridRef = useStaggerAnimation('.portfolio__card');

  return (
    <section className="portfolio section" id="portfolio">
      <div className="container">
        {/* Heading */}
        <h2 ref={headingRef} className="portfolio__heading heading-display reveal">
          PORTFOLIO
        </h2>

        {/* Inspirational Quotes Row */}
        <div ref={quoteRef} className="portfolio__quotes reveal">
          <p className="portfolio__quote-text">
            The best thing you can do to get ready for a shoot is not to get ready.
            Allow yourself to just <em>be yourself</em> in front of the camera.
          </p>
          <p className="portfolio__quote-text">
            If you allow me to consider you, I will show you your beauty
            and <em>uniqueness</em>
          </p>
        </div>

        {/* Subheading */}
        <h3 className="portfolio__subheading heading-accent">
          It&apos;s all about inspiration
        </h3>

        {/* Creative Card Grid */}
        <div ref={gridRef} className="portfolio__grid">
          {portfolioProjects.map((project, index) => (
            <div
              key={project.id}
              className={`portfolio__card portfolio__card--${index % 3 === 0 ? 'dark' : index % 3 === 1 ? 'light' : 'dark'} reveal delay-${(index % 3) * 200}`}
            >
              <div className="portfolio__card-image">
                <img
                  src={project.src}
                  alt={project.title}
                  loading="lazy"
                />
              </div>
              <div className="portfolio__card-info">
                <h4 className="portfolio__card-title">{project.title}</h4>
                <span className="portfolio__card-date">{project.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="portfolio__cta">
          <Link to="/gallery">
            <Button variant="primary" icon="→" size="lg">
              View Full Gallery
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
