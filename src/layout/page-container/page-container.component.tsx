import React from "react";
import { Flex, FlexboxProps, FlexProps } from "@chakra-ui/react";

import Header from "../../components/header/header.component";
import { COLORS } from "../../styles/theme";

type ContainerProps = any & FlexboxProps & FlexProps;

const PageContainer: React.FC<ContainerProps> = ({ children }) => {
  return (
    <Flex flexDir="column">
      <Header />
      <Flex
        as="main"
        flexDir="column"
        mt="65px"
        pb="5rem"
        bgColor={COLORS.BACKGROUND_COLOR}
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default PageContainer;
