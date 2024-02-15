import styles from './numberEntery.module.css'

interface NumberEnteryProps {
    text: string
    value: number
    onChange: (newValue: number) => void
}

export default function NumberEntery(props) {
    const dec = () => props.onChange(props.value - 1)
    const inc = () => props.onChange(props.value + 1)

    return (
        <div className={styles.numberEntery}>
            <span className={styles.text}>{props.text}</span>
            <span className={styles.value}>{props.value}</span>
            <div className={styles.buttons}>
                <button className={styles.butei} onClick={dec}>-</button>
                <button className={styles.butei} onClick={inc}>+</button>
            </div>
        </div>
    )
}