import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';

export function Comment() {
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/melrothiago.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Thiago Melro</strong>
                           
                            <time 
                            title="4 de Março às 18:17"
                            dateTime='2023-03-04'>

                            Cerca de 1h atrás
                            </time>

                        </div>
                        
                        <button title='Apagar comentário'>
                            <Trash size={24} />
                        </button>

                    </header>

                    <p>Consectetur, adipisci velit!</p>

                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}