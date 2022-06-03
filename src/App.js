import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [costs, setCosts] = useState([])


  useEffect(()=> {
    fetch("http://localhost:9292/costs")
      .then((r) => r.json())
      .then((data) => console.log(data));
  },[]);

   



  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
