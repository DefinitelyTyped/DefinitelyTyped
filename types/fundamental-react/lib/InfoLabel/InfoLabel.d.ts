import * as React from "react";
import { IconGlyph } from "../Icon/Icon";

export type InfoLabelProps = {
    className?: string | undefined;
    color?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | undefined;
    disableStyles?: boolean | undefined;
    glyph?: IconGlyph | undefined;
    numeric?: boolean | undefined;
} & { [x: string]: any };

declare const InfoLabel: React.FunctionComponent<InfoLabelProps>;

export default InfoLabel;
