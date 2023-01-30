import { Avatar, Box, Text } from "@chakra-ui/react";
import "./UserListItem.scss";

const UserListItem = ({ user }) => {
  console.log(user.name);
  return (
    <Box
      className="userList"
      _hover={{
        background: "#38B2AC",
        color: "white",
      }}
    >
      <Avatar
        mr={2}
        size="md"
        cursor="pointer"
        name={user.name}
        // src={user.pic}
      />
      <Box>
        <Text>{user.name}</Text>
        <Text>{user.email}</Text>
      </Box>
    </Box>
  );
};

export default UserListItem;
