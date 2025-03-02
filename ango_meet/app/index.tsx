import { LinearGradient } from "@/components/ui/linearGradient";
import { VStack } from "@/components/ui/vstack";
import { Link, useRouter } from "expo-router";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  GestureResponderEvent,
} from "react-native";

const image = require("../assets/images/woman.webp");

export default function Welcome() {
  const router = useRouter();

  const handlePress = (event: GestureResponderEvent) => {
    // Chamando o router.push dentro de uma função que recebe o evento
    router.push("/auth/signIn");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1">
        <VStack className="flex-1">
          <LinearGradient
            className="w-full items-center py-2 "
            colors={["#facc15", "#ffff"]}
            start={[1, 0]}
            end={[1, 1]}
          >
            <Image className="flex-1" resizeMode="cover" source={image} />
          </LinearGradient>
        </VStack>

        {/* Divider */}
        <View className="items-center my-4">
          <View className="w-16 h-1 bg-gray-300 rounded-full" />
        </View>

        {/* Welcome section */}
        <View className="px-8 pt-4">
          <Text className="text-3xl font-bold text-center mb-2">
            Seja bem vindo/a ao AngoChat
          </Text>
          <Text className="text-center text-gray-500 mb-8">
            Converse com aquele contacto, que tanto tens saudade!
          </Text>

          {/* Sign in button */}
          <TouchableOpacity
            className="bg-yellow-400 rounded-full py-4 items-center mb-4"
            activeOpacity={0.8}
            onPress={handlePress}
          >
            <Text className="font-semibold text-base">Entrar</Text>
          </TouchableOpacity>

          <Link href={"/auth/signUp"}>
            <Text className="text-center text-gray-800 font-medium">
              Criar uma conta
            </Text>
          </Link>
        </View>
      </ScrollView>

      <View className="items-center pb-2 pt-1">
        <View className="w-32 h-1 bg-gray-300 rounded-full" />
      </View>
    </SafeAreaView>
  );
}
