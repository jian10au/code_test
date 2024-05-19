import styles from './page.module.css';
import ReadAndEditProfile from './components/ReadAndEditProfile';
import { Box, Text } from './chakraProxy';

export default function Home() {
  return (
    <main className={styles.main}>
      <Box>
        <Text fontSize='x-large'>
          Tell us a bit about yourself and we can show you who you can
          potentially pair with
        </Text>
      </Box>
      <ReadAndEditProfile />
    </main>
  );
}
