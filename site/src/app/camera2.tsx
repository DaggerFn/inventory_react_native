import { Text, View, StyleSheet,SafeAreaView, Pressable } from "react-native";
import { Link, Stack} from 'expo-router'
import { useCameraPermissions } from "expo-camera";



export default function camera2() {
    const [permission, requestePermission] = useCameraPermissions()

    const isPermissionGaranted = Boolean(permission?.granted)

    return (
    <SafeAreaView style={styles.container}>
            <Stack.Screen options={{title:"Overview", headerShown: false}}/>
            <Text style={styles.title}></Text>
            <View style={{gap: 20}}>
                <Pressable onPress={requestePermission}>
                    <Text style={styles.button}>De Permisao Acesso a Camera</Text>
                </Pressable>
                <Link href={'/scanner/index'} asChild>
                    <Pressable disabled={!isPermissionGaranted}>
                        <Text style={[
                            styles.button,
                            {opacity: !isPermissionGaranted ? 0.5 : 1},
                        ]}>
                            Scan Code
                        </Text>
                    </Pressable>
                </Link>
            </View>
        </SafeAreaView>
)}




export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "black",
        justifyContent: "space-around",
        paddingVertical: 80,
    },
    title: {
        color: "white",
        fontSize: 36,
    },
    button: {
        color: "#0E7AFE",
        fontSize: 20,
        textAlign: "center",
    }
})
