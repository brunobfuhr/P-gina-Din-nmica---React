import styles from "./index.module.css"

export function Footer() {
    return (
        <aside className={styles.post}>
            <header className={styles.header}>
                <div className={styles.profile}>
                    <img className={styles.avatar} src="https://github.com/brunobfuhr.png" />


                    <div className={styles.description}>
                        <strong>Bruno B.Fuhr</strong>
                        <span>Front-end Student | Html | Css | JavaScript | React </span>
                    </div>
                </div>
                <time>Publicado há 10 h</time>
            </header>


            <div className={styles.textbox}>
                <p>Eai pessoal!!</p>
                <br />
                <p> Acabei de publicar novos projetos o meu github, corre aqui pra ver 🚀</p>
                <br />
                <p> https://figma.com...</p>
                <br />
                <br />
                <a href="#">#novoprojeto #figma #ux/ui</a>
            </div>


        </aside>
    )

}