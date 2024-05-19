'use client';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  Button,
  GridItem,
  Image,
  Box,
  Text,
} from '../chakraProxy/index';
import { ICharacter } from './CharactersGrid';

export default function GridItemDetail({ char }: { char: ICharacter }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <GridItem key={char.id}>
      <Button
        onClick={onOpen}
        width='100%'
        minHeight='200px'
        colorScheme='purple'
        bg='gray.400'
        color='white'
        _hover={{ bg: 'purple.600' }}
      >
        {char.name}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg='purple.50' borderRadius='md' boxShadow='lg'>
          <ModalBody p={6}>
            <Box mb={4}>
              <Text fontSize='lg' fontWeight='bold' color='purple.800'>
                Name:
              </Text>
              <Text fontSize='md' color='purple.700' mb={2}>
                {char.name}
              </Text>
              <Text fontSize='lg' fontWeight='bold' color='purple.800'>
                Location:
              </Text>
              <Text fontSize='md' color='purple.700'>
                {char.location.name}
              </Text>
              <Text fontSize='lg' fontWeight='bold' color='purple.800'>
                Status:
              </Text>
              <Text fontSize='md' color='purple.700'>
                {char.status}
              </Text>
            </Box>
            <Box display='flex' justifyContent='center' textAlign='center'>
              <Image
                src={char.image}
                alt={char.name}
                borderRadius='md'
                boxShadow='md'
                loading='lazy'
                maxH='300px'
                objectFit='cover'
              />
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </GridItem>
  );
}
