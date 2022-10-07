import styles from "./index.module.css"

export function Conteudo() {
    return (
        <aside className={styles.post}>

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/brunobfuhgfhfhfhfhr.png" />


                <div className={styles.description}>
                    <strong>Bruno B.Fuhr</strong>
                    <span>Front-end Student | Html | Css | JavaScript | React </span>

                </div>
            </div>

            <time>Publicado há 1 h</time>

            <div className={styles.textbox}>
                <p>Oii pessoal!!

                    Acabei de publicar novos projetos no meu github, corre aqui pra ver 🚀

                    https://github.com/camisbrussi

                    #novoprojeto #git #frontend </p>
               <p></p>
                <p></p>
                <a href="#">novoprojeto</a>
                <a href="#">git</a>
                <a href="#">frontend</a>
                </div></div>

        </aside>
    )
}
