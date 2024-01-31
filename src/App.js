import './App.css';
import logo from './assests/logo.svg';

function App() {
  return (
    <div className="App">
      <div class="top-bar">
        <img id="logo" alt="Logo" src={logo}/>
        
        <div class="top-start">
            <a id="about">About Us</a>
            <a id="contact">Contact Us</a>
        </div>
        
        <div class="top-end">
            <button id="log-in" class="top-button">Log In</button>
            <button onclick="window.location.href = 'AccountPage.html';" id="sign-in" class="top-button">Sign In</button>
        </div>
      </div>
    </div>
  );
}

export default App;
