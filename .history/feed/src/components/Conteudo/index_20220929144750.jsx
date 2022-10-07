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
               <p></p>
               <p></p>
               <p></p>
               <a className={styles.textlink} href="#">novoprojeto</a>
               <a href="#">git</a>
               <a href="#">frontend</a>
            </div>

        </aside>
    )
}
