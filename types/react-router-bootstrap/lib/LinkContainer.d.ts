import { ComponentClass, ReactNode } from 'react';

// See https://github.com/react-bootstrap/react-router-bootstrap/blob/master/src/LinkContainer.js
interface LinkContainerProps {
    children: ReactNode;
    onClick?: () => void;
    replace?: boolean;
    to: string | object;
    state?: object;
    className?: string;
    activeClassName?: string;
    style?: string | number;
    activeStyle?: string | number;
    isActive?: () => void | boolean;
}

type LinkContainer = ComponentClass<LinkContainerProps>;
declare const LinkContainer: LinkContainer;

export default LinkContainer;
