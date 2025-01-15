import styles from "./styles.module.scss";
import Image from "next/image";
import alligatorDemonstration from "../../assets/alligator_demonstration.png";
import gold from "../../assets/gold 2.png";
import alligator from "../../assets/alligator 1.png";
export const Presentation = () => {
  return (
    <section className={styles.presentation}>
      <div style={{ padding: "2rem 0", textAlign: "center" }}>
        <h1 style={{ font: "Inter", fontWeight: 700, fontSize: 64, color: "#042D4F" }}>Linhas</h1>
      </div>
      <div className={styles.content + " " + styles.alligator}>
        <div className={styles.text}>
          <h1>Alligator</h1>
          <p>
            Apresentamos nossa linha especial Alligator, uma capa automotiva com
            <strong>textura única</strong>, que alia resistência e design
            sofisticado.
            <br />
            <br />
            Seu material texturizado oferece uma{" "}
            <strong>estética premium</strong>, proporcionando ainda mais valor
            aos veículos cobertos.
            <br />
            <br />
            Essa capa é ideal para clientes que buscam{" "}
            <strong>diferenciação e alta performance em proteção</strong>.
          </p>
          <button>comprar agora</button>
        </div>
        <Image src={alligatorDemonstration} />
      </div>
      <div
        className={styles.content + " " + styles.gold}
        style={{
          alignItems: "center",
          justifyContent: "center",
          gap: 60,
          textAlign: "start",
        }}
      >
        <div className={styles.text}>
          <h1>Ouro</h1>
        </div>
        <div className={styles.text}>
          <p>
            A proteção que seu veículo merece!
            <br />
            <br />
            Feita com <strong>materiais premium</strong>, a Linha Ouro oferece
            durabilidade, ajuste perfeito e resistência contra sol, chuva,
            poeira e impactos leves.
            <br />
            <br />
            Cuide do seu automóvel com qualidade e sofisticação.
          </p>
        </div>
      </div>

      <div className={styles.image}>
        <span></span>
        <span></span>
      </div>
    </section>
  );
};
