import Image from 'next/image'
import styles from './styles.module.scss'
import { InViewStyle } from '@/shared/ui/InViewStyle'

const StepByStep = () => {

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.body}>
                    <div className={styles.item}>
                        <h2 className={styles.h2}>
                            <InViewStyle
                                initialClass="leftToRight"
                                animationClass="visible"
                                triggerOnce
                            >
                                Центровка <br />
                                шаг за шагом
                            </InViewStyle>
                        </h2>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.cards}>
                            <div className={styles.card}>
                                <div className={styles.imgWrapper}>
                                    <InViewStyle
                                        initialClass="bottomToTop"
                                        animationClass="visible"
                                        triggerOnce
                                    >
                                        <Image className={styles.img} src={'/alignmentSteps/1.png'} alt={'скриншот приложения'} width={246} height={156} />
                                    </InViewStyle>
                                </div>
                                <div className={styles.p}>
                                    <InViewStyle
                                        initialClass="bottomToTop"
                                        animationClass="visible"
                                        triggerOnce
                                    >
                                        Выберите допуски,
                                        введите значения и выберите
                                        тип соединения оборудования
                                    </InViewStyle>
                                </div>
                                <span className={styles.num}>
                                    <InViewStyle
                                        initialClass="rightToLeft"
                                        animationClass="visible"
                                        triggerOnce
                                    >
                                        01
                                    </InViewStyle>
                                </span>
                            </div>

                            <div className={styles.card}>
                                <div className={styles.imgWrapper}>
                                    <InViewStyle
                                        initialClass="bottomToTop"
                                        animationClass="visible"
                                        triggerOnce
                                    >
                                        <Image className={styles.img} src={'/alignmentSteps/2.png'} alt={'скриншот приложения'} width={246} height={156} />
                                    </InViewStyle>
                                </div>
                                <div className={styles.p}>
                                    <InViewStyle
                                        initialClass="bottomToTop"
                                        animationClass="visible"
                                        triggerOnce
                                    >
                                        Введите значения измеренных расстояний
                                        Выберите, какие пары опорбудут зафиксированы
                                    </InViewStyle>
                                </div>
                                <span className={styles.num}>
                                    <InViewStyle
                                        initialClass="rightToLeft"
                                        animationClass="visible"
                                        triggerOnce
                                    >
                                        02
                                    </InViewStyle>
                                </span>
                            </div>

                            <div className={styles.card}>
                                <div className={styles.imgWrapper}>
                                    <InViewStyle
                                        initialClass="bottomToTop"
                                        animationClass="visible"
                                        triggerOnce
                                    >
                                        <Image className={styles.img} src={'/alignmentSteps/3.png'} alt={'скриншот приложения'} width={246} height={156} />
                                    </InViewStyle>
                                </div>
                                <div className={styles.p}>
                                    <InViewStyle
                                        initialClass="bottomToTop"
                                        animationClass="visible"
                                        triggerOnce
                                    >
                                        Выполните измерения одним
                                        из подходящих методов центровки,
                                        выбранного оборудования
                                    </InViewStyle>
                                </div>
                                <span className={styles.num}>
                                    <InViewStyle
                                        initialClass="rightToLeft"
                                        animationClass="visible"
                                        triggerOnce
                                    >
                                        03
                                    </InViewStyle>
                                </span>
                            </div>

                            <div className={styles.card}>
                                <div className={styles.imgWrapper}>
                                    <InViewStyle
                                        initialClass="bottomToTop"
                                        animationClass="visible"
                                        triggerOnce
                                    >
                                        <Image className={styles.img} src={'/alignmentSteps/4.png'} alt={'скриншот приложения'} width={246} height={156} />
                                    </InViewStyle>
                                </div>
                                <div className={styles.p}>
                                    <InViewStyle
                                        initialClass="bottomToTop"
                                        animationClass="visible"
                                        triggerOnce
                                    >
                                        Оцените степень расцентровки выбранного оборудования
                                        для её устранения
                                    </InViewStyle>
                                </div>
                                <span className={styles.num}>
                                    <InViewStyle
                                        initialClass="rightToLeft"
                                        animationClass="visible"
                                        triggerOnce
                                    >
                                        04
                                    </InViewStyle>
                                </span>
                            </div>

                            <div className={styles.card}>
                                <div className={styles.imgWrapper}>
                                    <InViewStyle
                                        initialClass="bottomToTop"
                                        animationClass="visible"
                                        triggerOnce
                                    >
                                        <Image className={styles.img} src={'/alignmentSteps/5.png'} alt={'скриншот приложения'} width={246} height={156} />
                                    </InViewStyle>
                                </div>
                                <div className={styles.p}>
                                    <InViewStyle
                                        initialClass="bottomToTop"
                                        animationClass="visible"
                                        triggerOnce
                                    >
                                        Проведите центровку
                                        оборудования, отслеживая
                                        уровень расцентровкив режиме реального времени
                                    </InViewStyle>
                                </div>
                                <span className={styles.num}>
                                    <InViewStyle
                                        initialClass="rightToLeft"
                                        animationClass="visible"
                                        triggerOnce
                                    >
                                        05
                                    </InViewStyle>
                                </span>
                            </div>

                            <div className={styles.card}>
                                <div className={styles.imgWrapper}>
                                    <InViewStyle
                                        initialClass="bottomToTop"
                                        animationClass="visible"
                                        triggerOnce
                                    >
                                        <Image className={styles.img} src={'/alignmentSteps/6.png'} alt={'скриншот приложения'} width={246} height={156} />
                                    </InViewStyle>
                                </div>
                                <div className={styles.p}>
                                    <InViewStyle
                                        initialClass="bottomToTop"
                                        animationClass="visible"
                                        triggerOnce
                                    >
                                        Выполните измерения одним
                                        из подходящих методов центровки,
                                        выбранного оборудования
                                    </InViewStyle>
                                </div>
                                <span className={styles.num}>
                                    <InViewStyle
                                        initialClass="rightToLeft"
                                        animationClass="visible"
                                        triggerOnce
                                    >
                                        06
                                    </InViewStyle>
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default StepByStep