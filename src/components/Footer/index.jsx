import styles from './styles.module.css'
import whatsApp from '../../assets/whatsapp-icon.png'
import gitHub from '../../assets/github-icon.png'
import linkedin from '../../assets/linkedin-icon.png'
import { user } from '../../data/user'

export const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <div className={styles.ConteinerInformation}>
                <h3 className={styles.ContactText}>Contato</h3>
                <div className={styles.ConteinerLogos}>
                    <img src={whatsApp} alt="Logotipo do whatsApp" />
                    <img src={gitHub} alt="Logotipo do gitHub" />
                    <img src={linkedin} alt="Logotipo do linkedin" />
                </div>
            </div>
            <span className={styles.userName}>Todos os direitos reservados - {user}</span>
        </footer>
    )
}