// Type definitions for ink-box 1.0
// Project: https://github.com/sindresorhus/ink-box#readme
// Definitions by: omjadas <https://github.com/omjadas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from "react";

type Alignment = "right" | "center" | "left";

type Spacing = number | {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
};

interface BoxProps {
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
    padding?: Spacing;
    margin?: Spacing;
    float?: Alignment;
    backgroundColor?: string;
    align?: Alignment;
}
declare const Box: React.FC<BoxProps>;
export = Box;
