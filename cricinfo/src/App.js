import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar"
import {Text,Button, Box, Container, VStack, Flex, Spacer   } from '@chakra-ui/react'
import axios from "axios"
import { useEffect, useState } from 'react';
import NewsCard from './Components/NewsCard';
import LeftMenu from './Components/LeftMenu';
import RightMenu from './Components/RightMenu';
import Home from './Pages/Home';


//  all series
// https://api.cricapi.com/v1/series?apikey=41857ae3-1feb-4c56-865f-2f4ee9fe0d5e&offset=0


// upcomming matches
// https://api.cricapi.com/v1/matches?apikey=41857ae3-1feb-4c56-865f-2f4ee9fe0d5e&offset=0

// ""
//

function App() {

  const [a, setA]=useState(0)

//   useEffect(()=>{
  
//     var options = {
//       method: 'GET',
//       url: 'https://api.newscatcherapi.com/v2/search',
//       params: {q: 'ICC Cricket', lang: 'en', sort_by: 'relevancy', page: '1'},
//       headers: {
//         'x-api-key': 'uccfiQTDwOxRKJfNTARVDb_15vIbCU4xdPAtwXYe6qM'
//       }
//     };
    
//     axios.request(options).then(function (response) {
//       console.log(response.data);
//     }).catch(function (error) {
//       console.error(error);
//     });

//     // axios.get("https://api.cricapi.com/v1/series?apikey=41857ae3-1feb-4c56-865f-2f4ee9fe0d5e&offset=0")
//     // .then((res)=>console.log(res))
//     // .catch((err)=>console.log(err))
//       },[a])
  

//       function fet(){
// setA(a+1)
//   }



  return (
  <>
    {/* <Button onClick={fet}>fetch</Button> */}
<Home></Home>

    </>
    );
}

export default App;
