import React from "react";
import styles from "./Header.module.css";

export const Header = () => {
  const navLinks = [
    { text: "Learn", href: "#" },
    { text: "Events", href: "https://blockchain.stanford.edu/events" },
    { text: "Accelerator", href: "https://sba.sites.stanford.edu/" },
    { text: "Magazine", href: "https://review.stanfordblockchain.xyz/" },
    { text: "Contact", href: "https://blockchain.stanford.edu/#team" },
  ];

  return (
    <header className={styles.header}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/91bf8d4b6bf7a942507d1845126d61e1b4e40338d4a7edb38b1b7172ad0d9c50?placeholderIfAbsent=true&apiKey=32b89650940a4fc78fd6868c5a037340"
        alt="Stanford Blockchain Club Logo"
        className={styles.logo}
      />
      <nav className={styles.nav}>
        {navLinks.map((link, index) => (
          <a key={index} href={link.href} className={styles.navLink}>
            {link.text}
          </a>
        ))}
      </nav>
    </header>
  );
};
