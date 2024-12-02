import styles from "./styles.module.scss";

export const Vehicles = () => {
  const vehicles = [
    {
      title: "Carro",
      image: "",
      description:
        "Apresentamos nossa linha especial Alligator, uma capa automotiva com textura única, que alia resistência e design sofisticado. Seu material texturizado oferece uma estética premium, proporcionando ainda mais valor aos veículos cobertos. Essa capa é ideal para clientes que buscam diferenciação e alta performance em proteção.",
    },
    {
      title: "Moto",
      image: "",
      description:
        "Apresentamos nossa linha especial Cobra, uma capa automotiva com textura única, que alia resistência e design sofisticado. Seu material texturizado oferece uma estética premium, proporcionando ainda mais valor aos veículos cobertos. Essa capa é ideal para clientes que buscam diferenciação e alta performance em proteção.",
    },
    {
      title: "Bike",
      image: "",
      description:
        "Apresentamos nossa linha especial Python, uma capa automotiva com textura única, que alia resistência e design sofisticado. Seu material texturizado oferece uma estética premium, proporcionando ainda mais valor aos veículos cobertos. Essa capa é ideal para clientes que buscam diferenciação e alta performance em proteção.",
    },
  ];
  return (
    <section>
      {vehicles.map((vehicle) => (
        <div className={styles.content}>
          <div className={styles.presentation}>
            <h1>{vehicle.title}</h1>
            <span></span>
          </div>
          <div className={styles.text}>
            <p>{vehicle.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};
