import * as React from "react";

export interface WizardContentProps {
    /** Content background styling */
    background?: "solid" | "list" | "transparent";
    /** Wizard.Step nodes to render as steps */
    children?: React.ReactNode;
    /** CSS class(es) to add to the element */
    className?: string;
    /** By default wizard header has no horizontal paddings. Add a size to modify the padding */
    size?: "sm" | "md" | "lg" | "xl";
}

declare const WizardContent: React.FunctionComponent<WizardContentProps>;

export default WizardContent;
