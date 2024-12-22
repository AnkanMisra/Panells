import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
export default function Library(){
    return <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>This is the Library Page</Text>
    </SafeAreaView>
}