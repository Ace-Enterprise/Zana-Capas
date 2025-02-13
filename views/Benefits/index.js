import styles from "./styles.module.scss";
import Image from "next/image";
import sforro from "../../assets/sforro 1.png";
import tforro from "../../assets/tforro.png";
import pforro from "../../assets/pforro.png";

export const Benefits = () => {
  return (
    <section className={styles.rows} id="capas">
      <div className={styles.row}>
        <Image src={tforro} />
        <div styles={styles.content}>
          <h1>Forro total</h1>
          <h2>Frente, teto e laterais</h2>
          <p>
            Proteção máxima com forro interno, ideal para veículos estacionados
            ao ar livre.
          </p>
        </div>
      </div>
      <div className={styles.row}>
        <Image src={pforro} />

        <div styles={styles.content}>
          <h1>Forro parcial</h1>
          <h2>Frente, teto e traseira</h2>
          <p>
            Proteção máxima com forro interno, ideal para veículos estacionados
            ao ar livre.
          </p>
        </div>
      </div>
      <div className={styles.row}>
        <Image src={sforro} />

        <div styles={styles.content}>
          <h1>Sem forro</h1>
          <h2>Não é forrada em nenhum dos lados</h2>
          <p>
            Modelo prático e econômico, ideal para proteção básica em locais
            fechados, como garagens e estacionamentos cobertos.
          </p>
        </div>
      </div>
    </section>
  );
};
