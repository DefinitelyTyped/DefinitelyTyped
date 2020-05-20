// Type definitions for @atlaskit/button 6.4
// Project: https://bitbucket.org/atlassian/atlaskit-mk-2/
// Definitions by: Jimmy Luong <https://github.com/dijimsta>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import {
    Component,
    ReactNode,
    ReactElement,
    ComponentClass,
    MouseEventHandler
} from "react";

export type ButtonAppearances =
    | "default"
    | "danger"
    | "link"
    | "primary"
    | "subtle"
    | "subtle-link"
    | "warning"
    | "help";

export interface ButtonProps {
    /** The base styling to apply to the button. */
    readonly appearance?: ButtonAppearances;
    /** Pass aria-controls to underlying html button. */
    readonly ariaControls?: string;
    /** Pass aria-expanded to underlying html button. */
    readonly ariaExpanded?: boolean;
    /** Pass aria-haspopup to underlying html button. */
    readonly ariaHaspopup?: boolean;
    /** This button's child nodes. */
    readonly children?: ReactNode;
    /** Add a classname to the button. */
    readonly className?: string;
    /** A custom component to use instead of the default button. */
    readonly component?: ComponentClass<any>;
    /** Name property of a linked form that the button submits when clicked. */
    readonly form?: string;
    /** Provides a url for buttons being used as a link. */
    readonly href?: string;
    /** Places an icon within the button, after the button's text. */
    readonly iconAfter?: ReactElement;
    /** Places an icon within the button, before the button's text. */
    readonly iconBefore?: ReactElement;
    /** Pass a reference on to the styled component */
    readonly innerRef?: (instance: any) => void;
    /** Provide a unique id to the button. */
    readonly id?: string;
    /** Set if the button is disabled. */
    readonly isDisabled?: boolean;
    /** Change the style to indicate the button is selected. */
    readonly isSelected?: boolean;
    /** Handler to be called on click. */
    readonly onClick?: MouseEventHandler<HTMLButtonElement>;
    /** Set the amount of padding in the button. */
    readonly spacing?: ButtonSpacing;
    /** Assign specific tabIndex order to the underlying html button. */
    readonly tabIndex?: number;
    /** Pass target down to a link within the button component, if a href is provided. */
    readonly target?: string;
    /** Set whether it is a button or a form submission. */
    readonly type?: ButtonType;
    /** Option to fit button width to its parent width */
    readonly shouldFitContainer?: boolean;
}

export type ButtonType = "button" | "submit";

export type ButtonSpacing = "compact" | "default" | "none";

export interface ButtonState {
    readonly isActive: boolean;
    readonly isFocus: boolean;
    readonly isHover: boolean;
}

declare class Button extends Component<ButtonProps, ButtonState> {}

export interface ButtonGroupProps {
    /** The appearance to apply to all buttons. */
    readonly appearance?: ButtonAppearances;
    /** The buttons to render. */
    readonly children: ReactNode;
}

export class ButtonGroup extends Component<ButtonGroupProps> {}

export const themeNamespace: string;

export default Button;
