import styles from './page.module.css';
import ReadAndEditProfile from './components/ReadAndEditProfile';
import { Box, Text } from './chakraProxy';
import Image from 'next/image';

export default function Home() {
  return (
    <main className={styles.main}>
      <Box textAlign='center' p={4} borderRadius='x-large'>
        <Text fontSize={['sm', 'md', 'lg', 'xl', '2xl']} color={'white'}>
          Tell us who you are and our great AI will show you who your best
          buddies are!
        </Text>
      </Box>
      <Image src='/leo_logo.jpeg' alt='AI' width={200} height={200} />
      <ReadAndEditProfile />
    </main>
  );
}
