import logo from './../../../public/logo.png';
import styles from './index.module.scss';

function Header() {
    return (
        <header className={`${styles.header} d-flex align-center justify-between p-20`}>
            <img src={logo} alt="" />

            <ul className={`${styles.headerItems} d-flex`}>
                <li className={styles.headerItem}>Accueil</li>
                <li>A propos</li>
            </ul>
        </header>
    );
}

export default Header;
