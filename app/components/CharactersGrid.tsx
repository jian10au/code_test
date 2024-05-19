import { Grid } from '../chakraProxy/index';
import React from 'react';
import { gql } from '@apollo/client';
import { getClient } from '../ApolloClient/client';
import GridItemDetail from './GridItemDetail';

const query = gql`
  query Characters($page: Int) {
    characters(page: $page) {
      info {
        count
        pages
        prev
        next
      }
      results {
        image
        id
        name
        location {
          name
        }
        status
      }
    }
  }
`;

export interface ICharacter {
  id: string;
  name: string;
  location: { name: string };
  status: string;
  image: string;
}

export default async function CharactersGrid({ page }: { page: number }) {
  const { data } = await getClient().query({
    query,
    variables: { page },
  });

  return (
    <Grid
      mt={4}
      templateColumns={[
        'repeat(1, 1fr)',
        'repeat(2, 1fr)',
        'repeat(3, 1fr)',
        'repeat(4, 1fr)',
        'repeat(5, 1fr)',
      ]}
      gap={4}
    >
      {data.characters.results.map((char: ICharacter) => (
        <GridItemDetail
          key={char.id}
          char={{
            id: char.id,
            name: char.name,
            location: char.location,
            status: char.status,
            image: char.image,
          }}
        />
      ))}
    </Grid>
  );
}
