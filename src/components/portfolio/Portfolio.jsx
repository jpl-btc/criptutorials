import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import { FiLink } from "react-icons/fi";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

const tabList = [
  "Todos👀",
  "Alby🐝",
  "Nostr🦩",
  "₿itcoin & LN⚡",
  "Developers🌎🖥️",
];
const tabListContent = [
  {
    porftoliItems: [
      {
        img: "/img/portfolio/NostrxAlby.jpg",
        width: 400,
        height: 400,
        title: "Asociar Alby y Nostr",
        subTitle:
          "En este tutorial vamos a ver como Instalar Alby y Nostr. No vamos a explicar que son ni porque son importantes. Eso lo pueden charlar con sus amistades y conocidos que ya están en la red y usan Lightning Network. Solo vamos a ver como instalarlos y configurarlos para que todo funcione bien.",
        alterText: "Alby & Nostr",
        portfolioLink: "https://youtu.be/BjQVokLTeHc",
      },
      {
        img: "/img/portfolio/CryptaWallet.jpg",
        width: 400,
        height: 400,
        title: "Hace tu propia wallet ",
        subTitle:
          "Como crear una ⚡LN wallet⚡ con las herramientas de La Crypta. Lightning Network Onboarding.",
        alterText: "La Crypta + LNbits + Voltage",
        portfolioLink: "https://youtu.be/rIeI1f7ZkW0",
      },
      {
        img: "/img/portfolio/LNenSocialNetworks.jpg",
        width: 400,
        height: 400,
        title: "Recibir propinas de satoshis en Redes Sociales",
        subTitle:
          "Cómo recibir propinas en Satoshies vía Youtube, Twitter, Github, y Página Web.",
        alterText: "Propinas en Bitcoin en redes sociales",
        portfolioLink: "https://youtu.be/OVnNHJTl2qo",
      },
    ],
  },
  {
    porftoliItems: [
      {
        img: "/img/portfolio/NostrxAlby.jpg",
        width: 400,
        height: 400,
        title: "Asociar Alby y Nostr",
        subTitle:
          "En este tutorial vamos a ver como Instalar Alby y Nostr. No vamos a explicar que son ni porque son importantes. Eso lo pueden charlar con sus amistades y conocidos que ya están en la red y usan Lightning Network. Solo vamos a ver como instalarlos y configurarlos para que todo funcione bien.",
        alterText: "Alby & Nostr",
        portfolioLink: "https://youtu.be/BjQVokLTeHc",
      },
      {
        img: "/img/portfolio/LNenSocialNetworks.jpg",
        width: 400,
        height: 400,
        title: "Recibir propinas de satoshis en Redes Sociales",
        subTitle:
          "Cómo recibir propinas en Satoshies vía Youtube, Twitter, Github, y Página Web.",
        alterText: "Propinas en Bitcoin en redes sociales",
        portfolioLink: "https://youtu.be/OVnNHJTl2qo",
      },
    ],
  },
  {
    porftoliItems: [
      {
        img: "/img/portfolio/NostrxAlby.jpg",
        width: 400,
        height: 400,
        title: "Asociar Alby y Nostr",
        subTitle:
          "En este tutorial vamos a ver como Instalar Alby y Nostr. No vamos a explicar que son ni porque son importantes. Eso lo pueden charlar con sus amistades y conocidos que ya están en la red y usan Lightning Network. Solo vamos a ver como instalarlos y configurarlos para que todo funcione bien.",
        alterText: "Alby & Nostr",
        portfolioLink: "https://youtu.be/BjQVokLTeHc",
      },
    ],
  },
  {
    porftoliItems: [
      {
        img: "/img/portfolio/400x400.jpg",
        width: 400,
        height: 400,
        title: "Soon...",
        subTitle: "Soon...",
        alterText: "Soon...",
        portfolioLink: "#",
      },
    ],
  },
  {
    porftoliItems: [
      {
        img: "/img/portfolio/400x400.jpg",
        width: 400,
        height: 400,
        title: "Soon...",
        subTitle: "Soon...",
        alterText: "Soon...",
        portfolioLink: "#",
      },
    ],
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio-filter-01">
      <Tabs>
        <TabList className="filter d-flex flex-wrap justify-content-start">
          {tabList.map((val, i) => (
            <Tab key={i}>{val}</Tab>
          ))}
        </TabList>
        {/* End tablist */}
        <Gallery>
          {tabListContent.map((tabContent, i) => (
            <TabPanel key={i}>
              <div className="portfolio-content ">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {tabContent.porftoliItems.map((val, i) => (
                    <div className="portfolio-box-01" key={i}>
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>
                            <a
                              href={val.portfolioLink}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {val.title}
                            </a>
                          </h5>
                          <span>{val.subTitle}</span>
                        </div>
                        {/* End .portfolio-info */}
                        <Item
                          original={val.img}
                          thumbnail={val.img}
                          width={val.width}
                          height={val.height}
                        >
                          {({ ref, open }) => (
                            <div className="gallery-link">
                              <img
                                src={val.img}
                                alt="Childhood"
                                role="button"
                                ref={ref}
                                onClick={open}
                              />
                            </div>
                          )}
                        </Item>

                        <a
                          className="portfolio-icon"
                          href={val.portfolioLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FiLink />
                        </a>
                        {/* End .portfolio-icon */}
                      </div>
                    </div>
                  ))}
                </Masonry>
              </div>
              {/* End list wrapper */}
            </TabPanel>
          ))}
        </Gallery>
        {/* End tabpanel */}
      </Tabs>
    </div>
  );
};

export default Portfolio;
