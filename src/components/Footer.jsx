import { FaFacebookF, FaGoogle, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.png";

const icons = [FaFacebookF, FaGoogle, FaInstagram];

export default function Footer() {
  return (
    <footer className="pt-[5rem]">
      <div className="container grid gap-[2rem] lg:grid-cols-2 mb-[4rem]">
        <span className="flex justify-between lg:flex-col gap-[1rem]">
          <img
            src={logo}
            alt="logo-footer"
            className="bg-gray w-[11rem] h-[3rem]"
          />
          <div className="flex flex-col md:flex-row gap-[.5rem]">
            {icons.map((Icon, index) => (
              <div
                key={index}
                className="bg-yellow-400 cursor-pointer w-[2.5rem] h-[2.5rem] grid place-items-center p-[.5rem] rounded-[50%]"
              >
                <Icon className="text-red-500 text-[1.2rem]" />
              </div>
            ))}
          </div>
        </span>
        <span className="grid gap-[2rem] sm:grid-cols-2 md:grid-cols-3">
          <div>
            <h1 className="font-bold mb-[1rem]"> Contact </h1>
            <div className="contact">
              <p> xxx-xxx-xxxx </p>
              <p> user@gmail.com </p>
            </div>
          </div>

          <div>
            <h1 className="font-bold mb-[1rem]"> Address </h1>
            <p> Blank St, Blank City Philippines </p>
          </div>

          <div>
            <h1 className="font-bold mb-[1rem] whitespace-pre-wrap"> Opening Hours </h1>
            <p> Tuesday, Thursday, Friday: 9am-6pm </p>
          </div>
        </span>
      </div>
      <div className="border-t-black border-t-[1px] mt-[3rem]">
        <p className="container"> &copy; 2024 Some copyright message </p>
      </div>
    </footer>
  );
}
