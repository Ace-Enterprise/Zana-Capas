import styles from "./styles.module.scss";

export const Presentation = () => {
  return (
    <section className={styles.presentation}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>Alligator</h1>
          <p>
            Apresentamos nossa linha especial Alligator, uma capa automotiva com
            textura única, que alia resistência e design sofisticado. Seu
            material texturizado oferece uma estética premium, proporcionando
            ainda mais valor aos veículos cobertos. Essa capa é ideal para
            clientes que buscam diferenciação e alta performance em proteção.
          </p>
        </div>
        <div className={styles.presentation}>
            <span></span>
            <span></span>
        </div>
      </div>

      <div className={styles.image}>
        <span></span>
        <span></span>
      </div>
    </section>
  );
};
