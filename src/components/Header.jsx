import Button from "./Button";
import Overlay from "./Overlay";
import TabsContainer from "./TabsContainer";

export default function Header() {
  return (
    <header className="h-[800px] parallax grid place-items-center relative z-10">
      <div className="container grid gap-[2rem]">
        <span>
          <h2 className="font-bold text-red-400"> PLAN FOR A SECURE FUTURE </h2>
          <h1 className="text-[2rem] lg:text-[3rem] lg:max-w-[700px] font-bold text-white max-w-[500px]">
            Elevate Your Performance With Our Leading-Edge Consulting Solutions
          </h1>
        </span>

        <Button children="Request Appointment" />
      </div>
      <Overlay />
    </header>
  );
}
