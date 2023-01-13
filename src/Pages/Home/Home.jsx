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
      <div className="background-color">
        <div className="bg-1">
          <h1>Chat app</h1>
        </div>
        <div className="bg-2">
          <div className="image">
            <img src="assets/bgimage.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
