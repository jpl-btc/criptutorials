import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaSkype,
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
  {
    Social: <FaGithub />,
    link: "https://github.com/JPLACLAU",
  },
  { Social: <FaWhatsapp />, link: "https://wa.me/5491122653586" },
];

const Social = () => {
  return (
    <div className="nav social-icons justify-content-center">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  );
};

export default Social;
