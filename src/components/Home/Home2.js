import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/3676.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" style={{borderRadius:"50%", width:"80%", border:"3px #cd5ff8 solid"}} />
            </Tilt>
          </Col>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I started coding at 14, and ever since, building things with code has been my passion.
              <br />
              <br />I am proficient in
              <i>
                <b className="purple"> Python, Java, Javascript </b>, and I love solving problems through technology.
              </i>
              <br />
              <br />
              My core interest's include: &nbsp;
              <ul>
              <li>
                <b className="purple">
                Building end-to-end full-stack applications
                </b> with clean architecture and modern development practices
              </li>
              <li>
                <b className="purple">
                Designing scalable systems
                </b> using solid principles of 
                <b className="purple">System Design</b>
              </li>
              <li>
                <b className="purple">
                Developing and deploying machine learning models
                </b> that solve real-world problems
              </li>
              <br />
              </ul>
              I'm currently a <b className="purple"> mentor at Smart Interviews</b>, where I guide my juniors through the <b className="purple"> Data Structures and Algorithms (DSA) </b> mentorship program.
              <br />
              <br />
              Beyond building products and solving complex problems, I also have a strong passion for 
               <b className="purple"> contributing to open-source projects. </b>
               It's a space where I continuously learn, collaborate with developers globally, and give back to the tech community.
              
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/shivaaeshala"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://linkedin.com/in/sadha-shiva-aeshala/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/shiva__aeshala/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
