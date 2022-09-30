import { Box , Text, Divider, Image } from '@chakra-ui/react'

function NewsCard(){
    return(
        <>
        <Box w="full" >
            <Box p="1%" pl="3%" borderBottom={"1px"}> <Text  fontSize='xs' as="b"> WHO DOES IT BEST </Text> </Box>
            <Box  m="3%" mb="1.5%" h="350px" w="94%" > <Image src='https://bit.ly/dan-abramov' borderRadius={"15px"}  w="full" h="full" alt='Dan Abramov' /> 
            </Box>  
            <Box pl="3%" >
            <Text  fontSize='xl' as="b"> Who has the best slower ball in T20 cricket? </Text>
            <Text  fontSize='md' mt="8px"> Our writers pick which seamer most artfully deceives batters in the shortest format in men's cricke </Text>
             </Box>
          

        </Box>
        </>
    );
}
export default NewsCard