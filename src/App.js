import logo from './logo.svg';
import './App.css';
import UserProfile from './heading/UserProfile';
import React,{useState} from 'react'
import MyButton from './button/MyButton';
import Profile from './heading/Profile';
import List from './list/List';

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  let logData = true 

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
        {logData ? (<MyButton />):( <UserProfile />)}
        <List/>
      </header>
      <section>
      <MyButton count={count} onClick={handleClick}  />
      <MyButton count={count} onClick={handleClick}  />
      </section>
    </div>
  );

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

}

export default App;
