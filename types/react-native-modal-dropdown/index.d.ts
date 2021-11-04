// Type definitions for react-native-modal-dropdown 0.7
// Project: https://github.com/sohobloo/react-native-modal-dropdown
// Definitions by: Carlos Li <https://github.com/echoulen>
//                 Ruslan Yurchenko <https://github.com/rusyurchenko>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import { StyleProp, TextStyle, ViewProps, ViewStyle, Constructor, NativeMethodsMixin } from 'react-native';

export interface PositionStyle {
    top?: number | undefined;
    left?: number | undefined;
    right?: number | undefined;
    width?: number | undefined;
    height?: number | undefined;
}

export interface ModalDropdownProps<T = any> extends ViewProps {
    disabled?: boolean | undefined;
    defaultIndex?: number | undefined;
    defaultValue?: string | undefined;
    options?: T[] | undefined;
    animated?: boolean | undefined;
    scrollEnabled?: boolean | undefined;
    showsVerticalScrollIndicator?: boolean | undefined;
    textStyle?: StyleProp<TextStyle> | undefined;
    dropdownStyle?: StyleProp<ViewStyle> | undefined;
    dropdownTextStyle?: StyleProp<TextStyle> | undefined;
    dropdownTextHighlightStyle?: StyleProp<TextStyle> | undefined;
    adjustFrame?: ((positionStyle: PositionStyle) => PositionStyle) | undefined;
    renderRow?: ((option: T, index: string, isSelected: boolean) => React.ReactNode) | undefined;
    renderSeparator?: ((sectionID: string, index: string, adjacentRowHighlighted: boolean) => React.ReactNode) | undefined;
    renderButtonText?: ((text: string) => string) | undefined;
    onDropdownWillShow?: (() => void | boolean) | undefined;
    onDropdownWillHide?: (() => void | boolean) | undefined;
    onSelect?: ((index: string, option: T) => void | boolean) | undefined;
    accessible?: boolean | undefined;
    keyboardShouldPersistTaps?: 'always' | 'never' | 'handled' | undefined;
}

export default class ModalDropdown<T = any> extends React.Component<ModalDropdownProps<T>> {
    show(): void;
    hide(): void;
    select(index: number): void;
}
