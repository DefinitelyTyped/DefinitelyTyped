// Type definitions for ink-box 1.0
// Project: https://github.com/sindresorhus/ink-box#readme
// Definitions by: omjadas <https://github.com/omjadas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from "react";

type Alignment = "right" | "center" | "left";

type Spacing = number | {
    top?: number | undefined;
    right?: number | undefined;
    bottom?: number | undefined;
    left?: number | undefined;
};

interface BoxProps {
    borderColor?: string | undefined;
    borderStyle?: ("single" | "double" | "round" | "singleDouble" | "doubleSingle" | "classic") | {
        topLeft?: string | undefined;
        topRight?: string | undefined;
        bottomLeft?: string | undefined;
        bottomRight?: string | undefined;
        horizontal?: string | undefined;
        vertical?: string | undefined;
    } | undefined;
    children?: React.ReactNode;
    dimBorder?: boolean | undefined;
    padding?: Spacing | undefined;
    margin?: Spacing | undefined;
    float?: Alignment | undefined;
    backgroundColor?: string | undefined;
    align?: Alignment | undefined;
}
declare const Box: React.FC<BoxProps>;
export = Box;
