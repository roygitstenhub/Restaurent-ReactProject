import React from 'react';
import { Box, Container, Heading,Image, Text } from '@chakra-ui/react';
import { specialItem } from '../Special';

const Specials = () => {
    return (
        <Container
            maxW={'full'}
            backgroundColor={'#61122f'}
            color={'white'}
            p={'16px'}
            // className='ms-img'

        >
            <Heading
                fontWeight={'300'}
                textTransform={'capitalize'}
                textAlign={'center'}
                p={'16px'}
                color={'#f6b319'}
                fontSize={['2xl','2xl']}
            >Our every meal has its own unique special taste we want to share with you</Heading>

            <Box
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                flexWrap={'wrap'}
                zIndex={-1}
            >

                {


                    specialItem.map((obj) => (

                        <Box
                            w={['100%', '45%']}
                            m={'16px'}
                            display={'flex'}
                            justifyContent={'center'}
                            alignItems={'center'}
                            flexDirection={['column', 'row']}
                        >
                            <Box
                            pos={'relative'}
                            border={'1px solid white'}
                            >

                            <Image src={obj.image} />

                            <Text
                            w={'50px'}
                            backgroundColor={'#557c3e'}
                            pos={'absolute'}
                            bottom={0}
                            right={0}
                            >{obj.price}</Text>

                            </Box>

                            <Box
                                w={['100%','50%']}
                                pos={'relative'}
                                textAlign={['center', 'left']}
                                ml={'15px'}
                            >
                                <Heading
                                    fontSize={'xl'}
                                    fontWeight={400}
                                    color={'#f6b319'}
                                >{obj.title}</Heading>

                                <Text fontStyle={'italic'} letterSpacing={'1px'} >{obj.disc}</Text>

                            </Box>

                        </Box>

                    ))

                }

            </Box>

        </Container>
    )
}

export default Specials