import styles from "./SectionHeading.module.css";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "start";
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={`${styles.heading} ${align === "center" ? styles.center : ""}`}>
      <span className={styles.eyebrow}>{eyebrow}</span>
      <h2 className={styles.title}>{title}</h2>
      <span className={styles.rule} aria-hidden="true" />
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
