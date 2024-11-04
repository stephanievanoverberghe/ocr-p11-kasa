import { Link } from 'react-router-dom';
import styles from './index.module.scss';

function Error() {
  return (
    <main
      className={`${styles.main} d-flex flex-column justify-between align-center`}
    >
      <h1 className={styles.title}>404</h1>
      <p className={styles.paragraphe}>
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className={styles.link}>
        Retourner à la page d'accueil
      </Link>
    </main>
  );
}

export default Error;
