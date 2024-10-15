import { InViewStyle } from '@/shared/ui/InViewStyle'
import styles from './styles.module.scss'
import Image from 'next/image'

const LaserSystem = () => {

    return (
        <section className={styles.section} id="laser-alignment">
            <div className="container">
                <div className={styles.body}>
                    <div className={styles.item}>
                        <h2 className={styles.h2}>
                            <InViewStyle
                                initialClass="leftToRight"
                                animationClass="visible"
                                triggerOnce
                            >
                                ЛАЗЕРНАЯ СИСТЕМА ЦЕНТРОВКИ
                            </InViewStyle>
                        </h2>
                        <div className={styles.titleText}>
                            <h3 className={styles.h3}>
                                <InViewStyle
                                    initialClass="leftToRight"
                                    animationClass="visible"
                                    triggerOnce
                                >
                                    Преимущества
                                </InViewStyle>
                            </h3>

                            <ul className={styles.ul}>
                                <li className={styles.li}>
                                    <InViewStyle
                                        initialClass="leftToRight"
                                        animationClass="visible"
                                        triggerOnce
                                    >
                                        Компактный водонепроницаемый корпус позволяет работать в сложных условиях
                                    </InViewStyle>
                                </li>
                                <li className={styles.li}>
                                    <InViewStyle
                                        initialClass="leftToRight"
                                        animationClass="visible"
                                        triggerOnce
                                    >
                                        Высокоточный 30-мм цифровой детектор,облегчает настройку и процедуру центровки
                                    </InViewStyle>
                                </li>
                                <li className={styles.li}>
                                    <InViewStyle
                                        initialClass="leftToRight"
                                        animationClass="visible"
                                        triggerOnce
                                    >
                                        Минимальная рабочая
                                        температура — 20 °С
                                    </InViewStyle>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <InViewStyle
                            initialClass="rightToLeft"
                            animationClass="visible"
                            triggerOnce
                        >
                            <Image className={styles.img} src={'/head.png'} width={560} height={715} alt='Система экспресс вибродиагностики' />
                        </InViewStyle>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LaserSystem