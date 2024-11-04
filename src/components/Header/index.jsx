import styles from './index.module.scss';
import { NavLink, Link } from 'react-router-dom';

function Header() {
  return (
    <header className={`${styles.header} d-flex align-center justify-between`}>
      <Link to="/">
        <img src="logo.png" alt="" />
      </Link>

      <ul className={`${styles.headerItems} d-flex`}>
        <NavLink
          end
          to="/"
          className={({ isActive }) =>
            isActive
              ? `${styles.linkActive} ${styles.headerItem}`
              : `${styles.headerItem}`
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? `${styles.linkActive}` : '')}
        >
          A propos
        </NavLink>
      </ul>
    </header>
  );
}

export default Header;
