import "./App.css";
import useScrollAnimation from "./animation";
function App() {
  const [setRef] = useScrollAnimation();

  return (
    <div className="App">
      <div className="top-bar">
        {/* Top Bar Content */}
        <div className="top-start">
          <a href="#about-us" id="about">
            About Us
          </a>
          <a href="#contact-us" id="contact">
            Contact Us
          </a>
        </div>

        <div className="top-end">
          <button id="log-in" className="top-button">
            Log In
          </button>
          <button
            onClick={() => (window.location.href = "AccountPage.html")}
            id="sign-in"
            className="top-button"
          >
            Sign In
          </button>
        </div>
      </div>
      <section id="intro"></section>

      <section id="about-us">
        <div className="container">
          <h2 className="title scroll-animation" ref={setRef}>
            About Us
          </h2>
          <p className="description scroll-animation" ref={setRef}>
            We are a team of passionate professionals dedicated to delivering
            excellence in our field. Our mission is to provide top-notch
            services and innovative solutions to our clients.
          </p>
          <a
            href="about-us-page.html"
            className="btn-main scroll-animation"
            ref={setRef}
          >
            Learn More
          </a>
        </div>
      </section>

      <section id="contact-us"></section>
    </div>
  );
}

export default App;
