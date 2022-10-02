import {Hide,Input,  PopoverBody, PopoverHeader ,Show, Image, Button, Text, Box, Flex, Spacer, Popover, PopoverContent, PopoverArrow, PopoverTrigger, useDisclosure } from '@chakra-ui/react'
import { CgMenuGridR } from "react-icons/cg";
import { TbSearch } from "react-icons/tb";
import { BsFillBellFill, BsTranslate } from "react-icons/bs";
import { IoSearch, IoMdSunny, IoMdMoon } from "react-icons/io";
import { ThemeContext } from '../Context/Theme/ThemeContextProvider';
import { useContext } from 'react';
import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,} from '@chakra-ui/react'
import { Link } from "react-router-dom";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { state, dispatch } = useContext(ThemeContext)

  function handleTheme() {
    console.log(state.theme)
    if (state.theme) {
      dispatch({ type: "NIGHT_THEME", payload: { theme: "day" } })
    }
    else {
      dispatch({ type: "DAY_THEME", payload: { theme: "night" } })
    }
  }

  return (
    <>
      <Flex pl="5" pr="20" gap={"5"} bg="#03a9f4" h="70px" color={"white"} pt="3">
      <Hide below='md'>
        <Link to="/"> 
          <Image ml="20" src="https://wassets.hscicdn.com/static/images/logo.png" alt="ESPNcricinfo" h="6" />
        </Link>
        </Hide>

        {heading.map((el) => (
          <Popover key={el.id} trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link to="video">{el.title}</Link>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />

              <Flex w={"full"} p="5">
                <Box color="black">
                  {el.RightOption.map((opt) => (
                    <Text lineHeight={"2"}> {opt} </Text>
                  ))}
                </Box>
                <Spacer />
                <Box color="black" >
                  {el.LeftOption.map((opt) => (
                    <Text lineHeight={"2"}> {opt} </Text>
                  ))}
                </Box>
              </Flex>
            </PopoverContent>
          </Popover>
        ))}

<Hide below='lg'>
        <Spacer />
        <Link> Edition In </Link>
        <Box onClick={handleTheme}>{state.theme == "day" ? <IoMdSunny size='25px' /> : <IoMdMoon size='25px' />} </Box>
        
     <BsFillBellFill onClick={onOpen} size='25px' /> 
     {/* <Button >Open Modal</Button> */}

<Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Daily News Letters</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
      <Input type="email" placeholder='Enter Your Email'/>
      <Button colorScheme='blue' mt="10px" onClick={onClose}>
        Submit
      </Button>
    </ModalBody>
  </ModalContent>
</Modal>
        <Link> <BsTranslate size='25px' /> </Link>
        <Link> <CgMenuGridR size="27px" /></Link>
        <Link> <TbSearch size='25px' /> </Link>
    </Hide>
      </Flex>
    
    </>
  )
}
export default Navbar

const heading = [{
  title: "Live Scores",
  RightOption: ["Reasult"],
  LeftOption: ["Schedule"],
}, {
  title: "Series",
  RightOption: ["India v South Africa", "Ind-A v NZ-A", "UAE v Bangladesh", "Marsh Cup", "Country Div1", "CPL 2022", "Legends League", "Test Champion", "CWC Super League", "-Archives-"],
  LeftOption: ["Women's Asia Cup", "Pakistan v England", "West Indies v New Zealand", "Sheffield Shield", "Country Div2", "Road Safety", "Men's T20 World Cup", "Women's Championship", "-Future Series-"],
}, {
  title: "Teams",
  RightOption: ["Australia", "Bangladesh", "England", "India", "New Zealand", "Pakistan", "South Africa", "Sri Lanka", "West Indies", "Zimbabwe"],
  LeftOption: ["Afghnistan", "Ireland", "Namibia", "Nepal", "Netherlands", "Oman", "PNG", "Scotland", "UAE", "USA"],
}, {
  title: "News",
  RightOption: ["News Home", "Future of ODIs", "Ball-tampering", "Technology in Cricket", "Racism"],
  LeftOption: [],
}, {
  title: "Features",
  RightOption: ["Features Home", "Writers", "Photo Galleries", "The Cricket Monthly",],
  LeftOption: [],
}, {
  title: "Videos",
  RightOption: ["T20 Time Out", "Hindi Videos", "Haan Ya Naa", "Polite", "Newsroom", "News and Analysis", "Features", "Youtube"],
  LeftOption: ["T20 Time Out Hindi", "Match Day", "Fantast Pick", "Run Order", "25 Questions", "Interviews", "Press Confrence"],
}, {
  title: "Stats",
  RightOption: ["Stats Home", "IPL 2022", "SuperStats", "All Records", "Grounds"],
  LeftOption: ["AskCricinfo", "Statsguru", "2022 Records", "Players", "Ranking"],
},]