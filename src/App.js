import { faDiscord, faPatreon, faPaypal } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  Link, Route, Switch
} from "react-router-dom";
import './App.scss';
import ArtifactDisplay from './Artifact/ArtifactDisplay';
import BuildDisplay from './Build/BuildDisplay';
import CharacterDisplay from './Character/CharacterDisplay';
import { version } from "../package.json"

function App() {
  return (
    <div className="h-100 d-flex flex-column">
      <div id="content" className="flex-grow-1">
        <Navbar bg="dark" variant="dark" expand="md">
          <Navbar.Brand as={Link} to="/">Genshin Optimizer</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/artifact">
              Artifacts</Nav.Link>
            <Nav.Link as={Link} to="/character">Characters</Nav.Link>
            <Nav.Link as={Link} to="/build">Builds</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href={process.env.REACT_APP_PAYPAL_LINK} target="_blank" ><FontAwesomeIcon icon={faPaypal} className="fa-fw" /> PayPal</Nav.Link>
            <Nav.Link href={process.env.REACT_APP_PATREON_LINK} target="_blank" ><FontAwesomeIcon icon={faPatreon} className="fa-fw" /> Patreon</Nav.Link>
            <Nav.Link href={process.env.REACT_APP_DISCORD_LINK} target="_blank" ><FontAwesomeIcon icon={faDiscord} className="fa-fw" /> Discord</Nav.Link>
          </Nav>
        </Navbar>

        <Switch>
          <Route path="/artifact" component={ArtifactDisplay} />
          <Route path="/character" component={CharacterDisplay} />
          <Route path="/build" component={BuildDisplay} />
          <Route path="/" component={ArtifactDisplay} />
          {/* <Route exact path="/" component={Home} /> */}
        </Switch>

      </div>
      <Nav id="footer" className="bg-dark">
        <Row className="w-100 ml-0 mr-0 mb-2 text-light d-flex justify-content-between">
          <Col xs={"auto"}>
            <span > <small>Genshin Optimizer is not affiliated with or endorsed by miHoYo. </small></span>
          </Col>
          <Col xs={"auto"}>
            <span  ><small > Genshin Optimizer Ver:{version} </small></span>
          </Col>
        </Row>
      </Nav>
    </div>
  );
}

export default App;
