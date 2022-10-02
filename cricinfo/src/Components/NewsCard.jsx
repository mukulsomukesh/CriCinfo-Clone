import { Box, Text, Divider, Image } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import {FaPlayCircle} from 'react-icons/fa';


function NewsCard({ item }) {


    return (
        <>
            {item.type == "news" ?
                <Box w="full" h="fit-content" bg="white" borderRadius={"17px"} mb="16px" pb="3">
                    <Box p="2" pl="5"> <Text fontSize='xs' as="b"> TOP CRICKET NEWS </Text> </Box>
                    <Divider />
                    <Box m="3%" mb="1.5%" h="350px" w="94%" > <Image src={item.image1} borderRadius={"15px"} w="full" h="full" alt='Dan Abramov' />
                    </Box>
                    <Box pl="3%" >
                    <Link to="/news"> <Text fontSize='xl' as="b"> {item.title} </Text> </Link>
                    <Text fontSize='md' mt="8px"> {item.sub_title} </Text>
                    </Box>

                </Box>
                :
                
                <Box w="full" h="fit-content" bg="white" borderRadius={"17px"} mb="16px" pb="3">
                <Box p="2" pl="5"> <Text fontSize='xs' as="b"> {item.head} </Text> </Box>
                <Divider />
                
                <Box m="3%" mb="1.5%" h="350px" w="94%" borderRadius={"15px"} backgroundImage={item.thumbnail} pt="17%"  pl="40%" >
                 {/* <Image src={"https://images.app.goo.gl/ScMjmRMRtTbYnjMMA"} borderRadius={"15px"}   alt='Dan Abramov' /> */}
               <FaPlayCircle color="white" size = '100' />
                </Box>
                <Box pl="3%" >
                    <Link to="/news"> <Text fontSize='xl' as="b"> {item.title} </Text> </Link>
                    <Text fontSize='md' mt="8px"> {item.desc} </Text>
                </Box>
            </Box>
                
            }

        </>
    );
}
export default NewsCard