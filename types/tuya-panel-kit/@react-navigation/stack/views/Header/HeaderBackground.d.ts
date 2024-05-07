import * as React from "react";
import { Animated, StyleProp, ViewProps, ViewStyle } from "react-native";
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
declare type Props = ViewProps & {
    style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>> | undefined;
    children?: React.ReactNode | undefined;
};
export default function HeaderBackground({ style, ...rest }: Props): React.JSX.Element;
export {};
