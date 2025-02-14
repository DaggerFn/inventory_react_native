import { Camera, CameraView } from "expo-camera";
import { Stack } from "expo-router";
import { StyleSheet,SafeAreaView, StatusBar, Platform, Linking } from "react-native";
import { Overlay } from "./Overlay";

export default function Home() {
    return (
        <SafeAreaView style={StyleSheet.absoluteFillObject}>
            <Stack.Screen
            options={{
                title: "Overview",
                headerShown: false,
            }}/>
            <CameraView style={StyleSheet.absoluteFill}
            facing="back"
            onBarcodeScanned={({ data }) => {
                console.log('data', data);
            }}
            />
            <Overlay/>
        </SafeAreaView>
    )
}