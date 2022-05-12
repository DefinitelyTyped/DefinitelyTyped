import * as React from 'react';
import { ForwardRefReturn, ReactAnchorAttr } from '../../../typings/shared';

export interface LinkProps extends ReactAnchorAttr {
    disabled?: boolean | undefined;
    inline?: boolean | undefined;
    renderIcon?: React.ComponentType | undefined;
    size?: 'sm' | 'md' | 'lg' | undefined;
    visited?: boolean | undefined;
}

declare const Link: ForwardRefReturn<HTMLAnchorElement, LinkProps>;

export default Link;
