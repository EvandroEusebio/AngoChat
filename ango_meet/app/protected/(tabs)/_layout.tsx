import { Tabs, TabList, TabTrigger, TabSlot } from "expo-router/ui";
import { Text } from "react-native";
import NewChatModal from "@/components/newChatModal.tsx";
import { Feather } from "@expo/vector-icons";
import { VStack } from "@/components/ui/vstack";

// Defining the layout of the custom tab navigator
export default function Layout() {
  return (
    <Tabs>
      <TabSlot />
      <TabList
        style={{
          backgroundColor: "white",
          paddingVertical: 12,
          paddingHorizontal: 16,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <TabTrigger name="home" href="/" className="items-center">
          <VStack className="items-center">
            <Feather name="home" size={24} color="black" />
          </VStack>
        </TabTrigger>
        <NewChatModal />
        <TabTrigger name="article" href="/profile">
          <VStack className="items-center">
            <Feather name="user" size={24} color="black" />
          </VStack>
        </TabTrigger>
      </TabList>
    </Tabs>
  );
}