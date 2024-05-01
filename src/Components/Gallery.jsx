import React from 'react'
import {galleryPhotos} from '../Gallery';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Container, Heading ,Image ,Box } from '@chakra-ui/react';


const Gallery = () => {
  return (
    <Container
    maxW={'full'}
    pos={'relative'}
    backgroundColor={'#61122f'}
    color={'#f6b319'}
    className='smoke-three-banner'
    p="16px"
    border={'1px solid red'}
    >
          <Heading
                fontWeight={400}
                textTransform={'capitalize'}
                textAlign={'center'}
                p={'8px'}
                letterSpacing={'1px'}
            >our gallery</Heading>
     <Box
      w={['100%','50%']}
      margin={'auto'}
     >
         
            <Carousel
             autoPlay
             infiniteLoop
             interval={1000}
             showStatus={false}
             showThumbs={false} 
             showArrows={false}
             >
                {
                   galleryPhotos.map((obj)=>(
                     <Box  w={['100%','100%']}  margin={'auto'}>
                      <Image src={obj.image} objectFit={'contain'} borderRadius={'5px'} />
                       </Box>
                   )) 
                }
             </Carousel>

     </Box>
      </Container>
  )
}

export default Gallery