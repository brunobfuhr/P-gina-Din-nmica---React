import styles from "./index.module.css"

export function Comment() {
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
                <p> Acabei de publicar novos projetos no figma, corre aqui pra ver 🚀</p>
                <br />
                <p> https://figma.com...</p>
                <br />
                <br />
                <a href="#">#novoprojeto #figma #ux/ui</a>
            </div>

            <div className={styles.title}>
                <h1>Deixe seu feedback</h1>

            </div>
            <div className={styles.comment}>
      <img
        src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1021&q=80"
        alt=""
      />

      <div className={styles.commentArea}>
        <div className={styles.content}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Wade Warren</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">
                Comentado há 1h
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Adorei seu novo trabalho Camila !! 💜💜</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            <span> 20</span>
          </button>
        </footer>
      </div>
    </div>



        </aside>
    )

}