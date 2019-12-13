import * as React from "react";

export type ActionBarProps = {
    className?: string;
    customStyles?: { [x: string]: any };
    disableStyles?: boolean;
    ref?: React.Ref<HTMLDivElement>;
} & React.HTMLAttributes<HTMLDivElement>;

export type ActionBarActionsProps = {
    className?: string;
    ref?: React.Ref<HTMLDivElement>;
} & React.HTMLAttributes<HTMLDivElement>;

export type ActionBarBackProps = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    className?: string;
    disableStyles?: boolean;
    buttonProps?: { [x: string]: any };
    ref?: React.Ref<HTMLDivElement>;
} & React.HTMLAttributes<HTMLDivElement>;

export type ActionBarHeaderProps = {
    title: string;
    className?: string;
    /* Localized text for the description. */
    description?: string;
    /* Additional props to be spread to the description's `<p>` element. */
    descriptionProps?: { [x: string]: any };
    /* Heading level. `<h1>` is reserved for the page title. */
    headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
    ref?: React.Ref<HTMLDivElement>;
    titleProps?: { [x: string]: any };
} & React.HTMLAttributes<HTMLDivElement>;

export const ActionBar: React.FC<ActionBarProps> & {
    displayName: "ActionBar";
    Actions: React.FC<ActionBarActionsProps> & {displayName: "ActionBar.Actions"};
    Back: React.FC<ActionBarBackProps> & {displayName: "ActionBar.Back"};
    Header: React.FC<ActionBarHeaderProps> & {displayName: "ActionBar.Header"};
};

export default ActionBar;
