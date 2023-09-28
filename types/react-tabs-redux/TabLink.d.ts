import * as React from "react";

export interface TabLinkProps {
    to: number | string;
    component?: string | undefined;
    handleSelect?: ((tab: string, name: string) => void) | undefined;
    onClick?: ((event: Event) => void) | undefined;
    children?: React.ReactNode | undefined;
    isActive?: boolean | undefined;
    namespace?: string | undefined;
    activeStyle?: object | undefined;
    disableInlineStyles?: boolean | undefined;
    className?: string | undefined;
    activeClassName?: string | undefined;
    style?: object | undefined;
    default?: boolean | undefined;
}

export class TabLink extends React.Component<TabLinkProps> {}
