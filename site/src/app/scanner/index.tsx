import { Camera, CameraView, CameraType } from "expo-camera";
import { Stack } from "expo-router";
import { useState } from 'react';

import { StyleSheet,SafeAreaView, Text, StatusBar, Linking, Button } from "react-native";
import { backHome } from "@/src/components/navegator/navi";

export default function Home() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [scannedData, setScannedData] = useState(null);


  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }


    return (
        <SafeAreaView style={StyleSheet.absoluteFillObject}>
            <Stack.Screen
            options={{
                title: "Overview",
                headerShown: false,
            }}/>
            <CameraView style={StyleSheet.absoluteFill} facing="back" onBarcodeScanned={({ data }) => { console.log('data', data); setScannedData(data); }}/>
                        
            {/* Exibe a informação do QR code se existir */}
            {scannedData && (
                <Text style={styles.scannedText}>QR Code: {scannedData}</Text>
            )}
            {/*<Button title="Voltar" onPress={() => setScannedData(null)} />*/}
            <Button title="Voltar" onPress={backHome}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    scannedText: {
        position: 'absolute',
        bottom: 100,
        left: 20,
        right: 20,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        fontSize: 16,
        textAlign: 'center',
    },
});
