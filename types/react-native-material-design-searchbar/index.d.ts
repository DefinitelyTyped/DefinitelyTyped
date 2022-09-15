// Type definitions for react-native-material-design-searchbar 1.1
// Project: https://github.com/ananddayalan/react-native-material-design-searchbar
// Definitions by: Kyle Roach <https://github.com/iRoachie>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import {
    TextInputProps,
    ReturnKeyType,
    ReturnKeyTypeAndroid,
    TextStyle,
    ReturnKeyTypeIOS,
} from 'react-native';

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
