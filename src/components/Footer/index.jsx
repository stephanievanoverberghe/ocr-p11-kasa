import logo from './../../../public/logo-white.png';
import styles from './index.module.scss';

function Footer() {
    return (
        <footer className={styles.footer}>
            <img src={logo} alt="" />
            <div className={styles.footerParagraph}>
                <p>© 2020 Kasa. All</p>
                <p>rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
