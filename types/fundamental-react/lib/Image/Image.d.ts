import * as React from "react";

export type imageSize = "s" | "m" | "l";
export type imageType = "circle";
export type ImageProps = {
    photo: string;
    size: imageSize;
    className?: string;
    disableStyles?: boolean;
    type?: imageType;
} & { [x: string]: any };

declare const Image: React.FunctionComponent<ImageProps>;

export default Image;
