import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

function Home() {
    const [accommodations, setAccommodations] = useState([]);

    useEffect(() => {
        fetch('/src/data/housing.json')
            .then((response) => response.json())
            .then((data) => setAccommodations(data))
            .catch((error) => console.error('Erreur lors du chargement des données :', error));
    }, []);

    return (
        <main className={styles.main}>
            <div className={`${styles.hero} d-flex justify-center align-center`}>
                <img src="/corse.png" alt="" className={styles.img} />
                <div className={styles.overlay}></div>
                <h1 className={styles.title}>Chez vous, partout et ailleurs</h1>
            </div>
            <div className={styles.cards}>
                {accommodations.map((accommodation) => (
                    <Link to={`/accommodation/${accommodation.id}`} key={accommodation.id}>
                        <article key={accommodation.id} className={styles.card}>
                            <img src={accommodation.cover} alt={accommodation.title} />
                            <span>{accommodation.title}</span>
                        </article>
                    </Link>
                ))}
            </div>
        </main>
    );
}

export default Home;
