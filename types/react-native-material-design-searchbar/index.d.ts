import * as React from "react";
import { ReturnKeyType, ReturnKeyTypeAndroid, ReturnKeyTypeIOS, TextInputProps, TextStyle } from "react-native";

export interface SearchBarProps {
    height: number;
    autoCorrect?: boolean | undefined;
    returnKeyType?: ReturnKeyType | ReturnKeyTypeAndroid | ReturnKeyTypeIOS | undefined;
    placeholder?: string | undefined;
    padding?: number | undefined;
    inputStyle?: TextStyle | undefined;
    iconCloseName?: string | undefined;
    iconSearchName?: string | undefined;
    iconBackName?: string | undefined;
    iconSize?: number | undefined;
    iconPadding?: number | undefined;
    placeholderColor?: string | undefined;
    iconColor?: string | undefined;
    textStyle?: TextStyle | undefined;
    inputProps?: TextInputProps | undefined;
    alwaysShowBackButton?: boolean | undefined;
    onSearchChange?(text: string): void;
    onClose?(): void;
    onBlur?(): void;
    onEndEditing?(): void;
    onSubmitEditing?(): void;
    onFocus?(): void;
    onBackPress?(): void;
}

export default class SearchBar extends React.Component<SearchBarProps, any> {}
