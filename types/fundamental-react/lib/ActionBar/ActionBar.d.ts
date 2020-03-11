import * as React from "react";

export type ActionBarProps = {
    title: string,
    actionClassName?: string,
    actionProps?: any,
    actions?: React.ReactNode,
    buttonContainerClassName?: string,
    buttonProps?: any,
    className?: string,
    description?: string,
    descriptionProps?: any,
    disableStyles?: boolean,
    headingLevel?: any,
    titleProps?: any,
    onBackClick?: (...args: any[]) => any
  } & React.HTMLAttributes<HTMLDivElement>;

export const ActionBar: React.FunctionComponent<ActionBarProps> & {
    displayName: "ActionBar";
};

export default ActionBar;
