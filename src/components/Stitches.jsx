import Button from "./Button";
import Overlay from "./Overlay"

export default function Stitches({...props}) {
  return (
    <section className="relative z-10 py-[3rem] mt-[5rem] parallax">
        <div className="container grid gap-[1rem] place-items-center text-center">
            <span>
                <h1 className="font-bold text-red-500"> {props.title} </h1>
                <h2 className="text-[2rem] lg:text-[3rem] font-bold text-white"> {props.head} </h2>
            </span>
            <p className="max-w-[700px] text-white"> {props.text} </p>
            <Button center children='Get A Free Quote' />   
        </div>
        <Overlay />
    </section>
  )
}
