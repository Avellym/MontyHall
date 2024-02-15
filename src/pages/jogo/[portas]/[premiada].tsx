import styles from '../../../styles/Jogo.module.css'
import { useEffect, useState } from "react";
import Porta from "../../../../components/porta/porta";
import { atualizarPortas, criarPortas } from "../../../../functions/porta";
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function jogo() {
    const router = useRouter()
    const [portas, setPortas] = useState([])

    useEffect(() => {
        const portas = +router.query.portas
        const premiada = +router.query.premiada
        setPortas(criarPortas(portas, premiada))
    }, [router?.query])

    function renderDoors() {
        console.log(portas);

        return portas.map(porta => {
            return <Porta key={porta.numero} value={porta}
                onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />
        })
    }
    return (
        <div className={styles.jogo}>
            <div className={styles.portas}> 
                {renderDoors()}
            </div>
            <div className={styles.buttons}>
                <Link href="/">
                    <button>Reiniciar Jogo</button>
                </Link>
            </div>
        </div>
    )
}