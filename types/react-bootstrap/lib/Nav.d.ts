import * as React from 'react';
import { Sizes } from 'react-bootstrap';

declare namespace Nav {
    export interface NavProps extends React.HTMLProps<Nav> {
        // Optional
        activeHref?: string | undefined;
        activeKey?: any;
        bsSize?: Sizes | undefined;
        bsStyle?: string | undefined;
        bsClass?: string | undefined;
        collapsible?: boolean | undefined;
        eventKey?: any;
        expanded?: boolean | undefined;
        justified?: boolean | undefined;
        navbar?: boolean | undefined;
        pullRight?: boolean | undefined;
        right?: boolean | undefined;
        stacked?: boolean | undefined;
        ulClassName?: string | undefined;
        ulId?: string | undefined;
    }
}
declare class Nav extends React.Component<Nav.NavProps> { }
export = Nav;
