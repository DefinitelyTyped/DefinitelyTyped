/// <reference types="react" />
import { Animated, TextProps, StyleProp, TextStyle } from 'react-native';
import { JSX } from "react";
// tslint:disable-next-line strict-export-declare-modifiers
declare type Props = Omit<TextProps, 'style'> & {
    tintColor?: string | undefined;
    children?: string | undefined;
    style?: Animated.WithAnimatedValue<StyleProp<TextStyle>> | undefined;
};
export default function HeaderTitle({ tintColor, style, ...rest }: Props): JSX.Element;
export {};
