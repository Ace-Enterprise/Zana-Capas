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
    {
      title: "Qualidade Garantida",
      description:
        "Materiais duráveis e resistentes, feitos para proteger veículos contra os elementos e desgaste.",
    },
    {
      title: "Atendimento Exclusivo",
      description:
        "Suporte dedicado para atender suas necessidades, desde a escolha dos produtos até o pós-venda.",
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
    <section style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 20px'}}>  
      <h1
      style={{textAlign: 'center', maxWidth: '350px', fontFamily: 'Inter', fontSize: 28, fontWeight: 400}}
      >
        Vantagens de Comprar na Zana Capas
      </h1>
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
    </section>
  );
};
