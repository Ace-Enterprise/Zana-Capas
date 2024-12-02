import styles from './styles.module.scss';

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="#presentation">Produtos</a>
        </li>
        <li className={styles.link}>
          <a href="#advantages">Características</a>
        </li>
        <li className={styles.link}>
          <a href="#vehicles">Contato</a>
        </li>
      </ul>
    </nav>
  );
};
