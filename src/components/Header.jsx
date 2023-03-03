import StyleSheet from './Header.module.css'

//import igniteLogo from '../assets/ignite-logo.svg'
import reactLogo from '../assets/react.svg'

export function Header() {
    return (
        <header className={StyleSheet.header}>
            <img src={reactLogo} alt="Logotipo"/>
            <strong>
                <h1>Valeu Amigo Feed!</h1>
            </strong>
        </header>
    );
}