import type { ReactNode } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  lead: ReactNode;
  titleId?: string;
  className?: string;
  children?: ReactNode;
}

export default function PageHero({
  eyebrow,
  title,
  lead,
  titleId,
  className,
  children,
}: PageHeroProps) {
  return (
    <header className={clsx(styles.hero, className)}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h1 className={styles.title} id={titleId}>
        {title}
      </h1>
      <p className={styles.lead}>{lead}</p>
      {children}
    </header>
  );
}
