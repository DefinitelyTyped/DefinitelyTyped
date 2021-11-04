import * as React from "react";

export type imageSize = "s" | "m" | "l";
export type imageType = "circle";
export type ImageProps = {
    photo: string;
    size: imageSize;
    className?: string | undefined;
    disableStyles?: boolean | undefined;
    type?: imageType | undefined;
} & { [x: string]: any };

declare const Image: React.FunctionComponent<ImageProps>;

export default Image;
