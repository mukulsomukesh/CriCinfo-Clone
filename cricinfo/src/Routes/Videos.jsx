import Navbar from "../Components/Navbar"
import {Hide,Heading,SimpleGrid, AspectRatio , CircularProgress, Text,Button, Box, Container, VStack,Image, Flex, Spacer   } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import RightMenu from "../Components/RightMenu";
import LeftMenu from "../Components/LeftMenu";
import NewsCard from "../Components/NewsCard";
import axios from "axios"


function Videos(){
    return(
        <>

<Box mt="-20px" pt="20px" w="100%" bg="#ebebeb" h="fit-content">
   
   <Image src="https://tpc.googlesyndication.com/simgad/8133920793378226490?" m="auto"  mb="17px"  />
   
       <Flex pl="100px" w="100%" pr="100px">   
   
     <Box w="70%" mr="2%" p="20px" borderRadius={"15px"} bg="white">


     <SimpleGrid minChildWidth='220px' spacing='40px'>
  <Box>
  <AspectRatio W='full'> 
  <iframe width="560" height="315" src="https://www.youtube.com/embed/lMSyDJT01QY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</AspectRatio>
  </Box>
  
  <Box>  <AspectRatio W='full'> 
  <iframe width="560" height="315" src="https://www.youtube.com/embed/f-QTyB1w3Fs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </AspectRatio>
  </Box>
  
  <Box>   <AspectRatio W='full'> 
  <iframe width="560" height="315" src="https://www.youtube.com/embed/8S5lApwP3yo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </AspectRatio> </Box>
  
  <Box>   <AspectRatio W='full'> 
  <iframe width="560" height="315" src="https://www.youtube.com/embed/dMGRTR97Ito" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   </AspectRatio> </Box>
  
  <Box>   <AspectRatio W='full'> 
  <iframe width="560" height="315" src="https://www.youtube.com/embed/cYTxl7J69Wg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </AspectRatio>  </Box>
  
  <Box>
  <AspectRatio W='full'> 
  <iframe width="560" height="315" src="https://www.youtube.com/embed/MsRmS4vAXtw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </AspectRatio>
  </Box>
  
  <Box>
  <AspectRatio W='full'> 
  <iframe width="560" height="315" src="https://www.youtube.com/embed/o_URo3_TabA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </AspectRatio>
  </Box>

  <Box>
  <AspectRatio W='full'> 
  <iframe width="560" height="315" src="https://www.youtube.com/embed/kat3hdihXb8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </AspectRatio>
  </Box>
 
  <Box>
  <AspectRatio W='full'> 
  <iframe width="560" height="315" src="https://www.youtube.com/embed/TsSF3K57fe4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </AspectRatio>
  </Box>

</SimpleGrid>

     </Box>
     <Hide below='md'>
     <Box  w="28%" >
       <LeftMenu /> 
     </Box>
     </Hide>
   </Flex>
 
   </Box>
</>
    );
}

export default Videos;


const data=[
    "https://youtu.be/lMSyDJT01QY",
    "https://youtu.be/avSO_LMOCXA",
    "https://youtu.be/8S5lApwP3yo",
    "https://youtu.be/HK6B2da3DPA",
    "https://youtu.be/rWsL52XCuAU",
    "https://youtu.be/mQVotHIyVHo",
    "https://youtu.be/muSbl77h-mY",
    "https://youtu.be/hB44R72WMYE",
    "https://youtu.be/M3ygFVrfR6E",
    "https://youtu.be/tUWTgm-ykuU",
    "https://youtu.be/1QQrcTik1qo",
    "https://youtu.be/eu_E8qGBm-w",
    "https://youtu.be/JxtT6UqXyso",
    "https://youtu.be/iVCdMjt1bec",
    "https://youtu.be/pPwVCIvO7tg",
    "https://youtu.be/PEUuSm7gHHk",
]