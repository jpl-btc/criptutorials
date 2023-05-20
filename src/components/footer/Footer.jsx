import React from "react";
import {
  FaSkype,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaSkype />, link: "https://join.skype.com/invite/GfbH7P9HcdtW" },
  {
    Social: <FaInstagram />,
    link: "https://www.instagram.com/juanpablolaclau/",
  },
  {
    Social: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/jplaclau/",
  },
  { Social: <FaGithub />, link: "https://github.com/JPLACLAU" },
  { Social: <FaWhatsapp />, link: "https://wa.me/5491122653586" },
];

const Footer = () => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-md-6 my-2">
          <div className="nav justify-content-center justify-content-md-start">
            {SocialShare.map((val, i) => (
              <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
                {val.Social}
              </a>
            ))}
          </div>
          {/* End .nav */}
        </div>
        {/* End .col */}

        <div className="col-md-6 my-2 text-center text-md-end">
          <p>
            © {new Date().getFullYear()} copyright Jean-Paul Laclau all right
            reserved
          </p>
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
    </>
  );
};

export default Footer;
