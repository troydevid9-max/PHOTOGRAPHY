import './SectionHeading.css';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function SectionHeading({ title, subtitle, align = 'left', light = false }) {
  const ref = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`section-heading section-heading--${align} ${light ? 'section-heading--light' : ''} reveal`}
    >
      <h2 className="section-heading__title heading-display">{title}</h2>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </div>
  );
}
