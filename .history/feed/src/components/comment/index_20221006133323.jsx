import styles from "./index.module.css";
import { ThumbsUp, Trash } from "phosphor-react";

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
            <form>
                <label>
                    <textarea className={styles.textarea}></textarea>
                </label>
            </form>

            <button className={styles.button}>Publicar</button>

            <div className={styles.profile2}>

                <img className={styles.imgcomment} src="https://th.bing.com/th/id/R.302be214da0c9a0f51cdc2089440b80d?rik=LL8L4QqviejThg&pid=ImgRaw&r=0.png" />


                <div className={styles.areacomment}>
                    <h1>Wade Warren</h1>
                    <p className={styles.timecomment}>Comentado há 2h</p>
                    <p className={styles.comment}>Bom trabalho!</p>
                </div>
                <button title="Deletar comentário">
              <Trash size={24} />
            </button>

            </div>
            



            <div className={styles.profile2}>

                <img className={styles.imgcomment} src="https://th.bing.com/th/id/R.302be214da0c9a0f51cdc2089440b80d?rik=LL8L4QqviejThg&pid=ImgRaw&r=0.png" />


                <div className={styles.areacomment}>
                    <h1>Wade Warren</h1>
                    <p className={styles.timecomment}>Comentado há 2h</p>
                    <p className={styles.comment}>Bom trabalho!</p>
                </div>
                <button title="Deletar comentário">
              <Trash size={24} />
            </button>
            </div>

            <div className={styles.profile2}>

                <img className={styles.imgcomment} src="https://th.bing.com/th/id/R.302be214da0c9a0f51cdc2089440b80d?rik=LL8L4QqviejThg&pid=ImgRaw&r=0.png" />


                <div className={styles.areacomment}>
                    <h1>Wade Warren</h1>
                    <p className={styles.timecomment}>Comentado há 2h</p>
                    <p className={styles.comment}>Bom trabalho!</p>
                </div>
                <button title="Deletar comentário">
              <Trash size={24} />
            </button>
            </div>


        </aside>
    )

}