import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="home-page">
      <header className="header">
        <h1>Welcome to My React Home Page</h1>
        <p>Your journey into React begins here!</p>
      </header>
      <main className="content">
        <section className="intro">
          <h2>About Us</h2>
          <p>
            We are passionate about building amazing web experiences using React.
          </p>
        </section>
        <section className="features">
          <h2>Features</h2>
          <ul>
            <li>Fast and responsive</li>
            <li>Modern design</li>
            <li>Easy to use</li>
          </ul>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2025 React Enthusiasts. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;