import styles from  "./gift.module.css"
export default function Gift(){
    return(
        <div className={styles.presente}>
            <div className={styles.tampa}></div>
            <div className={styles.caixa}></div>
            <div className={styles.laco1}></div>
            <div className={styles.laco2}></div>
        </div>
    )
}