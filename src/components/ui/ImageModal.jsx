import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ImageModal.css';

export default function ImageModal({ image, onClose, onPrev, onNext }) {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev?.();
      if (e.key === 'ArrowRight') onNext?.();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          className="image-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <motion.div
            className="image-modal__content"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="image-modal__close"
              onClick={onClose}
              aria-label="Close"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <img
              src={image.src}
              alt={image.alt}
              className="image-modal__image"
            />

            <div className="image-modal__info">
              <h3 className="image-modal__title">{image.title}</h3>
              <div className="image-modal__meta">
                <span className="image-modal__category text-uppercase">
                  {image.category}
                </span>
                {image.date && (
                  <span className="image-modal__date">{image.date}</span>
                )}
              </div>
            </div>

            {onPrev && (
              <button
                className="image-modal__nav image-modal__nav--prev"
                onClick={onPrev}
                aria-label="Previous image"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
            )}

            {onNext && (
              <button
                className="image-modal__nav image-modal__nav--next"
                onClick={onNext}
                aria-label="Next image"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
