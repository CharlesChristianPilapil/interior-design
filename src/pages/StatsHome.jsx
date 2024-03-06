// StatsHome.jsx
import Button from "../components/Button";
import {
  FaAward,
  FaChartLine,
  FaPeopleArrows,
  FaProjectDiagram,
} from "react-icons/fa";
import StatsTabs from "./StatsTabs";

const tabs = [
  {
    icon: FaPeopleArrows,
    title: "Workers",
    number: "500+",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida, ex in commodo euismod, justo nisi bibendum libero,",
  },
  {
    icon: FaChartLine,
    title: "Experience",
    number: "12 Years",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida, ex in commodo euismod, justo nisi bibendum libero,",
  },
  {
    icon: FaAward,
    title: "Awards Winner",
    number: "200+",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida, ex in commodo euismod, justo nisi bibendum libero,",
  },
  {
    icon: FaProjectDiagram,
    title: "Current Projects",
    number: "100+",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida, ex in commodo euismod, justo nisi bibendum libero,",
  },
];

export default function StatsHome() {
  return (
    <section className="container grid gap-[2rem] xl:grid-cols-2">
      <span className="flex flex-col gap-[1rem] xl:order-2 xl:justify-center">
        <h1 className="text-[2rem] xl:text-[3rem] font-bold text-stone-900">
          We offer project management services
        </h1>
        <p className="text-stone-700">
          We can help you design your project and develop a comprehensive plan
          to ensure that it meets your specific needs and requirements. Our team
          of architects and engineers will work closely with you to create a
          design that is both functional and aesthetically pleasing.
        </p>
        <Button children="Learn More" />
      </span>
      <ul className="grid gap-[1rem] md:grid-cols-2">
        {tabs.map((tab) => (
          <StatsTabs key={tab.title} icons={tab} />
        ))}
      </ul>
    </section>
  );
}
