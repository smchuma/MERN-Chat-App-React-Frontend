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
import "./Login.scss";

const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleClick = () => setShow(!show);

  const handleSubmit = () => {};
  return (
    <>
      <VStack spacing="5px">
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
        <Button
          className="btn"
          width="100%"
          style={{
            marginTop: "20px",
          }}
          onClick={handleSubmit}
        >
          Login
        </Button>
        <Button
          width="100%"
          className="btn"
          style={{
            marginTop: "20px",
          }}
          onClick={() => {
            setEmail("guest@chatyee.com");
            setPassword("guest");
          }}
        >
          Guest
        </Button>
      </VStack>
    </>
  );
};

export default Login;
