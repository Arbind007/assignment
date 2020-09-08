import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
function question() {
  return (
    <Accordion defaultActiveKey="5">
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            <h4 className="font-weight-bold text-dark py-3">
              How do I create a playlist?
            </h4>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <ul>
              <li>
                Playlists are a great way to save collections of music, either
                for your own listening or to share. To create one:
              </li>
              <li>1.Tap Your Library.</li>
              <li>2.Tap CREATE.</li>
              <li>3.Give your playlist a name.</li>
              <li>4.Start adding songs (and we’ll help you along).</li>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            <h4 className="font-weight-bold text-dark py-3">
              How do I activate Data Saver mode?
            </h4>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <ul>
              <li>1.Tap Home. </li>
              <li>2.Tap Settings. </li>
              <li>3.Tap Data Saver. </li>
              <li>4.Switch on Data Saver.</li>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="2">
            <h4 className="font-weight-bold text-dark py-3">
              Is it only possible to shuffle play music
            </h4>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
            Any playlist with the shuffle icon will play on shuffle. Some
            playlists won't have the shuffle icon, so you can tap any song to
            play it.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="3">
            <h4 className="font-weight-bold text-dark py-3">
              Where can I find Podcasts?
            </h4>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="3">
          <Card.Body>
            Tap Search <i class="fas fa-search"></i> . Under Browse All, tap
            Podcasts.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default question;
