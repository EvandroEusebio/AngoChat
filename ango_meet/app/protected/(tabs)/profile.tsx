import { VStack } from "@/components/ui/vstack";
import { Text, View, ScrollView } from "react-native";
import { Avatar, AvatarBadge, AvatarImage } from "@/components/ui/avatar";
import { Center } from "@/components/ui/center";
import { HStack } from "@/components/ui/hstack";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Switch } from "@/components/ui/switch";
import colors from "tailwindcss/colors";

export default function Profile() {
  return (
    <ScrollView className="bg-white">
      <VStack className="bg-white flex-1 py-5 gap-4">
        <Center>
          <Avatar size="2xl">
            <AvatarImage
              source={{
                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
              }}
            />
          </Avatar>
          <Text className="font-semiBold text-2xl">Jane Doe</Text>
          <Text className="text-gray-400 font-medium text-[14px]">
            Simplemente lutando
          </Text>
        </Center>
        <View className="px-7">
          <Text className="text-gray-400 font-medium text-[14px]">
            Meus Dados
          </Text>
        </View>
        <VStack className="bg-gray-100 p-7 mx-4 rounded-2xl gap-4">
          <TouchableOpacity>
            <HStack className="justify-between items-center border-b pb-4 border-gray-400">
              <VStack>
                <Text className="font-medium">Nome</Text>
                <Text className="text-gray-400 text-[16px]">
                  Evandro Eusébio
                </Text>
              </VStack>
              <Feather name="edit" size={24} color="black" />
            </HStack>
          </TouchableOpacity>
          <TouchableOpacity>
            <HStack className="justify-between items-center border-b pb-4 border-gray-400">
              <VStack>
                <Text className="font-medium">Telefone</Text>
                <Text className="text-gray-400 text-[16px]">938390399</Text>
              </VStack>
              <Feather name="edit" size={24} color="black" />
            </HStack>
          </TouchableOpacity>
          <TouchableOpacity>
            <HStack className="justify-between items-center border-b pb-4 border-gray-400">
              <VStack>
                <Text className="font-medium">Idade</Text>
                <Text className="text-gray-400 text-[16px]">20 anos</Text>
              </VStack>
              <Feather name="edit" size={24} color="black" />
            </HStack>
          </TouchableOpacity>
          <TouchableOpacity>
            <HStack className="justify-between items-center  border-gray-400">
              <VStack>
                <Text className="font-medium">Sobre</Text>
                <Text className="text-gray-400 text-[16px]">
                  Simplemente Lutando
                </Text>
              </VStack>
              <Feather name="edit" size={24} color="black" />
            </HStack>
          </TouchableOpacity>
        </VStack>
        <VStack className="bg-gray-100 p-7 mx-4 rounded-2xl gap-4">
          <HStack className="justify-between items-center">
            <HStack className="gap-4">
              <Feather name="moon" size={24} color="black" />
              <Text className="font-medium text-[16px]">Evandro Eusébio</Text>
            </HStack>
            <Switch
              size="md"
              isDisabled={false}
              trackColor={{
                false: colors.neutral[300],
                true: colors.neutral[600],
              }}
              thumbColor={colors.neutral[50]}
              activeThumbColor={colors.neutral[50]}
              ios_backgroundColor={colors.neutral[300]}
            />
          </HStack>
        </VStack>
      </VStack>
    </ScrollView>
  );
}
