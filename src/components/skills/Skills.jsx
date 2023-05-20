import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const skillContent = [
  {
    name: "HTML5 | CSS | NodeJS",
    numberPercent: "80",
    startCount: "0",
    endCount: "80",
  },
  {
    name: "JavaScript | TypeScript | React JS",
    numberPercent: "75",
    startCount: "0",
    endCount: "75",
  },
  {
    name: "Solidity",
    numberPercent: "70",
    startCount: "0",
    endCount: "70",
  },
  {
    name: "Bitcoin Script & MiniScript | Nostr | Lightning Network ",
    numberPercent: "45",
    startCount: "0",
    endCount: "45",
  },
  {
    name: "GIT | Linux | Nginx | GCP Deployment",
    numberPercent: "65",
    startCount: "0",
    endCount: "65",
  },
  {
    name: "Wordpress | Woocomerce ",
    numberPercent: "90",
    startCount: "0",
    endCount: "90",
  },
  {
    name: "R for Data Science",
    numberPercent: "85",
    startCount: "0",
    endCount: "85",
  },
];

const Skills = () => {
  const [focus, setFocus] = React.useState(false);
  return (
    <>
      <div className="skill-wrapper">
        {skillContent.map((skill, i) => (
          <div className="skill-lt" key={i}>
            <h6>{skill.name}</h6>
            <span className="count-inner">
              <CountUp
                start={focus ? skill.startCount : null}
                end={skill.endCount}
                duration={1}
                redraw={true}
              >
                {({ countUpRef }) => (
                  <VisibilitySensor
                    onChange={(isVisible) => {
                      if (isVisible) {
                        setFocus(true);
                      }
                    }}
                  >
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              %
            </span>
            <div className="skill-bar">
              <div
                className="skill-bar-in"
                style={{ width: skill.numberPercent + "%" }}
              ></div>
            </div>
          </div>
          // End skill-lt
        ))}
      </div>
    </>
  );
};

export default Skills;
