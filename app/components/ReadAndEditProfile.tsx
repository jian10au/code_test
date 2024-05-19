'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Box,
  Text,
  VStack,
} from '@chakra-ui/react';
import LinkButton from './LinkButton';

export default function ProfileForm() {
  const [profileFormData, setProfileFormData] = useState({ name: '', job: '' });

  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const jobInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // Retrieve data from local storage when the component mounts
    const storedData = localStorage.getItem('profileFormData');
    if (storedData) {
      setProfileFormData(JSON.parse(storedData));
    }
  }, []);

  function createNoteAction(formData: FormData) {
    const name = formData.get('name') as string;
    const job = formData.get('job') as string;
    const updatedData = { name, job };
    localStorage.setItem('profileFormData', JSON.stringify(updatedData));
    setProfileFormData(updatedData);
  }

  return (
    <Box p={4} maxW='600px' mx='auto' bg='purple.100'>
      <Box
        p={4}
        border='2px solid'
        borderColor='black.200'
        borderRadius='x-large'
        bg='purple.100'
        mb={6}
      >
        <Heading as='h1' size={['sm', 'md']} mb={2} color='purple.800'>
          What&apos;s your name?
        </Heading>
        <Text fontSize='lg' mb={4} color='purple.700'>
          {profileFormData.name}
        </Text>
        <Heading as='h1' size={['sm', 'md']} mb={2} color='purple.800'>
          What&apos;s your job title?
        </Heading>
        <Text fontSize='lg' color='purple.700'>
          {profileFormData.job}
        </Text>
      </Box>
      <Box
        as='form'
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target as HTMLFormElement);
          createNoteAction(formData);
        }}
      >
        <VStack spacing={4} align='stretch'>
          <FormControl>
            <FormLabel color='purple.800'>Name</FormLabel>
            <Input
              type='text'
              name='name'
              required
              ref={nameInputRef}
              defaultValue={profileFormData.name}
              bg='white'
            />
          </FormControl>
          <FormControl>
            <FormLabel color='purple.800'>Job Title</FormLabel>
            <Input
              type='text'
              name='job'
              required
              ref={jobInputRef}
              defaultValue={profileFormData.job}
              bg='white'
            />
          </FormControl>
          <Button mt={4} colorScheme='purple' size='md' type='submit'>
            I am happy
          </Button>
          <Button
            mt={4}
            colorScheme='purple'
            variant='outline'
            size='md'
            onClick={() => {
              localStorage.removeItem('profileFormData');
              if (nameInputRef.current) {
                nameInputRef.current.value = '';
              }
              if (jobInputRef.current) jobInputRef.current.value = '';
              setProfileFormData({ name: '', job: '' });
            }}
          >
            Clear
          </Button>
          {profileFormData.job !== '' && profileFormData.name !== '' && (
            <LinkButton href='/characters?page=1'>Let&apos;s go</LinkButton>
          )}
        </VStack>
      </Box>
    </Box>
  );
}
