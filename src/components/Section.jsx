import Button from "./Button";

export default function Section({ title, center, text, children }) {
  return (
    <section className={`container grid gap-[1rem] ${center ? "text-center" : ""} mb-[5rem]`}>
      <div>
        <h1 className="text-[3rem] font-bold text-red-500"> {title} </h1>
        {text && text}
      </div>
      {children}
    </section>
  );
}
