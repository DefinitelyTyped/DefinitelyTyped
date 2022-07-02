import * as React from "react";
import ModalFilterPicker, {
    ModalFilterPickerOption
} from "react-native-modal-filter-picker";
import { View, Button, Text } from "react-native";

interface MyModalFilterPickerOption extends ModalFilterPickerOption {
    customField: string;
}

const modalFilterPickerOptions: MyModalFilterPickerOption[] = [
    {
        label: "some-label-1",
        key: "some-key-1",
        customField: "some-customfield-1"
    },
    {
        label: "some-label-2",
        key: "some-key-2",
        customField: "some-customfield-2"
    }
];

const renderPicker = () => (
    <ModalFilterPicker
        options={modalFilterPickerOptions}
        onSelect={key => {
            console.log(key);
        }}
        onCancel={() => {}}
        placeholderText="Filter..."
        placeholderTextColor="#ccc"
        androidUnderlineColor="rgba(0,0,0,0)"
        cancelButtonText="Cancel"
        title="some-title"
        noResultsText="No matches"
        visible
        showFilter
        modal={{ animated: true }}
        selectedOption="some-option-key"
        flatListProps={{ accessible: true }}
        renderOption={(option, isSelected) => (
            <View key={option.key}>
                <Text>
                    `${option.label} ${option.customField} ${isSelected}`
                </Text>
            </View>
        )}
        renderList={() => <View />}
        renderCancelButton={() => <Button title="Cancel" onPress={() => {}} />}
        keyboardShouldPersistTaps={"never"}
        autoFocus={false}
    />
);

const renderPickerWithRequiredPropsOnly = () => (
    <ModalFilterPicker
        options={modalFilterPickerOptions}
        onSelect={key => {
            console.log(key);
        }}
        onCancel={() => {}}
    />
);
