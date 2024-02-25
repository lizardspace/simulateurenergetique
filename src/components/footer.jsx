import { Box, Button, Icon, Link as ChakraLink, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaInstagram, FaCode } from "react-icons/fa";

import { MAX_WIDTH } from "config";

// Fell free to add your social media accounts!
const socialAccounts = [
  { icon: FaLinkedin, path: "https://fr.linkedin.com/in/guillaume-r%C3%A9cipon-baaba685?trk=people-guest_people_search-card", title: "Linkedin" },
  { icon: FaInstagram, path: "https://www.instagram.com/", title: "Instagram" },
];

const Footer = () => {
  return (
    <Box as="footer">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        textAlign="center"
        minH="4rem"
        px={[4, 6, 10, 14, 20]}
        maxW={MAX_WIDTH}
        mx="auto"
      >
        <Box py="2">
          {socialAccounts.map((item, index) => (
            <ChakraLink
              href={item.path}
              aria-label={item.title}
              mx="2"
              _focus={{ outline: "none" }}
              key={index}
              isExternal
            >
              <Button aria-label={item.title}>
                <Icon as={item.icon} w="6" h="6" />
              </Button>
            </ChakraLink>
          ))}
        </Box>
        <Box py="2">
          <Text>
          Construit avec {" "}
            <span role="img" aria-label="red heart">
              ❤️
            </span>
            ,{" "}
            <ChakraLink

              fontWeight="600"
              _focus={{ outline: "none" }}
              isExternal
            >
              par 
            </ChakraLink>
            ,{" "}
            <ChakraLink

              fontWeight="600"
              _focus={{ outline: "none" }}
              isExternal
            >
              Guillaume
            </ChakraLink>
            , hébergé par{" "}
            <ChakraLink

              fontWeight="600"
              _focus={{ outline: "none" }}
              isExternal
            >
              Vercel.
            </ChakraLink>
          </Text>
        </Box>
        <Box py="2">
          <ChakraLink

            aria-label="source code"
            isExternal
          >
            <Button aria-label="source code">
              <Icon as={FaCode} w="6" h="6" />
            </Button>
          </ChakraLink>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
