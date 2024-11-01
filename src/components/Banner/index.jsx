import { useLocation } from 'react-router-dom';
import styles from './index.module.scss';

function Banner({ image, title }) {
    const location = useLocation();
    const defaultImage = location.pathname === '/' ? '/corse.png' : '/alpes.png';
    const defaultTitle = location.pathname === '/' ? 'Chez vous, partout et ailleurs' : null;

    return (
        <div className={`${styles.hero} d-flex justify-center align-center`}>
            <img src={image || defaultImage} alt="" className={styles.img} />
            <div className={styles.overlay}></div>
            {(title || defaultTitle) && <h1 className={styles.title}>{title || defaultTitle}</h1>}
        </div>
    );
}

export default Banner;
