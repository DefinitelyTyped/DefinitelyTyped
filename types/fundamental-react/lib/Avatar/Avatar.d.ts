import * as React from "react";

export type AvatarSize = "xs" | "s" | "m" | "l" | "xl";

type HTMLAttributesColorOmited = Omit<React.HTMLAttributes<HTMLSpanElement>, "color">;

export type AvatarProps = {
    backgroundImageUrl?: string | undefined;
    border?: boolean | undefined;
    circle?: boolean | undefined;
    color?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | undefined;
    glyph?: string | undefined;
    label?: string | undefined;
    placeholder?: boolean | undefined;
    role?: string | undefined;
    size?: AvatarSize | undefined;
    tile?: boolean | undefined;
    transparent?: boolean | undefined;
    zoom?: boolean | undefined;
} & HTMLAttributesColorOmited;

declare const Avatar: React.FunctionComponent<AvatarProps>;

export default Avatar;
