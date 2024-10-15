import styles from './styles.module.scss'
import Image from 'next/image'

const Express = () => {

    return (
        <section className={styles.section} id="vibration-diagnostics">
            <div className="container">
                <div className={styles.body}>
                    <div className={styles.item}>
                        <h2 className={styles.h2}>
                            Система экспресс
                            вибродиагностики
                        </h2>
                        <div className={styles.titleText}>
                            <h3 className={styles.h3}>
                                Трёхосевые датчики
                            </h3>
                            <p className={styles.p}>
                                Одновременное измерение в трёх осях
                            </p>
                            <h3 className={styles.h3}>
                                Беспроводная система
                            </h3>
                            <p className={styles.p}>
                                Связь с устройством — Bluetooth 4.0
                            </p>
                            <h3 className={styles.h3}>
                                Вариативность решений
                            </h3>
                            <p className={styles.p}>
                                Подходят для задач любой сложности
                            </p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <Image className={styles.img} src={'/geoExpress.png'} width={560} height={715} alt='Система экспресс вибродиагностики' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Express