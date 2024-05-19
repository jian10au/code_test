'use client';
import { Button, HStack, Stack, Text } from '@chakra-ui/react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React from 'react';

interface IPagingControls {
  totalCount: number;
}

export const PaginationControls = (props: IPagingControls) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = parseInt(searchParams.get('page') ?? '1');
  return (
    <Stack align='center' pt='20'>
      <HStack>
        <Button
          key='prev'
          isDisabled={page <= 1}
          onClick={() => router.push(`/characters?page=${page - 1}`)}
        >
          Prev
        </Button>
        <Button
          key='next'
          isDisabled={page >= 42}
          onClick={() => router.push(`/characters?page=${page + 1}`)}
        >
          Next
        </Button>
      </HStack>
      <Text fontWeight='extrabold'>Total Characters: {props.totalCount}</Text>
    </Stack>
  );
};
