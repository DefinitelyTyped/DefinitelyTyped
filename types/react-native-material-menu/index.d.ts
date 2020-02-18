import { ComponentClass, ReactElement, Component } from 'react'
import { TextStyle } from 'react-native'

export type MenuProps = {
    button?: ReactElement,
    style?: StyleMedia,
    onHidden?: Function,
    animationDuration?: number,
}
export type MenuItemProps = {
    disabled?: boolean,
    disabledTextColor?: string,
    ellipsizeMode?: 'clip' | 'tail',
    onPress?: Function,
    style?: StyleMedia,
    textStyle?: TextStyle,
    underlayColor?: string,
}
export type MenuDividerProps = {
    color?: string
}

export class MenuDivider extends Component<MenuDividerProps> { }
export class MenuItem extends Component<MenuItemProps> { }

export default class Menu extends Component<MenuProps> {
    show: () => {}
    hide: () => {}
}
