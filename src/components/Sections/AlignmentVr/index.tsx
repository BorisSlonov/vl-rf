import clsx from 'clsx'
import styles from './styles.module.scss'
import Image from 'next/image'
import { InViewStyle } from '@/shared/ui/InViewStyle'

const AlignmentVr = () => {
    return (
        <section className={styles.section} id="vr">
            <div className="container">
                <h2 className={styles.h2}>
                    <InViewStyle
                        initialClass="bottomToTop"
                        animationClass="visible"
                        triggerOnce
                    >
                        ЦЕНТРОВКА В ВИРТУАЛЬНОЙ
                        РЕАЛЬНОСТИ
                    </InViewStyle>
                </h2>
                <div className={styles.imgWrapper}>
                    <InViewStyle
                        initialClass="bottomToTop"
                        animationClass="visible"
                        triggerOnce
                    >
                        <Image className={styles.img} src={'/alignmentVr/1.png'} alt='демонстрация виар' width={380} height={260} />
                    </InViewStyle>
                    <InViewStyle
                        initialClass="bottomToTop"
                        animationClass="visible"
                        triggerOnce
                    >
                        <Image className={styles.img} src={'/alignmentVr/2.png'} alt='демонстрация виар' width={380} height={260} />

                    </InViewStyle>
                    <InViewStyle
                        initialClass="bottomToTop"
                        animationClass="visible"
                        triggerOnce
                    >
                        <Image className={styles.img} src={'/alignmentVr/3.png'} alt='демонстрация виар' width={380} height={260} />
                    </InViewStyle>
                </div>
                <div className={styles.body}>
                    <div className={clsx(styles.item, styles.item1)}>
                        <InViewStyle
                            initialClass="bottomToTop"
                            animationClass="visible"
                            triggerOnce
                        >
                            <h3 className={styles.h3}>
                                Промышленность 4.0
                            </h3>
                            <p className={styles.p}>
                                VR-инструменты способствуют более быстрому
                                и безопасному обучению
                            </p>
                        </InViewStyle>
                    </div>
                    <div className={styles.item}>
                        <InViewStyle
                            initialClass="bottomToTop"
                            animationClass="visible"
                            triggerOnce
                        >
                            <h3 className={styles.h3}>
                                Эффективность обучения
                            </h3>
                            <p className={styles.p}>
                                VR-тренажёр в образовательном процессе повышает
                                качество усвоения материала
                            </p>
                        </InViewStyle>
                    </div>
                    <div className={styles.item}>
                        <InViewStyle
                            initialClass="bottomToTop"
                            animationClass="visible"
                            triggerOnce
                        >
                            <h3 className={styles.h3}>
                                Снижение затрат
                            </h3>
                            <p className={styles.p}>
                                Проведение обучения
                                без простоя оборудования
                            </p>
                        </InViewStyle>
                    </div>
                    <div className={styles.item}>
                        <InViewStyle
                            initialClass="bottomToTop"
                            animationClass="visible"
                            triggerOnce
                        >
                            <h3 className={styles.h3}>
                                Безопасность
                            </h3>
                            <p className={styles.p}>
                                Снижение рисков несчастных случаев
                                на производстве
                            </p>
                        </InViewStyle>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AlignmentVr