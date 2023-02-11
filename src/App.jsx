import React from "react";
import "./App.css";
import "../public/scripts/index.js";
function App() {
  return (
    <div>
      <header>
        <div class="navbar">
          <div class="nav">
            <a href="#" class="nav-item" id="active">
              HOME
            </a>
            <a href="#" class="nav-item">
              ABOUT
            </a>
            <a href="#" class="nav-item">
              CONTACT&nbsp;&nbsp;US
            </a>
          </div>
          <div class="register-btn">
            <a href="#" class="nav-item">
              REGISTER
            </a>
          </div>
        </div>
      </header>
      <div class="anime">
        <img className="stroke" alt="stroke" src="/images/stroke.png"/>
        <h2 className="">Anime!</h2>
        <img className="goku" alt="goku" src="/images/goku.webp"/>
        <img className="gojo" alt="gojo" src="/images/gojo.png"/>
        <img className="levi" alt="levi" src="/images/LEVI.png"/>
      </div>
      <div className="anicon">
        <img className="roger" alt="roger" src="/images/roger.png"/>
        <img className="guts" alt="guts" src="/images/guts.webp"/>
        <img className="konoyarro" alt="konoyarro" src="/images/punk.png"/>
        <img className="shinobu" alt="Shinobu!!!!!" src="/images/Shinobu!!!!!.png"/>
      </div>
      <footer>
        <img className="kakashi" alt="kakashi" src="/images/kakashi.webp"/>
        <img className="cowboy" alt="cowboy" src="/images/cowboy.png"/>
        <h5 className="right">Join our community</h5>
        <p className="p-right">You can find sneak peeks, vote on upcoming features, chat, share and learn from our team.</p>
        <h5>Got questions or feedback?</h5>
        <p>Be the first to ask, be the first to let us know. We are always available to attend to you.</p>
        <a role="button" href="#"><h5 className="contact">Contact Us</h5></a>
      </footer>
      <div className="cursor"></div>
    </div>
  );
}

export default App;
