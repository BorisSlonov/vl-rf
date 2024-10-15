import Image from 'next/image'
import styles from './styles.module.scss'

const StepByStep = () => {

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.body}>
                    <div className={styles.item}>
                        <h2 className={styles.h2}>
                            Центровка <br />
                            шаг за шагом
                        </h2>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.cards}>
                            <div className={styles.card}>
                                <div className={styles.imgWrapper}>
                                    <Image className={styles.img} src={'/alignmentSteps/1.png'} alt={'скриншот приложения'} width={246} height={156} />
                                </div>
                                <p className={styles.p}>
                                    Выберите допуски,
                                    введите значения и выберите
                                    тип соединения оборудования
                                </p>
                                <span className={styles.num}>
                                    01
                                </span>
                            </div>
                            <div className={styles.card}>
                                <div className={styles.imgWrapper}>
                                    <Image className={styles.img} src={'/alignmentSteps/2.png'} alt={'скриншот приложения'} width={246} height={156} />
                                </div>
                                <p className={styles.p}>
                                    Введите значения измеренных расстояний
                                    Выберите, какие пары опорбудут зафиксированы
                                </p>
                                <span className={styles.num}>
                                    02
                                </span>
                            </div>
                            <div className={styles.card}>
                                <div className={styles.imgWrapper}>
                                    <Image className={styles.img} src={'/alignmentSteps/3.png'} alt={'скриншот приложения'} width={246} height={156} />
                                </div>
                                <p className={styles.p}>
                                    Выполните измерения одним
                                    из подходящих методов центровки,
                                    выбранного оборудования
                                </p>
                                <span className={styles.num}>
                                    03
                                </span>
                            </div>
                            <div className={styles.card}>
                                <div className={styles.imgWrapper}>
                                    <Image className={styles.img} src={'/alignmentSteps/4.png'} alt={'скриншот приложения'} width={246} height={156} />
                                </div>
                                <p className={styles.p}>
                                    Оцените степень расцентровки выбранного оборудования
                                    для её устранения
                                </p>
                                <span className={styles.num}>
                                    04
                                </span>
                            </div>
                            <div className={styles.card}>
                                <div className={styles.imgWrapper}>
                                    <Image className={styles.img} src={'/alignmentSteps/5.png'} alt={'скриншот приложения'} width={246} height={156} />
                                </div>
                                <p className={styles.p}>
                                    Проведите центровку
                                    оборудования, отслеживая
                                    уровень расцентровкив режиме реального времени
                                </p>
                                <span className={styles.num}>
                                    05
                                </span>
                            </div>
                            <div className={styles.card}>
                                <div className={styles.imgWrapper}>
                                    <Image className={styles.img} src={'/alignmentSteps/6.png'} alt={'скриншот приложения'} width={246} height={156} />
                                </div>
                                <p className={styles.p}>
                                    Выполните измерения одним
                                    из подходящих методов центровки,
                                    выбранного оборудования
                                </p>
                                <span className={styles.num}>
                                    06
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