import * as React from "react";

export interface WizardStepProps {
    title: string;
    /** (integrated only) Mark step as having unknown following content. */
    branching?: boolean;
    /** (integated only) Nodes to render as step content. */
    children?: React.ReactNode;
    /** CSS class(es) to add to the element. */
    className?: string;
    /** (standalone only) Appearance of the connector to the next element. */
    connector?: "none" | "default" | "active" | "branching";
    /** Icon glyph to display in the indicator component. */
    glyph?: React.ReactNode;
    /** Text to display in the indicator component if no glyph given. */
    indicator?: string;
    /** Menu to show instead of triggering a click even. Used mostly for stacking steps. */
    menu?: React.ReactNode;
    /** (standalone only) Step appearance modifiers. */
    modifiers?: Array<"completed" | "current" | "upcoming" | "no-label" | "stacked" | "stacked-top" | "active">;
    /** (integrated only) Label to use on the next step button. */
    nextLabel?: string;
    /** Label to use as the optional text in step header. */
    optionalLabel?: string;
    /** (integrated only) Label to use on the previous step button. */
    previousLabel?: string;
    /** (integrated only) True if moving to the next step is allowed. default is true */
    valid?: boolean;
    onClick?: React.MouseEventHandler<HTMLLIElement>;
}

declare const WizardStep: React.FunctionComponent<WizardStepProps>;

export default WizardStep;
