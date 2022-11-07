import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Footer from "../../Partials/Footer/Footer";
import { VariantGaleriHeader } from "../../Partials/Header/Header";

export default function Galeri() {
  const images = [
    "https://raw.githubusercontent.com/nyxsr/galeri-jabar-bootstrap/master/assets/img/image%204.png",
    "https://raw.githubusercontent.com/nyxsr/galeri-jabar-bootstrap/master/assets/img/image%205.png",
    "https://raw.githubusercontent.com/nyxsr/galeri-jabar-bootstrap/master/assets/img/image%207.png",
    "https://raw.githubusercontent.com/nyxsr/galeri-jabar-bootstrap/master/assets/img/image%2010.png",
    "https://raw.githubusercontent.com/nyxsr/galeri-jabar-bootstrap/master/assets/img/image%2011.png",
    "https://raw.githubusercontent.com/nyxsr/galeri-jabar-bootstrap/master/assets/img/image%206.png",
    "https://raw.githubusercontent.com/nyxsr/galeri-jabar-bootstrap/master/assets/img/image8.png",
    "https://raw.githubusercontent.com/nyxsr/galeri-jabar-bootstrap/master/assets/img/image9.png",
  ];
  return (
    <>
      <VariantGaleriHeader />
      <div className="mt-2">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="10px">
            {images.map((v, idx) => (
              <img alt={idx} key={idx} src={v} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
      <Footer/>
    </>
  );
}
