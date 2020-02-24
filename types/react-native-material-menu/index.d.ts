// Type definitions for react-native-material-menu 1.0
// Project: https://github.com/mxck/react-native-material-menu (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: hyun <https://github.com/KoreanThinker>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ComponentClass, ReactElement, Component } from 'react';
import { TextStyle } from 'react-native';

export interface MenuProps {
    button?: ReactElement;
    style?: StyleMedia;
    onHidden?: () => void;
    animationDuration?: number;
}
export interface MenuItemProps {
    disabled?: boolean;
    disabledTextColor?: string;
    ellipsizeMode?: 'clip' | 'tail';
    onPress?: () => void;
    style?: StyleMedia;
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
