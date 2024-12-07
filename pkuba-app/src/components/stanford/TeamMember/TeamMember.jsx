import React from "react";
import styles from "./TeamMember.module.css";

export const TeamMember = ({ image, name, title, socialLinks }) => {
  return (
    <div className={styles.member}>
      <img src={image} alt={`${name} - ${title}`} className={styles.image} />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.title}>{title}</p>
      <div className={styles.socialLinks}>
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className={styles.socialLink}
            aria-label={`${name}'s ${link.platform}`}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};
