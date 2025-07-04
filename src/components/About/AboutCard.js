import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple">Aeshala Sadha Shiva </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br />
            I am currently pursuing <b className="purple">B.Tech 4th year </b> in <b className="purple"> Artificial Intelligence & Data Science branch </b>
            at Vardhaman College of Engineering.
            <br />
            <br />
            Apart from coding, some other activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
               Learning new Tech
            </li>
            <li className="about-activity">
               Listening music
            </li>
            <li className="about-activity">
               Watching movies
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
