import styles from "./styles.module.scss";

import Image from "next/image";

import carroImg from "../../assets/carro.png";
import motoImg from "../../assets/moto.png";
import bikeImg from "../../assets/bike.png";

export const Vehicles = () => {
  const vehicles = [
    {
      title: "Carro",
      image: carroImg,
      description:
        "Com opções de forro total, parcial ou sem forro. <br/> <br/> Tamanhos: P, M, G, GG, XG, XGG, VAN, e KOMBI. <br/> <br/> Modelos versáteis para proteção diária, tanto em ambientes internos quanto externos.",
    },
    {
      title: "Moto",
      image: motoImg,
      description:
        "Capas forradas e sem forro, projetadas para oferecer o máximo de proteção e praticidade. <br/> <br/> Tamanhos:  P, M, G, GG, XG, XGG <br/> <br/> Disponíveis em tamanho ajustável, ideais para diferentes tipos de motocicletas.",
    },
    {
      title: "Bike",
      image: bikeImg,
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
            <Image src={vehicle.image} alt={vehicle.title} width={400} height={400}/>
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
