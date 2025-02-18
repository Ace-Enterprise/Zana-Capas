import styles from './styles.module.scss';
import Image from 'next/image';
import logo from '../../assets/Zana_logo.png';

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Image src={logo} alt="Zana Capas" width={200}  />
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="#capas">Produtos</a>
        </li>
        <li className={styles.link}>
          <a href="#advantages">Características</a>
        </li>
        <li className={styles.link}>
          <a href="#linhas">Linhas</a>
        </li>
        <li className={styles.link}>
          <a href="https://wa.me/5511981219399">Contato</a>
        </li>
      </ul>
    </nav>
  );
};
