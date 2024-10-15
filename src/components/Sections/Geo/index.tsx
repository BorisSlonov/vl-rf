import styles from './styles.module.scss'
import Image from 'next/image'

const Geo = () => {

    return (
        <section className={styles.section} id="geometry-alignment">
            <div className="container">
                <div className={styles.body}>
                    <div className={styles.item}>
                        <h2 className={styles.h2}>
                            Система выверки ГЕОМЕТРИИ
                        </h2>
                        <div className={styles.titleText}>
                            <h3 className={styles.h3}>
                                Высокая точность измерений
                            </h3>
                            <p className={styles.p}>
                                Лазерная технология модуля GEO обеспечивает надёжный
                                процесс измерения, крайне важный для поддержания
                                оптимальных условий эксплуатации оборудования и снижения износа. Правильная выверка геометрических параметров, является ключевым фактором, влияющим
                                на производительность оборудования.
                            </p>
                            <h3 className={styles.h3}>
                                Экономическая эффективность
                            </h3>
                            <p className={styles.p}>
                                Объединение нескольких функций в одной системе снижает потребность в использовании различных инструментов
                                и увеличивает время межремонтного
                                интервала оборудования.
                            </p>
                            <h3 className={styles.h3}>
                                Широкий диапазон применения
                            </h3>
                            <p className={styles.p}>
                                Модуль GEO подходит для различных отраслей
                                промышленности, включая целлюлозно-бумажное,
                                полиграфическое и литейно-прокатное производство.
                                Может быть адаптирован к индивидуальным потребностям
                                контроля и проверки прямолинейности, плоскостности
                                и геометрии рамы.
                            </p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <Image className={styles.img} src={'/geo.png'} width={560} height={715} alt='Система экспресс вибродиагностики' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Geo