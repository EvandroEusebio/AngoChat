import { Avatar, AvatarBadge, AvatarImage } from "@/components/ui/avatar";
import { Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const ActiveUsers = [
  {
    id: 1,
    name: "Jane Doe",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 2,
    name: "Jane Doe",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 3,
    name: "Jane Doe",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 4,
    name: "Jane Doe",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 5,
    name: "Jane Doe",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
];

type UserActiveProps = { name: string; image: string };

const UsersActive = ({ name, image }: UserActiveProps) => (
  <View className="items-center mx-4">
    <Avatar size="lg">
      <AvatarImage
        source={{
          uri: image,
        }}
      />
      <AvatarBadge />
    </Avatar>
    <Text className="font-medium">{name}</Text>
  </View>
);

export default function ActiveUser() {
  return (
    <View>
      <FlatList
        data={ActiveUsers}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <UsersActive name={item.name} image={item.image} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
