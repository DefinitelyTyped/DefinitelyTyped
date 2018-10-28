// Type definitions for react-native-dialog 4.0
// Project: https://github.com/mmazzarolo/react-native-dialog
// Definitions by: MrLuje <https://github.com/MrLuje>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Ref, PureComponent, ReactNode } from "react";
import {
    ViewProps,
    TextProps,
    StyleProp,
    TextInputProps,
    ViewStyle
} from "react-native";

interface ButtonProps {
    label: string;
    /**
     * default:
     *      ios     #007ff9
     *      android #169689
     */
    color?: string;
    bold?: boolean;
    /**
     * default: false
     */

    disabled?: boolean;
    onPress: () => void;
}

interface ContainerProps {
    blurComponentIOS?: ReactNode;
    children: JSX.Element[];
    /**
     * default: false
     */
    visible?: boolean;
}

interface TitleProps {
    children: string;
}

interface InputProps<T> {
    label?: string;
    textInputRef?: Ref<T>;
    wrapperStyle?: StyleProp<ViewStyle>;
}

interface DescriptionProps {
    children: string;
}

export namespace Dialog {
    class Button extends PureComponent<
        ButtonProps & ViewProps & TextProps
    > {}
    class Container extends PureComponent<ContainerProps & ViewProps> {}
    class Title extends PureComponent<
        TitleProps & ViewProps & TextProps
    > {}
    class Input<T> extends PureComponent<
        InputProps<T> & ViewProps & TextInputProps
    > {}
    class Description extends PureComponent<
        DescriptionProps & ViewProps & TextProps
    > {}
}

export default Dialog;
