import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  const socialLinks = [
    {
      icon: "",
      href: "https://discord.com/invite/u9k6gbY",
      label: "Social Link 1",
    },
    {
      icon: "",
      href: "https://www.youtube.com/c/StanfordBlockchainClub",
      label: "Social Link 2",
    },
  ];

  return (
    <section className={styles.hero}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b57997b6d63c391b77fa52cfb2f91807a6cebb3fdc742d8f598f5d97fcb9bac?placeholderIfAbsent=true&apiKey=32b89650940a4fc78fd6868c5a037340"
        alt="Stanford Blockchain Club Banner"
        className={styles.banner}
      />
      <h1 className={styles.title}>Stanford Blockchain Club</h1>
      <p className={styles.subtitle}>
        Stanford University's official student group for everything blockchain,
        cryptoeconomics, and cryptocurrency.
      </p>
      <button className={styles.cta}>Join Us &gt;&gt;</button>
      <div className={styles.socialLinks}>
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className={styles.socialLink}
            aria-label={link.label}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </section>
  );
};
