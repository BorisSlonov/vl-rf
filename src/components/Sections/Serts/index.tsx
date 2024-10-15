import styles from './styles.module.scss'
import Image from 'next/image'
import ArrowIcon from '@/shared/ui/icons/arrowIcon'
import { InViewStyle } from '@/shared/ui/InViewStyle'

const Serts = () => {

    return (
        <section className={styles.section} id="foundation-support">
            <div className="container">
                <InViewStyle
                    initialClass="leftToRight"
                    animationClass="visible"
                    triggerOnce
                >
                    <Image src={'/logo_fond.svg'} alt='логотип фонд содействия инновациям' width={280} height={135} />
                </InViewStyle>
                <h2 className={styles.h2}>
                    <InViewStyle
                        initialClass="leftToRight"
                        animationClass="visible"
                        triggerOnce
                    >
                        СЕРТИФИКАТЫ и поддержка
                    </InViewStyle>
                </h2>
                <InViewStyle
                    initialClass="bottomToTop"
                    animationClass="visible"
                    triggerOnce
                >
                    <div className={styles.body}>
                        <p className={styles.item}>
                            Компания успешно реализовала проект по Разработке измерительной системы для проверки
                            несоосности валов роторных машин и выверки геометрии промышленного оборудования на
                            основе технологии цифрового детектирования лазерного луча с использованием ССР —
                            приёмника при поддержке Федерального государственного бюджетного учреждения «Фонд
                            содействия развитию малых форм предприятий в научно-технической сфере» (Фонд
                            содействия инновациям) <a className={styles.a} href="https://fasie.ru/">https://fasie.ru/</a> по программе Развитие-ЦТ-I /
                            Новые
                            производственные технологии
                        </p>
                        <p className={styles.item}>
                            Компания успешно реализовала проект по организации производства измерительной
                            системы для проверки несоосности валов роторных машин
                            и выверки геометрии
                            промышленного оборудования на основе технологии цифрового детектирования лазерного
                            луча с использованием ССР — приёмника при поддержке Федерального государственного
                            бюджетного учреждения «Фонд содействия развитию малых форм предприятий в научно-технической сфере» (Фонд содействия инновациям) <a className={styles.a} href="https://fasie.ru/">https://fasie.ru/</a>
                            по программе
                            Коммерциализация XIII (МСП)
                        </p>
                    </div>
                </InViewStyle>
                <InViewStyle
                    initialClass="bottomToTop"
                    animationClass="visible"
                    triggerOnce
                >
                    <a href="/documents.zip" download className={styles.btn}>
                        Договор гранта
                        <ArrowIcon className={styles.arrow} />
                    </a>
                </InViewStyle>
            </div>
        </section>
    )
}

export default Serts