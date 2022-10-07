import styles from "./index.module.css"

export function Conteudo() {
    return (
        <aside className={styles.post}>

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/brunobfuhgfhfhfhfhr.png" />
{/* header content footer */}

                <div className={styles.description}>
                    <strong>Bruno B.Fuhr</strong>
                    <span>Front-end Student | Html | Css | JavaScript | React </span>

                    <time title="11 de maio às 11:13">Publicado há 1 h</time>
                </div>
            </div>

            <div className={styles.textbox}>
                <p>Eai pessoal!!</p>

                <p>Acabei de publicar novos projetos no meu github, corre aqui pra ver 🚀</p>

                <p>https://github.com/brunobfuhr</p>

                <p>#novoprojeto #git #frontend </p>
            </div>

        </aside>
    )
}