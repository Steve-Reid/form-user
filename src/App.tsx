import React from 'react';
import { Form } from 'react-formio';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Form src="https://ufyrebemhtafezz.form.io/user/login" />
      </header>
    </div>
  );
}

export default App;
