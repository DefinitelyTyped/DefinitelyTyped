// Type definitions for react-tabs 2.3
// Project: https://github.com/reactjs/react-tabs/
// Definitions by: Yuu Igarashi <https://github.com/yu-i9>
//                 Daniel Tschinder <https://github.com/danez>
//                 Ummon Karpe <https://github.com/Equationist>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export interface TabsProps extends Omit<React.HTMLProps<HTMLDivElement>, 'className' | 'onSelect' | 'ref'> {
    className?: string | string[] | { [name: string]: boolean } | undefined;
    defaultFocus?: boolean | undefined;
    defaultIndex?: number | undefined;
    disabledTabClassName?: string | undefined;
    domRef?: ((node?: HTMLElement) => void) | undefined;
    forceRenderTabPanel?: boolean | undefined;
    onSelect?: ((index: number, last: number, event: Event) => boolean | void) | undefined;
    selectedIndex?: number | undefined;
    selectedTabClassName?: string | undefined;
    selectedTabPanelClassName?: string | undefined;
}

export interface TabListProps extends Omit<React.HTMLProps<HTMLUListElement>, 'className'> {
    className?: string | string[] | { [name: string]: boolean } | undefined;
}

export interface TabProps extends Omit<React.HTMLProps<HTMLLIElement>, 'className' | 'tabIndex'> {
    className?: string | string[] | { [name: string]: boolean } | undefined;
    disabled?: boolean | undefined;
    disabledClassName?: string | undefined;
    selectedClassName?: string | undefined;
    tabIndex?: string | undefined;
}

export interface TabPanelProps extends Omit<React.HTMLProps<HTMLDivElement>, 'className'> {
    className?: string | string[] | { [name: string]: boolean } | undefined;
    forceRender?: boolean | undefined;
    selectedClassName?: string | undefined;
}

export declare class Tabs extends React.Component<TabsProps> {}
export declare class TabList extends React.Component<TabListProps> {}
export declare class Tab extends React.Component<TabProps> {}
export declare class TabPanel extends React.Component<TabPanelProps> {}

export declare function resetIdCounter(): void;
