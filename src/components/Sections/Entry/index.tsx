import clsx from 'clsx'
import styles from './styles.module.scss'
import Image from 'next/image'

const Entry = () => {

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.body}>
                    <div className={styles.item}>
                        <Image className={styles.img} src={'/symbol.svg'} alt={'абстрактная фигура'} width={320} height={370} />
                    </div>
                    <div className={styles.item}>
                        <h1 className={styles.h1}>
                            Программное обеспечение для промышленности
                        </h1>
                        <p className={styles.p}>
                            ООО «КСК-СИСТЕМС» занимается разработкой и внедрением систем контроля и наладки промышленного оборудования, включая аппаратуру и программное обеспечение, предназначенных для проведения профессиональных работ по центровке и выверке геометрии промышленного оборудования, балансировке вращающегося оборудования
                            и вибрационного контроля
                        </p>
                        <p className={clsx(styles.p, styles.p_mt20)}>
                            Широкий спектр аппаратного и программного обеспечения для беспроводных систем мониторинга состояния промышленного оборудования решают ключевые задачи
                        </p>
                        <ul className={styles.ul}>
                            <li className={styles.li}>
                                Обеспечение высокой точности соосности валов
                            </li>
                            <li className={styles.li}>
                                Оценка прямолинейности и плоскостности фланцев для повышения качества продукции
                            </li>
                            <li className={styles.li}>
                                Определение геометрии рам и опор для безопасной установки роторного оборудования
                            </li>
                            <li className={styles.li}>
                                Оценка состояния оборудования без его разборки
                            </li>
                            <li className={styles.li}>
                                Обнаружение неисправности, которые могут привести к остановке или неправильной работе машины
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Image className={styles.arrow} src={'/entryArrow.svg'} width={963} height={45} alt='декор' />
        </section>
    )
}

export default Entry