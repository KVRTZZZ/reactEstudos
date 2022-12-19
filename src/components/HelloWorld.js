import styles from './frase.module.css'


function HelloWorld() {
    return (
        <div className={styles.fraseconteiner}>
            <p className={styles.frasecontent}>
                olá mundo, como vai?
            </p>
        </div>
        )
}

export default HelloWorld