import styles from './index.module.scss';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className={styles.footer}>
            <Link to="/">
                <img src="/logo-white.png" alt="" />
            </Link>
            <div className={styles.footerParagraph}>
                <p>© 2020 Kasa. All</p>
                <p>rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
