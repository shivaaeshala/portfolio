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
          {/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
