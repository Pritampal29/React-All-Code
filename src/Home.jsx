import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">
      <section className="banner">
        <h1>Welcome to Our Utility Website</h1>
      </section>

      <section className="all-utilities">
        <div className="utility-buttons py-4">
          <Link to="/todos">Todos</Link>
          <Link to="/word-counter">Word Counter</Link>
          <Link to="/calculator">Calculator</Link>
          <Link to="/agecal">Age Calculator</Link>
          <Link to="/">Utility 5</Link>
          <Link to="/">Utility 6</Link>
          <Link to="/">Utility 7</Link>
          <Link to="/">Utility 8</Link>
          <Link to="/">Utility 9</Link>
          <Link to="/">Utility 10</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
