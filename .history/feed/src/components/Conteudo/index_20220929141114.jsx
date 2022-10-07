import styles from "./index.module.css"

export function Conteudo() {
    return (
        <aside className={styles.conteudo}>

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/brunobfuhgfhfhfhfhr.png" />


                <div className={styles.description}>
                    <strong>Bruno B.Fuhr</strong>
                    <span>Front-end Student | Html | Css | JavaScript | React </span>
                </div>
            </div>
            <div className={styles.text}>
                <p>Eai pessoal!!
                    <br></br>
                    <br></br>

                    Acabei de publicar novos projetos no meu github, corre aqui pra ver 🚀
                    <br></br>
                    <br></br>
                    https://github.com/brunobfuhr
                    <br></br>
                    <br></br>
                    #novoprojeto #git #frontend </p>
            </div>
        </aside>
    )
}