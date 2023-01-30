import {
  Button,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Box,
  Avatar,
} from "@chakra-ui/react";
import "./ProfileModel.scss";

const ProfileModel = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton
          d={{ base: "flex" }}
          icon={<i class="fa-solid fa-eye"></i>}
          onClick={onOpen}
        />
      )}
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        closeOnOverlayClick={false}
        size="xl"
      >
        <ModalOverlay />

        <ModalContent className="profile">
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Avatar
                boxSize="200px"
                cursor="pointer"
                name={user.name}
                src={user.pic}
              />
            </Box>
            <Box>
              <div className="titles">
                <div className="text-content">
                  <i className="fa-solid fa-user"></i>
                  <div className="text">
                    <h3>Name</h3>
                    <h1>{user.name}</h1>
                  </div>
                </div>
                <div className="icon2">
                  <i className="fa-solid fa-pen"></i>
                </div>
              </div>
              <div className="titles">
                <div className="text-content">
                  <i className="fa-solid fa-envelope"></i>
                  <div className="text">
                    <h3>Email</h3>
                    <h1>{user.email}</h1>
                  </div>
                </div>
                <div className="icon2">
                  <i className="fa-solid fa-pen"></i>
                </div>
              </div>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModel;
