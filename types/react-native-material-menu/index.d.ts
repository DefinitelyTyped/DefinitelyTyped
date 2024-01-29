import { Component, ComponentClass, ReactElement, ReactNode } from "react";
import { StyleProp, TextProps, TextStyle, ViewStyle } from "react-native";

export interface MenuProps {
    button?: ReactElement | undefined;
    children?: ReactNode;
    testID?: string | undefined;
    style?: StyleProp<ViewStyle> | undefined;
    onHidden?: (() => void) | undefined;
    animationDuration?: number | undefined;
}
export interface MenuItemProps {
    children?: ReactNode;
    disabled?: boolean | undefined;
    testID?: string | undefined;
    disabledTextColor?: string | undefined;
    ellipsizeMode?: TextProps["ellipsizeMode"] | undefined;
    onPress?: (() => void) | undefined;
    style?: StyleProp<ViewStyle> | undefined;
    textStyle?: TextStyle | undefined;
    underlayColor?: string | undefined;
}
export interface MenuDividerProps {
    color?: string | undefined;
}

export class MenuDivider extends Component<MenuDividerProps> {}
export class MenuItem extends Component<MenuItemProps> {}

export default class Menu extends Component<MenuProps> {
    show: () => void;
    hide: (onHidden?: () => void) => void;
}
