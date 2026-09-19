import './GalleryCard.css';

export default function GalleryCard({ image, onClick, variant = 'default' }) {
  return (
    <div
      className={`gallery-card gallery-card--${variant}`}
      onClick={() => onClick?.(image)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick?.(image)}
    >
      <div className="gallery-card__image-wrapper">
        <img
          src={image.src}
          alt={image.alt}
          className="gallery-card__image"
          loading="lazy"
        />
        <div className="gallery-card__overlay">
          <span className="gallery-card__category text-uppercase">{image.category}</span>
        </div>
      </div>
      <div className="gallery-card__info">
        <h3 className="gallery-card__title">{image.title}</h3>
        {image.date && <span className="gallery-card__date">{image.date}</span>}
      </div>
    </div>
  );
}
