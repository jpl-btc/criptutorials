import React from "react";
import TextLoop from "react-text-loop";
import Particles from "react-tsparticles";

const sliderContent = {
  name: "CripTutorials",
  description: `Web creada por JPL desde dentro de la comunidad "La Crypta". Me considero un aprendiz de la materia, 
  lejos estoy de ser un experto. Considero que cuando más se aprende es haciendo y compartiendo con otros... 
  Es por ello que cree esta web: para ir compartiendo con otros mi trayectoria en el aprendizaje, y reforzar así el conocimiento.`,
  btnText: "DOWNLOAD CV",
};

const SliderTwo = () => {
  return (
    <>
      {/*  Home Banner */}
      <section
        id="home"
        className="home-banner home-banner-two"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/img/slider/CripTutorialsv2.jpg"
          })`,
        }}
      >
        <div className="frame-layout__particles">
          <Particles
            id="tsparticles"
            options={{
              backgroundMode: {
                enable: true,
                zIndex: 1,
              },
              fullScreen: {
                enable: false,
                zIndex: -1,
              },
              fpsLimit: 70,
              interactivity: {
                detectsOn: "canvas",
                events: {
                  onClick: {
                    enable: false,
                    mode: "push",
                  },
                  onHover: {
                    enable: false,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.4,
                    size: 40,
                  },
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#ddd",
                },
                links: {
                  color: "#ffffff",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outMode: "bounce",
                  random: false,
                  speed: 2,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    value_area: 800,
                  },
                  value: 30,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  random: true,
                  value: 6,
                },
              },

              detectRetina: true,
            }}
          />
        </div>
        {/* End particle animation */}
        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-lg-12">
              <div className="type-box">
                <h6 data-aos="fade-up" data-aos-duration="1200">
                  Bienvenidos a la web de Tutoriales
                </h6>
                <h1
                  className="font-alt"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  {sliderContent.name}
                </h1>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <TextLoop>
                    <p className="loop-text lead"> Tutoriales p/ novatos</p>
                    <p className="loop-text lead">
                      {" "}
                      Tutoriales p/ programadores
                    </p>
                    <p className="loop-text lead"> Lightning Network & Nostr</p>
                    <p className="loop-text lead">
                      {" "}
                      Nostr: Clientes, Apps y Relays
                    </p>

                    <p className="loop-text lead">
                      {" "}
                      Nips | WebLN | Luds | Lnurls | Bolts
                    </p>
                    <p className="loop-text lead">
                      {" "}
                      Alby | Voltage | Lnbits | Y mucho más...{" "}
                    </p>
                  </TextLoop>
                </div>
                <p
                  className="desc"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  {sliderContent.description}
                </p>
                <div
                  className="mt-4"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                ></div>
              </div>
            </div>
          </div>
        </div>
        {/* End Container*/}
      </section>

      {/* End Home Banner  */}
    </>
  );
};

export default SliderTwo;
