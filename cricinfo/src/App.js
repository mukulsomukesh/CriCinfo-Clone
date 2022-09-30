import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar"
import {Text,Button, Box, Container, VStack, Flex, Spacer   } from '@chakra-ui/react'
import axios from "axios"
import { useEffect, useState } from 'react';
import NewsCard from './Components/NewsCard';


//  all series
// https://api.cricapi.com/v1/series?apikey=41857ae3-1feb-4c56-865f-2f4ee9fe0d5e&offset=0


// upcomming matches
// https://api.cricapi.com/v1/matches?apikey=41857ae3-1feb-4c56-865f-2f4ee9fe0d5e&offset=0

// ""
//

function App() {

  const [a, setA]=useState(0)

  useEffect(()=>{
    axios.get("https://api.cricapi.com/v1/series?apikey=41857ae3-1feb-4c56-865f-2f4ee9fe0d5e&offset=0")
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
      },[a])
  
      function fet(){
setA(a+1)
  }



  return (
  <>
    {/* <Button onClick={fet}>fetch</Button> */}

<Box w="100%" bg="#f9f9fb" h="100vh">
    <Navbar></Navbar>

    <Flex pl="50px" pr="50px">
  <Box p='4' bg='red.400' w="22%">
    Box 1
  </Box>
  <Spacer />
  <Box bg="white" w="50%" borderRadius={"15px"}>
  <NewsCard/>
  </Box>
  <Spacer />
  <Box p='4' bg='green.400'  w="26%">
    Box 3
  </Box>
</Flex>

</Box>
    </>
    );
}

export default App;
