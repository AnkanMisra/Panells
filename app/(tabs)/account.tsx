import { Text, View,Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {useRouter} from "expo-router";

export default function AccountPage() {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>This is the Account Tab</Text>
      <Button title="Click here to go to Account Info" onPress={()=>router.push("/accountinfo")}></Button>
    </SafeAreaView>
  );
}