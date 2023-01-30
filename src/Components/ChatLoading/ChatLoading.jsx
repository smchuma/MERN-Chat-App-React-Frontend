import { Skeleton, Stack } from "@chakra-ui/react";
import "./ChatLoading.scss";

const ChatLoading = () => {
  return (
    <Stack>
      <Skeleton height="35px" className="skeleton" />
      <Skeleton height="35px" className="skeleton" />
      <Skeleton height="35px" className="skeleton" />
      <Skeleton height="35px" className="skeleton" />
      <Skeleton height="35px" className="skeleton" />
      <Skeleton height="35px" className="skeleton" />
      <Skeleton height="35px" className="skeleton" />
      <Skeleton height="35px" className="skeleton" />
      <Skeleton height="35px" className="skeleton" />
      <Skeleton height="35px" className="skeleton" />
      <Skeleton height="35px" className="skeleton" />
    </Stack>
  );
};

export default ChatLoading;
