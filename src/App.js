import { FirebaseConfig } from "./config/Config";
import { initializeApp } from "firebase/app";

import "react-bootstrap/Container"
import "react-bootstrap/Navbar"
import "react-bootstrap/Nav"
import './app.css'
import Container from "react-bootstrap/Container"

import logo from './logo.svg';
import './App.css';
import { Navbar } from "react-bootstrap";

function App() {
  const FBapp = initializeApp(FirebaseConfig)
  return (
    <div className="App">
    <Navbar>
      <Container>
        
      </Container>

    </Navbar>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
