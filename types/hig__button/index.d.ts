// Type definitions for hig__button 1.4
// Project: https://github.com/Autodesk/hig/tree/development/packages/button
// Definitions by: Matthew Bryant <https://github.com/matthewbryant95>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

// Turn off automatic exporting
export {};

import * as React from 'react';

type Callback = () => void;

export interface Targets {
    SELF: '_self';
    BLANK: '_blank';
    PARENT: '_parent';
    TOP: '_top';
}
export interface Types {
    FLAT: 'flat';
    OUTLINE: 'outline';
    SOLID: 'solid';
    /** @deprecated */
    PRIMARY: 'primary';
    /** @deprecated */
    SECONDARY: 'secondary';
}
export interface Widths {
    SHRINK: 'shrink';
    GROW: 'grow';
}
export type AvailableTargets = Targets[keyof Targets];
export type AvailableTypes = Types[keyof Types];
export type AvailableWidths = Widths[keyof Widths];

export interface Props {
    /** Prevents user interaction with the button */
    disabled?: boolean;
    /** A @hig/icon element */
    icon?: JSX.Element;
    /** Sets the link of a button */
    link?: string;
    /** Triggers when you click the button */
    onClick?: Callback;
    /** Triggers blur when focus is moved away from icon */
    onBlur?: Callback;
    /** Triggers when focus is moved to button */
    onFocus?: Callback;
    /** Triggers when you hover over the button */
    onHover?: Callback;
    /** Triggers when the user's mouse is pressed over the button */
    onMouseDown?: Callback;
    /** Triggers when the user's mouse is over the button */
    onMouseEnter?: Callback;
    /** Triggers when the user's mouse is no longer over the button */
    onMouseLeave?: Callback;
    /** Triggers when the user's mouse is no longer pressed over the button */
    onMouseUp?: Callback;
    /** Adds custom/overriding styles */
    stylesheet?: unknown;
    /** Specifies where to display the linked URL */
    target?: AvailableTargets;
    /** Sets the title of a button */
    title: string;
    /** Specifies type of button */
    type?: AvailableTypes;
    /** Specifies width of button */
    width?: AvailableWidths;
}

export const availableTargets: AvailableTargets;
export const availableTypes: AvailableTypes;
export const availableWidths: AvailableWidths;
export const targets: Targets;
export const types: Types;
export const widths: Widths;

export default class Button extends React.Component<Props> {}
