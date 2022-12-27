import Header from "./components/Header";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Info />
      <Testimonials />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
