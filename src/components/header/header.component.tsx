import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Divider,
  Flex,
  FlexboxProps,
  HStack,
  Icon,
  List,
  ListIcon,
  ListItem,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import { headerLinksData } from "./header.data";
import { COLORS } from "../../styles/theme";
import NavLinkItem, {
  NavLinkItemProps,
} from "../nav-link/header-links.component";

export type MenuItemProps = {
  icon?: any;
  children: string;
} & NavLinkItemProps;

export const MenuItem = ({ icon, children, ...otherProps }: MenuItemProps) => (
  <HStack align="center" {...otherProps}>
    <Icon as={icon} boxSize="23px" mr="0.8rem" /> <Text>{children}</Text>
  </HStack>
);

type HeaderProps = FlexboxProps;

const Header: React.FC<HeaderProps> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        zIndex={5}
        as="header"
        position="fixed"
        width="100%"
        bgColor={COLORS.WHITE}
      >
        <Flex
          flexDir="row"
          width="100%"
          ml={{ base: "2%", sm: "5%" }}
          mr={{ base: "2%", sm: "5%" }}
          mt="1rem"
          mb="0.5rem"
          align="center"
          justify="center"
        >
          <Box display={{ base: "flex", sm: "none" }}>
            <HamburgerIcon as="button" w={8} h={8} onClick={onOpen} />
            <Drawer
              isOpen={isOpen}
              placement="left"
              onClose={onClose}
              size="xs"
            >
              <DrawerOverlay>
                <DrawerContent>
                  <DrawerCloseButton
                    _focus={{
                      borderColor: "none",
                      boxShadow: "none",
                    }}
                  />
                  <DrawerBody px="0" pt="3rem">
                    {/* <Image
                      src={LogoImage}
                      alt="logo"
                      w="4rem"
                      mb="1rem"
                      ml="2rem"
                    /> */}
                    <List>
                      <Divider my="0.5rem" />
                      {headerLinksData.map((headerLink: any) => {
                        return (
                          <ListItem key={headerLink.key}>
                            <ListIcon
                              as={headerLink.as}
                              h="1.3rem"
                              w="1.3rem"
                              mx="2rem"
                              color={COLORS.PRIMARY_COLOR}
                            />
                            <NavLinkItem
                              fontSize="0.8rem"
                              textTransform="uppercase"
                              color={COLORS.GREY_COLOR}
                              aria-label={headerLink.title}
                              onClick={onClose}
                              url={headerLink.url}
                            >
                              {headerLink.title}
                            </NavLinkItem>
                            <Divider my="0.5rem" />
                          </ListItem>
                        );
                      })}
                    </List>
                  </DrawerBody>
                </DrawerContent>
              </DrawerOverlay>
            </Drawer>
          </Box>
          <NavLinkItem
            w={{ base: "3rem", md: "4rem" }}
            aria-label="homepage"
            url="/"
          >
            {/* <Image
              src={LogoImage}
              alt="logo"
              w={{ base: "3rem", md: "4rem" }}
            /> */}
          </NavLinkItem>
          <Flex
            as="nav"
            display={{ base: "none", sm: "flex" }}
            direction="row"
            pl={{ base: "none", sm: "1rem", md: "none" }}
            align="center"
          >
            {headerLinksData.map((headerLink: any) => {
              return (
                <Box key={headerLink.key} textTransform="uppercase" mr="2rem">
                  <NavLinkItem
                    aria-label={headerLink.title}
                    url={headerLink.url}
                  >
                    {headerLink.title}
                  </NavLinkItem>
                </Box>
              );
            })}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Header;
