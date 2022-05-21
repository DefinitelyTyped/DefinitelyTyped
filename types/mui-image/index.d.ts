// Type definitions for mui-image 1.0
// Project: https://github.com/benmneb/mui-image
// Definitions by: benmneb <https://github.com/benmneb>
//                 Natalia <https://github.com/CodeMeNatalie>
// Definitions: https://github.com/DefinitelyTyped/mui-image

import * as React from 'react';

interface MuiImageProps {
    alt?: string;
    bgColor?: React.CSSProperties['backgroundColor'];
    className?: string;
    distance?: string | number;
    duration?: number;
    easing?: React.CSSProperties['transitionTimingFunction'];
    errorIcon?: boolean | React.ReactNode;
    fit?: React.CSSProperties['objectFit'];
    height?: React.CSSProperties['height'] | number;
    iconWrapperClassName?: string;
    iconWrapperStyle?: React.CSSProperties;
    onError?: (...args: any[]) => any;
    onLoad?: (...args: any[]) => any;
    position?: React.CSSProperties['position'];
    shift?: 'left' | 'right' | 'top' | 'bottom' | false | null;
    shiftDuration?: number;
    showLoading?: boolean | React.ReactNode;
    src: string;
    style?: React.CSSProperties;
    width?: React.CSSProperties['width'] | number;
    wrapperClassName?: string;
    wrapperStyle?: React.CSSProperties;
}

declare const Image: React.FC<MuiImageProps>;
export default Image;
