import { Component } from "react";
import { Image, StyleProp, TextStyle as TextStyleRaw, ViewStyle as ViewStyleRaw } from "react-native";

export type ViewStyle = StyleProp<ViewStyleRaw>;
export type TextStyle = StyleProp<TextStyleRaw>;

export interface ActionButtonProps {
    actions?:
        | string[]
        | JSX.Element[]
        | Array<{
            icon: string | JSX.Element;
            label: string;
            name: string;
        }>
        | undefined;
    hidden?: boolean | undefined;
    icon?: string | undefined;
    style?: {
        container?: ViewStyle | undefined;
        icon?: TextStyle | undefined;
        positionContainer?: ViewStyle | undefined;
    } | undefined;
    transition?: "toolbar" | "speedDial" | undefined;
    onPress?(): void;
    onLongPress?(): void;
}

/**
 * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/ActionButton/ActionButton.react.js
 */
export class ActionButton extends Component<ActionButtonProps, any> {}

export interface AvatarProps {
    image?: Image | undefined;
    icon?: string | undefined;
    iconColor?: string | undefined;
    iconSize?: number | undefined;
    text?: string | undefined;
    size?: number | undefined;
    style?: {
        container?: ViewStyle | undefined;
        content?: ViewStyle | undefined;
    } | undefined;
}

/**
 * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/Avatar/Avatar.react.js
 */
export class Avatar extends Component<AvatarProps, any> {}

export interface BadgeProps {
    children?: JSX.Element | undefined;
    text?: string | undefined;
    icon?: string | { name: string; color: string; size: number } | undefined;
    size?: number | undefined;
    stroke?: number | undefined;
    accent?: boolean | undefined;
    style?: {
        container?: ViewStyle | undefined;
        content?: ViewStyle | undefined;
        strokeContainer?: ViewStyle | undefined;
    } | undefined;
}

/**
 * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/Badge/Badge.react.js
 */
export class Badge extends Component<BadgeProps, any> {}

export interface BottomNavigationProps {
    active?: string | undefined;
    children: JSX.Element | JSX.Element[];
    hidden?: boolean | undefined;
    style?: {
        container?: ViewStyle | undefined;
    } | undefined;
}

/**
 * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/BottomNavigation/BottomNavigation.react.js
 */
export class BottomNavigation extends Component<BottomNavigationProps, any> {}

export interface BottomNavigationAction {
    testID?: string | undefined;
    icon: JSX.Element | string;
    label?: string | undefined;
    key?: string | undefined;
    active: boolean;
    disabled?: boolean | undefined;
    style?: {
        container?: ViewStyle | undefined;
        active?: TextStyle | undefined;
        disabled?: TextStyle | undefined;
    } | undefined;
    onPress?(): void;
}

export namespace BottomNavigation {
    class Action extends Component<BottomNavigationAction, any> {}
}

export interface ButtonProps {
    testID?: string | undefined;
    text: string;
    primary?: boolean | undefined;
    accent?: boolean | undefined;
    disabled?: boolean | undefined;
    raised?: boolean | undefined;
    upperCase?: boolean | undefined;
    icon?: string | JSX.Element | undefined;
    style?: {
        container?: ViewStyle | undefined;
        text?: TextStyle | undefined;
    } | undefined;
    onPress?(): void;
    onLongPress?(): void;
}

/**
 * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/Button/Button.react.js
 */
export class Button extends Component<ButtonProps, any> {}

export interface CardProps {
    children?: JSX.Element | undefined;
    style?: {
        container?: ViewStyle | undefined;
    } | undefined;
    onPress?(): void;
}

/**
 * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/Card/Card.react.js
 */
export class Card extends Component<CardProps, any> {}

export interface CheckBoxProps {
    label: string;
    value: string | number;
    checked?: boolean | undefined;
    disabled?: boolean | undefined;
    uncheckedIcon?: string | undefined;
    checkedIcon?: string | undefined;
    style?: {
        icon?: TextStyle | undefined;
        container?: ViewStyle | undefined;
        label?: TextStyle | undefined;
    } | undefined;
    onCheck(checked: boolean): void;
}

/**
 * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/Checkbox/Checkbox.react.js
 */
export class Checkbox extends Component<CheckBoxProps> {}

export interface DialogProps {
    children: JSX.Element | JSX.Element[];
    style?: {
        container?: ViewStyle | undefined;
    } | undefined;
    onPress?(): void;
}

/**
 * Dialog
 * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/Dialog/Dialog.react.js
 */
export class Dialog extends Component<DialogProps, any> {}

export interface DialogTitleProps {
    children: JSX.Element;
    style?: {
        titleContainer?: ViewStyle | undefined;
        titleText?: TextStyle | undefined;
    } | undefined;
}

export interface DialogContentProps {
    children: JSX.Element;
    style?: {
        contentContainer?: ViewStyle | undefined;
    } | undefined;
}

export interface DialogActionsProps {
    children: JSX.Element;
    style?: {
        actionsContainer?: ViewStyle | undefined;
    } | undefined;
}

export namespace Dialog {
    class Title extends Component<DialogTitleProps, any> {}
    class Content extends Component<DialogContentProps, any> {}
    class Actions extends Component<DialogActionsProps, any> {}
}

export interface DialogDefaultActionsProps {
    actions: string[];
    style?: {
        defaultActionsContainer?: ViewStyle | undefined;
    } | undefined;
    onActionPress(action: string): void;
}

/**
 * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/Dialog/DialogDefaultActions.react.js
 */
export class DialogDefaultActions extends Component<DialogDefaultActionsProps, any> {}

export interface DialogStackedActionsProps {
    actions: string[];
    style?: {
        stackedActionsContainer?: ViewStyle | undefined;
    } | undefined;
    onActionPress(action: string): void;
}

/**
 * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/Dialog/DialogStackedActions.react.js
 */
export class DialogStackedActions extends Component<DialogStackedActionsProps, any> {}

export interface DividerProps {
    inset?: boolean | undefined;
    style?: {
        container?: ViewStyle | undefined;
    } | undefined;
}

/**
 * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/Divider/Divider.react.js
 */
export class Divider extends Component<DividerProps, any> {}

export interface DrawerProps {
    children: JSX.Element;
    style?: {
        container?: ViewStyle | undefined;
    } | undefined;
}

export interface DrawerHeaderProps {
    image?: Image[] | undefined;
    backgroundColor?: string | undefined;
    children?: JSX.Element | undefined;
    style?: {
        container?: ViewStyle | undefined;
        contentContainer?: ViewStyle | undefined;
    } | undefined;
}

export interface DrawerSectionItem {
    icon?: string | undefined;
    value?: string | JSX.Element | undefined;
    label?: string | undefined;
    active?: boolean | undefined;
    disabled?: boolean | undefined;
    onPress?(): void;
    onLongPress?(): void;
}

export interface DrawerSectionProps {
    title?: string | undefined;
    items: DrawerSectionItem[];
    divider?: boolean | undefined;
    style?: {
        container?: ViewStyle | undefined;
        item?: ViewStyle | undefined;
        subheader?: TextStyle | undefined;
        icon?: ViewStyle | undefined;
        value?: TextStyle | undefined;
        label?: TextStyle | undefined;
    } | undefined;
}

export interface DrawerHeaderAccountProps {
    avatar?: JSX.Element | undefined;
    accounts?:
        | Array<{
            avatar?: JSX.Element | undefined;
            onPress?(): void;
        }>
        | undefined;
    footer?: {} | undefined;
    style?: {
        container?: ViewStyle | undefined;
        accountContainer?: ViewStyle | undefined;
        topContainer?: ViewStyle | undefined;
        avatarsContainer?: ViewStyle | undefined;
        activeAvatarContainer?: ViewStyle | undefined;
        inactiveAvatarContainer?: ViewStyle | undefined;
    } | undefined;
}

/**
 * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/Drawer/Drawer.react.js
 */
export class Drawer extends Component<DrawerProps, any> {}
export namespace Drawer {
    class Header extends Component<DrawerHeaderProps, any> {}
    namespace Header {
        class Account extends Component<DrawerHeaderAccountProps, any> {}
    }
    class Section extends Component<DrawerSectionProps, any> {}
}

export interface IconProps {
    name: string;
    style?: ViewStyle | ViewStyle[] | undefined;
    size?: number | undefined;
    color?: string | undefined;
}

/**
 * Icon
 * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/Icon/index.js
 */
export class Icon extends Component<IconProps, any> {}

export interface IconToggleProps {
    testID?: string | undefined;
    color?: string | undefined;
    underlayColor?: string | undefined;
    maxOpacity?: number | undefined;
    percent?: number | undefined;
    disabled?: boolean | undefined;
    size?: number | undefined;
    name: string;
    children?: JSX.Element | undefined;
    style?: {
        container?: ViewStyle | undefined;
        icon?: ViewStyle | undefined;
    } | undefined;
    onPress?(): void;
}

/**
 * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/IconToggle/IconToggle.react.js
 */
export class IconToggle extends Component<IconToggleProps, any> {}

export interface ListItemCenterElement {
    primaryText: string | JSX.Element;
    secondaryText?: string | undefined;
    tertiaryText?: string | undefined;
}

export interface ListItemStyle {
    container?: ViewStyle | undefined;
    content?: ViewStyle | undefined;
    contentViewContainer?: ViewStyle | undefined;
    leftElementContainer?: ViewStyle | undefined;
    centerElementContainer?: ViewStyle | undefined;
    textViewContainer?: ViewStyle | undefined;
    primaryText?: TextStyle | undefined;
    firstLine?: TextStyle | undefined;
    primaryTextContainer?: ViewStyle | undefined;
    secondaryText?: TextStyle | undefined;
    tertiaryText?: TextStyle | undefined;
    rightElementContainer?: ViewStyle | undefined;
    rightElement?: TextStyle | undefined;
    LeftElement?: TextStyle | undefined;
}

export interface ListItemProps {
    testID?: string | undefined;
    numberOfLines?: 1 | 2 | 3 | "dynamic" | undefined;
    leftElement?: JSX.Element | string | undefined;
    rightElement?: JSX.Element | string | undefined;
    centerElement: JSX.Element | string | ListItemCenterElement;
    style?: ListItemStyle | undefined;
    dense?: boolean | undefined;
    divider?: boolean | undefined;
    onPressValue?: any;
    onPress?(): void;
    onRightElementPress?(): void;
}

/**
 * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/ListItem/ListItem.react.js
 */
export class ListItem extends Component<ListItemProps, any> {}

export interface RadioButtonProps {
    label: string;
    value: string | number;
    checked?: boolean | undefined;
    disabled?: boolean | undefined;
    theme?: string | undefined;
    onSelect(value: string): void;
}

/**
 * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/RadioButton/RadioButton.react.js
 */
export class RadioButton extends Component<RadioButtonProps, any> {}

export interface SubheaderProps {
    text: string;
    inset?: boolean | undefined;
    lines?: number | undefined;
    style?: {
        container?: ViewStyle | undefined;
        text?: TextStyle | undefined;
    } | undefined;
}

/**
 * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/Subheader/Subheader.react.js
 */
export class Subheader extends Component<SubheaderProps, any> {}

export interface ToolbarStyle {
    container?: ViewStyle | undefined;
    leftElementContainer?: ViewStyle | undefined;
    leftElement?: TextStyle | undefined;
    centerElementContainer?: ViewStyle | undefined;
    titleText?: TextStyle | undefined;
    rightElementContainer?: ViewStyle | undefined;
    rightElement?: TextStyle | undefined;
}

export interface Searchable {
    placeholder?: string | undefined;
    autoFocus?: boolean | undefined;
    autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined;
    autoCorrect?: boolean | undefined;
    onChangeText?(text: string): void;
    onSearchClosed?(): void;
    onSearchPressed?(): void;
    onSubmitEditing?(): void;
    onSearchCloseRequested?(): void;
}

export interface ToolBarRightElement {
    actions?: Array<JSX.Element | string> | undefined;
    menu?: { icon: string; labels: string[] } | undefined;
}

export interface RightElementPressEvent {
    action: string;
    index: number;
    result?: any;
}

export interface ToolbarProps {
    isSearchActive?: boolean | undefined;
    size?: number | undefined;
    hidden?: boolean | undefined;
    leftElement?: JSX.Element | string | undefined;
    rightElement?: JSX.Element | string | string[] | ToolBarRightElement | undefined;
    centerElement?: JSX.Element | string | undefined;
    style?: ToolbarStyle | undefined;
    searchable?: Searchable | undefined;
    onPress?(): void;
    onLeftElementPress?(): void;
    onRightElementPress?(e: RightElementPressEvent): void;
}

/**
 * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/Toolbar/Toolbar.react.js
 */
export class Toolbar extends Component<ToolbarProps, any> {}

export interface SnackbarProps {
    message: string;
    visible: boolean;
    timeout: number;
    bottomNavigation: boolean;
    actionText?: string | undefined;
    button?: ButtonProps | undefined;
    style?: {
        container?: ViewStyle | undefined;
        message?: ViewStyle | undefined;
    } | undefined;
    onRequestClose(): void;
    onActionPress?(): void;
}

/**
 * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/Snackbar/Snackbar.react.js
 */
export class Snackbar extends Component<SnackbarProps, any> {}

export interface RippleFeedbackProps {
    color?: string | undefined;
    borderless?: boolean | undefined;
    children: JSX.Element;
}

/**
 * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/RippleFeedback/RippleFeedback.react.js
 */
export class RippleFeedback extends Component<RippleFeedbackProps, any> {}

export interface Color {
    red50: string;
    red100: string;
    red200: string;
    red300: string;
    red400: string;
    red500: string;
    red600: string;
    red700: string;
    red800: string;
    red900: string;
    redA100: string;
    redA200: string;
    redA400: string;
    redA700: string;
    pink50: string;
    pink100: string;
    pink200: string;
    pink300: string;
    pink400: string;
    pink500: string;
    pink600: string;
    pink700: string;
    pink800: string;
    pink900: string;
    pinkA100: string;
    pinkA200: string;
    pinkA400: string;
    pinkA700: string;
    purple50: string;
    purple100: string;
    purple200: string;
    purple300: string;
    purple400: string;
    purple500: string;
    purple600: string;
    purple700: string;
    purple800: string;
    purple900: string;
    purpleA100: string;
    purpleA200: string;
    purpleA400: string;
    purpleA700: string;
    deepPurple50: string;
    deepPurple100: string;
    deepPurple200: string;
    deepPurple300: string;
    deepPurple400: string;
    deepPurple500: string;
    deepPurple600: string;
    deepPurple700: string;
    deepPurple800: string;
    deepPurple900: string;
    deepPurpleA100: string;
    deepPurpleA200: string;
    deepPurpleA400: string;
    deepPurpleA700: string;
    indigo50: string;
    indigo100: string;
    indigo200: string;
    indigo300: string;
    indigo400: string;
    indigo500: string;
    indigo600: string;
    indigo700: string;
    indigo800: string;
    indigo900: string;
    indigoA100: string;
    indigoA200: string;
    indigoA400: string;
    indigoA700: string;
    blue50: string;
    blue100: string;
    blue200: string;
    blue300: string;
    blue400: string;
    blue500: string;
    blue600: string;
    blue700: string;
    blue800: string;
    blue900: string;
    blueA100: string;
    blueA200: string;
    blueA400: string;
    blueA700: string;
    lightBlue50: string;
    lightBlue100: string;
    lightBlue200: string;
    lightBlue300: string;
    lightBlue400: string;
    lightBlue500: string;
    lightBlue600: string;
    lightBlue700: string;
    lightBlue800: string;
    lightBlue900: string;
    lightBlueA100: string;
    lightBlueA200: string;
    lightBlueA400: string;
    lightBlueA700: string;
    cyan50: string;
    cyan100: string;
    cyan200: string;
    cyan300: string;
    cyan400: string;
    cyan500: string;
    cyan600: string;
    cyan700: string;
    cyan800: string;
    cyan900: string;
    cyanA100: string;
    cyanA200: string;
    cyanA400: string;
    cyanA700: string;
    teal50: string;
    teal100: string;
    teal200: string;
    teal300: string;
    teal400: string;
    teal500: string;
    teal600: string;
    teal700: string;
    teal800: string;
    teal900: string;
    tealA100: string;
    tealA200: string;
    tealA400: string;
    tealA700: string;
    green50: string;
    green100: string;
    green200: string;
    green300: string;
    green400: string;
    green500: string;
    green600: string;
    green700: string;
    green800: string;
    green900: string;
    greenA100: string;
    greenA200: string;
    greenA400: string;
    greenA700: string;
    lightGreen50: string;
    lightGreen100: string;
    lightGreen200: string;
    lightGreen300: string;
    lightGreen400: string;
    lightGreen500: string;
    lightGreen600: string;
    lightGreen700: string;
    lightGreen800: string;
    lightGreen900: string;
    lightGreenA100: string;
    lightGreenA200: string;
    lightGreenA400: string;
    lightGreenA700: string;
    lime50: string;
    lime100: string;
    lime200: string;
    lime300: string;
    lime400: string;
    lime500: string;
    lime600: string;
    lime700: string;
    lime800: string;
    lime900: string;
    limeA100: string;
    limeA200: string;
    limeA400: string;
    limeA700: string;
    yellow50: string;
    yellow100: string;
    yellow200: string;
    yellow300: string;
    yellow400: string;
    yellow500: string;
    yellow600: string;
    yellow700: string;
    yellow800: string;
    yellow900: string;
    yellowA100: string;
    yellowA200: string;
    yellowA400: string;
    yellowA700: string;
    amber50: string;
    amber100: string;
    amber200: string;
    amber300: string;
    amber400: string;
    amber500: string;
    amber600: string;
    amber700: string;
    amber800: string;
    amber900: string;
    amberA100: string;
    amberA200: string;
    amberA400: string;
    amberA700: string;
    orange50: string;
    orange100: string;
    orange200: string;
    orange300: string;
    orange400: string;
    orange500: string;
    orange600: string;
    orange700: string;
    orange800: string;
    orange900: string;
    orangeA100: string;
    orangeA200: string;
    orangeA400: string;
    orangeA700: string;
    deepOrange50: string;
    deepOrange100: string;
    deepOrange200: string;
    deepOrange300: string;
    deepOrange400: string;
    deepOrange500: string;
    deepOrange600: string;
    deepOrange700: string;
    deepOrange800: string;
    deepOrange900: string;
    deepOrangeA100: string;
    deepOrangeA200: string;
    deepOrangeA400: string;
    deepOrangeA700: string;
    brown50: string;
    brown100: string;
    brown200: string;
    brown300: string;
    brown400: string;
    brown500: string;
    brown600: string;
    brown700: string;
    brown800: string;
    brown900: string;
    blueGrey50: string;
    blueGrey100: string;
    blueGrey200: string;
    blueGrey300: string;
    blueGrey400: string;
    blueGrey500: string;
    blueGrey600: string;
    blueGrey700: string;
    blueGrey800: string;
    blueGrey900: string;
    grey50: string;
    grey100: string;
    grey200: string;
    grey300: string;
    grey400: string;
    grey500: string;
    grey600: string;
    grey700: string;
    grey800: string;
    grey900: string;
    black: string;
    white: string;
    transparent: string;
    snackbarColor: string;
}

export const COLOR: Color;

export interface ThemeProps {
    theme: {};
}

export interface ThemeProviderProps {
    value: {};
    children: React.ReactElement;
}

export interface ThemeConsumerProps {
    children(props: ThemeProps): React.ReactElement;
}

export namespace ThemeContext {
    class Provider extends Component<ThemeProviderProps> {}
    class Consumer extends Component<ThemeConsumerProps> {}
}

export function getTheme(theme: {}): {};
