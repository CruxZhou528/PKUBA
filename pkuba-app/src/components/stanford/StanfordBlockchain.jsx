import React from "react";
import { Header } from "./Header/Header";
import { Hero } from "./Hero/Hero";
import { ContentSection } from "./ContentSection/ContentSection";
import { TeamMember } from "./TeamMember/TeamMember";
import styles from "./StanfordBlockchain.module.css";

export const StanfordBlockchain = () => {
  const contentSections = [
    {
      title: "About Us",
      subtitle: "Summary",
      description:
        "Stanford Blockchain Club is Stanford's premier student organization for blockchain education and entrepreneurship. We host events, classes, run research projects, and support Stanford students building blockchain ventures through the Stanford Blockchain Accelerator.",
      ctaText: "View Flyer",
      ctaLink: "https://blockchain.stanford.edu/files/flyer_24fall.pdf",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/82aef303e4cf909a58f4b512ed71ecd8c7aad825bc87e144a2b3330a5b50c2ea?placeholderIfAbsent=true&apiKey=32b89650940a4fc78fd6868c5a037340",
      imageAlt: "About Stanford Blockchain Club",
      isReversed: false,
    },
  ];

  const teamMembers = [
    {
      name: "Jay Yu",
      title: "President",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4dea1e643b41271f8e9bd8b3f404a000606b3fe63abfb6b81146a6d8e5fe6e74?placeholderIfAbsent=true&apiKey=32b89650940a4fc78fd6868c5a037340",
      socialLinks: [
        {
          platform: "Twitter",
          href: "https://www.linkedin.com/in/jay-yu-0098b31a7/",
          icon: "",
        },
        {
          platform: "LinkedIn",
          href: "https://twitter.com/0xfishylosopher",
          icon: "",
        },
      ],
    },
  ];

  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      {contentSections.map((section, index) => (
        <ContentSection key={index} {...section} />
      ))}
      <section className={styles.team}>
        <h2 className={styles.teamTitle}>Leadership</h2>
        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </section>
      <footer className={styles.footer}>
        © 2023 Stanford Blockchain Club. All rights reserved.
      </footer>
    </main>
  );
};
