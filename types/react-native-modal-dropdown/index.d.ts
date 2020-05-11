// Type definitions for react-native-modal-dropdown 0.7
// Project: https://github.com/sohobloo/react-native-modal-dropdown
// Definitions by: Carlos Li <https://github.com/echoulen>
//                 Ruslan Yurchenko <https://github.com/rusyurchenko>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import { StyleProp, TextStyle, ViewProps, ViewStyle, Constructor, NativeMethodsMixin } from 'react-native';

export interface PositionStyle {
    top?: number;
    left?: number;
    right?: number;
    width?: number;
    height?: number;
}

export interface ModalDropdownProps<T = any> extends ViewProps {
    disabled?: boolean;
    defaultIndex?: number;
    defaultValue?: string;
    options?: T[];
    animated?: boolean;
    scrollEnabled?: boolean;
    showsVerticalScrollIndicator?: boolean;
    textStyle?: StyleProp<TextStyle>;
    dropdownStyle?: StyleProp<ViewStyle>;
    dropdownTextStyle?: StyleProp<TextStyle>;
    dropdownTextHighlightStyle?: StyleProp<TextStyle>;
    adjustFrame?: (positionStyle: PositionStyle) => PositionStyle;
    renderRow?: (option: T, index: string, isSelected: boolean) => React.ReactNode;
    renderSeparator?: (sectionID: string, index: string, adjacentRowHighlighted: boolean) => React.ReactNode;
    renderButtonText?: (text: string) => string;
    onDropdownWillShow?: () => void | boolean;
    onDropdownWillHide?: () => void | boolean;
    onSelect?: (index: string, option: T) => void | boolean;
    accessible?: boolean;
    keyboardShouldPersistTaps?: 'always' | 'never' | 'handled';
}

export default class ModalDropdown<T = any> extends React.Component<ModalDropdownProps<T>> {
    show(): void;
    hide(): void;
    select(index: number): void;
}
