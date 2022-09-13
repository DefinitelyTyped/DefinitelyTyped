// Type definitions for react-native-modal-filter-picker 2.1
// Project: https://github.com/hiddentao/react-native-modal-filter-picker#readme
// Definitions by: Chang Yanwei <https://github.com/ywchang>
//                 Cheng Gibson <https://github.com/nossbigg>
//                 Zheng Arnaud <https://github.com/arnaud-zg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import {
  StyleProp,
  ViewStyle,
  TextStyle,
  KeyboardAvoidingView,
  ModalProps,
  FlatListProps,
} from 'react-native';

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
    renderOption?: ((option: T, isSelected: boolean) => JSX.Element) | undefined;
    renderList?: (() => JSX.Element) | undefined;
    renderCancelButton?: (() => JSX.Element) | undefined;
    keyboardShouldPersistTaps?: 'never' | 'always' | 'handle' | undefined;
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
