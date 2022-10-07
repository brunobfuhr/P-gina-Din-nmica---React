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
                Eai pessoal!!

                Acabei de publicar novos projetos no meu github, corre aqui pra ver 🚀

                https://github.com/brunobfuhr

                #novoprojeto #git #frontend 
            </div>
        </aside>
    )
}
