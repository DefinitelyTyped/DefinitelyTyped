import * as React from "react";
import { LinkProps, NavLinkProps } from "react-router-dom";

export interface HashLinkProps extends LinkProps {
    elementId?: string | undefined;
    smooth?: boolean | undefined;
    scroll?: ((element: HTMLElement) => void) | undefined;
    timeout?: number | undefined;
}

export interface NavHashLinkProps extends NavLinkProps, Omit<HashLinkProps, "className" | "style"> {}

export const HashLink: React.ForwardRefExoticComponent<HashLinkProps & React.RefAttributes<HTMLAnchorElement>>;

export const NavHashLink: React.ForwardRefExoticComponent<NavHashLinkProps & React.RefAttributes<HTMLAnchorElement>>;

export function genericHashLink<P>(Component: React.FunctionComponent<P>): React.FunctionComponent<P>;
