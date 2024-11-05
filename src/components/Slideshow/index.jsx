import { useState } from 'react';
import styles from './index.module.scss';

function SliderShow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.sliderShow}>
      {pictures.length > 1 && (
        <button onClick={prevSlide} className={styles.prev}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
      )}

      <img
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className={styles.image}
      />

      {pictures.length > 1 && (
        <button onClick={nextSlide} className={styles.next}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      )}

      {pictures.length > 1 && (
        <div className={styles.counter}>
          {currentIndex + 1}/{pictures.length}
        </div>
      )}
    </div>
  );
}

export default SliderShow;
