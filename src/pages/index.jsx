import { Box, Heading, Text, Divider, VStack } from "@chakra-ui/react";

const FideojoyComponent = () => {
  return (
    <Box
      backgroundImage="url('https://i.postimg.cc/tRkjLpxz/holistic.png')"
      backgroundSize="cover"
      backgroundPosition="center"
      py={12}
      px={8}
    >
      <VStack spacing={8} align="start" color="white">
        <Heading as="h1" size="xl" textAlign="center">
          Tester notre simulateur
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Aller à simulateur
        </Text>
      </VStack>

      <Divider my={12} borderColor="white" />

      {/* Additional sections with text and icons */}
      {/* You can continue adding sections like this */}

      <VStack spacing={8} align="start" color="white">
        <Heading as="h2" size="lg">
          NOTRE MISSION
        </Heading>
        <Text fontSize="md">
          Le meilleur simulateur
        </Text>
        <Text fontSize="md">
          
        </Text>
      </VStack>

      {/* Additional sections with text and icons */}
      {/* You can continue adding sections like this */}
    </Box>
  );
}

export default FideojoyComponent;
