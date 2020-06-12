import * as React from "react";

export type InlineHelpPlacement =
    | "bottom-right"
    | "bottom-left"
    | "right"
    | "left"
    | "bottom-center";

export type InlineHelpProps = {
    className?: string,
    contentClassName?: string,
    disableStyles?: boolean,
    placement: InlineHelpPlacement;
} & { [x: string]: any };

declare const InlineHelp: React.FunctionComponent<InlineHelpProps>;

export default InlineHelp;
