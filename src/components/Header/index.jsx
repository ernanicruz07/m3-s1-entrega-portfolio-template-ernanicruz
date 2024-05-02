import styles from './styles.module.css'
import logo from '../../assets/portfolio.png'

export const Header = () => {
    return (
        <header className={styles.Header}>
            <img src={logo} alt="Logotipo do portfólio" className={styles.Logo}/>
            <div className={styles.DivButtons}>
                <button className={styles.Button}>Sobre</button>
                <button className={styles.Button}>Stack</button>
                <button className={styles.Button}>Projetos</button>
            </div>
            <button className={styles.ButtonContact}>Contato</button>
        </header>
    )
}