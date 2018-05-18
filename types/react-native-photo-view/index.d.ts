// Type definitions for react-native-photo-view 1.5
// Project: https://github.com/alwx/react-native-photo-view
// Definitions by: Christian Chown <https://github.com/christianchown>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import { ImageSourcePropType, ViewProps } from 'react-native';

export interface ReactNativePhotoViewProps {
    source?: ImageSourcePropType;
    loadingIndicatorSource?: ImageSourcePropType;
    fadeDuration?: number;
    minimumZoomScale?: number;
    maximumZoomScale?: number;
    showsHorizontalScrollIndicator?: boolean;
    showsVerticalScrollIndicator?: boolean;
    scale?: number;
    androidZoomTransitionDuration?: number;
    androidScaleType?: 'center' | 'centerCrop' | 'centerInside' | 'fitCenter' | 'fitStart' | 'fitEnd' | 'fitXY';
    onLoadStart?: () => void;
    onLoad?: () => void;
    onLoadEnd?: () => void;
    onProgress?: (loaded: number, total: number) => void;
    onTap?: (point: {x: number, y: number}, target?: React.ReactElement<any>) => void;
    onViewTap?: (point: {x: number, y: number}, target?: React.ReactElement<any>) => void;
    onScale?: (scale: number, target?: React.ReactElement<any>) => void;
}

export default class ReactNativePhotoView extends React.Component<ReactNativePhotoViewProps & ViewProps> {}
