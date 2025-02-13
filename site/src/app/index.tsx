import { View, Text, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import { Button } from "../components/button";
import { Input } from "../components/input";
import { router } from "expo-router";
import { ButtonQR } from '../components/button_qr';
import * as ScreenOrientation from 'expo-screen-orientation';
import { directPage, tabelRouter } from "../components/navegator/navi";


export default function Index() {

  function handleMessage() {
    Alert.alert("No camera device found");
  }



  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gestão de Materiais: {name}</Text>
      <View style={styles.dataArea}>
        <Input placeholder="Numero da Ordem" onChangeText={setName} />
        <ButtonQR title="Scanner"  onPress={directPage} />
      </View>
      {/*<Button title="Scanner" onPress={directPage} />*/}
      <Button title="Tabela" onPress={tabelRouter} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    justifyContent: "center",
    gap: 8,
  },
  dataArea:{
    justifyContent: "space-between",
    flexDirection: 'row'
  },
  title: {
    alignItems: "center",
    color: "blue",
    fontSize: 36,
    fontWeight: "bold",
    width: '100%',
  },
  CameraElement: {
    backgroundColor: "orange",
    flex: 2,
    height: 100,
    width: 150,  
  }
});
