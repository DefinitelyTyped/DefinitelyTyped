import * as React from "react";

export type IconSize = "s" | "m" | "l" | "xl";

export type IconProps = {
    glyph: string;
    className?: string;
    customStyles?: {[x: string]: any};
    disableStyles?: boolean;
    /* Size of the icon. Options include **xs**, **s**, **compact**, and **l**. If no size is provided, default (normal) will be used. */
    size?: IconSize;
} & { [x: string]: any };

declare const Icon: React.FunctionComponent<IconProps>;

export default Icon;
