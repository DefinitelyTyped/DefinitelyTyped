// Type definitions for react-native-scaled-image 0.0
// Project: https://github.com/nanlabs/react-native-scaled-image
// Definitions by: Matt Jaeger <https://github.com/Jaeger25>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";
import { ImageSourcePropType, ImageStyle, StyleProp } from "react-native";

export interface ScaledImageProps {
    source: ImageSourcePropType;
    height?: number | undefined;
    width?: number | undefined;
    style?: StyleProp<ImageStyle> | undefined;
}

export default class ScaledImage extends React.Component<ScaledImageProps> {}
