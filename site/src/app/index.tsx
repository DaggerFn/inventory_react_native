import { View, Text, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import { Button } from "../components/button";
import { Input } from "../components/input";
import { router } from "expo-router";
import { ButtonQR } from '../components/button_qr';


export default function Index() {

  function handleMessage() {
    Alert.alert("No camera device found");
  }


  function directPage(){
    router.navigate('/camera')
  }

  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gestão de Materiais: {name}</Text>
      <Input placeholder="Numero da Ordem" onChangeText={setName} />
      {/*<ButtonQR title="Scanner" style={styles.CameraElement} onPress={directPage} />*/}
      <Button title="Scanner" onPress={directPage} />
      <Button title="Tabela" />
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
  CameraElement: {
    backgroundColor: "orange",
    
    height: 100,
    flex: 2,
  }
});
