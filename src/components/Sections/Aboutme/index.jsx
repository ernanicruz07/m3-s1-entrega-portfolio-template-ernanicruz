import styles from './styles.module.css'

export const AboutMe = () => {
    return (
        <section className={styles.Section}>
            <h1 className={styles.aboutMe}>Sobre mim</h1>
            <p className={styles.aboutMeInformation}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ex magna, imperdiet sodales sem quis, sollicitudin lobortis purus. Etiam a ipsum finibus, dictum leo non, ultrices dui. Nunc id felis pharetra, vehicula enim in, suscipit nisi. Mauris eget sapien a velit facilisis ullamcorper feugiat nec orci. Duis ac iaculis turpis, at feugiat orci.</p>
        </section>
    )
}