import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Signup = () => {
  const [name, setName] = useState();
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [pics, setPics] = useState();

  const handleClick = () => setShow(!show);
  const handlePost = (pics) => {};
  const handleSubmit = () => {};
  return (
    <>
      <VStack spacing="5px">
        <FormControl id="firstName" isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              type={show ? "text" : "password"}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl id="confirmPassword" isRequired>
          <FormLabel>confirm password</FormLabel>
          <InputGroup>
            <Input
              type={show ? "text" : "password"}
              placeholder="confirm your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl>
          <FormLabel>Upload Your Picture</FormLabel>
          <Input
            type="file"
            onChange={(e) => handlePost(e.target.files[0])}
            p={1.5}
            accept="image/*"
          />
        </FormControl>
        <Button
          className="btn"
          width="100%"
          style={{
            marginTop: "20px",
          }}
          onClick={handleSubmit}
        >
          Sign up
        </Button>
      </VStack>
    </>
  );
};

export default Signup;
