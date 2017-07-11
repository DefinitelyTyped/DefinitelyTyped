// Type definitions for react-native-material-design-searchbar 1.1
// Project: https://github.com/ananddayalan/react-native-material-design-searchbar
// Definitions by: Kyle Roach <https://github.com/iRoachie>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';
import {
    TextInputProperties,
    ReturnKeyType,
    ReturnKeyTypeAndroid,
    TextStyle,
    ReturnKeyTypeIOS,
} from 'react-native';

export interface SearchBarProps {
    height: number;
    autoCorrect?: boolean;
    returnKeyType?: ReturnKeyType | ReturnKeyTypeAndroid | ReturnKeyTypeIOS;
    placeholder?: string;
    padding?: number;
    inputStyle?: TextStyle;
    iconCloseName?: string;
    iconSearchName?: string;
    iconBackName?: string;
    iconSize?: number;
    iconPadding?: number;
    placeholderColor?: string;
    iconColor?: string;
    textStyle?: TextStyle;
    inputProps?: TextInputProperties;
    alwaysShowBackButton?: boolean;
    onSearchChange?(text: string): void;
    onClose?(): void;
    onBlur?(): void;
    onEndEditing?(): void;
    onSubmitEditing?(): void;
    onFocus?(): void;
    onBackPress?(): void;
}

export default class SearchBar extends React.Component<SearchBarProps, any> {}
