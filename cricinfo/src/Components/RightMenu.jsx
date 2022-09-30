import { Image, Button, Text, Box, Flex, Spacer, Link, Popover, PopoverContent, PopoverArrow, PopoverTrigger, Divider } from '@chakra-ui/react'
import { ChevronRightIcon, SearchIcon } from '@chakra-ui/icons'

function RightMenu(){
    return(
        <>
                
        <Box borderRadius={"17px"} w="full" bg="white" pb="2" mb="4">
       <Text p="3" pl="4"  fontSize='12px' fontWeight={"semibold"}>News Headlines</Text>
       <Divider width="100%" mb="3"/>
        <Flex pl="4" h="26px"> <ChevronRightIcon mt="2px" h="18px" w="18px" color="#03a9f4"/> <Text ml="2" fontSize='sm'> Ganguly: Bumrah not out of T20 WC yet</Text>  </Flex>
        <Flex pl="4" h="26px"> <ChevronRightIcon mt="2px" h="18px" w="18px" color="#03a9f4"/> <Text ml="2" fontSize='sm'> Joe Root puts golf before Yorkshire</Text>  </Flex>
        <Flex pl="4" h="26px"> <ChevronRightIcon mt="2px" h="18px" w="18px" color="#03a9f4"/> <Text ml="2" fontSize='sm'> Gaikwad eager to play at Chepauk in IPL </Text>  </Flex>
        <Flex pl="4" h="26px"> <ChevronRightIcon mt="2px" h="18px" w="18px" color="#03a9f4"/> <Text ml="2" fontSize='sm'> Women's Asia Cup: all you need to know</Text>  </Flex>
        <Flex pl="4" h="26px"> <ChevronRightIcon mt="2px" h="18px" w="18px" color="#03a9f4"/> <Text ml="2" fontSize='sm'> $1.6m prize money for T20 WC winners</Text>  </Flex>
        <Flex pl="4" h="26px"> <ChevronRightIcon mt="2px" h="18px" w="18px" color="#03a9f4"/> <Text ml="2" fontSize='sm'> Buzz: The Manjrekar-Jadeja love fest</Text>  </Flex>
    </Box>
        
        <Image src="https://tpc.googlesyndication.com/simgad/3343069262008315647?" borderRadius={"17px"}  w="full" m="auto" mb="18px"  />
      
        <Box borderRadius={"17px"} w="full" bg="white" h="fit-content">
       {/* <Text p="3" pl="4"  fontSize='12px' fontWeight={"semibold"}>News Headlines</Text> */}
        <Box p="3"> <Image borderRadius={"15px"} src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/259500/259586.3.jpg" /> <Text mt="2" fontWeight={"semibold"} fontSize='sm'> On This Day: Happy birthday, Martin Guptill </Text>  </Box>
        <Divider mb="3"/>
        <Box  p="3"> <Image borderRadius={"15px"} src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/346700/346774.png" /> <Text mt="2" fontWeight={"semibold"} fontSize='sm'>  On This Day: Happy birthday, Martin Guptill     </Text>  </Box>
        <Divider mb="3"/>
        <Box p="3"> <Image borderRadius={"15px"} src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/209100/209187.5.jpg" /> <Text mt="2" fontWeight={"semibold"} fontSize='sm'> My Favourite Cricket Photo: Exile on main street   </Text>  </Box>
        <Divider mb="3"/>
        <Box p="3"> <Image borderRadius={"15px"} src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/346300/346354.6.jpg" /> <Text mt="2" fontWeight={"semibold"} fontSize='sm'> The latest cricket photos   </Text>  </Box>
        <Divider mb="3"/>
        <Box p="3"> <Image borderRadius={"15px"} src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/342500/342597.6.jpg" /> <Text mt="2" fontWeight={"semibold"} fontSize='sm'> Sunil Narine: 'My mindset is how to not concede runs' </Text>  </Box>
    </Box>

    <Image src="https://tpc.googlesyndication.com/simgad/1813913120730998978?" borderRadius={"17px"} w="full" m="auto" mb="18px"  mt="18px"  />

    <Box borderRadius={"17px"} w="full" bg="white" h="fit-content">
       {/* <Text p="3" pl="4"  fontSize='12px' fontWeight={"semibold"}>News Headlines</Text> */}
        <Box p="3"> <Image borderRadius={"15px"} src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/335600/335689.6.jpg" /> <Text mt="2" fontWeight={"semibold"} fontSize='sm'> Who does it best in women's cricket? </Text>  </Box>
        <Divider mb="3"/>
        <Box  p="3"> <Image borderRadius={"15px"} src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/342800/342853.6.jpg" /> <Text mt="2" fontWeight={"semibold"} fontSize='sm'>  What it means to be a South African-born cricketer playing for England   </Text>  </Box>
        <Divider mb="3"/>
        <Box p="3"> <Image borderRadius={"15px"} src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/344800/344871.jpg" /> <Text mt="2" fontWeight={"semibold"} fontSize='sm'> Records index: most runs, most wickets, and a lot more  </Text>  </Box>
        <Divider mb="3"/>
        <Box p="3"> <Image borderRadius={"15px"} src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/314000/314087.6.jpg" /> <Text mt="2" fontWeight={"semibold"} fontSize='sm'> My favourite cricket photo: Tendulkar in Oz </Text>  </Box>
    </Box>


        </>
    );
}

export default RightMenu