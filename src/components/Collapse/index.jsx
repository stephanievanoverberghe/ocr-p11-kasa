import { useState } from 'react';
import styles from './index.module.scss';

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.collapse}>
        <button className={styles.header} onClick={toggleCollapse}>
          <span>{title}</span>
          <span>
            <i
              className={`fa-solid fa-chevron-down ${styles.icon} ${
                isOpen ? styles.rotate : ''
              }`}
            ></i>
          </span>
        </button>
        <div className={`${styles.content} ${isOpen ? styles.open : ''}`}>
          {isOpen && <div className={styles.children}>{children}</div>}
        </div>
      </div>
    </div>
  );
}

export default Collapse;
