export default function StatsTabs({ icons }) {
  const IconComponent = icons.icon;

  return (
    <li className="grid gap-[.5rem] p-[1rem] shadow-md border-2">
      <span className="flex gap-[1rem] items-center">
        <div className="bg-yellow-300 p-[1rem] rounded-[50%]">
          <IconComponent className="text-red-400 text-[1rem]" />
        </div>
        <p className="xl:text-[1.5rem] font-bold text-stone-800">{icons.title}</p>
      </span>
      <h2 className="font-bold text-[1.5rem] text-red-500">{icons.number}</h2>
      <p className="text-stone-700">{icons.text}</p>
    </li>
  );
}
