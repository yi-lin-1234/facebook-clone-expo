import React, { useState, useEffect } from "react";
import { Redirect } from "expo-router";
import { User, onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "../firebase_config";
import { View, StyleSheet, ActivityIndicator } from "react-native";

function Index() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const auth = FIREBASE_AUTH;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setIsLoading(false);
      if (user) {
        setUser(user);
      }
    });
  }, []);

  if (isLoading)
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007aff" />
      </View>
    );
  if (user) {
    return <Redirect href="/home" />;
  } else {
    return <Redirect href="/login" />;
  }
}

export default Index;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 50, // Adjust as needed
  },
});
