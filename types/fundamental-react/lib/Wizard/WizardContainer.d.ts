import * as React from "react";

export interface WizardContainerProps {
    /** Wizard contents to render (should be Wizard.Navigation, Wizard.Content and Wizard.Footer respectively) */
    children?: React.ReactNode;
    /** CSS class(es) to add to the element. */
    className?: string;
}

declare const WizardContainer: React.FunctionComponent<WizardContainerProps>;

export default WizardContainer;
