import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import {
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@/components/ui/modal";
import { useState } from "react";
import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { HStack } from "../ui/hstack";
import { VStack } from "../ui/vstack";
import { TouchableOpacity } from "react-native";

export default function NewChatModal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <View>
      <Button onPress={() => setShowModal(true)} style={{ borderRadius: 100 }}>
        <Feather name="plus" size={24} color="white" />
        <ButtonText className="font-semiBold">Show Modal</ButtonText>
      </Button>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        size="lg"
      >
        <ModalBackdrop />
        <ModalContent
          style={{ borderRadius: 30, top: 200, paddingHorizontal: 20 }}
        >
          <VStack className="gap-7">
            <TouchableOpacity>
              <HStack className="gap-4 items-center">
                <Feather name="message-circle" size={24} color="black" />
                <VStack>
                  <Text className="font-semiBold">Novo Chat</Text>
                  <Text className="font-regular text-gray-400">
                    Envie uma mensagem para seu contacto
                  </Text>
                </VStack>
              </HStack>
            </TouchableOpacity>
            <TouchableOpacity>
              <HStack className="gap-4 items-center">
                <Feather name="user-plus" size={24} color="black" />
                <VStack>
                  <Text className="font-semiBold">Novo Contacto</Text>
                  <Text className="font-regular text-gray-400">
                    Adicione um novo contacto
                  </Text>
                </VStack>
              </HStack>
            </TouchableOpacity>
            <TouchableOpacity>
              <HStack className="gap-4 items-center">
                <Feather name="users" size={24} color="black" />
                <VStack>
                  <Text className="font-semiBold">Nova Comunidade</Text>
                  <Text className="font-regular text-gray-400">
                    Junte-se a um grupo
                  </Text>
                </VStack>
              </HStack>
            </TouchableOpacity>
          </VStack>
        </ModalContent>
      </Modal>
    </View>
  );
}
