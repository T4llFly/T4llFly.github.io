import './App.css';
import { Text } from "@chakra-ui/react"
import { Box, Button, ButtonGroup } from '@chakra-ui/react'

function App() {
  return (
    <Box
    display='flex'
    alignItems='center'
    flexWrap="wrap"
    width="100%"
    bgColor="#222222"
    py="432.5"
    mb="0"
    bgRepeat="no-repeat"
    justifyContent="center"
    >
      <Text fontSize={64} fontFamily="sans-serif" letterSpacing="wide" fontWeight="800" textColor="white">TALLFLY</Text>
      <ButtonGroup variant='solid' spacing='3'>
        <Button colorScheme='telegram'>Telegram</Button>
        <Button colorScheme='twitter'>Twitter</Button>
      </ButtonGroup>
    </Box>
  );
}

export default App;
