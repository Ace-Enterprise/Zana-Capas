import styles from "./styles.module.scss";

export const Vehicles = () => {
  const vehicles = [
    {
      title: "Carro",
      image: "",
      description:
        "Com opções de forro total, parcial ou sem forro. <br/> <br/> Tamanhos: P, M, G, GG, XG, XGG, VAN, e KOMBI. <br/> <br/> Modelos versáteis para proteção diária, tanto em ambientes internos quanto externos.",
    },
    {
      title: "Moto",
      image: "",
      description:
        "Capas forradas e sem forro, projetadas para oferecer o máximo de proteção e praticidade. <br/> <br/> Tamanhos:  P, M, G, GG, XG, XGG <br/> <br/> Disponíveis em tamanho ajustável, ideais para diferentes tipos de motocicletas.",
    },
    {
      title: "Bike",
      image: "",
      description:
        "Com e sem forro, além de compacta para fácil transporte e uso diário. <br/> <br/> Tamanho único",
    },
  ];

  return (
    <section>
      {vehicles.map((vehicle, index) => (
        <div className={styles.content} key={index}>
          <div className={styles.presentation}>
            <h1>{vehicle.title}</h1>
            <span></span>
          </div>
          <div className={styles.text}>
            <p
              dangerouslySetInnerHTML={{
                __html: vehicle.description,
              }}
            />
          </div>
        </div>
      ))}
    </section>
  );
};
