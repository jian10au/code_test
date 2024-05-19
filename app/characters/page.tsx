import React from 'react';
import LinkButton from '../components/LinkButton';
import { Box, Heading } from '../chakraProxy/index';
import { PaginationControls } from '../components/PaginationControl';

import CharactersGrid from '../components/CharactersGrid';

interface ICharactersProps {
  searchParams: { page: string };
}

export default async function Characters(props: ICharactersProps) {
  const { searchParams } = props;
  const page = parseInt(searchParams['page']);

  return (
    <Box px={4}>
      <Heading as='h2'>Your buddies info</Heading>
      <LinkButton href='/'>Back to home</LinkButton>
      <CharactersGrid page={page} />
      <PaginationControls totalCount={826} />
    </Box>
  );
}
