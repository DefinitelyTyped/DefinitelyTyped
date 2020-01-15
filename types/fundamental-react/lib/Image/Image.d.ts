import * as React from "react";

export type imageSize = "s" | "m" | "l";
export type imageType = "circle";
export type ImageProps = {
    /* Picture URL. */
    photo: string;
    size: imageSize;
    className?: string;
    customStyles?: {[x: string]: any};
    disableStyles?: boolean;
    type?: imageType;
} & { [x: string]: any };

declare const Image: React.FunctionComponent<ImageProps>;

export default Image;
