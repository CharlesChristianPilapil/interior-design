import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpg";
import gallery6 from "../assets/gallery6.jpg";
import GalleryTabs from "./GalleryTabs";

const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6]

export default function Gallery() {
  return (
    <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1rem]">
        {images.map((image, index) => <GalleryTabs key={index} image={image} />)}
    </ul>
  )
}
