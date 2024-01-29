import * as React from "react";
import { ImageSourcePropType, ViewProps } from "react-native";

export interface ReactNativePhotoViewProps {
    source?: ImageSourcePropType | undefined;
    loadingIndicatorSource?: ImageSourcePropType | undefined;
    fadeDuration?: number | undefined;
    minimumZoomScale?: number | undefined;
    maximumZoomScale?: number | undefined;
    showsHorizontalScrollIndicator?: boolean | undefined;
    showsVerticalScrollIndicator?: boolean | undefined;
    scale?: number | undefined;
    androidZoomTransitionDuration?: number | undefined;
    androidScaleType?:
        | "center"
        | "centerCrop"
        | "centerInside"
        | "fitCenter"
        | "fitStart"
        | "fitEnd"
        | "fitXY"
        | undefined;
    onLoadStart?: (() => void) | undefined;
    onLoad?: (() => void) | undefined;
    onLoadEnd?: (() => void) | undefined;
    onProgress?: ((loaded: number, total: number) => void) | undefined;
    onTap?: ((point: { x: number; y: number }, target?: React.ReactElement) => void) | undefined;
    onViewTap?: ((point: { x: number; y: number }, target?: React.ReactElement) => void) | undefined;
    onScale?: ((scale: number, target?: React.ReactElement) => void) | undefined;
}

export default class ReactNativePhotoView extends React.Component<ReactNativePhotoViewProps & ViewProps> {}
