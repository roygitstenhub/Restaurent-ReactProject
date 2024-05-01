import { Box, Container, Heading, Image, } from '@chakra-ui/react';
import React from 'react';
import { CheifItem } from '../Cheif';
import { motion } from 'framer-motion';


const Cheifbest = () => {
  return (



    <Container
      maxW={'full'}
      pt={'20px'}
      backgroundColor={'#61122f'}
      color={'white'}
      className='smoke-three-banner'
    >
      <motion.div
        w='100%'
        h='100%'
        initial={{ opacity:1 }}
        whileInView={{ opacity: 1 }}
        transition={{duration:3}}
      >

      <Heading
        className='section-heading'
        textTransform={'capitalize'}
        fontWeight={300}
        textAlign={['center', 'center']}
        marginBottom={'15px'}
        color={'#f6b319'}
        p={'16px 0px'}
        w={['100%', '500px']}
        margin={'auto'}
      >Chef's  recommendation</Heading>

   

        <Box
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          flexWrap={'wrap'}
        >
          {
            CheifItem.map((obj) => (
              <Box
                pos={'relative'}
                w={['120px', '320px']}
                m={'12px'}
                className='cheif-item cheif-card'
              >
                <Image src={obj.image} />

                <Heading
                  pos={'absolute'}
                  left={'0px'}
                  top={'40%'}
                  w={'100%'}
                  textAlign={'center'}
                  fontWeight={'400'}
                  textTransform={'uppercase'}
                  fontSize={['12px', '24px']}
                >{obj.name}</Heading>

                {/* <Button
                pos={'absolute'}
                top={'55%'}
                left={'32%'}
                variant={'outline'}
                textTransform={'capitalize'}
                fontWeight={400}
                display={['none', 'block']}
              >order now</Button> */}
              </Box>
            ))
          }
        </Box>
      </motion.div>


    </Container>



  )
}

export default Cheifbest