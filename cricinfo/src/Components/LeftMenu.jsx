import { Image, Button, Text, Box, Flex, Spacer, Link, Popover, PopoverContent, PopoverArrow, PopoverTrigger, Divider } from '@chakra-ui/react'
import { ChevronRightIcon, SearchIcon } from '@chakra-ui/icons'

function LeftMenu(){
    return(
        <>


<Box borderRadius={"17px"} w="full" bg="white" pb="2" pt="2" mb="4">
       <Image src="https://wassets.hscicdn.com/static/images/nlp-logo.svg" w="45%" m="auto" />
       <Text fontSize='md'  p="20px" textAlign="center">What is Tim David's strike rate in the death overs in T20s since 2021?</Text>
       <Button ml="10%" mb="20px" leftIcon={<SearchIcon />} color='#03a9f4' borderColor={"#03a9f4"} w="80%" variant='outline' borderRadius={"20px"} fontWeight="bold" h="40px"> Ask a question </Button>
        </Box>

        <Box borderRadius={"17px"} w="full" bg="white" pb="2" mb="4">
           <Text p="3" pl="4"  fontSize='12px' fontWeight={"semibold"}>Key Series</Text>
           <Divider width="100%" mb="3"/>
            {seriese.map((el)=>(
            <Flex pl="4" h="6" key={el.id}> <ChevronRightIcon mt="2px" h="18px" w="18px" color="#03a9f4"/> <Text ml="2" fontSize='sm'>{el}</Text>  </Flex>
            ))}

            
        </Box>
        
        <Box borderRadius={"17px"} w="full" bg="white" pb="2" mb="4">
       <Text p="3" pl="4"  fontSize='12px' fontWeight={"semibold"}>Quick Links</Text>
       <Divider width="100%" mb="3"/>
        <Flex pl="4" h="26px"> <ChevronRightIcon mt="2px" h="18px" w="18px" color="#03a9f4"/> <Text ml="2" fontSize='sm'>Players In Focous</Text>  </Flex>
        <Flex pl="4" h="26px"> <ChevronRightIcon mt="2px" h="18px" w="18px" color="#03a9f4"/> <Text ml="2" fontSize='sm'>T20 Time Out</Text>  </Flex>
        <Flex pl="4" h="26px"> <ChevronRightIcon mt="2px" h="18px" w="18px" color="#03a9f4"/> <Text ml="2" fontSize='sm'>T20 Time Out Hindi</Text>  </Flex>
        <Flex pl="4" h="26px"> <ChevronRightIcon mt="2px" h="18px" w="18px" color="#03a9f4"/> <Text ml="2" fontSize='sm'>ICC Ranking</Text>  </Flex>
        <Flex pl="4" h="26px"> <ChevronRightIcon mt="2px" h="18px" w="18px" color="#03a9f4"/> <Text ml="2" fontSize='sm'>Fantasy Pick</Text>  </Flex>
        <Flex pl="4" h="26px"> <ChevronRightIcon mt="2px" h="18px" w="18px" color="#03a9f4"/> <Text ml="2" fontSize='sm'>Haan Ya Naa</Text>  </Flex>
    </Box>
        
    <Box borderRadius={"17px"} w="full" bg="white" pb="2" mb="4">
       <Text p="3" pl="4"  fontSize='12px' fontWeight={"semibold"}>ESPNcricinfo Apps</Text>
       <Divider width="100%" mb="3"/>
        <Flex pl="4" h="26px"> <ChevronRightIcon mt="2px" h="18px" w="18px" color="#03a9f4"/> <Text ml="2" fontSize='sm'>Android App</Text>  </Flex>
        <Flex pl="4" h="26px"> <ChevronRightIcon mt="2px" h="18px" w="18px" color="#03a9f4"/> <Text ml="2" fontSize='sm'>iOS App</Text>  </Flex>
        </Box>

        <Box borderRadius={"17px"} w="full" bg="white" pb="2" mb="4">
       <Text p="3" pl="4"  fontSize='12px' fontWeight={"semibold"}>Follow ESPNcricinfo</Text>
       <Divider width="100%" mb="3"/>
       <Flex pl="4" h="26px"> <ChevronRightIcon mt="2px" h="18px" w="18px" color="#03a9f4"/> <Text ml="2" fontSize='sm'>Instagram</Text>  </Flex>
        <Flex pl="4" h="26px"> <ChevronRightIcon mt="2px" h="18px" w="18px" color="#03a9f4"/> <Text ml="2" fontSize='sm'>Twitter</Text>  </Flex>
        <Flex pl="4" h="26px"> <ChevronRightIcon mt="2px" h="18px" w="18px" color="#03a9f4"/> <Text ml="2" fontSize='sm'>Facebook</Text>  </Flex>
        <Flex pl="4" h="26px"> <ChevronRightIcon mt="2px" h="18px" w="18px" color="#03a9f4"/> <Text ml="2" fontSize='sm'>YouTube</Text>  </Flex>
        </Box>

        <Box borderRadius={"17px"} w="full" bg="white" pb="2" mb="4">
       <Text p="3" pl="4"  fontSize='12px' fontWeight={"semibold"}>ESPN Sites</Text>
       <Divider width="100%" mb="3"/>
        <Flex pl="4" h="26px"> <ChevronRightIcon mt="2px" h="18px" w="18px" color="#03a9f4"/> <Text ml="2" fontSize='sm'>The Cricket Monthly </Text>  </Flex>
        <Flex pl="4" h="26px"> <ChevronRightIcon mt="2px" h="18px" w="18px" color="#03a9f4"/> <Text ml="2" fontSize='sm'>ESPN</Text>  </Flex>
        </Box>
        </>
    );
}

export default LeftMenu

const seriese = ["India v South Africa", "Ind-A v NZ-A", "UAE v Bangladesh", "Marsh Cup", "Country Div1", "Legends League", "CWC Super League", "Women's Asia Cup", "Pakistan v England", "West Indies v New Zealand", "Sheffield Shield", "Men's T20 World Cup", "Women's Championship"]
