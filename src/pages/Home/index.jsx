import styles from './index.module.scss';

function Home() {
    return (
        <main className={styles.main}>
            <div className={`${styles.hero} d-flex justify-center align-center`}>
                <img src="/corse.png" alt="" className={styles.img} />
                <div className={styles.overlay}></div>
                <h1 className={styles.title}>Chez vous, partout et ailleurs</h1>
            </div>
            <div className={styles.cards}>
                <article className={styles.card}>
                    <img src="/corse.png" alt="" />
                    <span>Titre de la location</span>
                </article>
                <article className={styles.card}>
                    <img src="/corse.png" alt="" />
                    <span>Titre de la location</span>
                </article>
                <article className={styles.card}>
                    <img src="/corse.png" alt="" />
                    <span>Titre de la location</span>
                </article>
                <article className={styles.card}>
                    <img src="/corse.png" alt="" />
                    <span>Titre de la location</span>
                </article>
                <article className={styles.card}>
                    <img src="/corse.png" alt="" />
                    <span>Titre de la location</span>
                </article>
                <article className={styles.card}>
                    <img src="/corse.png" alt="" />
                    <span>Titre de la location</span>
                </article>
            </div>
        </main>
    );
}

export default Home;
