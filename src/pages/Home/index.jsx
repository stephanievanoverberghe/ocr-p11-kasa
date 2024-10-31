import styles from './index.module.scss';
import Card from '../../components/Card';
import Banner from '../../components/Banner';

function Home() {
    return (
        <main className={styles.main}>
            <Banner />
            <Card />
        </main>
    );
}

export default Home;
