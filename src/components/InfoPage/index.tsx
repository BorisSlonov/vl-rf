import type { Metadata } from "next";
import PageHero from "@/shared/ui/PageHero";
import styles from "./styles.module.css";

export const metadata: Metadata = {
  title: "Информация о ПО | КСК-СИСТЕМС",
  description:
    "Описание, документация и условия использования ПО ВИБРО-ЛАЗЕР ЦЕНТРОВКА",
};

const technologies = [
  {
    title: "Платформа разработки",
    text: "Приложение построено на кроссплатформенном движке реального времени, основной язык разработки — C#. Среда исполнения входит в дистрибутив, поэтому программа не зависит от внешних сервисов.",
  },
  {
    title: "Архитектура",
    text: "Локальное модульное приложение. Функциональность разделена на интерфейс и 3D-визуализацию, управление рабочей сессией, связь с оборудованием, обработку данных, хранение и отчётность.",
  },
  {
    title: "Связь с оборудованием",
    text: "Обмен командами и измерительными данными с блоками M (VLM) и S (VLS) выполняется по Bluetooth Low Energy. Программа контролирует соединение, заряд и качество связи.",
  },
  {
    title: "Обработка данных",
    text: "Алгоритмическое ядро проверяет и фильтрует показания, рассчитывает параллельное смещение, угловую несоосность и необходимые перемещения опор. Все вычисления выполняются локально.",
  },
  {
    title: "Визуализация",
    text: "Трёхмерное представление машин, валов, муфты, измерительных блоков и опор в реальном времени с индикацией направлений корректировки.",
  },
  {
    title: "Хранение и отчётность",
    text: "Рабочие сессии хранятся локально. Отчёты формируются в HTML-представлении с возможностью экспорта в PDF.",
  },
];

const documents = [
  {
    type: "Инструкция",
    title: "Инструкция по установке",
    size: "558 КБ",
    href: "/documents/installation-guide.pdf",
  },
  {
    type: "Описание",
    title: "Функциональные характеристики",
    size: "691 КБ",
    href: "/documents/functional-characteristics.pdf",
  },
  {
    type: "Руководство",
    title: "Руководство по эксплуатации",
    size: "2,5 МБ",
    href: "/documents/user-manual.pdf",
  },
  {
    type: "Условия",
    title: "Тарифная политика",
    size: "295 КБ",
    href: "/documents/pricing-policy.pdf",
  },
];

function DownloadIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
    >
      <path d="M12 3v11m0 0 4-4m-4 4-4-4M5 17v3h14v-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function InfoPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className="container">
          <PageHero
            eyebrow="Программное обеспечение"
            title="ВИБРО-ЛАЗЕР ЦЕНТРОВКА"
            lead={
              <>
                Прикладное программное обеспечение для лазерной центровки
                валов роторных машин: насосов, компрессоров, вентиляторов,
                редукторов, электродвигателей и турбин.
              </>
            }
          >
            <p className={styles.intro}>
              Программа сопровождает специалиста на всех этапах работы — от
              подключения измерительных блоков и ввода размеров до живой
              центровки, контрольного измерения и формирования отчёта. Пять
              методов измерения позволяют работать как со свободным вращением
              вала, так и при ограниченном доступе к нему.
            </p>
            <p className={styles.intro}>
              Все вычисления выполняются на устройстве пользователя.
              Подключение к интернету и внешним серверам не требуется.
            </p>
          </PageHero>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Применяемые технологии</h2>
          <div className={styles.technologyGrid}>
            {technologies.map((item) => (
              <article className={styles.technologyCard} key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <p className={styles.platforms}>
            <strong>Поддерживаемые платформы:</strong> Windows x64 и Android
            9.0 (API 28) и выше. Для работы необходим адаптер Bluetooth Low
            Energy.
          </p>
        </div>
      </section>

      <section className={styles.documentsSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Документация</h2>
          <p className={styles.sectionDescription}>
            Руководства и материалы по программному обеспечению
            «ВИБРО-ЛАЗЕР ЦЕНТРОВКА».
          </p>
          <div className={styles.documentsGrid}>
            {documents.map((document) => (
              <article className={styles.documentCard} key={document.href}>
                <span className={styles.badge}>{document.type}</span>
                <div className={styles.documentBottom}>
                  <div>
                    <h3>{document.title}</h3>
                    <p>ВИБРО-ЛАЗЕР ЦЕНТРОВКА</p>
                  </div>
                  <a
                    className={styles.downloadLink}
                    href={document.href}
                    download
                    aria-label={`Скачать: ${document.title}`}
                  >
                    <span>{document.size}</span>
                    <DownloadIcon />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.legalSection}>
        <div className="container">
          <div className={styles.legalGrid}>
            <div>
              <h2 className={styles.sectionTitle}>Права на ПО</h2>
              <p>
                Исключительные права на ПО «ВИБРО-ЛАЗЕР ЦЕНТРОВКА» принадлежат
                ООО «КСК-СИСТЕМС». Права на использование предоставляются по
                лицензионной модели на основании лицензионного договора.
              </p>
              <p>
                Для получения прав направьте запрос на почту{" "}
                <a href="mailto:info@vibro-laser.com">
                  info@vibro-laser.com
                </a>
                .
              </p>
            </div>
            <div>
              <h2 className={styles.sectionTitle}>Правообладатель</h2>
              <dl className={styles.companyDetails}>
                <div><dt>Компания</dt><dd>ООО «КСК-СИСТЕМС»</dd></div>
                <div><dt>ИНН</dt><dd>7841441038</dd></div>
                <div><dt>ОГРН</dt><dd>1117847079261</dd></div>
                <div><dt>ОКВЭД</dt><dd>62.01 — разработка программного обеспечения</dd></div>
                <div><dt>Адрес</dt><dd>191123, г. Санкт-Петербург, Захарьевская ул., дом 10, литера В</dd></div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
