import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { useJwt } from "react-jwt";

function App() {
  const [originState, setOriginState] = useState("https://mangam.camp-coding.tech");
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const token = urlParams.get('token');
    const language = urlParams.get('lang');
    var iframe = document.getElementById("myIframe");
    // Sending a message from Website A to Website B
    // Sending a message to the iframe in Website B
    iframe.onload = () => {
      const message = { token, language };
      iframe.contentWindow.postMessage(
        message,
        "https://mangam.camp-coding.tech"
        // "http://localhost:3000"
      );
    };
  }, []);

  useEffect(() => {
    setOriginState("*");
  }, []);
  return (
    <div className="App">
      <iframe
        id="myIframe"
        src="https://mangam.camp-coding.tech"
        // src="http://localhost:3000"
        frameborder="0"
        width={"397px"}
        height={"100vh"}
      ></iframe>
    </div>
  );
}

export default App;
