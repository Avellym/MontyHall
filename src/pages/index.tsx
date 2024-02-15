import { Inter } from "next/font/google";
import Card from "../../components/card/card";
import styles from '../styles/form.module.css'
import NumberEntery from "../../components/numberentery/numberEntery";
import { useState } from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Form() {
  const [qtdePortas, setQtdePortas] = useState(3)
  const [premiada, setPremiada] = useState(1)

  return (
    <div className={styles.form}>
      <div>
        <Card bgcolor="#c0392c">
          <h1>
            Monty Hall
          </h1>
        </Card>
        <Card>
          <NumberEntery text="Quantas Portas? "
          value={qtdePortas} onChange= {novaQtde => setQtdePortas(novaQtde)}/>
        </Card>
      </div>
      <div>
        <Card>
        <NumberEntery text="Porta Premiada? "
          value={premiada} onChange= {novaPremiada => setPremiada(novaPremiada)}/>
        </Card>
        <Card bgcolor="#28a085">
          <Link href={`/jogo/${qtdePortas}/${premiada}`}>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Card>
      </div>
    </div>
  )
}
