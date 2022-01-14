// Type definitions for react-native-flip-card 3.5
// Project: https://github.com/moschan/react-native-flip-card
// Definitions by: Jake Chapman <https://github.com/imjakechapman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component, ReactNode, ComponentClass } from "react";
import {
    ViewProps,
    TextProps,
    StyleProp,
    TextInputProps,
    ViewStyle
} from "react-native";

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
