import Navbar from "../Components/Navbar"
import {Hide,Heading,SimpleGrid , CircularProgress, Text,Button, Box, Container, VStack,Image, Flex, Spacer   } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import RightMenu from "../Components/RightMenu";
import LeftMenu from "../Components/LeftMenu";
import NewsCard from "../Components/NewsCard";
import axios from "axios"


function News(){
    return(
        <>

<Box mt="-20px" pt="20px" w="100%" bg="#ebebeb" h="fit-content">
   
   <Image src="https://tpc.googlesyndication.com/simgad/8133920793378226490?" m="auto"  mb="17px"  />
   
       <Flex pl="100px" w="100%" pr="100px">   
   
     <Box w="70%" mr="2%" p="20px" borderRadius={"15px"} bg="white">
     <Heading color="#03a9f4" size="sm"> Top Cricket News </Heading>
     <Heading mt="20px" > The bouncer: Shabnim Ismail </Heading>
     <Text  mt="5px"> She's small, she's quick, and she has the meanest short ball you ever did see </Text>
     <Image  mt="30px" src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_960/lsci/db/PICTURES/CMS/346600/346689.3.jpg" borderRadius={"15px"}></Image>
   
   <Text p="10px" textAlign={"justify"} fontSize='lg'>
   When you watch Ismail ride the boundary, you can tell she is a natural athlete. The kind who tops sprints at school meets. The possessor of athletic gifts that make their bodies worthy of scientific research.
   </Text>
   <Text p="10px" textAlign={"justify"} fontSize='lg'>
If Ismail had stayed on track with football - she played a lot of it at school until cricket happened - she would likely have excelled at that too. As many of that sport's luminaries have shown, being short-statured can be an asset. In cricket, though, height is often a requisite if fast bowling is your job. A diminutive,  5'4" frame, as in Ismail's case, hardly seems the ideal fit for the role, especially given women naturally lack some of the physiological endowments that help the fastest male bowlers do what they do.
</Text>
<Text p="10px" textAlign={"justify"} fontSize='lg'>
But with Ismail, "the Demon", one of the fastest female bowlers going around in international cricket, pace is pace, yaar. Which makes her bouncer more vicious than anyone else's in the women's game, more even than the much taller Ellyse Perry's, who was voted second to Ismail in the bouncer stakes when we polled members of ESPNcricinfo's staff for this series.
   </Text>

   <Image src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_960/lsci/db/PICTURES/CMS/333900/333967.3.jpg" borderRadius={"15px"}></Image>

   <Text p="10px" textAlign={"justify"} fontSize='lg'>
   "The day she's a bit feisty, I fear for other batters' lives, because if she wants to bowl a bouncer at your head, she's going to do it," says Lizelle Lee, Ismail's South Africa team-mate and opponent in the WBBL. "As a batter, sometimes it's a bit worse in the nets than on the field, because you're in an enclosed place. So if she decides to bounce you, phew, it's a tough pill to swallow. I'm just happy she's in my side."
    </Text>
   
   <Text p="10px" textAlign={"justify"} fontSize='lg'>
   Among the more recent helmet-pingers, throat-rammers, and other ferocious manifestations of the Ismail bouncer to stick in the memory are those copped by Shafali Verma, Mithali Raj, and Priya Punia across South Africa's 2019 and 2021 tours of India; the ones unleashed on the Thailand batters in the 2020 T20 World Cup; and those against Shasha Moloney of Hobart Hurricanes and Tahlia McGrath of Adelaide Strikers in the 2019 and 2020 WBBLs.
    </Text>
   
   <Flex pt="10px" pb="10px"> 
   <Image src="https://tpc.googlesyndication.com/simgad/9015198779594424295?"></Image>
<Spacer/>

<Text pl="10px" pr="20px" textAlign={"justify"} fontSize='lg'>
   A nod of the head and a brief chat with non-striker Smriti Mandhana indicated Verma deemed herself fit to continue batting. And she did, but only for three runless balls, falling in Ismail's next over. Since then, some of the world's best exponents of the short ball have sought to exploit Verma's discomfort, including Perry. But no bouncer to her so far has looked as sickening, and yet as awe-inspiring, as Ismail's original. A quicker bouncer from the quickest bowler in women's cricket? Stand by, physios.
    </Text>

   </Flex>
   
   <Text pl="10px" pr="20px" textAlign={"justify"} fontSize='lg'>
    The one to Verma, then only 16, playing her fourth international game, stunned the batter and the thousands-strong Surat crowd alike. The perfect change-up, served up after three deliveries on the full and a fourth on a good length, the penultimate ball rocketed in at 117kph in the opening over of India's unsuccessful chase of 176 and smacked Verma flush on the crest of her helmet as she tried to swivel-pull.
    </Text>

    <Text p="10px" textAlign={"justify"} fontSize='lg'>
   "We call her our little pocket power, because that's what she is: small, very clever, and with a lot of power," says Lee. "She's been working extremely hard and wants to hit that 130kph mark, and hopefully she does this year."
   </Text>

   <Flex mt="20px" p="10px" gap="20px">
<Heading color="#03a9f4" fontSize="lg" mr="10px"> Tags:  </Heading>
    <Box border={"1px"} h="fit-content" pl="10px" pr="10px" borderRadius={"15px"}> News </Box>
    <Box border={"1px"} h="fit-content" pl="10px" pr="10px" borderRadius={"15px"}> Crikcet </Box>
    <Box border={"1px"} h="fit-content" pl="10px" pr="10px" borderRadius={"15px"}> Crikcet News </Box>
    <Box border={"1px"} h="fit-content" pl="10px" pr="10px" borderRadius={"15px"}> Indian Premier League </Box>
    <Box border={"1px"} h="fit-content" pl="10px" pr="10px" borderRadius={"15px"}> ICC Cricket </Box>

</Flex>


     </Box>
     <Hide below='md'>
     <Box  w="28%" >
       <RightMenu /> 
     </Box>
     </Hide>
   </Flex>
 
   </Box>
</>
    );
}

export default News;