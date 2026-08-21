import * as Headless from "@af-utils/react-virtual-headless";
import * as React from "react";

export interface ChildProps {
    key: string;
    i: number;
    data: any;
    offset: number;
    model: Headless.Model;
}

// Since component can be essentially any DOM element, HTMLElement is as specific as possible (I think).
// Also have to omit children, since the List expects specific children.
// This could probably be improved, but it's a start.
export interface ListProps extends Omit<React.HTMLAttributes<HTMLElement>, "children"> {
    model: Headless.Model;
    children: React.ComponentType<ChildProps>;
    className?: string;
    itemData: any;
    component?: string | React.ComponentType<any>;
    getKey?: (i: number, itemData?: any) => any;
    tabIndex?: number;
    countOffset?: boolean;
}

/**
 * List is a component that renders a list of items.
 * It is a wrapper around the headless virtual library for ease of use.
 */
export const List: React.FC<ListProps>;

export * from "@af-utils/react-virtual-headless";

export {};
