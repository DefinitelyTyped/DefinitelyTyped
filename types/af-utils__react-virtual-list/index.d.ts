// Type definitions for @af-utils/react-virtual-list 0.0
// Project: https://github.com/nowaalex/af-utils
// Definitions by: Hunter Ross <https://github.com/huner2>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as Headless from '@af-utils/react-virtual-headless';
import * as React from 'react';

interface ChildProps {
    key: string;
    i: number;
    data: any;
    offset: number;
    model: Headless.Model;
}

interface ListProps {
    model: Headless.Model;
    children: React.ComponentType<ChildProps>;
    className?: string;
    itemData: any;
    component?: React.ReactNode;
    getKey?: (i: number, itemData?: any) => any;
    tabIndex?: number;
    countOffset?: boolean;
}

/**
 * List is a component that renders a list of items.
 * It is a wrapper around the headless virtual library for ease of use.
 */
export const List: React.FC<ListProps>;

export {};
