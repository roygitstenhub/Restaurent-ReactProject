import { Button, Container, HStack, Heading, Box, Image } from '@chakra-ui/react'
import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa';
import Watsapp from '../Assets/watsapp.webp';
import ReactWhatsapp from 'react-whatsapp';
// import { Link } from 'react-router-dom';



const Booxtable = () => {
  return (

    <Container
      maxW={'full'}
      h={'50vh'}
      backgroundColor={'#61122f'}
      color={'#f6b319'}
      textAlign={'center'}
      className='booktable-section smoke-two-banner'
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
    >
      <Heading
        fontWeight={300}
        textAlign={'center'}
        p={'24px 0'}
      >Call us or WhatsApp to book your table</Heading>

      <HStack
        p={'20px'}
        w={['100%', '500px']}
        margin={'auto'}
        alignItems={'center'}
        justifyContent={'center'}
        spacing={8}
      >

        <Button
          w={'150px'}
          color={'#c61e24'}
          backgroundColor={'white'}
          p={'24px'}
          variant={'outline'}
        >
           <Box mr={'10px'}><FaPhoneAlt /></Box> 
           <a href='tel:8296958471'>CALL US</a>
        </Button>

        <ReactWhatsapp
          number="8296958471"
          message="order food"
        >
          <Button
            w={'150px'}
            color={'whatsapp.400'}
            backgroundColor={'white'}
            p={'24px'}
            variant={'outline'}
            textAlign={'center'}
          >
            <Image src={Watsapp} w={'46px'} ml={'-12px'} />WATSAPP US
          </Button>

        </ReactWhatsapp>

      </HStack>


    </Container>
  )
}

export default Booxtable