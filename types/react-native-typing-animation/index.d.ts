import { StyleSheetProperties } from "react-native";

import { JSX } from "react";

export interface TypingAnimationProps {
    style?: StyleSheetProperties;
    dotColor?: string;
    dotStyles?: StyleSheetProperties;
    dotRadius?: number;
    dotMargin?: number;
    dotAmplitude?: number;
    dotSpeed?: number;
    dotY?: number;
    dotX?: number;
}

export function TypingAnimation(props: TypingAnimationProps): JSX.Element;
