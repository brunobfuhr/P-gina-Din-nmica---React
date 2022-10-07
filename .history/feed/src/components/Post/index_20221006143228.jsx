import styles from "./index.module.css";
import { Comment } from "../Comment";
import { Avatar } from "../Avatar";
// importar o date-fns 


//Arrumar post para receber propriedades
export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.profile}>
        <Avatar hasBorder={true} src={author.avatarUrl}/>
          
          <div className={styles.description}>
          <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title="11 de maio ás 11:13" dateTime="2022-05-11 08:00:00">
          Publicado há 1 hora
        </time>
      </header>

      <div className={styles.content}>
        <p>Oii pessoal!! </p>
        <p>
          Acabei de publicar mais um projeto no meu github, corre aqui pra ver
          🚀
        </p>
        <p>
          {" "}
          <a href="">https://github.com/camisbrussi/beeheroes-client</a>
        </p>
        <p>
          <a href="">#novoprojeto</a> <a href="">#git</a>{" "}
          <a href="">#frontend</a>
        </p>
      </div>

      <form>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <button type="submit">Publicar</button>
      </form>

      <div className={styles.comments}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}