import { Box , Text, Divider, Image } from '@chakra-ui/react'

function NewsCard(){
    return(
        <>
        <Box w="full" h="fit-content" bg="white" borderRadius={"17px"} mb="16px" pb="3">
            <Box p="2" pl="5"> <Text  fontSize='xs' as="b"> WHO DOES IT BEST </Text> </Box>
            <Divider />
            <Box  m="3%" mb="1.5%" h="350px" w="94%" > <Image src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_720/lsci/db/PICTURES/CMS/346500/346557.6.jpg' borderRadius={"15px"}  w="full" h="full" alt='Dan Abramov' /> 
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