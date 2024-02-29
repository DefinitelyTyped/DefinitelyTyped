import * as React from "react";

export type InlineHelpPlacement =
    | "bottom-right"
    | "bottom-left"
    | "right"
    | "left"
    | "bottom-center";

export type InlineHelpProps = {
    className?: string | undefined;
    contentClassName?: string | undefined;
    disableStyles?: boolean | undefined;
    placement: InlineHelpPlacement;
} & { [x: string]: any };

declare const InlineHelp: React.FunctionComponent<InlineHelpProps>;

export default InlineHelp;
