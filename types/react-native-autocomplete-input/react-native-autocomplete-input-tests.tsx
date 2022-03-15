import Autocomplete from "react-native-autocomplete-input";
import * as React from "react";
import { Text, TouchableOpacity } from "react-native";

interface Item {
  id: string;
  value: string;
}
const data: Item[] = [
  { id: "0", value: "test" },
  { id: "1", value: "value" },
  { id: "2", value: "prop" },
];

const AutocompleteExample: React.FC = () => {
  const [value, setValue] = React.useState("");
  return (
    <Autocomplete
      data={data.filter((d) =>
        d.value.toLowerCase().includes(value.toLowerCase())
      )}
      value={value}
      flatListProps={{
        keyExtractor: (item) => item.id,
        renderItem: ({ item }) => (
          <TouchableOpacity onPress={() => setValue(item.value)}>
            <Text>{item.value}</Text>
          </TouchableOpacity>
        ),
      }}
      onChangeText={setValue}
    />
  );
};
