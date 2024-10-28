import { View, Text } from "tamagui";

export default function Void() {
  return (
    <View
      bg="$background"
      dsp="flex"
      fd="row"
      h="100%"
      p="$2"
      gap="$2"
      $platform-native={{
        p: "$3",
      }}
    >
      <Text>Hello</Text>
    </View>
  );
}
