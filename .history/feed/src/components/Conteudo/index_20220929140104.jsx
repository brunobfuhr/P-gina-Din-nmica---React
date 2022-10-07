import styles from "./index.module.css"

export function Conteudo() {
    return (
        <div className={styles.conteudo}>

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/brunobfuhgfhfhfhfhr.png" />


                <div className={styles.description}>
                    <strong>Bruno B.Fuhr</strong>
                    <span>Front-end Student | Html | Css | JavaScript | React </span>
                </div>

            </div>
        </div>
    )
}