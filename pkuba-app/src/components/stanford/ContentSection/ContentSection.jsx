import React from "react";
import styles from "./ContentSection.module.css";

export const ContentSection = ({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  imageSrc,
  imageAlt,
  isReversed,
}) => {
  const containerClass = isReversed
    ? styles.containerReverse
    : styles.container;

  return (
    <section className={containerClass}>
      <div className={styles.content}>
        <h3 className={styles.subtitle}>{subtitle}</h3>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <a href={ctaLink} className={styles.cta}>
          {ctaText}
        </a>
      </div>
      <img src={imageSrc} alt={imageAlt} className={styles.image} />
    </section>
  );
};
