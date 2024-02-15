import { Interface } from "readline"
import styles from "./porta.module.css"
import PortaModel from '../../models/porta'
import Gift from '../gift/gift'

interface PortaProps {
    value: PortaModel
    onChange: (novaPorta: PortaModel) => void
}

export default function Porta(props: PortaProps) {
    const porta  = props.value
    const selecionada = porta.selecionada && !porta.aberta ? styles.selecionada: ''

    const alternarSelecao = e => props.onChange(porta.alternarSelecao())
    const abrir =  e => {
        e.stopPropagation()
        props.onChange(porta.abrir())
    }

    function renderDoor() {
        return( 
            <div className={styles.porta}>
                    <div className={styles.portaNumero}>{porta.numero}</div>
                    <div className={styles.macaneta}
                    onClick={abrir}></div>
                </div>
            
        )
    }

    return (
        <div className={styles.area} onClick={alternarSelecao}>
            <div className={`${styles.estrutura} ${selecionada}`}>
                {porta.fechada ? 
                    renderDoor() :
                    porta.premiada ? <Gift></Gift>: false
                 }
            </div>
            <div className={styles.chao}></div>
        </div>
    )
}