import Navbar from './Components/Navbars/Navbar';
import Text from './Components/Text';
import Rooms from './Components/RoomFolder/Rooms';
import Feature from './Components/Feature/Feature';
import Featuretext from './Components/Feature/Featuretext';
import RoomPics from './Components/RoomFolder/RoomPics';
import Gallery from './Components/Gallery/Gallery';
import GalleryPix from './Components/Gallery/GalleryPix';
import Images from './Components/About/Images';
import drinks from "./Components/svg/food.png";
import exit from "./Components/svg/exit.png";
import minibar from "./Components/svg/minibar.png";
import taxi from "./Components/svg/taxi.png";
import desk from "./Components/svg/information-desk.png";
import park from "./Components/svg/parking.png";
import hair from "./Components/svg/hair-dryer.png";
import water from "./Components/svg/water.png";
import About from './Components/About/About'
import pics1 from '../src/images/img1.webp';
import pics2 from "../src/images/img2.webp";
import pics3 from "../src/images/img3.webp";
import pics4 from './images/img4.webp';
import pics5 from './images/img5.webp';
import pics7 from './images/img7.webp';
import pics8 from './images/img8.webp';
 

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Navbar />
        <Text />
      </div>
      <div className="Room">
        <div
          className="roomone"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          <Rooms />
        </div>
        <div className="grid">
          <div
            className="sdds"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <RoomPics
              pics={pics1}
              title="STANDARD ROOM"
              amount="$350.00 / per night"
            />
          </div>

          <div
            className="sdds"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <RoomPics
              pics={pics2}
              title="STANDARD ROOM"
              amount="$400.00 / per night"
            />
          </div>

          <div
            className="sdds"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <RoomPics
              pics={pics3}
              title="STANDARD ROOM"
              amount="$255.00 / per night"
            />
          </div>

          <div
            className="sdds"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <RoomPics
              pics={pics1}
              title="STANDARD ROOM"
              amount="$350.00 / per night"
            />
          </div>

          <div
            className="sdds"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <RoomPics
              pics={pics2}
              title="STANDARD ROOM"
              amount="$350.00 / per night"
            />
          </div>

          <div
            className="sdds"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <RoomPics
              pics={pics3}
              title="STANDARD ROOM"
              amount="$350.00 / per night"
            />
          </div>
        </div>
      </div>

      <div className="flex_items">
        <div className="item1" data-aos="fade-right">
          <div className="post">
            <Images pics={pics2} />
          </div>

          <div className="posy">
            <Images pics={pics1} />
          </div>
        </div>
        <div className="item2" data-aos="fade-left">
          <About />
        </div>
      </div>

      <div className="text-center">
        <div
          className="tag"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          <Featuretext />
        </div>
        <div className="tag_one">
          <div
            className="flex"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <Feature cont={water} text="Swimming Pool" />
          </div>

          <div
            className="flex"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <Feature cont={desk} text="Hotel Teller" />
          </div>

          <div
            className="flex"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <Feature cont={exit} text="Fire Exit" />
          </div>

          <div
            className="flex"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <Feature cont={park} text="Car Parking" />
          </div>

          <div
            className="flex fix"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <Feature cont={hair} text="Hair Dryer" />
          </div>

          <div
            className="flex fix"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <Feature cont={minibar} text="Minibar" />
          </div>

          <div
            className="flex"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <Feature cont={drinks} text="Drinks" />
          </div>

          <div
            className="flex"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <Feature cont={taxi} text="Car Airport" />
          </div>
        </div>
      </div>

      <div className="text-centered">
        <div
          className="tag"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          <Gallery />
        </div>
        <div className="photogrid">
          <div
            className="pixgrid"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <GalleryPix rooms={pics1} />
          </div>

          <div
            className="pixgrid"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <GalleryPix rooms={pics2} />
          </div>

          <div
            className="pixgrid"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <GalleryPix rooms={pics3} />
          </div>

          <div
            className="pixgrid"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <GalleryPix rooms={pics5} />
          </div>

          <div
            className="pixgrid"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <GalleryPix rooms={pics5} />
          </div>

          <div
            className="pixgrid"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <GalleryPix rooms={pics4} />
          </div>

          <div
            className="pixgrid"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <GalleryPix rooms={pics7} />
          </div>

          <div
            className="pixgrid"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <GalleryPix rooms={pics8} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
