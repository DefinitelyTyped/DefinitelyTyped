import { JSX } from "react";
import { Animated, StyleProp, TextProps, TextStyle } from "react-native";
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
declare type Props = Omit<TextProps, "style"> & {
    tintColor?: string | undefined;
    children?: string | undefined;
    style?: Animated.WithAnimatedValue<StyleProp<TextStyle>> | undefined;
};
export default function HeaderTitle({ tintColor, style, ...rest }: Props): JSX.Element;
export {};
