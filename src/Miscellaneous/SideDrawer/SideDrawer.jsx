import {
  Avatar,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Input,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { ChatLoading, UserListItem } from "../../Components";
import { useState } from "react";
import "./SideDrawer.scss";
import { ChatState } from "../../Context/chatProvider";
import ProfileModel from "../ProfileModel/ProfileModel";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SideDrawer = () => {
  const { user, setSelectedChat, chats, setChats } = ChatState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);

  const navigate = useNavigate();

  const logoutUser = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };
  const toast = useToast();

  const handleSearch = async () => {
    if (!search) {
      toast({
        title: "Please enter a name or email",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    try {
      setLoading(true);

      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.get(`api/user?search=${search}`, config);
      setLoading(false);
      setSearchResult(data);
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  };

  const accessChat = async (userId) => {
    setLoadingChat(true);
    try {
      const config = {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${user.access}`,
        },
      };

      const { data } = await axios.post("api/chat", { userId }, config);
      setSelectedChat(data);
      setLoadingChat(false);
      onClose();
    } catch (error) {
      toast({
        title: "Error loading the chat",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <>
      <div className="sideMenu">
        <div className="image">
          <Avatar size="xl" cursor="pointer" name={user.name} src={user.pic} />
          <h2>{user.name}</h2>
        </div>
        <div className="links">
          <div className="icon">
            <i className="fa-solid fa-magnifying-glass" onClick={onOpen}></i>
          </div>
          <div className="icon">
            <ProfileModel user={user}>
              <i className="fa-solid fa-user"></i>
            </ProfileModel>
          </div>
          <div className="icon">
            <i className="fa-solid fa-gear"></i>
          </div>
          <div className="icon">
            <i
              onClick={logoutUser}
              className="fa-solid fa-right-from-bracket"
            ></i>
          </div>
        </div>
        <div className="logo">
          {/* <h2>ChatYee</h2>
          <span>&copy; 2023</span> */}
        </div>
      </div>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent className="profile">
          <DrawerCloseButton />
          <DrawerHeader>Search Users</DrawerHeader>

          <DrawerBody>
            <Box
              style={{
                display: "flex",
              }}
            >
              <Input
                placeholder="Search by name or email"
                mr={2}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button
                variant="outline"
                onClick={handleSearch}
                colorScheme="blue"
              >
                Search
              </Button>
            </Box>
            {loading ? (
              <ChatLoading />
            ) : (
              searchResult?.map((user) => (
                <UserListItem user={user} key={user._id} />
              ))
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideDrawer;
