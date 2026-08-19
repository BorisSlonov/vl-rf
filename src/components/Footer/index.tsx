import React from "react";
import styles from "./style.module.css";
import LogoIcon from "@/shared/ui/icons/LogoIcon";
import clsx from "clsx";
import Link from "next/link";

const Footer = () => {
  const contacts = [
    { text: "+7(812)900-50-51", link: "tel:+7(812)900-50-51" },
    { text: "edu@vibro-laser.com", link: "mailto:edu@vibro-laser.com" },
  ];

  return (
    <footer className={styles.footer} id="contacts">
      <div className="container">
        <div className={styles.body}>
          <div className={clsx(styles.item, styles.item1)}>
            <LogoIcon className={styles.logo} />
          </div>
          <div className={clsx(styles.item, styles.item2)}>
            <ul className={styles.menu}>
              <li className={styles.menuLi}>
                <Link className={styles.a} href="/скачать">
                  Скачать
                </Link>
              </li>
              <li className={styles.menuLi}>
                <Link className={styles.a} href="/инфо">
                  Инфо
                </Link>
              </li>
            </ul>
            <div className={styles.contactsWrapper}>
              <div className={styles.contacts}>
                <h3 className={styles.h3}>Адрес</h3>
                <p className={styles.address}>
                 199226, Россия, г. Санкт-Петербург, ул. Нахимова, д. 20,
                    Литера А, кв. 359
                </p>
              </div>
              <div className={styles.contacts}>
                <h3 className={styles.h3}>Контакты для связи</h3>
                <ul className={styles.ul}>
                  {contacts.map((item, index) => (
                    <li className={styles.li} key={index}>
                      <Link className={styles.a} href={item.link}>
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={styles.legal}>
              <p className={styles.disclaimer}>
                Информация на сайте не является публичной офертой (ст. 437 ГК РФ). Цены указаны в
                ознакомительных целях и могут быть изменены. Точную стоимость уточняйте у менеджера.
              </p>
              <nav className={styles.legalLinks} aria-label="Правовая информация">
                <Link className={styles.legalLink} href="/privacy-policy">
                  Политика конфиденциальности
                </Link>
                <Link className={styles.legalLink} href="/personal-data">
                  Согласие на обработку персональных данных
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
