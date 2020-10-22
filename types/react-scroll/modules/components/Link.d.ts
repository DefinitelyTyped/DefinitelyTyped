import * as React from 'react';

export interface ReactScrollLinkProps {
    to: string;
    containerId?: string;
    activeClass?: string;
    spy?: boolean;
    hashSpy?: boolean;
    smooth?: boolean | string;
    offset?: number;
    delay?: number;
    isDynamic?: boolean;
    onClick?(): void;
    duration?: number | string | ((distance: number) => number);
    absolute?: boolean;
    onSetActive?(to: string): void;
    onSetInactive?(): void;
    ignoreCancelEvents?: boolean;
    saveHashHistory?: boolean;
}

export type LinkProps = ReactScrollLinkProps & React.HTMLProps<HTMLButtonElement>;

export default class Link extends React.Component<LinkProps> {}
