import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import accommodations from '../../data/housing.json';
import styles from './index.module.scss';
import Slideshow from '../../components/Slideshow';
import Collapse from '../../components/Collapse';

function Accommodation() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [accommodation, setAccommodation] = useState(null);

  useEffect(() => {
    const foundAccommodation = accommodations.find((acc) => acc.id === id);
    if (foundAccommodation) {
      setAccommodation(foundAccommodation);
    } else {
      navigate('/404', { replace: true });
    }
  }, [id, navigate]);

  if (!accommodation) {
    return null;
  }

  return (
    <main className={styles.main}>
      <Slideshow pictures={accommodation.pictures} />
      <div className={styles.container}>
        <div className={styles.locationAndTags}>
          <h1 className={styles.title}>{accommodation.title}</h1>
          <span className={styles.location}>{accommodation.location}</span>
          <div className={`${styles.tags} d-flex flex-row align-center`}>
            {accommodation.tags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.ratingAndHost}>
          <div className={`${styles.rating} d-flex`}>
            {[...Array(5)].map((_, index) => (
              <i
                key={index}
                className={`fa-solid fa-star ${
                  index < accommodation.rating
                    ? styles.starFilled
                    : styles.starEmpty
                }`}
              ></i>
            ))}
          </div>
          <div className={`${styles.host} d-flex align-center`}>
            <span className={styles.hostName}>{accommodation.host.name}</span>
            <img
              src={accommodation.host.picture}
              alt={accommodation.host.name}
              className={styles.hostImage}
            />
          </div>
        </div>
      </div>
      <div className={styles.descriptionAndEquipments}>
        <Collapse title="Description">
          <p>{accommodation.description}</p>
        </Collapse>
        <Collapse title="Équipements">
          <ul>
            {accommodation.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </main>
  );
}

export default Accommodation;
