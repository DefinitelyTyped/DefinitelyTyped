// Type definitions for react-flag-icon-css 1.0
// Project: https://github.com/matteocng/react-flag-icon-css#readme
// Definitions by: Jon Freedman <https://github.com/jonfreedman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as CSS from 'csstype';
import { PureComponent, ReactNode } from 'react';

export type FlagIconSize = 'lg' | '2x' | '3x' | '4x' | '5x';
export type FlagIconFlip = 'horizontal' | 'vertical';
export type FlagIconRotate = 30 | 60 | 90 | 180 | 270;

export interface FlagIconOptions {
    /**
     * Use CSS modules styles (your module bundler must be correctly setup).
     */
    useCssModules?: boolean;
    /**
     * An object literal whose keys are your custom codes.
     */
    customCodes?: {
        [key: string]: string;
    };
    /**
     * Set this if useCssModules is true and a) you want to apply styles to FlagIcon
     * using .theme-base and/or b) you are using custom flags.
     */
    themeStyles?: {
        [key: string]: CSS.Properties & CSS.PropertiesHyphen;
    };
}

export interface FlagIconProps {
    /**
     * ISO 3166-1-alpha-2 code.
     */
    code: string;
    size?: FlagIconSize;
    flip?: FlagIconFlip;
    rotate?: FlagIconRotate;
    Component?: string;
    /**
     * 	Uses the 1x1 image if true.
     */
    squared?: boolean;
    /**
     * This is always appended as-is to class in the HTML.
     */
    className?: string;
    /**
     * This is mapped to a CSS module and appended to class in the HTML.
     */
    styleName?: string;
    children?: ReactNode;
}

export class FlagIcon extends PureComponent<FlagIconProps> {
}

export default function FlagIconFactory(react: any, opts?: Readonly<FlagIconOptions>): (props: FlagIconProps) => FlagIcon;

export function CustomFlagIconFactory(react: any, opts?: Readonly<FlagIconOptions>): (props: FlagIconProps) => FlagIcon;
