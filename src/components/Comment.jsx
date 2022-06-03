import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css"

export function Comment() {
  return ( 
    <div className={styles.comment}>
      <img src="https://github.com/CaioVinicius7.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong> Caio Vinícius </strong>
              <time title="11 de junho às 8:13h" dateTime="22-06-11 08:13:30"> 
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p> Muito bom, parabéns! </p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
   );
}