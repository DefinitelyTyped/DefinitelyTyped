import * as React from "react";

export class TagCloud extends React.Component<TagCloudProps> {}

export interface TagCloudProps {
    children?: React.ReactNode | undefined;
    ref?: React.LegacyRef<void> | undefined;
    className?: string | undefined;
    /** Array of objects that represent tags */
    tags: Tag[];
    /** Maximal font size (in px) used in cloud */
    maxSize: number;
    /** Minimal font size (in px) used in cloud */
    minSize: number;
    /** If true, tags are shuffled. When tags are modified, cloud is re-shuffled. Default: true */
    shuffle?: boolean | undefined;
    /** Options passed to randomcolor library: https://github.com/davidmerfield/randomColor#options */
    colorOptions?: ColorOptions | undefined;
    /** Custom function to render a tag */
    renderer?: RendererFunction | undefined;
    /** If true, random color is not used */
    disableRandomColor?: boolean | undefined;
    /** Random seed used to shuffle tags and generate color */
    randomSeed?: number | undefined;
    /** @deprecated use randomSeed instead */
    randomNumberGenerator?: Function | undefined;
    /** Fired when a tag is clicked */
    onClick?: TagEventHandler | undefined;
    /** Fired when a tag is double-clicked */
    onDoubleClick?: TagEventHandler | undefined;
    /** Fired when mouse hovered over a tag */
    onMouseMove?: TagEventHandler | undefined;
}

export interface Tag {
    /** String value to be displayed */
    value: string;
    /** Represents frequency of the tag that is used to calculate tag size */
    count: number;
    /**
     * Tag element key.
     * If it is not provided, value property will be used instead
     * (however it can fail if you don't have unique tag values. It is highly recommeded to use key property)
     */
    key?: string | undefined;
    /** Color of the tag. If not provided a random color will be used */
    color?: string | undefined;
    /** Additional props to be passed to a particular tag component */
    props?: object | undefined;
}

export type TagEventHandler = (
    tag: Tag,
    event: React.MouseEvent<HTMLDivElement>,
) => void;

export type RendererFunction = (
    tag: Tag,
    size: number,
    color: string,
) => React.JSX.Element;

export interface ColorOptions {
    /**
     * Controls the hue of the generated color.
     * You can pass a string representing a color name:
     * red, orange, yellow, green, blue, purple, pink and monochrome are currently supported.
     * If you pass a hexidecimal color string such as #00FFFF,
     * randomColor will extract its hue value and use that to generate colors.
     */
    hue?: string | undefined;
    /** Controls the luminosity of the generated color. */
    luminosity?: "bright" | "light" | "dark" | undefined;
    /** An integer which specifies the number of colors to generate. */
    count?: number | undefined;
    /** An integer or string which when passed will cause randomColor to return the same color each time. */
    seed?: number | string | undefined;
    /** A string which specifies the format of the generated color. (Defaults to hex) */
    format?: "rgb" | "rgba" | "rgbArray" | "hsl" | "hsla" | "hslArray" | "hex" | undefined;
    /**
     * A decimal between 0 and 1.
     * Only relevant when using a format with an alpha channel (rgba and hsla).
     * Defaults to a random value.
     */
    alpha?: number | undefined;
}
