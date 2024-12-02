import Head from 'next/head';
import styles from '../styles/Home.module.css';

import { Nav } from '../views/Nav';
import { Top } from '../views/Top';
import { Benefits } from '../views/Benefits';
import { Presentation } from '../views/Presentation';
import { Vehicles } from '../views/Vehicles';
import { Advantages } from '../views/Advantages';

export default function Home() {
  return (
    <body>
      <Head>
        <title>Zana Capas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        <Nav />
        <Top />
        <Benefits />
        <Presentation />
        <Vehicles />
        <Advantages />
      </main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </body>
  );
}
