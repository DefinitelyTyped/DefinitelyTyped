import * as React from 'react';

export interface TabContentProps {
    children?: React.ReactNode;
    for: string | number;
    visibleStyle?: object;
    isVisible?: boolean;
    renderActiveTabContentOnly?: boolean;
    disableInlineStyles?: boolean;
    className?: string;
    visibleClassName?: string;
    style?: object;
}

export class TabContent extends React.Component<TabContentProps> {}
