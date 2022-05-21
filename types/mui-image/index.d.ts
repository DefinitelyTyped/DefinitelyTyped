// Type definitions for mui-image 1.0.4
// Project: https://github.com/benmneb/mui-image
// Definitions by: benmneb <https://github.com/benmneb>
//                 Natalia <https://github.com/CodeMeNatalie>
// Definitions: https://github.com/DefinitelyTyped/mui-image

declare module 'mui-image' {
    import * as React from 'react';

    interface IMuiImage {
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
        onError?: (...args: any[]) => void;
        onLoad?: (...args: any[]) => void;
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

    const Image: React.FC<IMuiImage>;
    export default Image;
}
