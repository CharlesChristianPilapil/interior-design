import { FaCheckCircle, FaClock, FaThumbsUp, FaFileArchive } from "react-icons/fa";
import Tabs from "./Tabs";

const icons = [
  {
    icon: FaCheckCircle,
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae obcaecati doloribus autem aperiam aliquid aliquam est provident doloremque a vitae.",
  },
  {
    icon: FaClock,
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae obcaecati doloribus autem aperiam aliquid aliquam est provident doloremque a vitae.",
  },
  {
    icon: FaThumbsUp,
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae obcaecati doloribus autem aperiam aliquid aliquam est provident doloremque a vitae.",
  },
  {
    icon: FaFileArchive,
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae obcaecati doloribus autem aperiam aliquid aliquam est provident doloremque a vitae.",
  },
];

export default function TabsContainer() {
  return (
    <ul className="container grid md:grid-cols-2 xl:grid-cols-4 gap-[1rem] -mt-[8rem] z-10 relative mb-[4rem]">
      {icons.map((icon, index) => (
        <Tabs key={index} icons={icon} />
      ))}
    </ul>
  );
}