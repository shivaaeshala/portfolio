import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import smalltalk from "../../Assets/Projects/smalltalk.png";
import vcemun from "../../Assets/Projects/vcemun.png";
import handgesture from "../../Assets/Projects/handgesture.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smalltalk}
              isBlog={false}
              title="Small Talk"
              description="A real-time chat application which allows users to create rooms and chat with their friends. It is build with React.js, Express.js, Node.js, MongoDB, Bootstrap. Have features which allows user for realtime messaging, and creating chat rooms seamlessly"
              ghLink="https://github.com/shivaaeshala/Real-Time-Chat-Application"
              demoLink="https://real-time-chat-application-pi-three.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vcemun}
              isBlog={false}
              title="VCEMUN"
              description=" Built a website for a college event named Model United Nations(MUN) using NextJS(Frontend), NodeJS(Backend), MongoDB(Database).  Hosted the website using GitHub"
              ghLink="https://github.com/VCE-Team/MUN"
              demoLink="https://mun.vardhaman.org/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={handgesture}
              isBlog={false}
              title="Gesture-Based Authentication System"
              description="Built a gesture recognition system using convolutional neural networks (CNNs) to enable secure, contactless authentication in various lighting conditions. Applied OpenCV and TensorFlow for video preprocessing and neural network training."
              ghLink="https://github.com/shivaaeshala/Gesture-based-authentication-system"           
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
