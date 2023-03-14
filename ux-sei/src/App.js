import "./App.css";
import "./components/FullCard.css";
import picOne from "./Img/About Us.png";
import picTwo from "./Img/Nearest Location.avif";
import picThree from "./Img/Tea for Snacks.png";
import Navbar from "./components/NavBar";
import FullCard from "./components/FullCard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="card-container">
        <FullCard image={picOne} />
        <FullCard image={picTwo} />
        <FullCard image={picThree} />
      </div>
    </div>
  );
}

export default App;
