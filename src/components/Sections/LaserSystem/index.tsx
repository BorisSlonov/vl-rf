import styles from './styles.module.scss'
import Image from 'next/image'

const LaserSystem = () => {

    return (
        <section className={styles.section} id="laser-alignment">
            <div className="container">
                <div className={styles.body}>
                    <div className={styles.item}>
                        <h2 className={styles.h2}>
                            ЛАЗЕРНАЯ СИСТЕМА ЦЕНТРОВКИ
                        </h2>
                        <div className={styles.titleText}>
                            <h3 className={styles.h3}>
                                Преимущества
                            </h3>
                            <ul className={styles.ul}>
                                <li className={styles.li}>
                                    Компактный водонепроницаемый корпус позволяет работать в сложных условиях
                                </li>
                                <li className={styles.li}>
                                    Высокоточный 30-мм цифровой детектор,облегчает настройку и процедуру центровки
                                </li>
                                <li className={styles.li}>
                                    Минимальная рабочая
                                    температура — 20 °С
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <Image className={styles.img} src={'/head.png'} width={560} height={715} alt='Система экспресс вибродиагностики' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LaserSystem