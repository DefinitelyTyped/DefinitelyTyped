import * as React from "react";

export interface TabContentProps {
    children?: React.ReactNode | undefined;
    for: string | number;
    visibleStyle?: object | undefined;
    isVisible?: boolean | undefined;
    renderActiveTabContentOnly?: boolean | undefined;
    disableInlineStyles?: boolean | undefined;
    className?: string | undefined;
    visibleClassName?: string | undefined;
    style?: object | undefined;
}

export class TabContent extends React.Component<TabContentProps> {}
