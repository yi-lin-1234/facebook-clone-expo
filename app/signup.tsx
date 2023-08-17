import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Alert,
} from "react-native";
import { Stack, Link } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../firebase_config";

function Signup() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const auth = FIREBASE_AUTH;

  const handleSignUp = async () => {
    if (!email.trim()) {
      Alert.alert("please enter email");
      return;
    }
    if (!password.trim()) {
      Alert.alert("please enter password");
      return;
    }
    if (!confirmPassword.trim()) {
      Alert.alert("please enter confirm password");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("password don't match");
      return;
    }
    setIsSubmitting(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("sign up successfully");
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        Alert.alert("email address is already in use");
      }
      if (error.code === "auth/invalid-email") {
        Alert.alert("email address is invalid");
      }
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Getting Started</Text>

          <Text style={styles.subtitle}>Create an account to continue</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Email address</Text>

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={(email) => setEmail(email)}
              placeholder="john@example.com"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={email}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Password</Text>

            <TextInput
              autoCorrect={false}
              onChangeText={(password) => setPassword(password)}
              placeholder="********"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              secureTextEntry={true}
              value={password}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Confirm Password</Text>

            <TextInput
              autoCorrect={false}
              onChangeText={(confirmPassword) =>
                setConfirmPassword(confirmPassword)
              }
              placeholder="********"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              secureTextEntry={true}
              value={confirmPassword}
            />
          </View>

          <View style={styles.formAction}>
            <TouchableOpacity onPress={handleSignUp} disabled={isSubmitting}>
              <View style={styles.btn}>
                {isSubmitting ? (
                  <ActivityIndicator size="small" color="#fff" />
                ) : (
                  <Text style={styles.btnText}>Sign up</Text>
                )}
              </View>
            </TouchableOpacity>
          </View>

          <Text style={styles.formFooter}>
            Already have an account?{" "}
            <Link href="/login" asChild>
              <TouchableOpacity>
                <Text style={{ textDecorationLine: "underline" }}>Sign in</Text>
              </TouchableOpacity>
            </Link>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Signup;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  header: {
    marginVertical: 24,
    paddingHorizontal: 24,
  },
  form: {
    paddingHorizontal: 24,
  },
  formAction: {
    marginVertical: 24,
  },
  formFooter: {
    fontSize: 15,
    fontWeight: "500",
    color: "#222",
    textAlign: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1d1d1d",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#929292",
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
    height: 44,
    backgroundColor: "#f1f5f9",
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: "500",
    color: "#222",
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
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
