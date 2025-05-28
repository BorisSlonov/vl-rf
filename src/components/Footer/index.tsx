import React from "react";
import styles from "./style.module.css";
import LogoIcon from "@/shared/ui/icons/LogoIcon";
import clsx from "clsx";
import Socials from "../Socials";
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
                <a className={styles.a} href="#laser-alignment">
                  Выверка центровки
                </a>
              </li>
              <li className={styles.menuLi}>
                <a className={styles.a} href="#geometry-alignment">
                  Выверка геометрии
                </a>
              </li>
              <li className={styles.menuLi}>
                <a className={styles.a} href="#vr">
                  VR
                </a>
              </li>
              <li className={styles.menuLi}>
                <a className={styles.a} href="#vibration-diagnostics">
                  Вибродиагностика
                </a>
              </li>
              <li className={styles.menuLi}>
                <a className={styles.a} href="#foundation-support">
                  Поддержка фонда
                </a>
              </li>
            </ul>
            <div className={styles.contactsWrapper}>
              <div className={styles.contacts}>
                <h3 className={styles.h3}>Адрес</h3>
                <p className={styles.address}>
                  191123, г. Санкт-Петербург, Захарьевская ул., дом 10 литера В
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
