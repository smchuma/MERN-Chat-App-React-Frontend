import React from "react";
import axios from "axios";
import "./Home.scss";

const Home = () => {
  const fetchData = async () => {
    const { data } = await axios.get("http://localhost:4000/api/chats");
    console.log(data);
  };
  fetchData();
  return (
    <div className="container">
      <h1>Home</h1>
    </div>
  );
};

export default Home;
