// components/Carousel.tsx
"use client";

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './DsCarousel.module.scss';

interface CarouselProps {
  items: React.ReactNode[];
  autoScrollInterval?: number; // in milliseconds
  showPagination?: boolean;
  showArrows?: boolean;
  className?: string;
}

export default function DsCarousel({
  items,
  autoScrollInterval = 5000,
  showPagination = true,
  showArrows = true,
  className = ''
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Handle next slide
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  }, [items.length]);

  // Handle previous slide
  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  }, [items.length]);

  // Go to specific slide
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-scroll logic
  useEffect(() => {
    if (!isPaused && autoScrollInterval > 0) {
      const interval = setInterval(nextSlide, autoScrollInterval);
      return () => clearInterval(interval);
    }
  }, [isPaused, autoScrollInterval, nextSlide]);

  // Pause auto-scroll on hover
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div 
      className={`${styles.carouselContainer} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.carouselWrapper}>
        {/* Slides */}
        <div 
          className={styles.carouselTrack}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div 
              key={index}
              className={styles.carouselSlide}
              aria-hidden={index !== currentIndex}
              aria-label={`Slide ${index + 1} of ${items.length}`}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {showArrows && items.length > 1 && (
          <>
            <button
              className={`${styles.carouselArrow} ${styles.arrowPrev}`}
              onClick={prevSlide}
              aria-label="Previous slide"
              type="button"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              className={`${styles.carouselArrow} ${styles.arrowNext}`}
              onClick={nextSlide}
              aria-label="Next slide"
              type="button"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        {/* Pagination Dots */}
        {showPagination && items.length > 1 && (
          <div className={styles.pagination}>
            {items.map((_, index) => (
              <button
                key={index}
                className={`${styles.paginationDot} ${
                  index === currentIndex ? styles.active : ''
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentIndex}
                type="button"
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}