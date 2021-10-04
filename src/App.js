import logo from './logo.svg';
import elmer from './shh-elmer-fudd.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hewwo?</h1>
      </header>
      <img src={ elmer } alt="Elmer fudd making a gesture to be quiet" />
        <p><span class="shush">Shhhhhh!</span> Be vewwy vewwy quiet. I want to hunt wabbits...🐰</p>
        <p>Cahn you tell me wuht season it is?</p>
    </div>
  );
}

export default App;
