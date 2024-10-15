import { InViewStyle } from '@/shared/ui/InViewStyle'
import styles from './styles.module.scss'
import Image from 'next/image'

const Express = () => {

    return (
        <section className={styles.section} id="vibration-diagnostics">
            <div className="container">
                <div className={styles.body}>
                    <div className={styles.item}>
                        <h2 className={styles.h2}>
                            <InViewStyle
                                initialClass="leftToRight"
                                animationClass="visible"
                                triggerOnce
                            >
                                Система экспресс
                                вибродиагностики
                            </InViewStyle>
                        </h2>
                        <div className={styles.titleText}>
                            <h3 className={styles.h3}>
                                <InViewStyle
                                    initialClass="leftToRight"
                                    animationClass="visible"
                                    triggerOnce
                                >
                                    Трёхосевые датчики
                                </InViewStyle>
                            </h3>
                            <div className={styles.p}>
                                <InViewStyle
                                    initialClass="leftToRight"
                                    animationClass="visible"
                                    triggerOnce
                                >
                                    Одновременное измерение в трёх осях
                                </InViewStyle>
                            </div>
                            <h3 className={styles.h3}>
                                <InViewStyle
                                    initialClass="leftToRight"
                                    animationClass="visible"
                                    triggerOnce
                                >
                                    Беспроводная система
                                </InViewStyle>
                            </h3>
                            <div className={styles.p}>
                                <InViewStyle
                                    initialClass="leftToRight"
                                    animationClass="visible"
                                    triggerOnce
                                >
                                    Связь с устройством — Bluetooth 4.0
                                </InViewStyle>
                            </div>
                            <h3 className={styles.h3}>
                                <InViewStyle
                                    initialClass="leftToRight"
                                    animationClass="visible"
                                    triggerOnce
                                >
                                    Вариативность решений
                                </InViewStyle>
                            </h3>
                            <div className={styles.p}>
                                <InViewStyle
                                    initialClass="leftToRight"
                                    animationClass="visible"
                                    triggerOnce
                                >
                                    Подходят для задач любой сложности
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
                            <Image className={styles.img} src={'/geoExpress.png'} width={560} height={715} alt='Система экспресс вибродиагностики' />
                        </InViewStyle>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Express