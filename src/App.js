
import "./components/FullCard.css";
import picOne from "./Img/About Us CROP.png";
import picThree from "./Img/Nearest Location.avif";
import picTwo from "./Img/Snacks.png";
import Navbar from "./components/NavBar";
import FullCard from "./components/FullCard";
import "./components/Carousel.css";
import Carousel from "./components/Carousel";
import HoriScroll from "./components/HoriScroll";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <HoriScroll />

      <div className="card-container">
        <FullCard image={picOne} />
        <FullCard image={picTwo} />
        <FullCard image={picThree} />
      </div>

      <Footer />

    </div>
  );
}

export default App;
