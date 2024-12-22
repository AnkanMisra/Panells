import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
export default function accountinfo() {
    return (
        <SafeAreaView>
            <View>
                <Text>This is the Account Info Page</Text>
            </View>
        </SafeAreaView>
    );
}