import { Text, View } from "react-native";
import Link from "expo-router/link";
import { HStack } from "@/components/ui/hstack";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar";

const ActiveUser = [
  {
    name: "Jane Doe",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Jane Doe",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Jane Doe",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Jane Doe",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
];

export default function Index() {
  return (
    <SafeAreaView className="flex-1">
      <View className="bg-white flex-1">
        <HStack className="justify-between p-4">
          <Text>AngoChat</Text>
          <Feather name="search" size={24} color="black" />
        </HStack>
        <HStack className="p-4 gap-5">
          {ActiveUser.map((user, index) => (
            <Avatar size="lg" key={index}>
              <AvatarImage
                key={index}
                source={{
                  uri: user.image,
                }}
              />
              <AvatarBadge />
            </Avatar>
          ))}
        </HStack>
      </View>
    </SafeAreaView>
  );
}
