import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import { 
  Navbar, 
  Nav, 
  Form, 
  FormControl, 
  Button, 
  NavDropdown,
  Card 
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFile, faEnvelope } from '@fortawesome/free-solid-svg-icons';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      select: '#home'
    }
  }

  changePage() {
    this.setState((state) => {
      return {
        select: state.select
      }
    });
  }

  render() {
    return (
      <div className="App-header">
          <Menu fixed="top" />
          <Home />
          {/* <AppWrapper/> */}
      </div>
    );
  }
}

// class AppWrapper extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <body></body>
//     );
//   }
// }

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Navbar bg="white" variant="light" style={{minWidth: '550px', width: '20%', margin: '0 auto 0 auto', textAlign: 'center', borderRadius: 30}}>
          <Navbar.Brand style={{borderRadius: 30, backgroundColor: 'white', color: 'rgba(0,0,0,0.5)'}} href="#home">Raphael Fretter - Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/portfolio">Home</Nav.Link>
              <Nav.Link onClick={() => window.open("https://drive.google.com/file/d/1WZoEJeayZSW9Fbv7WwYZ74WbM7poE8d6/view")}>Resume</Nav.Link>
              <NavDropdown title="Projects" id="navbarScrollingDropdown">
                <NavDropdown.Item href="https://raphaelfretter.github.io/tttgame/">Tic-Tac-Toe Game</NavDropdown.Item>
                <NavDropdown.Item href="https://raphaelfretter.github.io/quote-machine/">Quote Machine</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {/* <Form inline>
              <FormControl style={{borderRadius: 30}} type="text" placeholder="Search" className="mr-sm-2" />
              <Button className="Menu-button" variant="outline-info">Search</Button>
            </Form> */}
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

function Home() {
  let d = new Date();

  return (
    <div>
      <div>
      <h1 align="center" style={{marginTop: 300, fontSize: 75}}><b>Raphael Fretter</b></h1>
      <h3 align="center">Software Developer</h3>
      </div>
      <div style={{marginTop: '1rem', textAlign: "center"}}>
      <Button style={{borderColor:'transparent', backgroundColor: 'white', color: '#99ff99', borderRadius: '50%', height: 50, width: 50, marginRight: 30}} onClick={() => window.open("https://www.linkedin.com/in/raphael-fretter/")}><FontAwesomeIcon icon={faLinkedinIn}/></Button>
      <Button style={{borderColor:'transparent', backgroundColor: 'white', color: '#99ff99', borderRadius: '50%', height: 50, width: 50, marginRight: 30}} onClick={() => window.open("https://drive.google.com/file/d/1WZoEJeayZSW9Fbv7WwYZ74WbM7poE8d6/view")}><FontAwesomeIcon icon={faFile}/></Button>
      <Button style={{borderColor:'transparent', backgroundColor: 'white', color: '#99ff99', borderRadius: '50%', height: 50, width: 50, marginRight: 30}} onClick={() => window.open("https://github.com/raphaelfretter")}><FontAwesomeIcon icon={faGithub}/></Button>
      <Button style={{borderColor:'transparent', backgroundColor: 'white', color: '#99ff99', borderRadius: '50%', height: 50, width: 50}} onClick={() => window.open("mailto:rfrette@bgsu.edu?subject=Reaching Out")}><FontAwesomeIcon icon={faEnvelope}/></Button>
      </div>
    </div>
  );
}

export default App;
