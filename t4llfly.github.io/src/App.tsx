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
    py="412.5"
    mb="0"
    bgRepeat="no-repeat"
    justifyContent="center"
    flexDirection="column"
    >
      <Text fontSize={64} fontFamily="sans-serif" letterSpacing="wide" fontWeight="800" textColor="white">TALLFLY</Text>
      <ButtonGroup variant='solid' spacing='3'>
          <Button colorScheme='telegram' onClick={Telegram}>Telegram</Button>
          <Button colorScheme="messenger" onClick={VK}>VK</Button>
          <Button colorScheme='whiteAlpha' onClick={GitHub}>GitHub</Button>
          <Button colorScheme="orange" onClick={Catangens}>Catangens</Button>
          <Button colorScheme="blackAlpha" onClick={Rickroll}>TOP SECRET</Button>
      </ButtonGroup>
    </Box>

  );
}

function Telegram() {
    window.open("https://t.me/t4llfly")
}

function GitHub() {
  window.open("https://github.com/T4llFly")
}

function Catangens() {
  window.open("https://catangens.ru")
}

function VK() {
  window.open("https://vk.com/tallfly")
}

function Rickroll() {
  window.open("https://youtu.be/dQw4w9WgXcQ")
}

export default App;
