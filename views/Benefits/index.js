import styles from "./styles.module.scss";

export const Benefits = () => {
  return (
    <section className={styles.rows}>
      <div className={styles.row}>
        <span></span>
        <div styles={styles.content}>
          <h1>Forro total</h1>
          <p>
            Proteção máxima com forro interno, ideal para veículos estacionados
            ao ar livre.
          </p>
        </div>
      </div>
      <div className={styles.row}>
        <span></span>
        <div styles={styles.content}>
          <h1>Forro parcial</h1>
          <p>
            Proteção máxima com forro interno, ideal para veículos estacionados
            ao ar livre.
          </p>
        </div>
      </div>
      <div className={styles.row}>
        <span></span>
        <div styles={styles.content}>
          <h1>Sem forro</h1>
          <p>
            Proteção máxima com forro interno, ideal para veículos estacionados
            ao ar livre.
          </p>
        </div>
      </div>
    </section>
  );
};
