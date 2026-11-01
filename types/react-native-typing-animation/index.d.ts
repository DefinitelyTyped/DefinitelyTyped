import { StyleProp, ViewStyle } from "react-native";

import { JSX } from "react";

export interface TypingAnimationProps {
    style?: StyleProp<ViewStyle>;
    dotColor?: string;
    dotStyles?: StyleProp<ViewStyle>;
    dotRadius?: number;
    dotMargin?: number;
    dotAmplitude?: number;
    dotSpeed?: number;
    dotY?: number;
    dotX?: number;
}

export function TypingAnimation(props: TypingAnimationProps): JSX.Element;
