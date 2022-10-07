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

                <img className={styles.imgcomment} src="https://github.com/brunobfuhr.png"/>
                
                
                    <div className={styles.areacomment}>
                        <h1>Wade Warren</h1>
                    </div>
                    <img FontAwesomeIcon icon="fa-solid fa-trash-can" /> 
                
            
            </div>



        </aside>
    )

}