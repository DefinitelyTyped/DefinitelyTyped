import * as React from 'react';
import { Animated, ViewProps, StyleProp, ViewStyle } from 'react-native';
declare type Props = ViewProps & {
    style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
    children?: React.ReactNode;
};
export default function HeaderBackground({ style, ...rest }: Props): JSX.Element;
export {};
