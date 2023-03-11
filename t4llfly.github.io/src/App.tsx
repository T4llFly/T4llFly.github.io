import './App.css';
import { Text } from "@chakra-ui/react"
import { Flex, Stack, Button, IconButton } from '@chakra-ui/react'
import { FaGithub, FaCat, FaVk, FaTelegramPlane, FaEyeSlash } from 'react-icons/fa'

function App() {
  return (
    <Flex
    alignItems='center'
    bg="#222222"
    color="white"
    minH="100vh"
    p="4"
    justifyContent="center"
    flexDirection="column"
    >
      <Text fontSize={["4xl", "5xl", "6xl"]} fontFamily="sans-serif" letterSpacing="wide" fontWeight="800" mb="1">TALLFLY</Text>
      <Stack spacing="4" direction={["row", "row"]} justify={["center", "space-between"]} align={["center", "flex-end"]}>
          <Button colorScheme='telegram' leftIcon={<FaTelegramPlane />}onClick={Telegram} display={["none", "flex"]}>Telegram</Button>
          <Button colorScheme="messenger" leftIcon={<FaVk />} onClick={VK} display={["none", "flex"]}>VK</Button>
          <Button colorScheme='whiteAlpha' leftIcon={<FaGithub />} onClick={GitHub} display={["none", "flex"]}>GitHub</Button>
          <Button colorScheme="orange" leftIcon={<FaCat />} onClick={Catangens} display={["none", "flex"]}>Catangens</Button>
          <Button colorScheme="blackAlpha" leftIcon={<FaEyeSlash />} onClick={Rickroll} display={["none", "flex"]}>TOP SECRET</Button>
          
          <IconButton colorScheme='telegram' aria-label='Telegram' icon={<FaTelegramPlane />} onClick={Telegram} display={["flex", "none"]}/>
          <IconButton colorScheme='messenger' aria-label='VK' icon={<FaVk />} onClick={VK} display={["flex", "none"]}/>
          <IconButton colorScheme='whiteAlpha' aria-label='GitHub' icon={<FaGithub />} onClick={GitHub} display={["flex", "none"]}/>
          <IconButton colorScheme='orange' aria-label='Catangens' icon={<FaCat />} onClick={Catangens} display={["flex", "none"]}/>
          <IconButton colorScheme='blackAlpha' aria-label='TOP SECRET' icon={<FaEyeSlash />} onClick={Rickroll} display={["flex", "none"]}
        />
      </Stack>
    </Flex>

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
