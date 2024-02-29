import * as React from "react";
import WizardContainer from "./WizardContainer";
import WizardContent from "./WizardContent";
import WizardFooter from "./WizardFooter";
import WizardNavigation from "./WizardNavigation";
import WizardStep, { WizardStepProps } from "./WizardStep";

export interface WizardProps {
    /** Content background styling. */
    background?: "solid" | "list" | "transparent";
    /** Label to use for the cancel button., default is 'Cancel' */
    cancelLabel?: string;
    /** Wizard.Step nodes to render as steps. */
    children?: React.ReactNode;
    /** CSS class(es) to add to the element. */
    className?: string;
    /** Props to be spread to the WizardContent component. */
    contentProps?: object;
    /** By default wizard body has no horizontal paddings. Add a size to modify the padding. */
    contentSize?: "sm" | "md" | "lg" | "xl";
    /** Props to be spread to the WizardFooter component. */
    footerProps?: object;
    /** Props to be spread to the WizardNavigation component. */
    headerProps?: object;
    /** By default wizard header has no horizontal paddings. Add a size to modify the padding. */
    headerSize?: "sm" | "md" | "lg" | "xl";
    /**
     * Navigation type. `anchors` mode Displays all steps in one scrolling
     * page, while `tabs` shows one page at a time with navigation buttons in
     * the footer. default is 'anchors'
     */
    navigationType?: "anchors" | "tabs";
    /**
     * Default label for next step buttons. Can be overriden by setting
     * `nextLabel` on specific steps. default is 'Next Step'
     */
    nextLabel?: string;
    /**
     * Space-saving options. `stacking` option reduces all non-active steps to
     * a condensed form with a pop-up menu, while `no-labels` hides all text
     * from steps, only displaying the indicators.
     */
    option?: "stacked" | "no-labels";
    /**
     * Default label for previous step buttons. Can be overriden by setting
     * `previousLabel` on specific steps. default is 'Previous Step'
     */
    previousLabel?: string;
    /** Whether to show auto-generated titles in page contents. default is true */
    showTitles?: boolean;
    /** Callback function; triggered when the cancel button is clicked. */
    onCancel?(event: React.SyntheticEvent): void;
    /** Callback function; triggered when the next step button is clicked in the last step. */
    onComplete?(event: React.SyntheticEvent): void;
    /** Callback function; triggered when the next step button is clicked in any step other than last. */
    onStepChange?(
        event: React.SyntheticEvent,
        step: React.ReactElement<WizardStepProps>,
        index: number,
        count: number,
    ): void;
}

declare class Wizard extends React.Component<WizardProps> {
    static Step: typeof WizardStep;
    static Container: typeof WizardContainer;
    static Content: typeof WizardContent;
    static Footer: typeof WizardFooter;
    static Navigation: typeof WizardNavigation;
}

export default Wizard;
