import { Button } from "react-native";
import { Slot, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
export default function RootLayout() {
    const router = useRouter();
    return <SafeAreaView style={{flex: 1,justifyContent: "center", alignItems: "center"}}>
        <Slot />
        <Button onPress={() => router.push("/")} title="Go Back to Explore Page" />
    </SafeAreaView>
}