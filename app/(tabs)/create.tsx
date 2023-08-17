import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Feather, FontAwesome } from "@expo/vector-icons";

function Create() {
  const [content, setContent] = useState<string>("");
  const [image, setImage] = useState<any>(null);

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleCreatePress = async () => {
    const body = {
      content,
    };
    setIsSubmitting(true);
    try {
      setContent("");
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleReset = () => {
    setContent("");
    setImage(null);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Image</Text>
            {image ? (
              <Image
                source={{ uri: image }}
                style={{ width: 250, height: 250 }}
              />
            ) : (
              <Image
                source={{
                  uri: "https://res.cloudinary.com/yilin1234/image/upload/v1692232168/istockphoto-1147544807-612x612_mabwdz.jpg",
                }}
                style={{ width: 250, height: 250 }}
              />
            )}
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Content</Text>

            <TextInput
              multiline={true}
              numberOfLines={4}
              onChangeText={(content) => setContent(content)}
              value={content}
              style={styles.inputControl}
              autoCapitalize="none"
            />
          </View>

          <View style={styles.btnGroup}>
            <TouchableOpacity
              onPress={handleCreatePress}
              style={{ flex: 1, paddingHorizontal: 6 }}
              disabled={isSubmitting}
            >
              <View style={styles.btn}>
                {isSubmitting ? (
                  <ActivityIndicator size="small" color="#fff" />
                ) : (
                  <>
                    <Feather
                      name="upload"
                      size={15}
                      color="#fff"
                      style={{ marginRight: 5 }}
                    />
                    <Text style={styles.btnText}>Post</Text>
                  </>
                )}
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={pickImage}
              style={{ flex: 1, paddingHorizontal: 6 }}
            >
              <View style={styles.btn}>
                <FontAwesome
                  name="picture-o"
                  size={15}
                  color="#fff"
                  style={{ marginRight: 5 }}
                />
                <Text style={styles.btnText}>Photo</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleReset}
              style={{ flex: 1, paddingHorizontal: 6 }}
            >
              <View style={styles.btn}>
                <FontAwesome
                  name="refresh"
                  size={15}
                  color="#fff"
                  style={{ marginRight: 5 }}
                />
                <Text style={styles.btnText}>Reset</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Create;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  form: {
    marginBottom: 24,
  },
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: "600",
    color: "#222",
    marginBottom: 8,
  },
  inputControl: {
    height: 120,
    backgroundColor: "#f1f5f9",
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: "500",
    color: "#222",
  },
  btnGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 4,
    marginHorizontal: -6,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: "#007aff",
    borderColor: "#007aff",
  },
  btnText: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: "600",
    color: "#fff",
  },
});
