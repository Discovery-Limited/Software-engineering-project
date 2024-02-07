import './App.css';
import logo from './assests/logo.svg';

function App() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/web_pages/LoginSignup');
  };

  return (
    // <Router>
      <div className="App">
        <div class="top-bar">
          <img id="logo" alt="Logo" src={logo} />

          <div class="top-start">
            <a id="about">About Us</a>
            <a id="contact">Contact Us</a>
          </div>

          <div class="top-end">
            <button id="log-in" class="top-button">Log In</button>
            <button id="sign-in" className="top-button" onClick={handleLoginClick}>
              Sign In
            </button>


          </div>
        </div>
        <Routes>
          <Route path="/web_pages/LoginSignup" element={<LoginSignup />} />
        </Routes>
      </div>
  );
}

export default App;
