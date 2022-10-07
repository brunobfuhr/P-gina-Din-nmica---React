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
                <br/>
                <p> Acabei de publicar novos projetos o meu github, corre aqui pra ver 🚀</p>
                <br/>
                <p> https://github.com/brunobfuhr</p>
                <br/>
                <br/>
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

<button className={styles.button}></button>
        




        </aside>
    )
}    
