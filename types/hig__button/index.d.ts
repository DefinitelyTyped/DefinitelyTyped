// Turn off automatic exporting
export {};

import * as React from "react";

type Callback = () => void;

export interface Targets {
    SELF: "_self";
    BLANK: "_blank";
    PARENT: "_parent";
    TOP: "_top";
}
export interface Types {
    FLAT: "flat";
    OUTLINE: "outline";
    SOLID: "solid";
    /** @deprecated */
    PRIMARY: "primary";
    /** @deprecated */
    SECONDARY: "secondary";
}
export interface Widths {
    SHRINK: "shrink";
    GROW: "grow";
}
export type AvailableTargets = Targets[keyof Targets];
export type AvailableTypes = Types[keyof Types];
export type AvailableWidths = Widths[keyof Widths];

export interface Props {
    /** Prevents user interaction with the button */
    disabled?: boolean | undefined;
    /** A @hig/icon element */
    icon?: JSX.Element | undefined;
    /** Sets the link of a button */
    link?: string | undefined;
    /** Triggers when you click the button */
    onClick?: Callback | undefined;
    /** Triggers blur when focus is moved away from icon */
    onBlur?: Callback | undefined;
    /** Triggers when focus is moved to button */
    onFocus?: Callback | undefined;
    /** Triggers when you hover over the button */
    onHover?: Callback | undefined;
    /** Triggers when the user's mouse is pressed over the button */
    onMouseDown?: Callback | undefined;
    /** Triggers when the user's mouse is over the button */
    onMouseEnter?: Callback | undefined;
    /** Triggers when the user's mouse is no longer over the button */
    onMouseLeave?: Callback | undefined;
    /** Triggers when the user's mouse is no longer pressed over the button */
    onMouseUp?: Callback | undefined;
    /** Adds custom/overriding styles */
    stylesheet?: unknown | undefined;
    /** Specifies where to display the linked URL */
    target?: AvailableTargets | undefined;
    /** Sets the title of a button */
    title: string;
    /** Specifies type of button */
    type?: AvailableTypes | undefined;
    /** Specifies width of button */
    width?: AvailableWidths | undefined;
}

export const availableTargets: AvailableTargets;
export const availableTypes: AvailableTypes;
export const availableWidths: AvailableWidths;
export const targets: Targets;
export const types: Types;
export const widths: Widths;

export default class Button extends React.Component<Props> {}
