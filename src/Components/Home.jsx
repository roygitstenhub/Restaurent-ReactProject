import React from 'react'
import { Box, HStack, Heading,Text} from '@chakra-ui/react';
import Aboutus from './Aboutus';
import Cheifbest from './Cheifbest';
import Testimonial from './Testimonial';
import Typewriter from 'typewriter-effect';
import {BsArrowUpRight} from 'react-icons/bs';
import {BsFacebook,BsInstagram,BsTwitter} from 'react-icons/bs';


const Home = () => {
    return (
        <>
            <Box
                backgroundColor={'#61122f'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                flexDirection={'column'}
                className='home-banner'
                pos={'relative'}
                zIndex={-1}
                height={['90vh','80vh']}                 
            >
      
            <Heading 
            as={'h1'} 
            fontSize={['12vw','10vw']} 
            fontWeight={'400'}
             textTransform={'uppercase'} 
             color={'white'}
             zIndex={100}
             letterSpacing={'1px'}
             pos={'absolute'}
             top={['40%','20%']}
             > restaurant </Heading>

             <Box mt={'50px'} color={'white'} zIndex={100} display={'flex'} >
                
                <Typewriter options={{
                        strings: [' the flavours of your wish ', 'freshness delivered', 'tasty hot and hygienic'],
                        autoStart: true,
                        loop: true,
                        cursor: '',
                        wrapperClassName: 'typewriterpara',
                    }} />
             </Box>
          
          <HStack
          width={'100%'}
          color={'white'}
          zIndex={100}
          position={'absolute'}
          bottom={0}
          p={'8px'}
          alignItems={'center'}
          justifyContent={'space-between'}
          >
            <Text
             textTransform={'uppercase'} 
             fontWeight={'600'}
              fontSize={'10px'}
              letterSpacing={'1px'}
              color='white'
              padding={0}
              display={'flex'}
              >check out menu <BsArrowUpRight/>  </Text>

              <HStack gap={'6px'}>
                 <BsFacebook cursor={'pointer'}/>
                 <BsInstagram cursor={'pointer'}/>
                 <BsTwitter cursor={'pointer'}/>
              </HStack>
             
          </HStack>

            
     </Box>


            <Aboutus />

            <Cheifbest />

            <Testimonial />

        </>

    )
}

export default Home