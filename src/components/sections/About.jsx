import { useScrollAnimation, useStaggerAnimation } from '../../hooks/useScrollAnimation';
import './About.css';

export default function About() {
  const headingRef = useScrollAnimation();
  const quoteRef = useScrollAnimation();
  const closingRef = useScrollAnimation();
  const gridRef = useStaggerAnimation('.about__grid-item');

  return (
    <section className="about section" id="about">
      {/* Decorative SVG curves */}
      <svg className="about__decoration about__decoration--top" viewBox="0 0 200 200" fill="none">
        <path d="M 20 180 Q 60 20, 180 60" stroke="rgba(0,0,0,0.06)" strokeWidth="1" fill="none"/>
      </svg>
      <svg className="about__decoration about__decoration--bottom" viewBox="0 0 200 200" fill="none">
        <path d="M 180 20 Q 140 180, 20 140" stroke="rgba(0,0,0,0.06)" strokeWidth="1" fill="none"/>
      </svg>

      <div className="container">
        {/* Heading */}
        <h2 ref={headingRef} className="about__heading heading-display reveal">
          ABOUT ME
        </h2>

        {/* Main Content Grid */}
        <div className="about__content">
          {/* Left - Bio Text */}
          <div className="about__bio">
            <p className="about__intro">
              Hello, this is <em>IbetoMedia</em>
            </p>
            <p className="about__text">
              As long as we can remember, photography has always been our deepest passion. 
              It&apos;s more than a profession — it&apos;s our way of seeing the world.
            </p>
            <p className="about__text">
              We specialize in different types of photography and understand that{' '}
              <em className="about__highlight">wedding and event photography is our true calling</em>{' '}
              because it captures the most honest, raw, and beautiful human emotions.
            </p>
          </div>

          {/* Right - Asymmetric Photo Grid */}
          <div ref={gridRef} className="about__grid">
            <div className="about__grid-item about__grid-item--tall reveal">
              <img src="/images/about/about-1.png" alt="Portrait photography by IbetoMedia" loading="lazy" />
            </div>
            <div className="about__grid-item about__grid-item--square reveal delay-200">
              <img src="/images/about/about-2.png" alt="Artistic detail photography" loading="lazy" />
            </div>
            <div className="about__grid-item about__grid-item--wide reveal delay-400">
              <img src="/images/about/about-3.png" alt="Elegant portrait session" loading="lazy" />
            </div>
          </div>
        </div>

        {/* Large Quote */}
        <blockquote ref={quoteRef} className="about__quote reveal">
          <p>
            My goal is to capture you,
            <br />
            <strong>your character, your story,</strong>
            <br />
            <strong>your special essence</strong>
          </p>
        </blockquote>

        {/* Bottom Content */}
        <div className="about__bottom">
          <div className="about__bottom-images">
            <div className="about__bottom-img img-zoom-container">
              <img src="/images/about/about-4.png" alt="Close-up portrait" loading="lazy" />
            </div>
            <div className="about__bottom-img img-zoom-container">
              <img src="/images/about/about-2.png" alt="Detail photography" loading="lazy" />
            </div>
          </div>

          <div ref={closingRef} className="about__closing reveal">
            <p>
              My photographs are candid but elegant and sophisticated.
              I want to take really stylish, natural and{' '}
              <em className="about__highlight">timeless photos</em> of you.
            </p>
            <p className="about__signature">
              Looking forward to working with you
            </p>
            <p className="about__sign">
              <em>Yours,</em>
              <br />
              <em>IbetoMedia</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
