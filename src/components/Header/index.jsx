import styles from './index.module.scss';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className={`${styles.header} d-flex align-center justify-between`}>
            <Link to="/">
                <img src="logo.png" alt="" />
            </Link>

            <ul className={`${styles.headerItems} d-flex`}>
                <Link to="/" className={styles.headerItem}>
                    Accueil
                </Link>
                <Link to="/about">A propos</Link>
            </ul>
        </header>
    );
}

export default Header;
