import Button from "../components/Button";
import Gallery from "../components/Gallery";
import Section from "../components/Section";
import Stitches from "../components/Stitches";
import TabsContainer from "../components/TabsContainer";
import StatsHome from "./StatsHome";
import WhyChooseUs from "./WhyChooseUs";

export default function Home() {
  return (
    <>
      <TabsContainer />
      <Section
        title="Photo Gallery"
        center
        text={
          <h1 className="text-stone-700 max-w-[700px] mx-auto">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Amet minim
            mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequat duis enim velit mollit.
          </h1>
        }
      >
        <Gallery />
        <Button center> View More </Button>
      </Section>
      <WhyChooseUs />
      <StatsHome />
      <Stitches
        title="CONTACT US"
        head="Get It Done With Us Today"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis at sit pellentesque molestie. Diam, adipiscing ultrices eu turpis gravida."
      />
    </>
  );
}
