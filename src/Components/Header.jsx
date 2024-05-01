import { HStack, Image, Button,Heading,Stack, VStack,Box} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import logo1 from '../Assets/restaurant-logo_medium.png'
import logo2 from '../Assets/restaurant-logo_small.png'
import { HashLink } from "react-router-hash-link";
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import {motion} from 'framer-motion';
import {AiFillHome} from 'react-icons/ai';
import {ImSpoonKnife } from 'react-icons/im';
import {GrGallery} from 'react-icons/gr';
import {MdInfo} from 'react-icons/md';
import {FaTabletAlt } from 'react-icons/fa';



const Header = () => {
   let [ShowNavbar, SetShowNavbar] = useState('none')
   return (
      <>


         <HStack
            p={['12px','6px']}
            justifyContent={'space-between'}
            backgroundColor={'#f6b319'}
            zIndex={5}
            pos={'sticky'}
            top={'0'}
         >

            <HStack>
               <Image src={logo1} display={['none', 'none', 'flex', 'flex']} />
               <Image src={logo2} display={['flex', 'flex', 'none', 'none']} />
               <Heading
                  textTransform={'uppercase'}
                  fontWeight={'400'}
                  color={'#557c3e'}
                  textShadow={'2px 1px 2px black'}
                  fontSize={['18px', '24px']}
               >my restaurant</Heading>
            </HStack>

            <Stack
               display={['none', 'none', 'none', 'flex']}
               direction={['column', 'row']}
            >

               <Button
                  p={'12px 20px'}
                  color={'#61122f'}
                  textTransform={'uppercase'}
                  backgroundColor={'#f6b319'}
               >
                 <Box mr={'8px'}><AiFillHome fontSize={'20px'} /> </Box>  
                  <Link to='/'>WELCOME</Link>
               </Button>

               <Button
                  p={'12px 20px'}
                  color={'#61122f'}
                  textTransform={'uppercase'}
                  backgroundColor={'#f6b319'}
               >
                  <Box mr={'8px'}><ImSpoonKnife  fontSize={'20px'} /></Box>
                  <Link to='/Menu'>MENU</Link>
               </Button>

               <Button
                  p={'12px 20px'}
                  color={'#61122f'}
                  textTransform={'uppercase'}
                  backgroundColor={'#f6b319'}
               >
                  <Box mr={'8px'}><GrGallery  fontSize={'20px'} /></Box>
                  <Link to='/Gallery'>GALLERY</Link>
               </Button>

               <Button
                  p={'12px 20px'}
                  color={'#61122f'}
                  textTransform={'uppercase'}
                  backgroundColor={'#f6b319'}
               > 
                 <Box mr={'10px'}><MdInfo  fontSize={'20px'} /></Box>
                  <HashLink to='/#aboutus'>ABOUT US</HashLink>
               </Button>


               <Button
                  p={'12px 20px'}
                  color={'#61122f'}
                  textTransform={'uppercase'}
                  backgroundColor={'#f6b319'}
               >
                 <Box mr={'8px'}><FaTabletAlt  fontSize={'20px'} /></Box>
                  <Link to='/Booxtable'>BOOK TABLE</Link>
               </Button>
            </Stack>

            {/* hamberger icon  */}
            <HamburgerIcon
               pos={'absolute'}
               w={'30px'}
               h={'30px'}
               top={'25px'}
               right={'16px'}
               cursor={'pointer'}
               color={'#61122f'}
               display={['flex', 'flex', 'flex', 'none']}
               onClick={() => { SetShowNavbar('flex') }}
               zIndex={10}
            />

         </HStack>

         {/* mobile-->screen and tablet-->screen   */}

        <motion.div
        w='100%'
        h='100%'
        initial={{x:900}}
        animate={{x:0}}
        transition={{duration:3.5}}
        >
            <VStack
               w={'70%'}
               h={'50vh'}
               display={[ShowNavbar, ShowNavbar, ShowNavbar, 'none']}
               alignItems={'stretch'}
               justifyContent={'center'}
               pos={'fixed'}
               right={0}
               backgroundColor={'#f6b319'}
               zIndex={10}
               gap={"20px"}
            >
               <Box>
               <CloseIcon
                  color={'#61122f'}
                  pos={'absolute'}
                  top={'4px'}
                  right={'20px'}
                  w={'20px'}
                  h={'20px'}
                  onClick={() => { SetShowNavbar('none') }}
                  zIndex={100}
               />
               </Box>

             <Button
                  p={'12px 20px'}
                  color={'#61122f'}
                  textTransform={'uppercase'}
                  backgroundColor={'#f6b319'}
               >
                 <Box mr={'8px'}><AiFillHome fontSize={'20px'} /> </Box>  
                  <Link to='/'>WELCOME</Link>
               </Button>

               <Button
                  p={'12px 20px'}
                  color={'#61122f'}
                  textTransform={'uppercase'}
                  backgroundColor={'#f6b319'}
               >
                  <Box mr={'8px'}><ImSpoonKnife  fontSize={'20px'} /></Box>
                  <Link to='/Menu'>MENU</Link>
               </Button>

               <Button
                  p={'12px 20px'}
                  color={'#61122f'}
                  textTransform={'uppercase'}
                  backgroundColor={'#f6b319'}
               >
                   <Box mr={'8px'}><GrGallery  fontSize={'20px'} /></Box>
                  <Link to='/Gallery'>GALLERY</Link>
               </Button>

               <Button
                  p={'12px 20px'}
                  color={'#61122f'}
                  textTransform={'uppercase'}
                  backgroundColor={'#f6b319'}
               >
                 <Box mr={'10px'}> <MdInfo  fontSize={'20px'} /></Box>
                  <HashLink to='/#aboutus'>ABOUT US</HashLink>
               </Button>


               <Button
                  p={'12px 20px'}
                  color={'#61122f'}
                  textTransform={'uppercase'}
                  backgroundColor={'#f6b319'}
               >
                  <Box mr={'8px'}><FaTabletAlt  fontSize={'20px'} /></Box>
                  <Link to='/Booxtable'>BOOK TABLE</Link>
               </Button>
            </VStack>
         </motion.div>

 </>
   )
}

export default Header