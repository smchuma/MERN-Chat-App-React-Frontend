import React from "react";
import { ChatState } from "../../Context/chatProvider";
import { SideDrawer } from "../../Miscellaneous";
import { ChatNav, MyChats } from "../../Components";
import "./ChatPage.scss";

const ChatPage = () => {
  const { user } = ChatState();

  return (
    <>
      <div className="chatPage">
        {user && <SideDrawer />}
        <div className="chatSections">
          {user && <ChatNav />}
          {user && <MyChats />}
        </div>
      </div>
    </>
  );
};

export default ChatPage;
