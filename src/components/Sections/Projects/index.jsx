import { projects } from '../../../data/projects'
import styles from './styles.module.css'
import { CardsProjects } from './CardProjects'

export const ProjectsSection = () => {
    const [projects1, projects2, projects3, projects4] = projects

    return (
        <section className={styles.Section}>
            <h2 className={styles.Title}>Projetos</h2>
            <ul className={styles.Card}>
                <CardsProjects {...projects1} />
                <CardsProjects {...projects2} />
                <CardsProjects {...projects3} />
                <CardsProjects {...projects4} />
            </ul>
        </section>
    )
}