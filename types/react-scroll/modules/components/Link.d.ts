import * as React from "react";
import * as ReactDOM from "react-dom";

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
    duration?: number | string;
    absolute?: boolean;
    onSetActive?(to: string): void;
    onSetInactive?(): void;
    ignoreCancelEvents?: boolean;
}

export type LinkProps = ReactScrollLinkProps & ReactDOM.HTMLProps<HTMLButtonElement>;

export default class Link extends React.Component<LinkProps> { }
