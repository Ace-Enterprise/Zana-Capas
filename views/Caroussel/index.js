import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

export const Caroussel = () => {
  const items = [
    {
      title: "Fabricação Própria",
      description:
        "Controle completo de qualidade, desde a produção até a entrega.",
    },
    {
      title: "Preços Competitivos no Atacado",
      description:
        "Condições especiais para lojistas e revendedores, com descontos progressivos por volume.",
    },
    {
      title: "Variedade de Produtos",
      description:
        "Linha completa de capas para diferentes veículos, com opções personalizadas para atender a diferentes públicos.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000); // 5 segundos para cada slide
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className={styles.caroussel}>
      <div className={styles.wrapper}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`${styles.slide} ${
              index === currentIndex ? styles.active : ""
            }`}
          >
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
