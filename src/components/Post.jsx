import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://avatars.githubusercontent.com/u/63523033?v=4"
                    />
                    <div className={styles.authorInfo}>
                        <strong>Thiago Melro</strong>
                        <span>Dev Fullstack</span>
                    </div>
                </div>

                <time title="02 de Março às 22:01" 
                    dateTime="2023-03-02 às 22:01">
                    Publicado há 1h
                </time>
            </header>
            <div className={styles.content}>
                    <p>Lorem ipsum dolor amet.</p>
                    <p><a href='#'> #paraMaisLoremIpsum</a>
                    {' '}
                    <a href='#'>#meSigaNasRedesSociais</a>
                    </p>
                </div>
                <form className={styles.commentForm}>
                    <strong>Deixe seu feedback</strong>

                    <textarea 
                        placeholder='Escreva um comentário'
                    />

                    <footer>
                        <button type='submit'>Publicar</button>
                    </footer>
                </form>

                <div className={styles.commentList}>
                    <Comment />
                    <Comment />
                    <Comment />
                </div>

        </article>
    )
}