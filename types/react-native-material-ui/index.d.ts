// Type definitions for react-native-material-ui
// Project: https://github.com/xotahal/react-native-material-ui
// Definitions by: Kyle Roach <https://github.com/iRoachie>
// TypeScript Version: 2.3.3

import { Component } from 'react'
import { ViewStyle, TextStyle, Image } from 'react-native'

interface IButtonStyle {
    container?: ViewStyle
    text?: TextStyle
}

interface ICardStyle {
    style?: ICardStyle
}

interface ICard {
    style?: ICardStyle
    onPress?(): void
}

interface IButton {
    primary?: boolean
    accent?: boolean
    disabled?: boolean
    raised?: boolean
    upperCase?: boolean
    text: string
    uppercase?: boolean
    icon?: string
    style?: IButtonStyle
    onPress(): void
}

interface IToolbarStyle {
    container?: ViewStyle
    leftElementContainer?: ViewStyle
    leftElement?: TextStyle
    centerElementContainer?: ViewStyle
    titleText?: TextStyle
    rightElementContainer?: ViewStyle
    rightElement?: TextStyle
}

interface IToolbar {
    size?: number
    hidden?: boolean
    onPress?(): void
    onLeftElementPress?(): void
    onRightElementPress?(): void
    leftElement?: JSX.Element | string
    rightElement?: JSX.Element | string | string[]
    centerElement?: JSX.Element | string
    style?: IToolbarStyle
    searchable?: object
}

interface IThemeProvider {
    uiTheme: {}
}

interface IListItemCenterElement {
    primaryText: string
    secondaryText?: string
}

interface IListItemStyle {
    container?: ViewStyle
    content?: ViewStyle
    contentViewContainer?: ViewStyle
    leftElementContainer?: ViewStyle
    centerElementContainer?: ViewStyle
    textViewContainer?: ViewStyle
    primaryText?: TextStyle
    firstLine?: TextStyle
    primaryTextContainer?: ViewStyle
    secondaryText?: TextStyle
    tertiaryText?: TextStyle
    rightElementContainer?: ViewStyle
    rightElement?: TextStyle
    LeftElement?: TextStyle
}

interface IListItem {
    numberOfLines?: number
    leftElement?: JSX.Element | string
    rightElement?: JSX.Element | string
    centerElement: JSX.Element | string | IListItemCenterElement
    style?: IListItemStyle
    dense?: boolean
    divider?: boolean
    onPress?(): void
    onRightElementPress?(): void
}

interface IActionButton {
    icon?: string
    onPress(): void
    style?: {
        container?: ViewStyle
        icon?: any
    }
}

interface ICheckBox {
    label?: string
    value: string | number
    checked?: boolean
    disabled?: boolean
    uncheckedIcon?: string
    checkedIcon?: string
    style?: {
        icon?: ViewStyle
        container?: ViewStyle
        label?: TextStyle
    }
    onCheck?(checked: boolean): void
}

interface IAvatar {
    image?: Image
    icon?: string
    iconColor?: string
    iconSize?: number
    text?: string
    size?: number
    style?: {
        container?: ViewStyle
        content?: ViewStyle
    }
}

interface ISectionItem {
    icon?: string
    value?: string | JSX.Element
    label?: string
    onPress?(): void
    onLongPress?(): void
    active?: boolean
    disabled?: boolean
}

interface IAccount {
    avatar?: JSX.Element
    onPress?(): void
}

interface IDrawerHeaderAccount {
    avatar?: JSX.Element
    accounts: IAccount[]
    footer: any
}

interface IDrawerSection {
    title?: string
    items: ISectionItem[]
    divider?: boolean
}

interface IDrawerHeader {
    image?: Image[]
    backgroundColor?: string
}

interface IDrawer {
    style?: {
        container?: ViewStyle
    }
}

interface IIconToggle {
    color?: string
    underlayColor?: string
    maxOpacity?: number
    percent?: number
    disabled?: boolean
    size?: number
    name?: string
    onPress?(): void
    style?: {
        container?: ViewStyle
        icon?: ViewStyle
    }
}

interface IRippleFeedback {
    color?: string
    borderless?: boolean
    children: JSX.Element
}

export class ActionButton extends Component<IActionButton, any> {}
export class RippleFeedback extends Component<IRippleFeedback, any> {}
export class Button extends Component<IButton, any> {}
export class Checkbox extends Component<ICheckBox, any> {}
export class ListItem extends Component<IListItem, any> {}
export class ThemeProvider extends Component<IThemeProvider, any> {}
export class Toolbar extends Component<IToolbar, any> {}
export class Card extends Component<ICard, any> {}
export class Divider extends Component<any, any> {}
export class Avatar extends Component<IAvatar, any> {}
export class Drawer extends Component<IDrawer, any> {}
export namespace Drawer {
    export class Header extends Component<IDrawerHeader, any> {}
    export namespace Header {
        export class Account extends Component<IDrawerHeaderAccount, any> {}
    }
    export class Section extends Component<IDrawerSection, any> {}
}
export class IconToggle extends Component<IIconToggle, any> {}

