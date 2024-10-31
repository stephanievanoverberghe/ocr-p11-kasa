import Footer from './Footer';
import Header from './Header';
import Home from '../pages/Home';
import styles from './App.module.scss';

function App() {
    return (
        <div className={`d-flex flex-column ${styles.appContainer}`}>
            <Header />
            <Home />
            <Footer />
        </div>
    );
}

export default App;
