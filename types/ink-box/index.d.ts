// Type definitions for ink-box 1.0
// Project: https://github.com/sindresorhus/ink-box#readme
// Definitions by: omjadas <https://github.com/omjadas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ReactNode } from "react";

interface BoxProps {
    children: ReactNode | ReactNode[];
    borderColor?: string;
    borderStyle?: ("single" | "double" | "round" | "singleDouble" | "doubleSingle" | "classic") | {
        topLeft?: string;
        topRight?: string;
        bottomLeft?: string;
        bottomRight?: string;
        horizontal?: string;
        vertical?: string;
    };
    dimBorder?: boolean;
    padding?: number | {
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
    };
    margin?: number | {
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
    };
    float?: "right" | "center" | "left";
    backgroundColor?: string;
    align?: "right" | "center" | "left";
}
declare function Box(props: BoxProps): JSX.Element;
export = Box;
