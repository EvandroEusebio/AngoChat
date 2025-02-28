import Chat from "@/components/chat";
import { Avatar, AvatarBadge, AvatarImage } from "@/components/ui/avatar";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import Feather from "@expo/vector-icons/Feather";
import { Text, View, ScrollView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Search from "@/components/search";
import ActiveUser from "@/components/activeUser";

export default function Home() {
  return (
    <ScrollView className="bg-white">
      <View className="flex-1">
        <VStack className="gap-5">
          <HStack className="justify-between px-4">
            <Text className="text-[24px] font-bold">AngoChat</Text>
            <Feather name="search" size={24} color="black" />
          </HStack>
          <Search />
          <ActiveUser />
          <HStack className="px-4 justify-between ">
            <Text className="font-semiBold">Mensagens</Text>
            <Feather name="more-horizontal" size={24} color="black" />
          </HStack>
          <View>
            <Chat />
          </View>
        </VStack>
      </View>
    </ScrollView>
  );
}
