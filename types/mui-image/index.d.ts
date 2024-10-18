import * as React from "react";

interface MuiImageProps {
    alt?: string | undefined;
    bgColor?: React.CSSProperties["backgroundColor"] | undefined;
    className?: string | undefined;
    distance?: string | number | undefined;
    duration?: number | undefined;
    easing?: React.CSSProperties["transitionTimingFunction"] | undefined;
    errorIcon?: boolean | React.ReactNode | undefined;
    fit?: React.CSSProperties["objectFit"] | undefined;
    height?: React.CSSProperties["height"] | number | undefined;
    iconWrapperClassName?: string | undefined;
    iconWrapperStyle?: React.CSSProperties | undefined;
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    onError?: (...args: any[]) => void | undefined;
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    onLoad?: (...args: any[]) => void | undefined;
    position?: React.CSSProperties["position"] | undefined;
    shift?: "left" | "right" | "top" | "bottom" | false | null | undefined;
    shiftDuration?: number | undefined;
    showLoading?: boolean | React.ReactNode | undefined;
    src: string;
    style?: React.CSSProperties | undefined;
    width?: React.CSSProperties["width"] | number | undefined;
    wrapperClassName?: string | undefined;
    wrapperStyle?: React.CSSProperties | undefined;
    title?: string;
}

declare const Image: React.FC<MuiImageProps>;
export default Image;
export { Image };
