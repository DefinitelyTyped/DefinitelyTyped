import * as React from "react";

export type InfoLabelProps = {
    className?: string;
    color?: any;
    disableStyles?: boolean;
    glyph?: any;
    numeric?: boolean;
} & { [x: string]: any };

declare const InfoLabel: React.FunctionComponent<InfoLabelProps>;

export default InfoLabel;
