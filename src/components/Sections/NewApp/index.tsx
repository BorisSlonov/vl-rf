import Image from "next/image"
import styles from "./styles.module.scss"
import Link from "next/link"

const NewApp = () => {

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.body}>
                    <div className={styles.item}>
                        <Image className={styles.img} src={'/app.png'} alt={'скриншот приложения'} width={510} height={330} />
                    </div>
                    <div className={styles.item}>
                        <h2 className={styles.h2}>
                            Новое приложение
                        </h2>
                        <p className={styles.p}>
                            Революционный интуитивно понятный интерфейс с 3D визуализацией
                        </p>
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
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewApp