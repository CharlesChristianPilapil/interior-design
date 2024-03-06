export default function Button({ children, center }) {
  return (
    <button
      className={`bg-red-500 font-bold text-white px-[1rem] py-[.8rem] rounded-md z-10 w-fit buttons relative overflow-hidden
    ${center ? "mx-auto" : ""}`}>
      {children}
    </button>
  );
}
