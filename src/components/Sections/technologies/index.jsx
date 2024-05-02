import { technologies } from '../../../data/technologies'

import styles from './styles.module.css'
import { CardsTechnologies } from './CardTechnologies'

export const TechnologiesSection = () => {
    const [technologies1, technologies2, technologies3, technologies4] = technologies

    return (
        <section className={styles.Section}>
            <h2 className={styles.Title}>Tecnologias</h2>
            <ul className={styles.Card}>
                <CardsTechnologies {...technologies1} />
                <CardsTechnologies {...technologies2} />
                <CardsTechnologies {...technologies3} />
                <CardsTechnologies {...technologies4} />
            </ul>
        </section>
    )
}