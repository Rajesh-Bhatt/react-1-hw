import styles from "./page.module.css";

const values = [
  {
    number: 1,
    title: "Exploration",
    description:
      "We are driven by a deep-seated desire to explore the unknown. We believe that the pursuit of discovery is at the heart of human nature, and we are committed to pushing the boundaries of what is possible.",
  },
  {
    number: 2,
    title: "Innovation",
    description:
      "At Galactica, we prioritize cutting-edge technology and innovation. We are constantly evolving our spacecraft, safety protocols, and services to ensure that our travelers experience the most advanced and secure space journeys available.",
  },
  {
    number: 3,
    title: "Sustainability",
    description:
      "We are committed to making space exploration sustainable for future generations. Our space missions are designed to minimize environmental impact, both on Earth and in space, and to foster a spirit of responsibility towards our universe.",
  },
  {
    number: 4,
    title: "Community",
    description:
      "We believe in the power of collective exploration. Our journeys are not just about reaching new destinations; they are about building a community of space enthusiasts who share a passion for the stars.",
  },
];

export const OurValues = () => {
  return (
    <div className={styles.container}>
      {values.map((value) => (
        <div className={styles.item} key={value.number}>
          <div className={styles.number}>{value.number}</div>
          <div>
            <h3>{value.title}</h3>
            <p className={styles.text}>{value.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
