import { Box, BoxProps, LinkBoxProps } from "@chakra-ui/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { COLORS } from "../../styles/theme";

export interface NavLinkItemProps {
  url: any;
  children: any;
  hoverStyles?: BoxProps;
  hoverProps?: BoxProps;
}

export type NavLinkProps = NavLinkItemProps & BoxProps & LinkBoxProps;

const NavLinkItem: React.FC<NavLinkProps> = ({
  children,
  url,
  hoverProps,
  ...otherProps
}) => {
  return (
    <Box
      as={NavLink}
      activeStyle={{ color: `${COLORS.PRIMARY_COLOR}` }}
      exact={true}
      to={url}
      fontSize={{ base: "0.8rem", lg: "0.9rem" }}
      textDecoration="none"
      _hover={{ textDecoration: "none", color: "inherit", ...hoverProps }}
      color="blackAlpha.800"
      {...otherProps}
    >
      {children}
    </Box>
  );
};

export default React.memo(NavLinkItem);
