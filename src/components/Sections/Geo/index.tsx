import { InViewStyle } from '@/shared/ui/InViewStyle'
import styles from './styles.module.scss'
import Image from 'next/image'

const Geo = () => {

    return (
        <section className={styles.section} id="geometry-alignment">
            <div className="container">
                <div className={styles.body}>
                    <div className={styles.item}>
                        <h2 className={styles.h2}>
                            <InViewStyle
                                initialClass="leftToRight"
                                animationClass="visible"
                                triggerOnce
                            >
                                Система выверки ГЕОМЕТРИИ
                            </InViewStyle>
                        </h2>
                        <div className={styles.titleText}>
                            <h3 className={styles.h3}>
                                <InViewStyle
                                    initialClass="leftToRight"
                                    animationClass="visible"
                                    triggerOnce
                                >
                                    Высокая точность измерений
                                </InViewStyle>
                            </h3>
                            <div className={styles.p}>
                                <InViewStyle
                                    initialClass="leftToRight"
                                    animationClass="visible"
                                    triggerOnce
                                >
                                    Лазерная технология модуля GEO обеспечивает надёжный
                                    процесс измерения, крайне важный для поддержания
                                    оптимальных условий эксплуатации оборудования и снижения износа. Правильная выверка геометрических параметров, является ключевым фактором, влияющим
                                    на производительность оборудования.
                                </InViewStyle>
                            </div>
                            <h3 className={styles.h3}>
                                <InViewStyle
                                    initialClass="leftToRight"
                                    animationClass="visible"
                                    triggerOnce
                                >
                                    Экономическая эффективность
                                </InViewStyle>
                            </h3>
                            <div className={styles.p}>
                                <InViewStyle
                                    initialClass="leftToRight"
                                    animationClass="visible"
                                    triggerOnce
                                >
                                    Объединение нескольких функций в одной системе снижает потребность в использовании различных инструментов
                                    и увеличивает время межремонтного
                                    интервала оборудования.
                                </InViewStyle>
                            </div>
                            <h3 className={styles.h3}>
                                <InViewStyle
                                    initialClass="leftToRight"
                                    animationClass="visible"
                                    triggerOnce
                                >
                                    Широкий диапазон применения
                                </InViewStyle>
                            </h3>
                            <div className={styles.p}>
                                <InViewStyle
                                    initialClass="leftToRight"
                                    animationClass="visible"
                                    triggerOnce
                                >
                                    Модуль GEO подходит для различных отраслей
                                    промышленности, включая целлюлозно-бумажное,
                                    полиграфическое и литейно-прокатное производство.
                                    Может быть адаптирован к индивидуальным потребностям
                                    контроля и проверки прямолинейности, плоскостности
                                    и геометрии рамы.
                                </InViewStyle>
                            </div>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <InViewStyle
                            initialClass="rightToLeft"
                            animationClass="visible"
                            triggerOnce
                        >
                            <Image className={styles.img} src={'/geo.png'} width={560} height={715} alt='Система экспресс вибродиагностики' />
                        </InViewStyle>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Geo