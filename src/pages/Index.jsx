import { Container, Text, VStack, Heading, Box, Button, Image } from "@chakra-ui/react";
import { FaLeaf } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Plant Paradise
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Discover the beauty and benefits of houseplants. Join our community and start your journey to a greener life.
        </Text>
        <Box boxSize="sm">
          <Image src="/images/plant.jpg" alt="Beautiful houseplant" borderRadius="md" />
        </Box>
        <Button colorScheme="green" size="lg" leftIcon={<FaLeaf />}>
          Join Us
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;