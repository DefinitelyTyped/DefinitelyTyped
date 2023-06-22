// Type definitions for react-native-modal-dropdown 1.0
// Project: https://github.com/siemiatj/react-native-modal-dropdown
// Definitions by: Carlos Li <https://github.com/echoulen>, Stefan Schweiger <https://github.com/stefan-schweiger>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.0

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
    multipleSelect?: boolean | undefined;
    scrollEnabled?: boolean | undefined;
    saveScrollPosition?: boolean | undefined;
    defaultIndex?: number | undefined;
    defaultValue?: string | undefined;
    options?: T[] | undefined;
    accessible?: boolean | undefined;
    animated?: boolean | undefined;
    isFullWidth?: boolean | undefined;
    showsVerticalScrollIndicator?: boolean | undefined;
    keyboardShouldPersistTaps?: 'always' | 'never' | 'handled' | undefined;
    showSearch?: boolean | undefined;
    keySearchObject?: string | undefined;
    renderSearch?: () => React.ReactNode | undefined;
    searchInputStyle?: StyleProp<TextStyle> | undefined;
    searchPlaceholder?: string;
    textStyle?: StyleProp<TextStyle> | undefined;
    defaultTextStyle?: StyleProp<TextStyle> | undefined;
    dropdownStyle?: StyleProp<ViewStyle> | undefined;
    dropdownTextStyle?: StyleProp<TextStyle> | undefined;
    dropdownTextHighlightStyle?: StyleProp<TextStyle> | undefined;
    dropdownListProps?: any;
    dropdownTextProps?: any;
    adjustFrame?: ((positionStyle: PositionStyle) => PositionStyle) | undefined;
    renderRow?: ((option: T, index: string, isSelected: boolean) => React.ReactNode) | undefined;
    renderRowComponent?: React.ComponentClass | React.FC | undefined;
    renderRowProps?: any;
    renderSeparator?: ((sectionID: string, index: string, adjacentRowHighlighted: boolean) => React.ReactNode) | undefined;
    renderButtonText?: ((text: string) => string) | undefined;
    renderRowText?: ((item: T) => string) | undefined;
    renderButtonComponent?: React.ComponentClass | React.FC | undefined;
    renderRightComponent?: React.ComponentClass | React.FC | undefined;
    renderButtonProps?: any;
    onDropdownWillShow?: (() => void | boolean) | undefined;
    onDropdownWillHide?: (() => void | boolean) | undefined;
    onSelect?: ((index: string, option: T) => void | boolean) | undefined;
    numberOfLines?: number | undefined;
}

export default class ModalDropdown<T = any> extends React.Component<ModalDropdownProps<T>> {
    show(): void;
    hide(): void;
    select(index: number): void;
}
