import { Box , Text, Divider, Image } from '@chakra-ui/react'

function VideoCard({item}){
    return(
        <>
        { item.type=="video"?
    <Box w="full" h="fit-content" bg="white" borderRadius={"17px"} mb="16px" pb="3">
    <Box p="2" pl="5"> <Text  fontSize='xs' as="b"> TOP CRICKET NEWS </Text> </Box>
    <Divider />
    <Box  m="3%" mb="1.5%" h="350px" w="94%" > <Image src={item.image1} borderRadius={"15px"}  w="full" h="full" alt='Dan Abramov' /> 
    </Box>  
    <Box pl="3%" >
    <Text  fontSize='xl' as="b"> {item.title} </Text>
    <Text  fontSize='md' mt="8px"> {item.sub_title} </Text>
     </Box>
</Box>    
:
<p>  </p>
    }
        
        </>
    );
}
export default VideoCard