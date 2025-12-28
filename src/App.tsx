import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <div className="logo">My Website</div>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="hero">
          <div className="hero-text">
            <h1>Welcome to My Awesome Website</h1>
            <p>Building something great, one line of code at a time.</p>
            <button>Get Started</button>
          </div>
        </div>
      </header>
      <main>
        <section id="about">
          <h2>About Us</h2>
          <p>We are a team of passionate developers dedicated to creating amazing web experiences.</p>
        </section>
        <section id="services">
          <h2>Our Services</h2>
          <ul>
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>UI/UX Design</li>
          </ul>
        </section>
        <section id="contact">
          <h2>Contact Us</h2>
          <p>Get in touch with us to discuss your next project.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
