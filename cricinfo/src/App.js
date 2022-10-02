
import './App.css';
import Navbar from "./Components/Navbar"
import {Text,Button, Box, Container, VStack, Flex, Spacer   } from '@chakra-ui/react'
import axios from "axios"
import { useEffect, useState } from 'react';
import NewsCard from './Components/NewsCard';
import LeftMenu from './Components/LeftMenu';
import RightMenu from './Components/RightMenu';
import Home from './Routes/Home';
import AllRoutes from './Routes/AllRoutes';


//  all series
// https://api.cricapi.com/v1/series?apikey=41857ae3-1feb-4c56-865f-2f4ee9fe0d5e&offset=0


// upcomming matches
// https://api.cricapi.com/v1/matches?apikey=41857ae3-1feb-4c56-865f-2f4ee9fe0d5e&offset=0

// ""
//

function App() {

  const [a, setA]=useState(0)


  

//       function fet(){
// setA(a+1)
//   }



  return (
  <>
    {/* <Button onClick={fet}>fetch</Button> */}
{/* <Home></Home> */}

<Navbar></Navbar>

<AllRoutes></AllRoutes>

    </>
    );
}

export default App;
