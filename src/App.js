import Navbar from './Components/Navbars/Navbar';
import Text from './Components/Text';
import Rooms from './Components/RoomFolder/Rooms';
import RoomPics from './Components/RoomFolder/RoomPics';
import pics1 from '../src/images/img1.webp';
import pics2 from "../src/images/img2.webp";
import pics3 from "../src/images/img3.webp";


function App() {
  return (
    <div className="App">
      <div className="Header">
        <Navbar />
        <Text />
      </div>
      <div className="Room">
        <Rooms />

        <div className="grid">
          <div className="sdds">
            <RoomPics
              pics={pics1}
              title="STANDARD ROOM"
              amount="$350.00 / per night"
            />
          </div>

          <div className="sdds">
            <RoomPics
              pics={pics2}
              title="STANDARD ROOM"
              amount="$400.00 / per night"
            />
          </div>

          <div className="sdds">
            <RoomPics
              pics={pics3}
              title="STANDARD ROOM"
              amount="$255.00 / per night"
            />
          </div>

          <div className="sdds">
            <RoomPics
              pics={pics1}
              title="STANDARD ROOM"
              amount="$350.00 / per night"
            />
          </div>

          <div className="sdds">
            <RoomPics
              pics={pics2}
              title="STANDARD ROOM"
              amount="$350.00 / per night"
            />
          </div>

          <div className="sdds">
            <RoomPics
              pics={pics3}
              title="STANDARD ROOM"
              amount="$350.00 / per night"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;