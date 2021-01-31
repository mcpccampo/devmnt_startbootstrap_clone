import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <header className="header">
      <h1>Start BootStrap</h1>
      <nav className="nav-bar">
        <p className="nav-item">Services</p>
        <p className="nav-item">Portfolio</p>
        <p className="nav-item">About</p>
        <p className="nav-item">Team</p>
        <p className="nav-item">Contact</p>
      </nav>
      <img
        
        alt="burger menu"
        src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg"
      />
      <nav className="mobile-nav-bar">
        <p className="nav-item">Services</p>
        <p className="nav-item">Portfolio</p>
        <p className="nav-item">About</p>
        <p className="nav-item">Team</p>
        <p className="nav-item">Contact</p>
      </nav>
    </header>
  );
}

export default App;
