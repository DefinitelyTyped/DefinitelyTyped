import * as React from "react";

export type ActionBarProps = {
    title: string;
    actionClassName?: string | undefined;
    actionProps?: any;
    actions?: React.ReactNode | undefined;
    buttonContainerClassName?: string | undefined;
    buttonProps?: any;
    className?: string | undefined;
    description?: string | undefined;
    descriptionProps?: any;
    disableStyles?: boolean | undefined;
    headingLevel?: any;
    titleProps?: any;
    onBackClick?: ((...args: any[]) => any) | undefined;
} & Pick<React.HTMLAttributes<HTMLDivElement>, Exclude<keyof React.HTMLAttributes<HTMLDivElement>, "children">>;

export const ActionBar: React.FunctionComponent<ActionBarProps> & {
    displayName: "ActionBar";
};

export default ActionBar;
