import React, { useEffect, useState } from "react";
import "../styles/aboutme.css";
import Navbar from "../components/Navbar";
import Avatar from "react-avatar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faInstagram,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import { faCode } from "@fortawesome/free-solid-svg-icons";

function AboutMe() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className="AboutMe">
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <>
          <Navbar active={"aboutme"} />
          <div className="aboutMeContainer">
            <div className="avatarContainer">
              <Avatar size="200" round={true} />
            </div>
            {/* <div className="nameContainer">Abhinav</div> */}
            <div className="aboutMeText">
              <p>
                Hello there, it's great to meet you! My name is Abhishek, and I
                recently graduated in 2020 with a B.Tech degree. I have a
                passion for web development, and I acquired valuable skills
                through my training with Coding Ninjas. I am proficient in HTML,
                CSS, and JavaScript, and I am also skilled in backend
                technologies such as Nodejs, Express, and MongoDB.
              </p>
              <p>
                Aside from my technical skills, I also possess excellent
                communication skills and am adept at leading teams towards
                achieving common goals. I am a focused and goal-oriented
                individual, always striving to improve myself and make
                meaningful contributions to any project I am involved in.
              </p>
              <p>Thank you for taking the time to read about me.</p>
            </div>
            <div className="socialMediaLinkContainer">
              <a
                href={"https://www.linkedin.com/in/a6dubey/"}
                target="_black"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="fa-2x icon-hover"
                />
              </a>
              <a
                href={"https://www.instagram.com/a6dubey/"}
                target="_black"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="fa-2x icon-hover"
                />
              </a>
              <a
                href={"https://twitter.com/a6dubey"}
                target="_black"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="fa-2x icon-hover"
                />
              </a>
              <a
                href={"https://github.com/a6dubey"}
                target="_black"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className="fa-2x icon-hover" />
              </a>
              <a
                href={"https://leetcode.com/a6dubey/"}
                target="_black"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faCode} className="fa-2x icon-hover" />
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default AboutMe;
