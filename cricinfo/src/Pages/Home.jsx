import Navbar from "../Components/Navbar"
import {Text,Button, Box, Container, VStack,Image, Flex, Spacer   } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import RightMenu from "../Components/RightMenu";
import LeftMenu from "../Components/LeftMenu";
import NewsCard from "../Components/NewsCard";




function Home(){
    return(
        <>
        <Box w="100%" bg="#ebebeb" h="fit-content">
    <Navbar></Navbar>

<Image src="https://tpc.googlesyndication.com/simgad/8133920793378226490?" m="auto" mt="17px" mb="17px"  />
cd
    <Flex pl="50px" pr="50px">
  <Box w="22%">
    <LeftMenu/>
  </Box>
  <Spacer />
  <Box w="52%" >
  <NewsCard/>
  <NewsCard/>
  <NewsCard/>
  <NewsCard/>
  <NewsCard/>
  <NewsCard/>
  </Box>
  <Spacer />
  <Box  w="24%">
    <RightMenu />
  </Box>
</Flex>
</Box>
        </>
    )
}

export default Home