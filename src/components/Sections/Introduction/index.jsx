import styles from './styles.module.css'
import banner from '../../../assets/banner-img.png'
import { username } from '../../../data/user'

export const Introduction = () => {
    return (
        <section className={styles.Section}>
            <div className={styles.divInfomation}>
                <span className={styles.username}>{username}</span>
                <h1 className={styles.welcome}>Bem vindo ao meu portfólio</h1>
                <h3 className={styles.nicePhrase}>Uma frase interessante sobre mim</h3>
                <button className={styles.button}>Saiba mais</button>
            </div>
            <img src={banner} alt="Banner utilizado para chamar a atenção do visualizador" />
        </section>
    )
}