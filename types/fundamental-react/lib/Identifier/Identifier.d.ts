import * as React from "react";
import { IconGlyph } from "../Icon/Icon";

export type IdentifierModifiers = "circle" | "transparent";

export type IdentifierSizes = "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl";

export type IdentifierProps = {
    backgroundImageUrl?: string,
    className?: string,
    color?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
    disableStyles?: boolean,
    glyph?: IconGlyph,
    label?: string,
    modifier?: IdentifierModifiers,
    role?: string,
    size: IdentifierSizes;
} & { [x: string]: any };

declare const Identifier: React.FunctionComponent<IdentifierProps>;

export default Identifier;
