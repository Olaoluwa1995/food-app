import { Box } from "@chakra-ui/react";
import React from "react";
import { ButtonLoaderContainer } from "./button-loader.styles.d";

const ButtonLoader = () => (
	<ButtonLoaderContainer>
		<Box as="span">●</Box>
		<Box as="span">●</Box>
		<Box as="span">●</Box>
		<Box as="span">●</Box>
		<Box as="span">●</Box>
	</ButtonLoaderContainer>
);

export default ButtonLoader;
