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
      <section id="intro"></section>
      <section id="about-us"></section>
      <section id="contact-us">
        <h1 id='contact-us-heading'>Contact Us</h1>
    
        <div id='email-list' class='contact-box'>By Email<br />
          David - up2049418@myport.ac.uk<br />
          Oguz - up2157044@myport.ac.uk<br />
          Hritik - up2115893@myport.ac.uk<br />
          Akobir - up2158827@myport.ac.uk<br />
          Jerome - up2064796@myport.ac.uk<br />
          Tobias - up2079666@myport.ac.uk
        </div>
        
        <div id='phone-list' class='contact-box'>By Phone<br />
          +44000000001<br />
          +44000000002<br />
          +44000000003<br />
          +44000000004<br />
          +44000000005<br />
          +44000000006
        </div>

        

        
      </section>
    </div>
  );
}

export default App;
