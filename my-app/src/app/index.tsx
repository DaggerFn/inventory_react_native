import { View, Text, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import { Button } from "../components/button";
import { Input } from "../components/input";


export default function Index() {

  function handleMessage() {
    Alert.alert("No camera device found");
  }

  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gestão de Materiais: {name}</Text>
      <Input onChangeText={setName} />
      <Button title="Login" onPress={handleMessage} />
      <Button title="Sair" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    justifyContent: "center",
    gap: 5,
  },
  title: {
    alignItems: "center",
    color: "blue",
    fontSize: 36,
    fontWeight: "bold",
  },
});
