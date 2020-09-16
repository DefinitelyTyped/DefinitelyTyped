import * as React from 'react';

export interface TabLinkProps {
    to: number | string;
    component?: string;
    handleSelect?: (tab: string, name: string) => void;
    onClick?: (event: Event) => void;
    children?: React.ReactNode;
    isActive?: boolean;
    namespace?: string;
    activeStyle?: object;
    disableInlineStyles?: boolean;
    className?: string;
    activeClassName?: string;
    style?: object;
    default?: boolean;
}

export class TabLink extends React.Component<TabLinkProps> {}
