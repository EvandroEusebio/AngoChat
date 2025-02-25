import { Avatar, AvatarBadge, AvatarImage } from "@/components/ui/avatar";
import { HStack } from "@/components/ui/hstack";
import { Text, TouchableOpacity, View } from "react-native";
import { VStack } from "../ui/vstack";

const chatData = [
  {
    id: 1,
    name: "Jane Doe",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    message: "Hello",
    time: "10:00",
  },
  {
    id: 2,
    name: "Jane Doe",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    message: "Hello",
    time: "10:00",
  },
  {
    id: 3,
    name: "Jane Doe",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    message: "Hello",
    time: "10:00",
  },
  {
    id: 4,
    name: "Jane Doe",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    message: "Hello",
    time: "10:00",
  },
  {
    id: 5,
    name: "Jane Doe",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    message: "Hello",
    time: "10:00",
  },
  {
    id: 6,
    name: "Jane Doe",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    message: "Hello",
    time: "10:00",
  },
];

type ChatProps = { name: string; image: string; message: string; time: string };

const Chats = ({ name, image, message, time }: ChatProps) => (
  <TouchableOpacity>
    <HStack className="mx-4 mb-8 justify-between">
      <HStack className="gap-3">
        <Avatar size="lg">
          <AvatarImage
            source={{
              uri: image,
            }}
          />
          <AvatarBadge />
        </Avatar>
        <VStack>
          <Text className="font-semiBold text-[18px]">{name}</Text>
          <Text className=" font-regular text-gray-400">{message}</Text>
        </VStack>
      </HStack>
      <Text className="text-quillGray font-regular">{time}</Text>
    </HStack>
  </TouchableOpacity>
);

export default function Chat() {
  return (
    <View>
      {chatData.map((item, index) => (
        <Chats
          name={item.name}
          image={item.image}
          time={item.time}
          message={item.message}
          key={index}
        />
      ))}
    </View>
  );
}
