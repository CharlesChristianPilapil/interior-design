import Section from "../components/Section";

export default function WhyChooseUs() {
  return (
    <Section center title="Explore with Us">
      <section className="text-start grid gap-[2rem] lg:grid-cols-2">
        <div className="flex flex-col gap-[1rem] lg:justify-center xl:gap-[2rem]">
          <h1 className="font-bold text-[1.5rem] lg:text-[3rem]"> What makes us different? </h1>
          <p className="max-w-[600px]">
            Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices
            in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Non quae, fugiat ad libero ut justo
            lorem dolor.
          </p>

          <ul className="grid gap-[.5rem] sm:grid-cols-2 dotted-ul">
            <li> Wall painting designs </li>
            <li> Personalized design services </li>
            <li> Home Decorating </li>
            <li> Interior design Solutions </li>
            <li> Interior Decoration </li>
            <li> Stylish living home </li>
          </ul>
        </div>
        <img className="rounded-lg" src="https://i.pinimg.com/originals/3f/c3/2b/3fc32b3699a73c4a172720cc51b24e19.gif" alt="image gif" />
      </section>
    </Section>
  );
}
