import React from 'react';
import { Box, Container, Heading, Image, Stack, VStack, Text } from '@chakra-ui/react';
import AboutImage from '../Assets/aboutus.png';
import { motion } from 'framer-motion';




const Aboutus = () => {
  return (
    <Box
      w={'100%'}
      p={'12px'}
      backgroundColor={'#61122f'}
      color={'white'}
      id='aboutus'
      className='smoke-one-banner'
    >

      <motion.div
        w='100%'
        h='100%'
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
      >

        <Container
          maxW={'container.lg'}
          mt={'60px'}
        >
          <Stack
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
            direction={['column', 'row']}
          >
            <Image src={AboutImage} w={['200px', '300px']} h={['200px', '300px']} className='aboutusimg' />

            <VStack
              w={['100%', '60%']}
              lineHeight={1.8}
              textAlign={'justify'}
            >
              <Heading
                className='section-heading'
                textTransform={'capitalize'}
                fontWeight={300}
                marginBottom={'15px'}
                color={'#f6b319'}
              >about us</Heading>

              <Text   letterSpacing={'1px'}>
                Our restaurant provides you with an unmatched experience of spending exceptional time with family, friends, office colleagues & celebrations.
                We are a first of a kind restaurant in Seychelles with a unique concept serving 5 dynamic cuisines under one roof. With specially curated bar menu, latest groovy tunes and a dash of the local weather, outdoor seating and blissful view, we are sure to keep you wanting more!
                We are ready to provide you with the most fascinating vibe with a scrumptious dining experience from around the world.
              </Text>

            </VStack>

          </Stack>
        </Container>

      </motion.div>

    </Box>
  )
}

export default Aboutus