import Button from "./Button";

export default function Tabs({ icons }) {
  const IconComponent = icons.icon;

  return (
    <li className="bg-white grid gap-[.5rem] py-[2rem] px-[1rem] rounded-md border-2 shadow-md">
      <IconComponent className="text-red-400 text-[3rem]" />
      <h1 className="font-bold text-[2rem] text-red-500"> Service Title </h1>
      <p className="text-stone-700">{icons.text}</p>

      <Button> Read More </Button>
    </li>
  );
}