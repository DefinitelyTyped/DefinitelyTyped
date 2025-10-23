import * as React from "react";
import { ImageSourcePropType, ImageStyle, StyleProp } from "react-native";

export interface ScaledImageProps {
    source: ImageSourcePropType;
    height?: number | undefined;
    width?: number | undefined;
    style?: StyleProp<ImageStyle> | undefined;
}

export default class ScaledImage extends React.Component<ScaledImageProps> {}
