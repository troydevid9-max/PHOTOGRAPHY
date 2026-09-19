import { useEffect, useRef } from 'react';

/**
 * Custom hook for scroll-triggered reveal animations.
 * Adds 'revealed' class to elements when they enter the viewport.
 * 
 * @param {Object} options - IntersectionObserver options
 * @param {number} options.threshold - Visibility threshold (0-1)
 * @param {string} options.rootMargin - Root margin for observer
 * @returns {React.RefObject} - Ref to attach to the target element
 */
export function useScrollAnimation(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: options.threshold || 0.15,
        rootMargin: options.rootMargin || '0px 0px -50px 0px',
      }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [options.threshold, options.rootMargin]);

  return ref;
}

/**
 * Hook to observe multiple children within a container for staggered reveals.
 * 
 * @param {string} childSelector - CSS selector for children to observe
 * @param {Object} options - IntersectionObserver options
 * @returns {React.RefObject} - Ref to attach to the parent container
 */
export function useStaggerAnimation(childSelector = '.reveal', options = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const children = container.querySelectorAll(childSelector);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -30px 0px',
      }
    );

    children.forEach((child) => observer.observe(child));

    return () => {
      children.forEach((child) => observer.unobserve(child));
    };
  }, [childSelector, options.threshold, options.rootMargin]);

  return containerRef;
}

export default useScrollAnimation;
