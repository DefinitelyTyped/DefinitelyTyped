import * as React from "react";
import { FlatListProps, KeyboardAvoidingView, ModalProps, StyleProp, TextStyle, ViewStyle } from "react-native";

export interface ModalFilterPickerOption {
    label: string;
    key: string;
}

export interface ModalFilterPickerProps<T extends ModalFilterPickerOption> {
    options: T[];
    onSelect: (key: string) => void;
    onCancel: () => void;
    placeholderText?: string | undefined;
    placeholderTextColor?: string | undefined;
    androidUnderlineColor?: string | undefined;
    cancelButtonText?: string | undefined;
    title?: string | undefined;
    noResultsText?: string | undefined;
    visible?: boolean | undefined;
    showFilter?: boolean | undefined;
    modal?: ModalProps | undefined;
    selectedOption?: string | undefined;
    flatListProps?: Partial<FlatListProps<T>> | undefined;
    renderOption?: ((option: T, isSelected: boolean) => React.JSX.Element) | undefined;
    renderList?: (() => React.JSX.Element) | undefined;
    renderCancelButton?: (() => React.JSX.Element) | undefined;
    keyboardShouldPersistTaps?: "never" | "always" | "handle" | undefined;
    autoFocus?: boolean | undefined;

    // styling props
    overlayStyle?: StyleProp<KeyboardAvoidingView | ViewStyle> | undefined;
    listContainerStyle?: StyleProp<ViewStyle> | undefined;
    filterTextInputContainerStyle?: StyleProp<ViewStyle> | undefined;
    filterTextInputStyle?: StyleProp<TextStyle> | undefined;
    cancelContainerStyle?: StyleProp<ViewStyle> | undefined;
    cancelButtonStyle?: StyleProp<ViewStyle> | undefined;
    cancelButtonTextStyle?: StyleProp<TextStyle> | undefined;
    titleTextStyle?: StyleProp<TextStyle> | undefined;
    optionTextStyle?: StyleProp<TextStyle> | undefined;
    selectedOptionTextStyle?: StyleProp<TextStyle> | undefined;
}

declare class ModalFilterPicker<T extends ModalFilterPickerOption> extends React.Component<
    ModalFilterPickerProps<T>
> {}

export default ModalFilterPicker;
