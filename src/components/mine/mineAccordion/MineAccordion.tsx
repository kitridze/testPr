"use client";
import { useState } from "react";
import styles from "./MineAccordion.module.scss";

const accordionData = [
    { 
        title: "What payment methods can I use ?", 
        content: "At Core Framework, our mission is to revolutionize the way website developers of all skill sets approach website development, especially through the use of CSS frameworks." 
    },
    { 
        title: "Do you have a money back guarantee?", 
        content: "At Core Framework, our mission is to revolutionize the way website developers of all skill sets approach website development, especially through the use of CSS frameworks." 
    },
    { 
        title: "How does this plugin work?", 
        content: "At Core Framework, our mission is to revolutionize the way website developers of all skill sets approach website development, especially through the use of CSS frameworks." 
    },
    { 
        title: "Does it affect performance?", 
        content: "At Core Framework, our mission is to revolutionize the way website developers of all skill sets approach website development, especially through the use of CSS frameworks." 
    },
];

export default function MineAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.accordion}>
      {accordionData.map((item, index) => (
        <div key={index} className={styles.item}>
          <button 
            className={styles.header} 
            onClick={() => toggleAccordion(index)}
            aria-expanded={activeIndex === index}
          >
            <span className={styles.title}>{item.title}</span>
            <span className={styles.icon}>
              {activeIndex === index ? "−" : "+"}
            </span>
          </button>
          
          <div className={`${styles.content} ${activeIndex === index ? styles.active : ""}`}>
            <div className={styles.inner}>{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
}