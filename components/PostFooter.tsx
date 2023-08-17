import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../utils/Colors";

import { Post } from "../type";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const PostFooter = ({ data }: { data: Post }) => {
  return (
    <View style={styles.postFotterContainer}>
      <View style={styles.footerReactionSec}>
        <View style={styles.row}>
          <Image
            source={{
              uri: "https://res.cloudinary.com/yilin1234/image/upload/v1692223376/like-removebg-preview_tevkma.png",
            }}
            style={styles.reactionIcon}
          />
          <Text style={styles.reactionCount}>{data.likes}</Text>
        </View>
        <Text style={styles.reactionCount}>{data.comments} comments</Text>
      </View>
      <View style={styles.userActionSec}>
        <View style={styles.row}>
          <AntDesign name="like2" size={25} color={Colors.grey} />
          <Text style={styles.reactionCount}>Like</Text>
        </View>
        <View style={styles.row}>
          <Ionicons name="chatbox-outline" size={25} color={Colors.grey} />
          <Text style={styles.reactionCount}>Comment</Text>
        </View>

        <View style={styles.row}>
          <Ionicons name="arrow-redo-outline" size={25} color={Colors.grey} />
          <Text style={styles.reactionCount}>Share</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  reactionIcon: {
    height: 20,
    width: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  postFotterContainer: {
    padding: 16,
  },
  reactionCount: {
    color: Colors.grey,
    fontSize: 14,
    paddingLeft: 5,
  },
  footerReactionSec: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightgrey,
    paddingBottom: 15,
  },
  userActionSec: {
    marginTop: 15,
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default PostFooter;
