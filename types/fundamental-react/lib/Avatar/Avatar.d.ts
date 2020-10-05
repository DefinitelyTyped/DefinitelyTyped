import * as React from 'react';

export type AvatarSize = 'xs' | 's' | 'm' | 'l' | 'xl';

type HTMLAttributesColorOmited = Omit<React.HTMLAttributes<HTMLSpanElement>, "color">;

export type AvatarProps = {
    backgroundImageUrl?: string;
    border?: boolean;
    circle?: boolean;
    color?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
    glyph?: string;
    label?: string;
    placeholder?: boolean;
    role?: string;
    size?: AvatarSize;
    tile?: boolean;
    transparent?: boolean;
    zoom?: boolean;
} & HTMLAttributesColorOmited;

declare const Avatar: React.FunctionComponent<AvatarProps>;

export default Avatar;
