import Image from "next/image"
import styles from "./styles.module.scss"
import Link from "next/link"
import { InViewStyle } from "@/shared/ui/InViewStyle"

const NewApp = () => {

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.body}>
                    <div className={styles.item}>
                        <InViewStyle
                            initialClass="leftToRight"
                            animationClass="visible"
                            triggerOnce
                        >
                            <Image className={styles.img} src={'/app.png'} alt={'скриншот приложения'} width={510} height={330} />
                        </InViewStyle>
                    </div>
                    <div className={styles.item}>
                        <h2 className={styles.h2}>
                            <InViewStyle
                                initialClass="bottomToTop"
                                animationClass="visible"
                                triggerOnce
                            >
                                Новое приложение
                            </InViewStyle>
                        </h2>
                        <div className={styles.p}>
                            <InViewStyle
                                initialClass="bottomToTop"
                                animationClass="visible"
                                triggerOnce
                            >
                                Революционный интуитивно понятный интерфейс с 3D визуализацией
                            </InViewStyle>
                        </div>
                        <InViewStyle
                            initialClass="rightToLeft"
                            animationClass="visible"
                            triggerOnce
                        >
                            <div className={styles.links}>
                                <p className={styles.a} >
                                    <Image src={'/android.svg'} alt="плейстор" width={25} height={25} />
                                    для Android
                                </p>
                                <p className={styles.a} >
                                    <Image src={'/ios.svg'} alt="плейстор" width={25} height={25} />
                                    для iOS
                                </p>
                            </div>
                        </InViewStyle>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewApp