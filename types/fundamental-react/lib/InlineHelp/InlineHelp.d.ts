import * as React from "react";

export type InlineHelpPlacement =
    | "bottom-right"
    | "bottom-left"
    | "right"
    | "left"
    | "bottom-center";

export type InlineHelpProps = {
    /* Location to display the inline help pop-up relative to the image. */
    placement: InlineHelpPlacement;
    /* Localized text to display in the inline help pop-up. */
    text: string;
    className?: string;
    customStyles?: {[x: string]: any};
    disableStyles?: boolean;
} & { [x: string]: any };

declare const InlineHelp: React.FunctionComponent<InlineHelpProps>;

export default InlineHelp;
