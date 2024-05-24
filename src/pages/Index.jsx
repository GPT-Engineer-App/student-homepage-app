import { Container, VStack, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaBook, FaTools, FaChartLine } from "react-icons/fa";

const Index = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("black", "black");
  const buttonColor = useColorModeValue("gold", "gold");

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg={bgColor}>
      <VStack spacing={4}>
        <Button leftIcon={<FaBook />} colorScheme="yellow" bg={buttonColor} onClick={() => alert("Navigate to Homework List Page")}>
          View Homework
        </Button>
        <Button leftIcon={<FaTools />} colorScheme="yellow" bg={buttonColor} onClick={() => alert("Navigate to Interactive Learning Tools Page")}>
          Interactive Learning Tools
        </Button>
        <Button leftIcon={<FaChartLine />} colorScheme="yellow" bg={buttonColor} onClick={() => alert("Navigate to Performance Tracking Page")}>
          Performance Tracking
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
