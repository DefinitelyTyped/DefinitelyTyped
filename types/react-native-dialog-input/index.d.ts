import * as React from "react";
import { StyleProp, TextInputProps, ViewStyle } from "react-native";

export interface DialogInputProps {
    isDialogVisible: boolean;
    title?: string;
    message?: string;
    hintInput?: string;
    initValueTextInput?: string;
    submitText?: string;
    cancelText?: string;
    placeholderTextColor?: string;
    animationType?: "none" | "slide" | "fade";
    textInputProps?: TextInputProps;
    modalStyle?: StyleProp<ViewStyle>;
    dialogStyle?: StyleProp<ViewStyle>;
    closeDialog: () => void;
    submitInput: (input: string) => void;
}

export default class DialogInput extends React.PureComponent<DialogInputProps> {}
