import * as React from "react";
import { Constructor, NativeMethodsMixin, StyleProp, TextStyle, ViewProps, ViewStyle } from "react-native";

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
    keyboardShouldPersistTaps?: "always" | "never" | "handled" | undefined;
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
    renderSeparator?:
        | ((sectionID: string, index: string, adjacentRowHighlighted: boolean) => React.ReactNode)
        | undefined;
    renderButtonText?: ((text: string) => string) | undefined;
    renderRowText?: ((item: T) => string) | undefined;
    renderButtonComponent?: React.ComponentClass | React.FC | undefined;
    renderRightComponent?: React.ComponentClass | React.FC | undefined;
    renderButtonProps?: any;
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    onDropdownWillShow?: (() => void | boolean) | undefined;
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    onDropdownWillHide?: (() => void | boolean) | undefined;
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    onSelect?: ((index: string, option: T) => void | boolean) | undefined;
    numberOfLines?: number | undefined;
}

export default class ModalDropdown<T = any> extends React.Component<ModalDropdownProps<T>> {
    show(): void;
    hide(): void;
    select(index: number): void;
}
