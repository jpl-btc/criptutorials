import React from "react";
import Header from "../../components/header/HeaderTwo";
import Slider from "../../components/slider/SliderThree";
import About from "../../components/about/AboutTwo";
import Portfolio from "../../components/portfolio/Portfolio";
import Footer from "../../components/footer/Footer";
import useDocumentTitle from "../../components/useDocumentTitle";

const HomeLightSidebarTwo = () => {
  useDocumentTitle("|| CripTutorials ||");
  return (
    <div className="main-left theme-dark">
      <Header />
      {/* End Header Section */}

      <Slider />
      {/* End Slider Section */}

      <section id="work" className="section theme-light dark-bg">
        <div className="container">
          <div className="title">
            <h3>CripTutorials.</h3>
          </div>
          <Portfolio />
        </div>
      </section>
      {/* End Portfolio Section */}
      <About />
      {/* End About Section */}

      <footer className="footer white">
        <div className="container">
          <Footer />
        </div>
      </footer>
      {/* End Contact Section */}
    </div>
  );
};

export default HomeLightSidebarTwo;
