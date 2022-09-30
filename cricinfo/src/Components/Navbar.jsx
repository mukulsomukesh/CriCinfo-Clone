import { Image, Button, Text, Box, Flex, Spacer, Link, Popover, PopoverContent, PopoverArrow, PopoverTrigger } from '@chakra-ui/react'
import { CgMenuGridR } from "react-icons/cg";
import { TbSearch } from "react-icons/tb";
import { BsFillBellFill, BsTranslate } from "react-icons/bs";
import { IoSearch, IoMdSunny, IoMdMoon } from "react-icons/io";
import { ThemeContext } from '../Context/Theme/ThemeContextProvider';
import { useContext } from 'react';

function Navbar() {

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
      <Flex pl="20" pr="20" gap={"5"} bg="#03a9f4" h="50" color={"white"} pt="3">
        <Link>
          <Image src="https://wassets.hscicdn.com/static/images/logo.png" alt="ESPNcricinfo" h="6" />
        </Link>

        {heading.map((el) => (
          <Popover key={el.id} trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link>{el.title}</Link>
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

        <Spacer />
        <Link> Edition In </Link>
        <Box onClick={handleTheme}>{state.theme == "day" ? <IoMdSunny size='25px' /> : <IoMdMoon size='25px' />} </Box>
        <Link> <BsFillBellFill size='25px' /> </Link>
        <Link> <BsTranslate size='25px' /> </Link>
        <Link> <CgMenuGridR size="27px" /></Link>
        <Link> <TbSearch size='25px' /> </Link>
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