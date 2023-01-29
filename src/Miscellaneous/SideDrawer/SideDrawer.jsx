import { Avatar } from "@chakra-ui/react";
import React from "react";
import "./SideDrawer.scss";
import { ChatState } from "../../Context/chatProvider";
import ProfileModel from "../ProfileModel/ProfileModel";

const SideDrawer = () => {
  const { user } = ChatState();
  return (
    <>
      <div className="sideMenu">
        <div className="image">
          <Avatar size="xl" cursor="pointer" name={user.name} src={user.pic} />
          <h2>{user.name}</h2>
        </div>
        <div className="links">
          <div className="icon">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="icon">
            <ProfileModel user={user}>
              <i class="fa-solid fa-user"></i>
            </ProfileModel>
          </div>
          <div className="icon">
            <i class="fa-solid fa-gear"></i>
          </div>
          <div className="icon">
            <i class="fa-solid fa-right-from-bracket"></i>
          </div>
          <div className="logo">
            <h2>ChatYee</h2>
            <span>&copy; 2023</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideDrawer;
