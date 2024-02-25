import { Box, Flex } from "@chakra-ui/react";

import { MAX_WIDTH } from "config";
import Header from "@/components/header";
import Footer from "@/components/footer";

const Layout = ({ children }) => (
  <>
    <Header />
    <Flex justifyContent="center"> {/* Center horizontally */}
      <Box
        as="main"
        px={[4, 6, 10, 14, 20]}
        maxW={MAX_WIDTH}
        mx="auto"
        my="10px" // Add margin/padding
      >
        {children}
      </Box>
    </Flex>
    <Footer />
  </>
);

export default Layout;
