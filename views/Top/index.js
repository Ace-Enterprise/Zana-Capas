import styles from "./styles.module.scss";
import car from "../../assets/car.png";
import check from "../../assets/check.svg";

import Image from "next/image";

export const Top = () => {
  return (
    <section className={styles.top}>
      <div className={styles.top__content}>
        <p>
          Na Zana Capas, nossa missão é oferecer proteção de qualidade para
          carros, motos e bicicletas com capas projetadas para diferentes
          necessidades. 
          <br/>
          <br/>
          Explore nossas opções e descubra a capa ideal para o seu
          público.
        </p>
        <button>Fazer orçamento</button>
      </div>
      <div className={styles.bottom__content}>
        <Image className={styles.car__icon} src={car} alt="car image" />
        <div className={styles.content__list}>
          <h1>Características</h1>
          <ul>
            <li>
              <Image src={check} alt="check" />
              <p>proteção UV</p>
            </li>
            <li>
              <Image src={check} alt="check" />
              <p>100% ipermeável</p>
            </li>
            <li>
              <Image src={check} alt="check" />
              <p>resistente a ventanias</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
