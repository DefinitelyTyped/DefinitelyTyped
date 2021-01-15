// Type definitions for react-native-material-menu 1.0
// Project: https://github.com/mxck/react-native-material-menu
// Definitions by: hyun <https://github.com/KoreanThinker>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ComponentClass, ReactElement, Component } from 'react';
import { StyleProp, TextStyle, TextProps, ViewStyle } from 'react-native';

export interface MenuProps {
    button?: ReactElement;
    testID?: string;
    style?: StyleProp<ViewStyle>;
    onHidden?: () => void;
    animationDuration?: number;
}
export interface MenuItemProps {
    disabled?: boolean;
    testID?: string;
    disabledTextColor?: string;
    ellipsizeMode?: TextProps["ellipsizeMode"];
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
    textStyle?: TextStyle;
    underlayColor?: string;
}
export interface MenuDividerProps {
    color?: string;
}

export class MenuDivider extends Component<MenuDividerProps> { }
export class MenuItem extends Component<MenuItemProps> { }

export default class Menu extends Component<MenuProps> {
    show: () => {};
    hide: () => {};
}
