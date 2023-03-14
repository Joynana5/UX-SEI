
import "./components/Carousel.css";
import Navbar from "./components/NavBar";
import Carousel from "./components/Carousel";
import HoriScroll from "./components/HoriScroll";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <HoriScroll />
      <Footer />
    </div>
  );
}

export default App;
