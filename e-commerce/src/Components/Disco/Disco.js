import {
  Card,
  Stack,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Button,
  Text
} from '@chakra-ui/react';

function Disco() {
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
    >
      <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '200px' }}
        src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
        alt='Caffe Latte'
      />

      <Stack>
        <CardBody>
          <Heading size='md'>
            Nome do CD
          </Heading>

          <Text py='2'>
            Faixas
          </Text>
        </CardBody>
        <CardFooter>
          <Button variant='solid' bg='darkgrey' color={'black'}>
            Add ao Carrinho
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
}

export default Disco