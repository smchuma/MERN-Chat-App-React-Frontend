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
  Image,
  Box,
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
              <Image
                borderRadius="full"
                boxSize="150px"
                alt={user.name}
                src={user.pic}
              />
            </Box>
            <div className="titles">
              <div className="icon">
                <i className="fa-solid fa-user"></i>
              </div>
              <div className="text">
                <h2>Name</h2>
                <h1>{user.name}</h1>
              </div>
              <i className="fa-solid fa-pen"></i>
            </div>
            <div className="titles">
              <div className="icon">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <div className="text">
                <h2>Email</h2>
                <h1>{user.email}</h1>
              </div>
              <i className="fa-solid fa-pen"></i>
            </div>
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
