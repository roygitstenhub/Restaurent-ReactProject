import { HStack, Heading, VStack, Text} from '@chakra-ui/react'
import React from 'react'
// import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <HStack
      alignItems={'center'}
      justifyContent={'space-around'}
      p={'26px'}
      wrap={'wrap'}
      backgroundColor={'#222'}
      color={'white'}
    >
      <VStack
        w={['100%', '30%']}
        p={'16px'}
        textTransform={'capitalize'}
        alignItems={['center', 'flex-start']}
      >
        <Heading
          w={'100%'}
          fontSize={'xl'}
          fontWeight={'600'}
          textTransform={'uppercase'}
          textAlign={['center', 'left']}
        >Hours:</Heading>
        <Text textAlign={['center', 'left']} lineHeight={1.8} letterSpacing={'1px'} >monday-saturday : 10:30am to 12:30pm </Text>

        <Text> sunday closed</Text>

      </VStack>

      <VStack
       w={['100%', '30%']}
       p={'16px'}
       textTransform={'capitalize'}
       alignItems={['center', 'flex-start']}
      >
       <Heading
          w={'100%'}
          fontSize={'xl'}
          fontWeight={'600'}
          textTransform={'uppercase'}
          textAlign={['center', 'left']}
        >adress:</Heading>
        <Text textAlign={['center', 'left']} lineHeight={1.8} letterSpacing={'1px'}>
         mavinkura,gullibeli,Motto(581334)
         Near Sharavathi bridge Tari bagil honnavr (581334)
        </Text>
      </VStack>


      <VStack
        w={['100%', '30%']}
        p={'16px'}
        textTransform={'capitalize'}
        color={'#557c3e'}
      >
        <Text fontStyle={'italic'} textAlign={'center'} letterSpacing={'1px'}>" the best indian restaurent i've been to! and that's saying a lot,since i've been to many!"</Text>
        <Text fontStyle={'italic'} textAlign={'center'} letterSpacing={'1px'}>" amazing food!great services! couldn't ask for more! i'll be back again and again."</Text>
      </VStack>
        
        {/* ---------copy right------------ */}
        <Text textAlign={'center'} p={'12px'}>&copy; Copyright roysten gonslaves 2023 ! admin</Text>

       
    </HStack>
  )
}

export default Footer