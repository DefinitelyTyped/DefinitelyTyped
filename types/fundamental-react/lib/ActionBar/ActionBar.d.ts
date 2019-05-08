import * as React from "react";

export type ActionBarProps = {
    className?: string;
    /* Set to **true** for mobile view of the Action Bar.*/
    mobile?: boolean;
    /* The width of the Action Bar in mobile view. */
    width?: string;
} & { [x: string]: any };

export type ActionBarActionsProps = {
    className?: string;
} & { [x: string]: any };

export type ActionBarBackProps = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    className?: string;
    buttonProps?: { [x: string]: any };
} & { [x: string]: any };

export type ActionBarHeaderProps = {
    title: string;
    className?: string;
    /* Localized text for the description. */
    description?: string;
    /* Additional props to be spread to the description's `<p>` element. */
    descriptionProps?: { [x: string]: any };
    /* Heading level. `<h1>` is reserved for the page title. */
    headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
    titleProps?: { [x: string]: any };
} & { [x: string]: any };

declare class ActionBar extends React.Component<ActionBarProps> {
    static Actions: React.FunctionComponent<ActionBarActionsProps>;
    static Back: React.FunctionComponent<ActionBarBackProps>;
    static Header: React.FunctionComponent<ActionBarHeaderProps>;
}

export default ActionBar;
