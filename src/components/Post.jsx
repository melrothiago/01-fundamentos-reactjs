import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

export function Post({author, publishedAt}) {
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h", {
        locale: ptBR,
    })

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title="02 de Março às 22:01" 
                    dateTime="2023-03-02 às 22:01">
                    {publishedDateFormatted}
                </time>
            </header>
            <div className={styles.content}>
                    
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