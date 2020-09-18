import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <>
      <h1>Home</h1>
      <Link to="/catalog">Catalog</Link>
    </>
  );
};

export default Home;
