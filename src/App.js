import logo from './logo.svg';
import './App.css';
import ComponentA from './components/container/componentsA';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          OpenBootcamp ReactJS
        </p>
        <ComponentA/>
      </header>
    </div>
  );
}

export default App;
