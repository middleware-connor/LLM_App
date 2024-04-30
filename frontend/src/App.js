import logo from './logo.svg';
import './App.css';
import { BubbleChat } from "flowise-embed-react";

function App() {
  const CHAT_FLOW_ID = ''
  const API_HOST = ''

  return (
    <div className="App">
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
        <BubbleChat chatflowid={CHAT_FLOW_ID} apiHost={API_HOST} />
      </header>
    </div>
  );
}

export default App;
