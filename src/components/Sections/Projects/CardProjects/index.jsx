import styles from './styles.module.css'
import imgGitHub from '../../../../assets/git-icon.png'

export const CardsProjects = ({ name, descricao }) => {
    return (
        <li className={styles.Card}>
            <img src={imgGitHub} alt="Logo do GitHub" className={styles.Img} />
            <h2 className={styles.Name}>{name}</h2>
            <p className={styles.Description}>{descricao}</p>
            <a href="https://www.google.com/" className={styles.Link}>Saiba mais</a>
        </li>
    )
}