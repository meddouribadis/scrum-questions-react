import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import scrumQuestions from './utils/library';

function ScrumQuestion() {
  const [scrumQuestion, setScrumQuestion] = useState(() => {
    const randomIndex = Math.floor(Math.random() * scrumQuestions.length);
    return scrumQuestions[randomIndex];
  });

  function handleClick() {
    const randomIndex = Math.floor(Math.random() * scrumQuestions.length);
    const randomString = scrumQuestions[randomIndex];
    setScrumQuestion(randomString);
  }

  return (
    <div>
      <p>{scrumQuestion}</p>
      <button className='button-4' onClick={handleClick}>Nouvelle question</button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <ScrumQuestion />
        </p>
      </header>
    </div>
  );
}

export default App;
