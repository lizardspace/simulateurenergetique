import { Box, Flex } from "@chakra-ui/react";
import Header from "@/components/header";
import Footer from "@/components/footer";

const Layout = ({ children }) => (
  <>
    <Header />
    <Flex justifyContent="center"> {/* Center horizontally */}
      <Box
        as="main"
        my="10px" // Add margin/padding
      >
        {children}
      </Box>
    </Flex>
    <Footer />
  </>
);

export default Layout;
