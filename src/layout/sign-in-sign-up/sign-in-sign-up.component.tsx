import { Flex, FlexProps, VisuallyHidden } from "@chakra-ui/react";
import React from "react";
import { BoxShadow, COLORS } from "../../styles/theme";

type Props = {
  children: any;
  title: string;
  height?: Object;
  marginVertical?: string;
} & FlexProps;

const SignInSignUpLayout: React.FC<Props> = ({
  children,
  title,
  height,
  marginVertical,
}) => {
  return (
    <Flex
      as="main"
      minH="100vh"
      display="flex"
      overflowY="hidden"
      bgColor={COLORS.BACKGROUND_COLOR}
    >
      <VisuallyHidden as="h1">{title}</VisuallyHidden>
      <Flex
        boxShadow={BoxShadow}
        bgColor="white"
        my={marginVertical ? marginVertical : "4rem"}
        minH={height}
        borderRadius="0.5rem"
        flexDir="column"
        w={{ base: "90%", sm: "75%", md: "60%", lg: "50%" }}
        mx="auto"
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default SignInSignUpLayout;
