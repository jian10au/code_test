import styles from './page.module.css';
import ReadAndEditProfile from './components/ReadAndEditProfile';
import { Box, Text } from './chakraProxy';

export default function Home() {
  return (
    <main className={styles.main}>
      <Box textAlign='center' p={4}>
        <Text fontSize={['sm', 'md', 'lg', 'xl', '2xl']}>
          Tell us who you are and our great AI will show you who your best
          buddies are!
        </Text>
      </Box>
      <ReadAndEditProfile />
    </main>
  );
}
