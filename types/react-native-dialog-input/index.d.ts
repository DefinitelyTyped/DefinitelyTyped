import React from 'react';
import { TextInputProps, StyleProp, ViewStyle } from 'react-native';

declare module 'react-native-dialog-input' {
  interface DialogInputProps {
    isDialogVisible: boolean;
    title?: string;
    message?: string;
    hintInput?: string;
    initValueTextInput?: string;
    submitText?: string;
    cancelText?: string;
    placeholderTextColor?: string;
    animationType?: 'none' | 'slide' | 'fade';
    textInputProps?: TextInputProps;
    modalStyle?: StyleProp<ViewStyle>;
    dialogStyle?: StyleProp<ViewStyle>;
    closeDialog: () => void;
    submitInput: (input: string) => void;
  }

  class DialogInput extends React.PureComponent<DialogInputProps> {}

  export default DialogInput;
}
