import { Component, ComponentClass, ReactNode } from "react";
import { StyleProp, TextInputProps, TextProps, ViewProps, ViewStyle } from "react-native";

// FlipCard
export interface FlipCardProps {
    children?: ReactNode[];
    style?: StyleProp<ViewStyle> | undefined;
    flip?: boolean | undefined;
    friction?: number | undefined;
    perspective?: number | undefined;
    flipHorizontal?: boolean | undefined;
    flipVertical?: boolean | undefined;
    clickable?: boolean | undefined;
    onFlipEnd?: (() => void) | undefined;
    onFlipStart?: (() => void) | undefined;
    alignHeight?: boolean | undefined;
    alignWidth?: boolean | undefined;
    useNativeDriver?: boolean | undefined;
}
// Face
export interface FaceProps {
    chilren: JSX.Element[];
}

// Back
export interface BackProps {
    flipHorizontal: boolean;
    flipVertical: boolean;
    perspective: number;
    chilren: JSX.Element[];
}

export const Face: ComponentClass<FaceProps>;
export const Back: ComponentClass<BackProps>;
export default class FlipCard extends Component<FlipCardProps> {}
