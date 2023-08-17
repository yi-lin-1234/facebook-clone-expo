import { StyleSheet, ScrollView } from "react-native";
import { Colors } from "../../utils/Colors";
import Post from "../../components/Post";

function Home() {
  return (
    <ScrollView style={styles.homeContainer}>
      <Post />
    </ScrollView>
  );
}

export default Home;

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: Colors.background,
  },
});
