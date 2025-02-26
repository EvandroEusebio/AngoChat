import { Input, InputField, InputSlot } from "@/components/ui/input";
import { Feather } from "@expo/vector-icons";
import { View } from "react-native";

export default function Search() {
  return (
    <View>
      <Input className="text-center h-14 rounded-full bg-gray-100 mx-4 border-0 px-4  ">
        <InputSlot>
          <Feather name="search" color={"#D4D4D4"} size={24} />
        </InputSlot>
        <InputField className="text-[18px]" type={"text"} />
      </Input>
    </View>
  );
}
