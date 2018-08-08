// Type definitions for react-native-settings-list 1.8
// Project: https://github.com/evetstech/react-native-settings-list
// Definitions by: MrLuje <https://github.com/MrLuje>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component, ReactNode } from "react";
import { TextStyle, StyleProp, ImageStyle, ViewStyle } from "react-native";

interface SettingsListProps {
    /**
     * default: white
     */
    backgroundColor?: string;
    /**
     * default: black
     */
    borderColor?: string;
    /**
     * default: 50
     */
    defaultItemSize?: number;
    /**
     * default: transparent
     */
    underlayColor?: string;
    /**
     * default: {fontSize: 16}
     */
    defaultTitleStyle?: StyleProp<TextStyle>;
    defaultTitleInfoPosition?: string;
    scrollViewProps?: object;
}
declare class SettingsList extends Component<SettingsListProps> {}

interface HeaderProps {
    headerText?: string;
    headerStyle?: StyleProp<TextStyle>;
    headerRef?: () => void;
    /**
     * default: 1
     */
    headerNumberOfLines?: number;
}

interface ItemProps {
    /**
     * Title being displayed
     */
    title?: string;
    titleStyle?: StyleProp<TextStyle>;
    /**
     * Icon displayed on the left of the settings item
     */
    icon?: ReactNode;

    /**
     * Item Box Style
     */
    itemBoxStyle?: StyleProp<ViewStyle>;
    /**
     * Title Box Style
     */
    titleBoxStyle?: StyleProp<ViewStyle>;
    /**
     * Right Side Style
     */
    rightSideStyle?: StyleProp<ViewStyle>;
    /**
     * Editable Right Side Style
     */
    editableTextStyle?: StyleProp<TextStyle>;

    /**
     * Individual item width.  Can be globally set in the parent.  Will become deprecated
     */
    itemWidth?: number;
    /**
     * Allows for the item to become an auth item
     */
    isAuth?: boolean;
    authPropsUser?: object;
    authPropsPW?: object;
    /**
     * Individual background color. Can be globally set in the parent. Will become Deprecated
     */
    backgroundColor?: string;

    /**
     * Individual underlay click color.  Can be globally set in the parent.
     */
    underlayColor?: string;
    /**
     * Item on press callback.
     */
    onPress?: () => void;
    /**
     * Item on long press callback.
     */
    onLongPress?: () => void;
    /**
     * Enable or disable the > arrow at the end of the setting item.
     * Default: true
     */
    hasNavArrow?: boolean;
    arrowIcon?: ReactNode;

    arrowStyle?: StyleProp<ImageStyle>;
    /**
     * Enable or disable a Switch component
     */
    hasSwitch?: boolean;
    /**
     * Switch state
     */
    switchState?: boolean;
    /**
     * Switch props
     */
    switchProps?: object;
    /**
     * On value change callback
     */
    switchOnValueChange?: () => void;
    /**
     * Right side information on the setting item
     */
    titleInfo?: string;
    titleInfoStyle?: StyleProp<TextStyle>;
    /**
     * If 'Bottom'; info is placed beneath the title
     */
    titleInfoPosition?: string;
    /**
     * Right side content
     */
    rightSideContent?: ReactNode;
    /* Gives opens to hide specific borders */
    borderHide?: "Top" | "Bottom" | "Both";

    itemRef?: () => void;
}

declare namespace SettingsList {
    class Header extends Component<HeaderProps> {}
    class Item extends Component<ItemProps> {}
}

export default SettingsList;
