import { Center } from "@/components/ui/center";
import { HStack } from "@/components/ui/hstack";
import { Input, InputField, InputSlot } from "@/components/ui/input";
import { VStack } from "@/components/ui/vstack";
import Feather from "@expo/vector-icons/Feather";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { z } from "zod";

// Define Zod schema for form validation
const schema = z.object({
  phone: z
    .string({ required_error: "O número de telefone é obrigatório!" })
    .min(9, { message: "O número deve ter no mínino 9 digitos!" }),
  password: z
    .string({ required_error: "A password é obrigatória!" })
    .min(6, { message: "A senha deve ter no mínimo 6 caracteres!" }),
});

export default function SignIn() {
  // Initialize the form with React Hook Form and Zod schema resolver
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const handlerBack = () => {
    router.back();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1"
    >
      <VStack className="flex-1 bg-white px-4">
        <HStack>
          <TouchableOpacity onPress={handlerBack}>
            <Feather name="arrow-left" size={28} color="black" />
          </TouchableOpacity>
        </HStack>
        <VStack className="flex-1 justify-center">
          <VStack className="mx-11">
            <Text className="text-center text-3xl font-bold ">
              Seja bem vindo/a de volta
            </Text>
            <Text className="text-center text-gray-500 mb-8">
              Login para acesso a sua conta
            </Text>
          </VStack>
          <VStack className="">
            <VStack className="gap-4">
              <Text className="font-regular">Numero de telefone</Text>
              <Controller
                control={control}
                name="phone"
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input className="text-center h-14 rounded-full bg-gray-100 border-0 px-4">
                    <InputField
                      type="text"
                      keyboardType="number-pad"
                      placeholder="ex.(938 390 399)"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  </Input>
                )}
              />
              {errors.phone && (
                <Text className="text-red-500 font-medium">
                  {errors.phone.message}
                </Text>
              )}
              <Text className="font-regular">Palavra passe</Text>
              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input className="text-center h-14 rounded-full bg-gray-100 border-0 px-4">
                    <InputField
                      type={isVisible ? "text" : "password"}
                      placeholder="password"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                    <InputSlot>
                      <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => setIsVisible(!isVisible)}
                      >
                        <Feather
                          name={isVisible ? "eye" : "eye-off"}
                          size={24}
                          color="#6b7280"
                        />
                      </TouchableOpacity>
                    </InputSlot>
                  </Input>
                )}
              />
              {errors.password && (
                <Text className="text-red-500 font-medium">
                  {errors.password.message}
                </Text>
              )}
              <TouchableOpacity
                className="bg-yellow-400 my-7 rounded-full py-4 items-center mb-4"
                activeOpacity={0.8}
                onPress={handleSubmit(onSubmit)}
              >
                <Text className="font-semibold text-base">Entrar</Text>
              </TouchableOpacity>
            </VStack>
            <Center>
              <HStack className="gap-1">
                <Text className="font-regular">Não tem uma conta?</Text>
                <Link href={"/auth/signUp"}>
                  <Text className="text-blue-500 font-regular">Registrar</Text>
                </Link>
              </HStack>
            </Center>
          </VStack>
        </VStack>
      </VStack>
    </KeyboardAvoidingView>
  );
}
