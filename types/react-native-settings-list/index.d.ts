import { Component, ReactNode } from "react";
import { ImageStyle, StyleProp, TextStyle, ViewStyle } from "react-native";

interface SettingsListProps {
    /**
     * default: white
     */
    backgroundColor?: string | undefined;
    /**
     * default: black
     */
    borderColor?: string | undefined;
    children?: React.ReactNode;
    /**
     * default: 50
     */
    defaultItemSize?: number | undefined;
    /**
     * default: transparent
     */
    underlayColor?: string | undefined;
    /**
     * default: {fontSize: 16}
     */
    defaultTitleStyle?: StyleProp<TextStyle> | undefined;
    defaultTitleInfoPosition?: string | undefined;
    scrollViewProps?: object | undefined;
}
declare class SettingsList extends Component<SettingsListProps> {}

interface HeaderProps {
    headerText?: string | undefined;
    headerStyle?: StyleProp<TextStyle> | undefined;
    headerRef?: (() => void) | undefined;
    /**
     * default: 1
     */
    headerNumberOfLines?: number | undefined;
}

interface ItemProps {
    /**
     * Title being displayed
     */
    title?: string | undefined;
    titleStyle?: StyleProp<TextStyle> | undefined;
    /**
     * Icon displayed on the left of the settings item
     */
    icon?: ReactNode | undefined;

    /**
     * Item Box Style
     */
    itemBoxStyle?: StyleProp<ViewStyle> | undefined;
    /**
     * Title Box Style
     */
    titleBoxStyle?: StyleProp<ViewStyle> | undefined;
    /**
     * Right Side Style
     */
    rightSideStyle?: StyleProp<ViewStyle> | undefined;
    /**
     * Editable Right Side Style
     */
    editableTextStyle?: StyleProp<TextStyle> | undefined;

    /**
     * Individual item width.  Can be globally set in the parent.  Will become deprecated
     */
    itemWidth?: number | undefined;
    /**
     * Allows for the item to become an auth item
     */
    isAuth?: boolean | undefined;
    authPropsUser?: object | undefined;
    authPropsPW?: object | undefined;
    /**
     * Individual background color. Can be globally set in the parent. Will become Deprecated
     */
    backgroundColor?: string | undefined;

    /**
     * Individual underlay click color.  Can be globally set in the parent.
     */
    underlayColor?: string | undefined;
    /**
     * Item on press callback.
     */
    onPress?: (() => void) | undefined;
    /**
     * Item on long press callback.
     */
    onLongPress?: (() => void) | undefined;
    /**
     * Enable or disable the > arrow at the end of the setting item.
     * Default: true
     */
    hasNavArrow?: boolean | undefined;
    arrowIcon?: ReactNode | undefined;

    arrowStyle?: StyleProp<ImageStyle> | undefined;
    /**
     * Enable or disable a Switch component
     */
    hasSwitch?: boolean | undefined;
    /**
     * Switch state
     */
    switchState?: boolean | undefined;
    /**
     * Switch props
     */
    switchProps?: object | undefined;
    /**
     * On value change callback
     */
    switchOnValueChange?: (() => void) | undefined;
    /**
     * Right side information on the setting item
     */
    titleInfo?: string | undefined;
    titleInfoStyle?: StyleProp<TextStyle> | undefined;
    /**
     * If 'Bottom'; info is placed beneath the title
     */
    titleInfoPosition?: string | undefined;
    /**
     * Right side content
     */
    rightSideContent?: ReactNode | undefined;
    /* Gives opens to hide specific borders */
    borderHide?: "Top" | "Bottom" | "Both" | undefined;

    itemRef?: (() => void) | undefined;
}

declare namespace SettingsList {
    class Header extends Component<HeaderProps> {}
    class Item extends Component<ItemProps> {}
}

export default SettingsList;
