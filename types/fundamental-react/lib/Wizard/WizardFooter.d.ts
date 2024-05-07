import * as React from "react";

export interface WizardFooterProps {
    /** Nodes to render as extra content before the Cancel button */
    children?: React.ReactNode;
    /** CSS class(es) to add to the element */
    className?: string;
    /** Cancel button label, default is 'Cancel' */
    label?: string;
    /** Callback function; triggered when the cancel button is pressed. */
    onCancel?: (event: React.SyntheticEvent) => void;
}

declare const WizardFooter: React.FunctionComponent<WizardFooterProps>;

export default WizardFooter;
