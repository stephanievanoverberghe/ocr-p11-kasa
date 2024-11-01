import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

function Card() {
    const [accommodations, setAccommodations] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/src/data/housing.json');
                if (!response.ok) {
                    throw new Error(`Erreur HTTP : ${response.status}`);
                }
                const data = await response.json();
                setAccommodations(data);
            } catch (error) {
                console.error('Erreur lors du chargement des données :', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className={styles.cards}>
            {accommodations.map((accommodation) => (
                <Link to={`/accommodation/${accommodation.id}`} key={accommodation.id}>
                    <article className={styles.card}>
                        <img src={accommodation.cover} alt={accommodation.title} />
                        <span>{accommodation.title}</span>
                    </article>
                </Link>
            ))}
        </div>
    );
}

export default Card;
