import styles from './styles.module.css'

export const CardsTechnologies = ({ name, img }) => {
    return (
        <li className={styles.List}>
            <img src={img} alt={`É a logo da tecnologia ${name}`} className={styles.Img} />
            <span className={styles.Name}>{name}</span>
        </li>
    )
}
