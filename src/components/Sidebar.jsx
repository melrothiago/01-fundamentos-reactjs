import {PencilLine} from 'phosphor-react'
import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} 
            src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=552&q=60" 
            />

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/63523033?v=4"
                />

                <strong>Thiago Melro</strong>
                <span>Dev Fullstack</span>
            </div>

            <footer>
                <a href='#'>
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}