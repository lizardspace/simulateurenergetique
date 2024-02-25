import { useState } from "react";
import { Box, Button, chakra, Menu, MenuButton, MenuItem, MenuList, useColorModeValue, Flex } from "@chakra-ui/react";
import NextLink from "next/link";
import { ChevronDownIcon } from '@chakra-ui/icons';

import HamburgerMenu from "../UI/hamburgerMenu";
import ColorModeToggle from "../UI/colorModeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const bg = useColorModeValue("gray.200", "gray.300");
  const color = useColorModeValue("black", "white");

  const closeMenu = () => {
    setIsOpen(false);
  };

  const menuItems = [
    { title: "Simulateur", href: "/stepprogress" },
  ];

  return (
    <Box
      as="nav"
      display="flex"
      flexDir="row"
      alignItems="center"
      justifyContent="space-between" // Ensures that the logo and menu items are spaced apart
      fontWeight="500"
      w="100%" // Ensure the nav takes full width
    >
      <HamburgerMenu toggled={isOpen} toggle={setIsOpen} />
      <Flex align="center" flex={1}>
        <chakra.ul
          bg={{ base: bg, lg: "transparent" }}
        color={{ base: "black", lg: color }}
        display={{
          base: isOpen ? "block" : "none",
          lg: "flex",
        }}
        position={{ base: "absolute", lg: "static" }}
        top="5rem"
        left="5%"
        right="5%"
        rounded={{ base: "lg", lg: "none" }}
        py={{ base: "2", lg: "0" }}
        px={{ base: "4", lg: "0" }}
        alignItems={{ lg: "center" }}
        boxShadow={{ base: "xl", lg: "none" }}
        zIndex="2"
      >
        {menuItems.map((item, index) => (
          <chakra.li
            key={index}
            listStyleType="none"
            px={{ lg: "8" }}
            py={{ base: "3", lg: "0" }}
            fontSize={{ base: "sm", lg: "md" }} // Adjust font size here
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
          >
            <NextLink href={item.href}>
              <chakra.a
                onClick={closeMenu}
                _hover={{
                  fontWeight: "bold",
                  color: "pink.500",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                {item.title}
              </chakra.a>
            </NextLink>
          </chakra.li>
        ))}
        </chakra.ul>

        <NextLink href="/se-connecter" passHref>
          <Button as="a" variant="ghost" onClick={closeMenu} mr={2}>
            SE CONNECTER
          </Button>
        </NextLink>
        <NextLink href="/s-inscrire" passHref>
          <Button as="a" variant="ghost" onClick={closeMenu} mr={2}>
            S'INSCRIRE
          </Button>
        </NextLink>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant="ghost" mr={2}>
            LANGUE
          </MenuButton>
          <MenuList>
            {/* Add MenuItems for each language */}
            <MenuItem onClick={closeMenu}>Français</MenuItem>
            <MenuItem onClick={closeMenu}>English</MenuItem>
            {/* ... other languages */}
          </MenuList>
        </Menu>

      </Flex>

      <ColorModeToggle />
    </Box>
  );
};

export default Navbar;
