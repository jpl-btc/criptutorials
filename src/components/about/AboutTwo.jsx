import React from "react";
import Social from "../Social";

const AboutTwo = () => {
  return (
    <>
      <section id="about" className="section theme-light dark-bg">
        <div className="container">
          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="about-me">
                <div className="img">
                  <div className="img-in">
                    <img src="/img/about/about-me-2.png" alt="about" />
                  </div>
                  <Social />
                  {/* End social icon */}
                </div>
                {/* End img */}
                <div className="info">
                  <p>Web3*Web5 Developer</p>
                  <h3>Jean-Paul Laclau</h3>
                </div>
                {/* End info */}
              </div>
              {/* End about-me */}
            </div>
            {/* End col */}

            <div className="col-lg-7 ml-auto">
              <div className="about-info">
                <div className="title">
                  <h3>Autor del CripTutorials</h3>
                </div>
                <div className="about-text">
                  <p> TIPS: ⚡jplaclau@getalby.com | ⚡jpl@hodl.ar</p>
                  <p>
                    Después de un par de meses aprendiendo programación de
                    manera autodidacta, quería encontrar otras personas con
                    quien hablar mientras aprendía para no sentirme tan solo en
                    el viaje de #learn2code. Pase por varias comunidades hasta
                    que encontré La Crypta, y planté ahí mi banderín. Estoy
                    descubriendo que programar me da paz mental, y me hace
                    feliz. Espero que mis videos aporten valor en la vida de
                    otras personas. Gracias 😊 .{" "}
                  </p>
                  <p>Nostr: </p>
                  <p>
                    npub1kqp22llek97fvjk6u4zranwv99j75469t4g9cm5r6h0zrfswejjssnpvad
                  </p>
                </div>
                <div className="info-list">
                  <div className="row">
                    <div className="col-sm-6">
                      <ul></ul>
                    </div>
                    <div className="col-sm-6">
                      <ul></ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End col */}
          </div>

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}
        </div>
      </section>
    </>
  );
};

export default AboutTwo;
