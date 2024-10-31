import styles from './index.module.scss';

function Banner() {
    return (
        <div className={`${styles.hero} d-flex justify-center align-center`}>
            <img src="/corse.png" alt="" className={styles.img} />
            <div className={styles.overlay}></div>
            <h1 className={styles.title}>Chez vous, partout et ailleurs</h1>
        </div>
    );
}

export default Banner;
