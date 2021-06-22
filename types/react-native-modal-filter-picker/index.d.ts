// Type definitions for react-native-modal-filter-picker 1.3
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
  ListViewProps,
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
    placeholderText?: string;
    placeholderTextColor?: string;
    androidUnderlineColor?: string;
    cancelButtonText?: string;
    title?: string;
    noResultsText?: string;
    visible?: boolean;
    showFilter?: boolean;
    modal?: ModalProps;
    selectedOption?: string;
    listViewProps?: Partial<ListViewProps | FlatListProps<T>>;
    renderOption?: (option: T, isSelected: boolean) => JSX.Element;
    renderList?: () => JSX.Element;
    renderCancelButton?: () => JSX.Element;
    keyboardShouldPersistTaps?: 'never' | 'always' | 'handle';
    autoFocus?: boolean;

    // styling props
    overlayStyle?: StyleProp<KeyboardAvoidingView | ViewStyle>;
    listContainerStyle?: StyleProp<ViewStyle>;
    filterTextInputContainerStyle?: StyleProp<ViewStyle>;
    filterTextInputStyle?: StyleProp<TextStyle>;
    cancelContainerStyle?: StyleProp<ViewStyle>;
    cancelButtonStyle?: StyleProp<ViewStyle>;
    cancelButtonTextStyle?: StyleProp<TextStyle>;
    titleTextStyle?: StyleProp<TextStyle>;
    optionTextStyle?: StyleProp<TextStyle>;
    selectedOptionTextStyle?: StyleProp<TextStyle>;
}

declare class ModalFilterPicker<T extends ModalFilterPickerOption> extends React.Component<
ModalFilterPickerProps<T>
> {}

export default ModalFilterPicker;
