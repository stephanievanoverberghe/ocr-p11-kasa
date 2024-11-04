import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import accommodations from '../../data/housing.json';
import styles from './index.module.scss';

function Accommodation() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [accommodation, setAccommodation] = useState(null);

  useEffect(() => {
    const foundAccommodation = accommodations.find((acc) => acc.id === id);
    if (foundAccommodation) {
      setAccommodation(foundAccommodation);
    } else {
      navigate('*', { replace: true });
    }
  }, [id, navigate]);

  if (!accommodation) {
    return null;
  }

  return (
    <main className={styles.main}>
      <h1>{accommodation.title}</h1>
      <img src={accommodation.cover} alt={accommodation.title} />
      <p>{accommodation.description}</p>
    </main>
  );
}

export default Accommodation;
