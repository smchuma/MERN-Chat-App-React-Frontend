import React, { useEffect } from "react";
import { Login, Signup } from "../../Components";
import "./Home.scss";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user) {
      navigate("/chats");
    }
  }, [navigate]);

  const fetchData = async () => {};
  fetchData();
  return (
    <div className="container">
      <div className="background-color">
        <div className="bg-1">
          <div className="logo">
            <img src="assets/logo.png" alt="" />
          </div>
          <div className="content">
            <Tabs variant="soft-rounded" width="100%">
              <TabList>
                <Tab width="50%" _selected={{ color: "white", bg: "#2DBDAF" }}>
                  Login
                </Tab>
                <Tab width="50%" _selected={{ color: "white", bg: "#2DBDAF" }}>
                  Signup
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Login />
                </TabPanel>
                <TabPanel>
                  <Signup />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
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
