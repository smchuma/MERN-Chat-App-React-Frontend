import { Skeleton, Stack } from "@chakra-ui/react";
import "./ChatLoading.scss";

const ChatLoading = () => {
  return (
    <Stack>
      <Skeleton height="85px" className="skeleton" />
      <Skeleton height="85px" className="skeleton" />
      <Skeleton height="85px" className="skeleton" />
      <Skeleton height="85px" className="skeleton" />
      <Skeleton height="85px" className="skeleton" />
      <Skeleton height="85px" className="skeleton" />
    </Stack>
  );
};

export default ChatLoading;
