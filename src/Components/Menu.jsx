import { Container, Heading,Box, Button} from '@chakra-ui/react'
import React from 'react';
import HTMLFlipBook from "react-pageflip";
import { pdfjs, Document, Page as ReactPdfPage } from "react-pdf";
import samplePDF from '../food-menu.pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// import { Link } from 'react-router-dom';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const width = 300;
const height = 430;

const Page = React.forwardRef(({ pageNumber }, ref) => {

  return (
    <Box ref={ref} >
      <ReactPdfPage pageNumber={pageNumber} width={width} height={height} />
    </Box>
  );
});

const Menu = () => {
  return (
    <>
      <Container
        maxW={'full'}
        height={'100vh'}
        backgroundColor={'#61122f'}
        color={'white'}
        zIndex={-1}
        overflowY={'auto'}
        className='ms-img'
      >
        <Heading
          fontWeight={300}
          textTransform={'capitalize'}
          textAlign={'center'}
          p={'16px'}
          color={'#f6b319'}
          fontSize={['2xl', '2xl']}
        >More great meals await you inside our menu</Heading>

     <Box
     width={'100%'}
     display={'flex'}
     justifyContent={'center'}
     alignItems={'center'}
     marginTop={['50px','0px']}
     >
        <Document file={samplePDF} >
          <HTMLFlipBook width={width} height={height}>
            <Page pageNumber={1} />
            <Page pageNumber={2} />
            <Page pageNumber={4} />
            <Page pageNumber={5} />
            <Page pageNumber={6} />
            <Page pageNumber={7} />
            <Page pageNumber={8} />
            <Page pageNumber={9} />
            <Page pageNumber={10} />
            <Page pageNumber={11} />
            <Page pageNumber={12} />
            <Page pageNumber={13} />
            <Page pageNumber={14} />
            <Page pageNumber={15} />
            <Page pageNumber={16} />
            <Page pageNumber={17} />
            <Page pageNumber={18} />
            <Page pageNumber={19} />
            <Page pageNumber={20} />
          </HTMLFlipBook>
        </Document>

        
      </Box>

      <a
        href={samplePDF}
        download="menu-pdf"
        target="_blank"
        rel="noreferrer"
      >
            <Button
                w={'150px'}
                margin={'auto'}
                mt={'20px'}
                display={'block'}
                color={'#61122f'}
                backgroundColor={'#f6b319'}
                variant={'outline'}
                textAlign={'center'}
                textTransform={'capitalize'}
            >download menu
            
            </Button>

          </a>

      </Container>

    </>
  )
}

export default Menu

