import { View, Image, StyleSheet, Text } from "react-native";
import React from "react";

import { Entypo, Ionicons } from "@expo/vector-icons";
import { Post } from "../type";
import { Colors } from "../utils/Colors";

const PostHeader = ({ data }: { data: Post }) => {
  return (
    <View style={styles.postHeaderContainer}>
      <View style={styles.postTopSec}>
        <View style={styles.row}>
          <Image source={{ uri: data.profileImg }} style={styles.userProfile} />
          <View style={styles.userSection}>
            <Text style={styles.username}>{data.name}</Text>
            <View style={styles.row}>
              <Text style={styles.days}>{data.date}</Text>
            </View>
          </View>
        </View>
        <View style={styles.row}>
          <Entypo
            name="dots-three-horizontal"
            size={25}
            color={Colors.headerIconGrey}
            style={styles.headerIcons}
          />
          <Ionicons name="close" size={25} color={Colors.headerIconGrey} />
        </View>
      </View>
      <Text style={styles.caption}>{data.caption}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  postHeaderContainer: {
    padding: 16,
  },
  userProfile: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  row: {
    flexDirection: "row",
  },
  postTopSec: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  username: {
    fontSize: 16,
    color: Colors.textColor,
    marginBottom: 2,
  },
  userSection: {
    marginLeft: 12,
  },
  days: {
    fontSize: 14,
    color: Colors.textGrey,
  },
  dot: {
    fontSize: 14,
    color: Colors.textGrey,
    paddingHorizontal: 8,
  },
  userIcon: {
    marginTop: 3,
  },
  headerIcons: {
    marginRight: 20,
  },
  caption: {
    color: Colors.grey,
    fontSize: 15,
    marginTop: 10,
  },
});

export default PostHeader;
