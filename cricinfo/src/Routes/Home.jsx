import Navbar from "../Components/Navbar"
import {Hide, CircularProgress, Text,Button, Box, Container, VStack,Image, Flex, Spacer   } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import RightMenu from "../Components/RightMenu";
import LeftMenu from "../Components/LeftMenu";
import NewsCard from "../Components/NewsCard";
import axios from "axios"




function Home(){

  const [data, setData] = useState();

    useEffect(()=>{
  
    // var options = {
    //   method: 'GET',
    //   // url: 'https://api.newscatcherapi.com/v2/search',
    //   // params: {q: 'ICC Cricket', lang: 'en', sort_by: 'relevancy', page: '1'},
    //   // headers: {
    //   //   'x-api-key': 'uccfiQTDwOxRKJfNTARVDb_15vIbCU4xdPAtwXYe6qM'
    //   // }
    // };
    
    // axios.request(options).then(function (response) {
    //   console.log(response.data);
    // }).catch(function (error) {
    //   console.error(error);
    // });
     
  axios.get("https://mock-server-app-fskg.onrender.com/feeds")
  .then((res)=>{
    setData(res.data)
  })
  .catch((err)=>console.log(err))
         
  },[])


  console.log(data)

    return(
        <>
        <Box mt="-20px" pt="20px" w="100%" bg="#ebebeb" h="fit-content">
   
<Image src="https://tpc.googlesyndication.com/simgad/8133920793378226490?" m="auto"  mb="17px"  />

    <Flex pl="45px" pr="45px">

    <Hide below='md'>
  <Box w="22%">
    <LeftMenu/>
  </Box>
  <Spacer />
  </Hide>


  <Box w="full" maxWidth={"655px"}>
  {data==undefined?
  <CircularProgress ml="48%" mt="10%" isIndeterminate color='#03a9f4' /> : 
  data.map((el)=>(
    
    <NewsCard key={el.id} item={el} />
     ))}


  </Box>
  
  <Hide below='md'>
  <Spacer />
  <Box  w="24%">
    <RightMenu />
  </Box>
  </Hide>

</Flex>
</Box>
        </>
    )
}

export default Home