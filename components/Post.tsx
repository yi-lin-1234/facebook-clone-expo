import { View, StyleSheet, Image } from "react-native";
import React from "react";
import { Colors } from "../utils/Colors";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";

const PostData = [
  {
    id: "1",
    name: "John Doe",
    postImg:
      "https://res.cloudinary.com/yilin1234/image/upload/v1692221967/post1_m0yxbk.jpg",
    profileImg:
      "https://res.cloudinary.com/yilin1234/image/upload/v1692222080/img1_eicctc.jpg",
    caption: "Can't stop putting more plants in my home.",
    date: "2d",
    comments: 23,
    likes: 180,
  },
  {
    id: "2",
    name: "Jane Smith",
    postImg:
      "https://res.cloudinary.com/yilin1234/image/upload/v1692222005/post2_ec9koj.jpg",
    profileImg:
      "https://res.cloudinary.com/yilin1234/image/upload/v1692222080/img2_tr0idj.jpg",
    caption: "Another beautiful day in the garden!",
    date: "1d",
    comments: 10,
    likes: 120,
  },
  {
    id: "3",
    name: "Mark Johnson",
    postImg:
      "https://res.cloudinary.com/yilin1234/image/upload/v1692222033/post4_nlcmb3.jpg",
    profileImg:
      "https://res.cloudinary.com/yilin1234/image/upload/v1692222080/img3_c19t4w.jpg",
    caption: "Exploring new hiking trails.",
    date: "3h",
    comments: 165,
    likes: 50,
  },
];

const Post = () => {
  return (
    <>
      {PostData.map((item) => (
        <View key={item.id} style={styles.postContainer}>
          <PostHeader data={item} />
          <Image source={{ uri: item.postImg }} style={styles.postImg} />
          <PostFooter data={item} />
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: Colors.white,
    marginTop: 8,
  },
  postImg: {
    width: "100%",
    height: 250,
  },
});

export default Post;
