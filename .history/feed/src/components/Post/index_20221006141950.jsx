import styles from "./index.module.css";
// import { Comment } from "../Comment";
// import { Avatar } from "../Avatar"


export function Post({author, content, publishedAt}) {
    return (
        <aside className={styles.post}>

            <header className={styles.header}>
                <div className={styles.profile}>
                    {/* <Avatar hasBorder={true} src={author.avatarUrl}/> */}
                    <div className={styles.description}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time>Publicado há 1 h</time>
            </header>


            <div className={styles.textbox}>
                <p>Eai pessoal!!</p>
                <br />
                <p> Acabei de publicar novos projetos o meu github, corre aqui pra ver 🚀</p>
                <br />
                <p> https://github.com/brunobfuhr</p>
                <br />
                <br />
                <a href="#">#novoprojeto #git #frontend</a>
            </div>

            <div className={styles.title}>
                <h1>Deixe seu feedback</h1>

            </div>
            <form>
                <label>
                    <textarea className={styles.textarea}></textarea>
                </label>
            </form>

            <button className={styles.button}>Publicar</button>


        </aside>
    )
}    
