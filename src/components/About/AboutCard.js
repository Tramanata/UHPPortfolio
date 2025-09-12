import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Tyler Ramanata </span>
            from <span className="purple"> Huntersville, NC.</span>
            <br />
            I am graduating from NC State University with Honors Majoring in 
            Computer Engineering and Minoring in Business.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Running
            </li>
            <li className="about-activity">
              <ImPointRight /> Working Out
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Tennis
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ramanata</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
