import { Heading, Image, Container, Box } from '@chakra-ui/react'
import React from 'react';
import CardOne from '../Assets/cardone.jpg';
import CardTwo from '../Assets/cardtwo.jpg';
import { Link } from 'react-router-dom';

const Testimonial = () => {
    return (
        <Container
            maxW={'full'}
            pt={'25px'}
            backgroundColor={'#61122f'}
            color={'white'}
        >
            <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                wrap={'wrap'}
                p={'16px'}
                flexDirection={['column', 'row']}
                backgroundColor={'#61122f'}
                color={'white'}
            >

                <Box
                    w={'350px'}
                    m={'12px'}
                    pos={'relative'}
                    className='card cheif-card'
                >
                    <Link to='/Menu'>
                        <Image src={CardOne} />

                        <Heading
                            w={'100%'}
                            pos={'absolute'}
                            fontWeight={'400'}
                            textTransform={'uppercase'}
                            left={'0'}
                            bottom={'0'}
                            textAlign={'center'}
                            backgroundColor={'black'}
                            opacity={'0.7'}
                            fontSize={'32px'}
                            cursor={'pointer'}
                        >menu</Heading>
                    </Link>
                </Box>

                <Box
                    w={'350px'}
                    m={'12px'}
                    pos={'relative'}
                    className='card cheif-card'
                >
                    <Link to='/Specials'>
                        <Image src={CardTwo} />

                        <Heading
                            w={'100%'}
                            pos={'absolute'}
                            fontWeight={'400'}
                            textTransform={'uppercase'}
                            left={'0'}
                            bottom={'0'}
                            textAlign={'center'}
                            backgroundColor={'black'}
                            opacity={'0.7'}
                            fontSize={'32px'}
                            cursor={'pointer'}
                        >special's</Heading>
                    </Link>
                </Box>

                <Box
                    w={'350px'}
                    m={'12px'}
                    pos={'relative'}
                    className='card cheif-card'
                >
                    <Link>
                        <Box
                            h={'230px'}
                            w={'100%'}
                            as="iframe"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d188689.86115529988!2d74.4624093525299!3d14.264616231522076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbc3af103db7413%3A0xa6df37516e7d79e6!2sHonnavar%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1685983429275!5m2!1sen!2sin"
                            alt="demo"
                        />

                        <Heading
                            w={'100%'}
                            pos={'absolute'}
                            fontWeight={'400'}
                            textTransform={'uppercase'}
                            left={'0'}
                            bottom={'0'}
                            textAlign={'center'}
                            backgroundColor={'black'}
                            opacity={'0.7'}
                            fontSize={'32px'}
                            cursor={'pointer'}
                        >map</Heading>
                    </Link>
                </Box>

            </Box>
        </Container>
    )
}

export default Testimonial