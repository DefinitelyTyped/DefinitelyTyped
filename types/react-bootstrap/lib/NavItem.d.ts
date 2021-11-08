import * as React from 'react';
import { Sizes, SelectCallback } from 'react-bootstrap';

declare namespace NavItem {
    export interface NavItemProps extends React.HTMLProps<NavItem> {
        active?: boolean | undefined;
        brand?: any; // TODO: Add more specific type
        bsSize?: Sizes | undefined;
        bsStyle?: string | undefined;
        componentClass?: React.ElementType | undefined;
        defaultNavExpanded?: boolean | undefined;
        eventKey?: any;
        fixedBottom?: boolean | undefined;
        fixedTop?: boolean | undefined;
        fluid?: boolean | undefined;
        inverse?: boolean | undefined;
        linkId?: string | undefined;
        navExpanded?: boolean | undefined;
        onSelect?: SelectCallback | undefined;
        onToggle?: Function | undefined;
        staticTop?: boolean | undefined;
        toggleButton?: any; // TODO: Add more specific type
        toggleNavKey?: string | number | undefined;
    }
}
declare class NavItem extends React.Component<NavItem.NavItemProps> { }
export = NavItem;
