import styles from "./index.module.css"

export function Conteudo() {
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
                <time>Publicado há 1 h</time>
            </header>



            <div className={styles.textbox}>
                <p>Eai pessoal!!</p>
                <br></br>
                   <p> Acabei de publicar novos projetos o meu github, corre aqui pra ver 🚀</p>
                <br></br>
                <p> https://github.com/brunobfuhr</p>
                    <br></br>
                    <p> #novoprojeto #git #frontend </p>
                    <br></br>
                    <a href="#">#novoprojeto</a>
                    <a href="#">#git</a>
            <a href="#">#frontend</a>
                </div>

        </aside>
    )
} 
