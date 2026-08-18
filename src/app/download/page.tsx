import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/shared/ui/PageHero";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Скачать приложения | КСК-СИСТЕМС",
  description: "Приложения ВИБРО-ЛАЗЕР для Android и Windows.",
};

const downloads = [
  {
    id: "alignment-android",
    name: "ВИБРО-ЛАЗЕР Центровка",
    platform: "Android",
    version: "Версия 2.7.20",
    description:
      "Приложение для точной лазерной центровки валов в агрегатах, соединённых муфтой.",
    href: "/downloads/vl-alignment-2720-uns.zip",
    fileName: "vl-alignment-2720-uns.zip",
    size: "94,2 МБ",
  },
  {
    id: "vibro-laser-windows",
    name: "ВИБРО-ЛАЗЕР Центровка",
    platform: "Windows",
    version: "Версия 2.7",
    description:
      "Приложение ВИБРО-ЛАЗЕР для работы с измерительным оборудованием на компьютере.",
    href: "/downloads/VL_win_2_7.zip",
    fileName: "VL_win_2_7.zip",
    size: "48,2 МБ",
  },
] as const;

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3v12m0 0 5-5m-5 5-5-5M5 21h14" />
    </svg>
  );
}

export default function DownloadPage() {
  return (
    <main className={styles.main}>
      <section className={styles.section} aria-labelledby="downloads-title">
        <div className="container">
          <PageHero
            className={styles.heading}
            eyebrow="Программное обеспечение"
            title="Загрузки"
            titleId="downloads-title"
            lead={
              <>
                Выберите версию приложения для вашего устройства. Оба
                дистрибутива упакованы в ZIP-архивы.
              </>
            }
          />

          <div className={styles.grid}>
            {downloads.map((item) => (
              <article className={styles.card} key={item.id}>
                <div className={styles.icon} aria-hidden="true">
                  <Image src="/symbol.svg" alt="" width={58} height={68} />
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.meta}>
                    <span>{item.platform}</span>
                    <span>{item.version}</span>
                  </div>
                  <h2 className={styles.name}>{item.name}</h2>
                  <p className={styles.description}>{item.description}</p>

                  <div className={styles.cardFooter}>
                    <div className={styles.fileInfo}>
                      <span>{item.fileName}</span>
                      <span>{item.size}</span>
                    </div>
                    <a
                      className={styles.downloadButton}
                      href={item.href}
                      download
                      aria-label={`Скачать ${item.name} для ${item.platform}, ZIP, ${item.size}`}
                    >
                      <span>Скачать .zip</span>
                      <DownloadIcon />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
