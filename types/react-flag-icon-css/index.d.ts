import * as CSS from "csstype";
import { PureComponent, ReactNode } from "react";

export type FlagIconSize = "lg" | "2x" | "3x" | "4x" | "5x";
export type FlagIconFlip = "horizontal" | "vertical";
export type FlagIconRotate = 30 | 60 | 90 | 180 | 270;

export interface FlagIconOptions {
    /**
     * Use CSS modules styles (your module bundler must be correctly setup).
     */
    useCssModules?: boolean | undefined;
    /**
     * An object literal whose keys are your custom codes.
     */
    customCodes?: {
        [key: string]: string;
    } | undefined;
    /**
     * Set this if useCssModules is true and a) you want to apply styles to FlagIcon
     * using .theme-base and/or b) you are using custom flags.
     */
    themeStyles?: {
        [key: string]: CSS.Properties & CSS.PropertiesHyphen;
    } | undefined;
}

export interface FlagIconProps {
    /**
     * ISO 3166-1-alpha-2 code.
     */
    code: string;
    size?: FlagIconSize | undefined;
    flip?: FlagIconFlip | undefined;
    rotate?: FlagIconRotate | undefined;
    Component?: string | undefined;
    /**
     *     Uses the 1x1 image if true.
     */
    squared?: boolean | undefined;
    /**
     * This is always appended as-is to class in the HTML.
     */
    className?: string | undefined;
    /**
     * This is mapped to a CSS module and appended to class in the HTML.
     */
    styleName?: string | undefined;
    children?: ReactNode | undefined;
}

export class FlagIcon extends PureComponent<FlagIconProps> {}

export default function FlagIconFactory(react: any, opts?: Readonly<FlagIconOptions>): typeof FlagIcon;

export function CustomFlagIconFactory(react: any, opts?: Readonly<FlagIconOptions>): typeof FlagIcon;
