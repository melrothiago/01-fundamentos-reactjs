import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/63523033?v=4"
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
                    <p><a href=''> #paraMaisLoremIpsum</a>
                    {' '}
                    <a href=''>#meSigaNasRedesSociais</a>
                    </p>
                </div>  
        </article>
    )
}