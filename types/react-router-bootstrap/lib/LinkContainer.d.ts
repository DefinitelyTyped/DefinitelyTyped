import type { ComponentClass, CSSProperties, MouseEventHandler, ReactNode } from "react";

// See https://github.com/react-bootstrap/react-router-bootstrap/blob/master/src/LinkContainer.js
interface LinkContainerProps {
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLElement>;
    replace?: boolean;
    to: To;
    state?: object;
    className?: string;
    activeClassName?: string;
    style?: CSSProperties;
    activeStyle?: CSSProperties;
    isActive?: ((match: any, location: any) => boolean) | boolean;
}

type To = string | Partial<Path>;

interface Path {
    pathname: string;
    search: string;
    hash: string;
}

type LinkContainer = ComponentClass<LinkContainerProps>;
declare const LinkContainer: LinkContainer;

export default LinkContainer;
